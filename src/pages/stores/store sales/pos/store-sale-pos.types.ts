export type SaleType = 'CASH' | 'CREDIT';

export type CustomerType =
    | 'CUSTOMER'
    | 'MEMBER'
    | 'TRANSPORTER'
    | 'SUPPLIER'
    | 'GUEST'
    | 'VENDOR'
    | 'EMPLOYEE';

export type PosCartLine = {
    itemId: number;
    itemName: string;
    sku: string;
    quantity: number;
    unitPrice: number;
    lineTotal: number;
    maxQuantity: number;
};

export type StoreSalePosDraft = {
    transaction_date: string;
    store_id: string;
    sale_type: SaleType;
    customer_type: CustomerType;
    party_id: string;
    payment_mode_id: string;
    amount_paid: string;
    cart: PosCartLine[];
};

export type StoreSalePosErrors = Partial<
    Record<keyof StoreSalePosDraft | 'cart' | `line_${number}_quantity`, string>
>;
