import { buildTransferProductsFromStocks } from '../interstore transfer/interstore-transfer-utils';
import type { PosProduct, StoreItemRecord, StoreStockRecord } from '../store sales/pos/store-sale-pos-utils';
import type {
    MovementDirection,
    MovementLineSelection,
    MovementLineState,
    StockMovementDraft,
    StockMovementErrors,
} from './store-stock-movement.types';

const parseNumber = (value: unknown) => {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : 0;
};

export const todayIsoDate = () => new Date().toLocaleDateString('en-CA');

/** Default ledger direction when no direction field is shown on create. */
export const STOCK_MOVEMENT_DEFAULT_DIRECTION: MovementDirection = 'OUT';

export const initialStockMovementDraft = (): StockMovementDraft => ({
    transaction_date: todayIsoDate(),
    store_id: '',
    movement_type_id: '',
    remarks: '',
});

const getStockPrices = (stocks: StoreStockRecord[], storeId: string, itemId: number) => {
    const stock = stocks.find((entry) => {
        const record = entry as Record<string, unknown>;
        const stockStoreId = String(entry.store_id ?? record.storeId ?? '');
        const stockItemId = Number(entry.item_id ?? record.store_item_id ?? 0);
        return (
            stockItemId === itemId &&
            (stockStoreId === storeId || Number(stockStoreId) === Number(storeId))
        );
    });

    return {
        unitCost: parseNumber(stock?.buying_price),
        sellingPrice: parseNumber(stock?.selling_price),
    };
};

export const buildMovementLinesFromProducts = (
    products: PosProduct[],
    direction: MovementDirection,
    stocks: StoreStockRecord[],
    storeId: string
): MovementLineState[] =>
    products
        .filter((product) => direction === 'IN' || product.balance > 0)
        .map((product) => {
            const prices = getStockPrices(stocks, storeId, product.itemId);
            return {
                itemId: product.itemId,
                itemName: product.itemName,
                sku: product.sku,
                unit: product.unit,
                maxQuantity: product.balance,
                unitCost: prices.unitCost,
                sellingPrice: prices.sellingPrice,
                selected: false,
                quantity: '',
            };
        });

export const buildMovementLines = (
    stocks: StoreStockRecord[],
    storeId: string,
    storeName: string,
    items: StoreItemRecord[],
    direction: MovementDirection,
    selections: MovementLineSelection
): MovementLineState[] => {
    const products = buildTransferProductsFromStocks(stocks, storeId, storeName, items);
    const baseLines = buildMovementLinesFromProducts(products, direction, stocks, storeId);

    return baseLines.map((line) => {
        const selection = selections[line.itemId];
        if (!selection) {
            return line;
        }
        const quantity = parseNumber(selection.quantity);
        const capped =
            direction === 'OUT' && quantity >= 1
                ? Math.min(quantity, line.maxQuantity)
                : quantity;
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
};

export const selectionsFromMovementLines = (lines: MovementLineState[]): MovementLineSelection => {
    const selections: MovementLineSelection = {};
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

export const getSelectedMovementLines = (lines: MovementLineState[]) =>
    lines.filter((line) => line.selected && parseNumber(line.quantity) >= 1);

export const validateStockMovement = (
    draft: StockMovementDraft,
    lines: MovementLineState[],
    direction: MovementDirection
): StockMovementErrors => {
    const errors: StockMovementErrors = {};

    if (!draft.transaction_date) {
        errors.transaction_date = 'Enter transaction date';
    }
    if (!draft.store_id) {
        errors.store_id = 'Select a store';
    }
    if (!draft.movement_type_id) {
        errors.movement_type_id = 'Select a movement type';
    }

    const selected = getSelectedMovementLines(lines);
    if (draft.store_id && selected.length === 0) {
        errors.lines = 'Select at least one item';
    }

    lines.forEach((line) => {
        if (!line.selected) {
            return;
        }
        const quantity = parseNumber(line.quantity);
        if (quantity < 1) {
            errors[`line_${line.itemId}_quantity`] = 'Quantity must be at least 1';
        } else if (direction === 'OUT' && quantity > line.maxQuantity) {
            errors[`line_${line.itemId}_quantity`] = `Max available is ${line.maxQuantity}`;
        }
    });

    return errors;
};

export const hasStockMovementErrors = (errors: StockMovementErrors) => Object.keys(errors).length > 0;
