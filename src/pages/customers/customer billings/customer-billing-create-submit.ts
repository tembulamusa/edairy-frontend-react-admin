import type { DataProvider } from 'react-admin';

export const createCustomerBillingForPayDateRange = async (
    dataProvider: DataProvider,
    payDateRangeId: number
): Promise<void> => {
    await dataProvider.create('customer-billings', {
        data: { pay_date_range_id: payDateRangeId },
    });
};

export const createCustomerBillingsForPayDateRanges = async (
    dataProvider: DataProvider,
    payDateRangeIds: number[]
): Promise<void> => {
    for (const payDateRangeId of payDateRangeIds) {
        await createCustomerBillingForPayDateRange(dataProvider, payDateRangeId);
    }
};
