import defaultThumbnail from '../../../../assets/logo.png';
import type { CustomerType, PosCartLine, SaleType, StoreSalePosDraft, StoreSalePosErrors } from './store-sale-pos.types';

export type StoreItemRecord = {
    id?: number;
    item_name?: string;
    inventory_name?: string;
    sku?: string;
    thumbnail?: string;
    default_selling_price?: number | string;
    default_selling_price_credit?: number | string;
    status?: string;
};

export type StoreStockRecord = {
    id?: number;
    item_id?: number;
    store_id?: number;
    store_name?: string;
    item_name?: string;
    quantity?: number | string;
    unit?: string;
    selling_price?: number | string;
    credit_selling_price?: number | string;
};

export type PosProduct = {
    itemId: number;
    itemName: string;
    sku: string;
    thumbnail?: string;
    balance: number;
    unit: string;
    cashPrice: number;
    creditPrice: number;
};

const parseNumber = (value: unknown) => {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : 0;
};

export const getRecordId = (record: Record<string, unknown>) =>
    parseNumber(record.id ?? record.ID ?? record.Id);

const getStockItemId = (stock: StoreStockRecord) => {
    const record = stock as Record<string, unknown>;
    return parseNumber(
        stock.item_id ?? record.store_item_id ?? record.StoreItemID ?? record.storeItemId
    );
};

const getStockStoreId = (stock: StoreStockRecord) => {
    const record = stock as Record<string, unknown>;
    return parseNumber(stock.store_id ?? record.storeId ?? record.StoreID);
};

const storesMatch = (storeId: string, storeName: string, stock: StoreStockRecord) => {
    const stockStoreId = getStockStoreId(stock);
    if (storeId && stockStoreId) {
        if (String(stockStoreId) === String(storeId)) {
            return true;
        }
        if (Number(storeId) === stockStoreId) {
            return true;
        }
    }
    const normalizedStoreName = storeName.trim().toLowerCase();
    if (normalizedStoreName) {
        const stockName = String(stock.store_name ?? '').trim().toLowerCase();
        if (stockName === normalizedStoreName) {
            return true;
        }
    }
    return false;
};

export const getImageUrl = (thumbnail?: string) => {
    if (!thumbnail) return defaultThumbnail;
    if (thumbnail.startsWith('http')) return thumbnail;
    return `http://192.168.1.10/${thumbnail}`;
};

