import type { PosProduct, StoreItemRecord, StoreStockRecord } from '../store sales/pos/store-sale-pos-utils';
import { buildPosProducts, formatProductLabel } from '../store sales/pos/store-sale-pos-utils';
import type {
    InterstoreTransferDraft,
    InterstoreTransferErrors,
    TransferLineSelection,
    TransferLineState,
} from './interstore-transfer.types';

const parseNumber = (value: unknown) => {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : 0;
};

/** SelectInput may store the full choice object; always reduce to a scalar id string. */
export const normalizeScalarId = (value: unknown): string => {
    if (value === undefined || value === null || value === '') {
        return '';
    }
    if (typeof value === 'object' && !Array.isArray(value) && 'id' in value) {
        return String((value as { id: unknown }).id ?? '');
    }
    return String(value);
};

export const parseStoreId = (value: unknown): number | undefined => {
    const numeric = Number(normalizeScalarId(value));
    return Number.isFinite(numeric) && numeric > 0 ? numeric : undefined;
};

export const INTERSTORE_TRANSFER_STATUS_PENDING = 'PENDING';

const transferDatePart = (transferDate?: string) =>
    transferDate && transferDate.length >= 10
        ? transferDate.slice(0, 10).replace(/-/g, '')
        : new Date().toISOString().slice(0, 10).replace(/-/g, '');

export const generateTransferReference = (transferDate?: string, sequence = 1) =>
    `ist-${String(sequence).padStart(3, '0')}-${transferDatePart(transferDate)}`;

export const todayIsoDate = () => new Date().toLocaleDateString('en-CA');

export const initialInterstoreTransferDraft = (): InterstoreTransferDraft => {
    const transfer_date = todayIsoDate();
    return {
        reference: generateTransferReference(transfer_date),
        from_store_id: '',
        to_store_id: '',
        transfer_date,
        status: INTERSTORE_TRANSFER_STATUS_PENDING,
    };
};

/** Build catalog from stocks when store-items join yields no rows. */
export const buildTransferProductsFromStocks = (
    stocks: StoreStockRecord[],
    storeId: string,
    storeName: string,
    items: StoreItemRecord[] = []
): PosProduct[] => {
    const fromCatalog = buildPosProducts(items, stocks, storeId, storeName);
    if (fromCatalog.length > 0) {
        return fromCatalog;
    }

    if (!storeId && !storeName.trim()) {
        return [];
    }

    const itemByName = new Map<string, StoreItemRecord>();
    items.forEach((item) => {
        const name = String(item.item_name ?? item.inventory_name ?? '').trim().toLowerCase();
        if (name) {
            itemByName.set(name, item);
        }
    });

    const normalizedStoreName = storeName.trim().toLowerCase();
    const products: PosProduct[] = [];

    stocks.forEach((stock) => {
        const stockRecord = stock as Record<string, unknown>;
        const stockStoreId = String(stock.store_id ?? stockRecord.storeId ?? '');
        const stockName = String(stock.store_name ?? '').trim().toLowerCase();
        const matchesStore =
            (storeId && (stockStoreId === storeId || Number(stockStoreId) === Number(storeId))) ||
            (normalizedStoreName && stockName === normalizedStoreName);
        if (!matchesStore) {
            return;
        }

        const itemId = Number(
            stock.item_id ?? stockRecord.store_item_id ?? stockRecord.StoreItemID ?? 0
        );
        if (!itemId) {
            return;
        }

        const itemNameKey = String(stock.item_name ?? '').trim().toLowerCase();
        const item = itemNameKey ? itemByName.get(itemNameKey) : undefined;
        const balance = parseNumber(stock.quantity);

        products.push({
            itemId,
            itemName: item?.item_name || item?.inventory_name || stock.item_name || `Item ${itemId}`,
            sku: item?.sku || '—',
            thumbnail: item?.thumbnail,
            balance,
            unit: stock.unit || 'unit',
            cashPrice: parseNumber(stock.selling_price ?? item?.default_selling_price),
            creditPrice: parseNumber(
                stock.credit_selling_price ?? item?.default_selling_price_credit ?? stock.selling_price
            ),
        });
    });

    return products.sort((a, b) => a.itemName.localeCompare(b.itemName));
};

