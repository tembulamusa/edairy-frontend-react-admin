import { buildTransferProductsFromStocks } from '../interstore transfer/interstore-transfer-utils';
import type { StoreItemRecord, StoreStockRecord } from '../store sales/pos/store-sale-pos-utils';
import type {
    StockTakingDraft,
    StockTakingErrors,
    StockTakingLineQuantities,
    StockTakingLineState,
} from './store-stock-taking.types';

const parseNumber = (value: unknown) => {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : 0;
};

export const todayIsoDate = () => new Date().toLocaleDateString('en-CA');

export const initialStockTakingDraft = (): StockTakingDraft => ({
    stock_take_no: '',
    stock_take_date: todayIsoDate(),
    store_id: '',
    remarks: '',
});

export const buildStockTakingLines = (
    stocks: StoreStockRecord[],
    storeId: string,
    storeName: string,
    items: StoreItemRecord[],
    quantities: StockTakingLineQuantities
): StockTakingLineState[] => {
    const products = buildTransferProductsFromStocks(stocks, storeId, storeName, items);

    return products.map((product) => ({
        itemId: product.itemId,
        itemName: product.itemName,
        sku: product.sku,
        unit: product.unit,
        systemQuantity: product.balance,
        physicalQuantity: quantities[product.itemId] ?? '',
    }));
};

export const quantitiesFromLines = (lines: StockTakingLineState[]): StockTakingLineQuantities => {
    const quantities: StockTakingLineQuantities = {};
    lines.forEach((line) => {
        if (line.physicalQuantity) {
            quantities[line.itemId] = line.physicalQuantity;
        }
    });
    return quantities;
};

export const getCountedStockTakingLines = (lines: StockTakingLineState[]) =>
    lines.filter((line) => line.physicalQuantity.trim() !== '' && parseNumber(line.physicalQuantity) >= 0);

export const validateStockTaking = (
    draft: StockTakingDraft,
    lines: StockTakingLineState[]
): StockTakingErrors => {
    const errors: StockTakingErrors = {};

    if (!draft.stock_take_no.trim()) {
        errors.stock_take_no = 'Enter stock take number';
    }
    if (!draft.store_id) {
        errors.store_id = 'Select a store';
    }
    if (!draft.stock_take_date) {
        errors.stock_take_date = 'Enter stock take date';
    }

    const counted = getCountedStockTakingLines(lines);
    if (draft.store_id && counted.length === 0) {
        errors.lines = 'Enter physical count for at least one item';
    }

    lines.forEach((line) => {
        if (!line.physicalQuantity.trim()) {
            return;
        }
        const physical = parseNumber(line.physicalQuantity);
        if (physical < 0) {
            errors[`line_${line.itemId}_physical`] = 'Physical count cannot be negative';
        }
    });

    return errors;
};

export const hasStockTakingErrors = (errors: StockTakingErrors) => Object.keys(errors).length > 0;