export const formatMoney = (value: number) =>
    `KES ${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const todayIsoDate = () => new Date().toLocaleDateString('en-CA');

export const customerTypeChoices: { id: CustomerType; name: string }[] = [
    { id: 'CUSTOMER', name: 'Customer' },
    { id: 'MEMBER', name: 'Member' },
    { id: 'TRANSPORTER', name: 'Transporter' },
    { id: 'SUPPLIER', name: 'Supplier' },
    { id: 'GUEST', name: 'Guest' },
    { id: 'VENDOR', name: 'Vendor' },
    { id: 'EMPLOYEE', name: 'Employee' },
];

export const customerTypesRequiringParty: CustomerType[] = [
    'CUSTOMER',
    'MEMBER',
    'TRANSPORTER',
    'SUPPLIER',
    'VENDOR',
    'EMPLOYEE',
];

export const partyResourceByCustomerType: Partial<
    Record<CustomerType, { resource: string; label: string }>
> = {
    CUSTOMER: { resource: 'customers', label: 'Customer' },
    MEMBER: { resource: 'members', label: 'Member' },
    TRANSPORTER: { resource: 'transporters', label: 'Transporter' },
    SUPPLIER: { resource: 'suppliers', label: 'Supplier' },
    VENDOR: { resource: 'suppliers', label: 'Vendor' },
    EMPLOYEE: { resource: 'employees', label: 'Employee' },
};

export const initialStoreSalePosDraft = (): StoreSalePosDraft => ({
    transaction_date: todayIsoDate(),
    store_id: '',
    sale_type: 'CASH',
    customer_type: 'GUEST',
    party_id: '',
    payment_mode_id: '',
    amount_paid: '',
    cart: [],
});

export const buildPosProducts = (
    items: StoreItemRecord[],
    stocks: StoreStockRecord[],
    storeId: string,
    storeName?: string
): PosProduct[] => {
    if (!storeId && !storeName?.trim()) {
        return [];
    }

    const stocksForStore = stocks.filter((stock) => storesMatch(storeId, storeName ?? '', stock));

    const itemById = new Map<number, StoreItemRecord>();
    const itemByName = new Map<string, StoreItemRecord>();

    items
        .filter((item) => {
            const status = String(item.status ?? '').toUpperCase();
            return !status || status === 'ACTIVE';
        })
        .forEach((item) => {
            const itemId = getRecordId(item as Record<string, unknown>);
            if (itemId) {
                itemById.set(itemId, item);
            }
            const itemName = String(item.item_name ?? item.inventory_name ?? '').trim().toLowerCase();
            if (itemName) {
                itemByName.set(itemName, item);
            }
        });

    const productsByItemId = new Map<number, PosProduct>();

    stocksForStore.forEach((stock) => {
        const stockItemId = getStockItemId(stock);
        const stockItemName = String(stock.item_name ?? '').trim().toLowerCase();
        const item =
            (stockItemId ? itemById.get(stockItemId) : undefined) ??
            (stockItemName ? itemByName.get(stockItemName) : undefined);

        const itemId = stockItemId || (item ? getRecordId(item as Record<string, unknown>) : 0);
        if (!itemId || productsByItemId.has(itemId)) {
            return;
        }

        const displayName =
            item?.item_name ||
            item?.inventory_name ||
            stock.item_name ||
            `Item ${itemId}`;
        const cashPrice = parseNumber(stock.selling_price ?? item?.default_selling_price);
        const creditPrice = parseNumber(
            stock.credit_selling_price ?? item?.default_selling_price_credit ?? cashPrice
        );

        productsByItemId.set(itemId, {
            itemId,
            itemName: displayName,
            sku: item?.sku || '—',
            thumbnail: item?.thumbnail,
            balance: parseNumber(stock.quantity),
            unit: stock.unit || 'unit',
            cashPrice,
            creditPrice: creditPrice || cashPrice,
        });
    });

    return Array.from(productsByItemId.values()).sort((a, b) => a.itemName.localeCompare(b.itemName));
};

export const formatProductLabel = (product: PosProduct) =>
    `${product.itemName} (${product.balance})`;

export const getAvailableQuantity = (product: PosProduct, cartQuantity: number) =>
    Math.max(product.balance - cartQuantity, 0);
export const getUnitPrice = (product: PosProduct, saleType: SaleType) =>
    saleType === 'CREDIT' ? product.creditPrice : product.cashPrice;

export const calcCartTotals = (cart: PosCartLine[]) => {
    const total = cart.reduce((sum, line) => sum + line.lineTotal, 0);
    return {
        total,
        itemCount: cart.reduce((sum, line) => sum + line.quantity, 0),
    };
};

export const withSyncedAmountPaid = (draft: StoreSalePosDraft): StoreSalePosDraft => {
    const { total } = calcCartTotals(draft.cart);
    return {
        ...draft,
        amount_paid: total > 0 ? String(total) : '',
    };
};

export const syncCartPrices = (cart: PosCartLine[], products: PosProduct[], saleType: SaleType) =>
    cart.map((line) => {
        const product = products.find((entry) => entry.itemId === line.itemId);
        const unitPrice = product ? getUnitPrice(product, saleType) : line.unitPrice;
        return {
            ...line,
            unitPrice,
            lineTotal: unitPrice * line.quantity,
            maxQuantity: product?.balance ?? line.maxQuantity,
        };
    });

export const addProductToCart = (
    cart: PosCartLine[],
    product: PosProduct,
    saleType: SaleType
): PosCartLine[] => {
    const unitPrice = getUnitPrice(product, saleType);
    const existing = cart.find((line) => line.itemId === product.itemId);

    if (existing) {
        const nextQuantity = existing.quantity + 1;
        if (nextQuantity > product.balance) {
            return cart;
        }
        return cart.map((line) =>
            line.itemId === product.itemId
                ? {
                      ...line,
                      quantity: nextQuantity,
                      unitPrice,
                      lineTotal: unitPrice * nextQuantity,
                  }
                : line
        );
    }

    if (product.balance <= 0) {
        return cart;
    }

    return [
        ...cart,
        {
            itemId: product.itemId,
            itemName: product.itemName,
            sku: product.sku,
            quantity: 1,
            unitPrice,
            lineTotal: unitPrice,
            maxQuantity: product.balance,
        },
    ];
};

export const updateCartLineQuantity = (
    cart: PosCartLine[],
    itemId: number,
    quantity: number
): PosCartLine[] => {
    if (quantity <= 0) {
        return cart.filter((line) => line.itemId !== itemId);
    }

    return cart.map((line) => {
        if (line.itemId !== itemId) {
            return line;
        }
        const capped = Math.min(quantity, line.maxQuantity);
        return {
            ...line,
            quantity: capped,
            lineTotal: line.unitPrice * capped,
        };
    });
};

export const validateStoreSalePos = (draft: StoreSalePosDraft): StoreSalePosErrors => {
    const errors: StoreSalePosErrors = {};

    if (!draft.transaction_date) {
        errors.transaction_date = 'Enter transaction date';
    }
    if (!draft.store_id) {
        errors.store_id = 'Select a store';
    }
    if (!draft.sale_type) {
        errors.sale_type = 'Select a sale type';
    }
    if (!draft.customer_type) {
        errors.customer_type = 'Select a customer type';
    }
    if (customerTypesRequiringParty.includes(draft.customer_type) && !draft.party_id) {
        const label = partyResourceByCustomerType[draft.customer_type]?.label ?? 'party';
        errors.party_id = `Select a ${label.toLowerCase()}`;
    }
    if (draft.cart.length === 0) {
        errors.cart = 'Add at least one item to the cart';
    }

    draft.cart.forEach((line) => {
        if (line.quantity <= 0) {
            errors[`line_${line.itemId}_quantity`] = 'Quantity must be greater than zero';
        }
        if (line.quantity > line.maxQuantity) {
            errors[`line_${line.itemId}_quantity`] = `Only ${line.maxQuantity} available in stock`;
        }
    });

    if (draft.sale_type === 'CASH' && !draft.payment_mode_id) {
        errors.payment_mode_id = 'Select a payment mode';
    }

    return errors;
};

export const hasPosErrors = (errors: StoreSalePosErrors) => Object.keys(errors).length > 0;
