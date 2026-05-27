export type StockTakingLineState = {
    itemId: number;
    itemName: string;
    sku: string;
    unit: string;
    systemQuantity: number;
    selected: boolean;
    physicalQuantity: string;
};

export type StockTakingDraft = {
    stock_take_no: string;
    stock_take_date: string;
    store_id: string;
    remarks: string;
};

export type StockTakingLineSelection = Record<number, { selected: boolean; physicalQuantity: string }>;

export type StockTakingErrors = Partial<
    Record<keyof StockTakingDraft | 'lines' | `line_${number}_physical`, string>
>;