export const buildTransferLines = (
    products: PosProduct[],
    selections: TransferLineSelection
): TransferLineState[] =>
    buildTransferLinesFromProducts(products).map((line) => {
        const selection = selections[line.itemId];
        if (!selection) {
            return line;
        }
        const quantity = parseNumber(selection.quantity);
        const capped = quantity >= 1 ? Math.min(quantity, line.maxQuantity) : quantity;
        return {
            ...line,
            selected: selection.selected,
            quantity: selection.selected
                ? quantity >= 1
                    ? String(capped)
                    : selection.quantity
                : '',
        };
    });

export const buildTransferLinesFromProducts = (products: PosProduct[]): TransferLineState[] =>
    products
        .filter((product) => product.balance > 0)
        .map((product) => ({
            itemId: product.itemId,
            itemName: product.itemName,
            sku: product.sku,
            unit: product.unit,
            maxQuantity: product.balance,
            selected: false,
            quantity: '',
        }));

export const mergeTransferLinesWithProducts = (
    existingLines: TransferLineState[],
    products: PosProduct[]
): TransferLineState[] => {
    const existingById = new Map(existingLines.map((line) => [line.itemId, line]));

    return buildTransferLinesFromProducts(products).map((line) => {
        const existing = existingById.get(line.itemId);
        if (!existing) {
            return line;
        }
        const quantity = parseNumber(existing.quantity);
        const capped = Math.min(quantity, line.maxQuantity);
        return {
            ...line,
            selected: existing.selected && capped > 0,
            quantity: existing.selected && capped > 0 ? String(capped) : '',
        };
    });
};

export const updateTransferLine = (
    lines: TransferLineState[],
    itemId: number,
    patch: Partial<Pick<TransferLineState, 'selected' | 'quantity'>>
): TransferLineState[] =>
    lines.map((line) => {
        if (line.itemId !== itemId) {
            return line;
        }
        let next = { ...line, ...patch };
        if (patch.selected === true && !next.quantity) {
            next = { ...next, quantity: '1' };
        }
        if (patch.selected === false) {
            next = { ...next, quantity: '' };
        }
        if (patch.quantity !== undefined) {
            const numeric = parseNumber(patch.quantity);
            if (numeric > 0) {
                next = {
                    ...next,
                    quantity: String(Math.min(numeric, next.maxQuantity)),
                    selected: true,
                };
            } else {
                next = { ...next, quantity: patch.quantity, selected: false };
            }
        }
        return next;
    });

export const getSelectedTransferLines = (lines: TransferLineState[]) =>
    lines.filter((line) => line.selected && parseNumber(line.quantity) >= 1);

export const selectionsFromLines = (lines: TransferLineState[]): TransferLineSelection => {
    const selections: TransferLineSelection = {};
    lines.forEach((line) => {
        if (line.selected || line.quantity) {
            selections[line.itemId] = {
                selected: line.selected,
                quantity: line.quantity,
            };
        }
    });
    return selections;
};

export const validateInterstoreTransfer = (
    draft: InterstoreTransferDraft,
    lines: TransferLineState[]
): InterstoreTransferErrors => {
    const errors: InterstoreTransferErrors = {};

    if (!draft.from_store_id) {
        errors.from_store_id = 'Select the source store';
    }
    if (!draft.to_store_id) {
        errors.to_store_id = 'Select the destination store';
    }
    if (draft.from_store_id && draft.to_store_id && draft.from_store_id === draft.to_store_id) {
        errors.to_store_id = 'Destination store must differ from source store';
    }
    if (!draft.transfer_date) {
        errors.transfer_date = 'Enter transfer date';
    }
    if (!draft.reference.trim()) {
        errors.reference = 'Enter transfer reference';
    }

    const selected = getSelectedTransferLines(lines);
    if (draft.from_store_id && selected.length === 0) {
        errors.lines = 'Select at least one item to transfer';
    }

    lines.forEach((line) => {
        if (!line.selected) {
            return;
        }
        const quantity = parseNumber(line.quantity);
        if (quantity < 1) {
            errors[`line_${line.itemId}_quantity`] = 'Quantity must be at least 1';
        } else if (quantity > line.maxQuantity) {
            errors[`line_${line.itemId}_quantity`] = `Max available is ${line.maxQuantity}`;
        }
    });

    return errors;
};

export const hasTransferErrors = (errors: InterstoreTransferErrors) => Object.keys(errors).length > 0;

export { formatProductLabel };
