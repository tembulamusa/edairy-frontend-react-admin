export type StockTakingLineState = {
    itemId: number;
    itemName: string;
    sku: string;
    unit: string;
    systemQuantity: number;
    physicalQuantity: string;
};

export type StockTakingDraft = {
    stock_take_no: string;
    stock_take_date: string;
    store_id: string;
    remarks: string;
};

export type StockTakingLineQuantities = Record<number, string>;

export type StockTakingErrors = Partial<
    Record<keyof StockTakingDraft | 'lines' | `line_${number}_physical`, string>
>;
