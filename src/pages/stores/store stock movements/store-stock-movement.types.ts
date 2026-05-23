export type MovementDirection = 'IN' | 'OUT';

export type MovementLineState = {
    itemId: number;
    itemName: string;
    sku: string;
    unit: string;
    maxQuantity: number;
    unitCost: number;
    sellingPrice: number;
    selected: boolean;
    quantity: string;
};

export type StockMovementDraft = {
    transaction_date: string;
    store_id: string;
    movement_type_id: string;
    movement_direction: MovementDirection;
    remarks: string;
};

export type MovementLineSelection = Record<number, { selected: boolean; quantity: string }>;

export type StockMovementErrors = Partial<
    Record<keyof StockMovementDraft | 'lines' | `line_${number}_quantity`, string>
>;
