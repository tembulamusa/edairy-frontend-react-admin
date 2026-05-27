import { buildTransferProductsFromStocks } from '../interstore transfer/interstore-transfer-utils';
import type { StoreItemRecord, StoreStockRecord } from '../store sales/pos/store-sale-pos-utils';
import type {
    StockTakingDraft,
    StockTakingErrors,
    StockTakingLineSelection,
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

const buildStockTakingLinesFromProducts = (
    stocks: StoreStockRecord[],
    storeId: string,
    storeName: string,
    items: StoreItemRecord[]
): StockTakingLineState[] => {
    const products = buildTransferProductsFromStocks(stocks, storeId, storeName, items);

    return products.map((product) => ({
        itemId: product.itemId,
        itemName: product.itemName,
        sku: product.sku,
        unit: product.unit,
        systemQuantity: product.balance,
        selected: false,
        physicalQuantity: '',
    }));
};

export const buildStockTakingLines = (
    stocks: StoreStockRecord[],
    storeId: string,
    storeName: string,
    items: StoreItemRecord[],
    selections: StockTakingLineSelection
): StockTakingLineState[] =>
    buildStockTakingLinesFromProducts(stocks, storeId, storeName, items).map((line) => {
        const selection = selections[line.itemId];
        if (!selection) {
            return line;
        }
        return {
            ...line,
            selected: selection.selected,
            physicalQuantity: selection.selected ? selection.physicalQuantity : '',
        };
    });

export const selectionsFromLines = (lines: StockTakingLineState[]): StockTakingLineSelection => {
    const selections: StockTakingLineSelection = {};
    lines.forEach((line) => {
        if (line.selected || line.physicalQuantity) {
            selections[line.itemId] = {
                selected: line.selected,
                physicalQuantity: line.physicalQuantity,
            };
        }
    });
    return selections;
};

export const getCountedStockTakingLines = (lines: StockTakingLineState[]) =>
    lines.filter(
        (line) =>
            line.selected &&
            line.physicalQuantity.trim() !== '' &&
            parseNumber(line.physicalQuantity) >= 0
    );

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
    const selectedLines = lines.filter((line) => line.selected);

    if (draft.store_id && selectedLines.length === 0) {
        errors.lines = 'Select at least one item to count';
    } else if (draft.store_id && counted.length === 0 && selectedLines.length > 0) {
        errors.lines = 'Enter physical count for each selected item';
    }

    lines.forEach((line) => {
        if (!line.selected) {
            return;
        }
        if (!line.physicalQuantity.trim()) {
            errors[`line_${line.itemId}_physical`] = 'Enter physical count';
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
