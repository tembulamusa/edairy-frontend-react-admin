export type TransferLineState = {
    itemId: number;
    itemName: string;
    sku: string;
    unit: string;
    maxQuantity: number;
    selected: boolean;
    quantity: string;
};

export type InterstoreTransferDraft = {
    reference: string;
    from_store_id: string;
    to_store_id: string;
    transfer_date: string;
    status: string;
};

export type TransferLineSelection = Record<number, { selected: boolean; quantity: string }>;

export type InterstoreTransferErrors = Partial<
    Record<
        | keyof InterstoreTransferDraft
        | 'lines'
        | `line_${number}_quantity`,
        string
    >
>;
