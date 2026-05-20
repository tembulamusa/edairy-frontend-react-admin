import { Resource } from 'react-admin';

/* ============ CUSTOMERS MODULE ============ */
import { CustomerBillingList } from '../pages/customers/customer billings/customer-billings-list';
import { CustomerInvoiceList } from '../pages/customers/customer invoices/customer-invoices-list';
import { CustomerPaymentList } from '../pages/customers/customer payments/customer-payments-list';
import { CustomerTypeList } from '../pages/customers/customer types/customer-types-list';
import { CustomerList } from '../pages/customers/customers/customers-list';
import { CustomerMilkRateList } from '../pages/customers/customer milk rates/customer-milk-rates-list';

export const customersResources = [
    <Resource key="customer-billings" name="customer-billings" list={CustomerBillingList} />,
    <Resource key="customer-invoices" name="customer-invoices" list={CustomerInvoiceList} />,
    <Resource key="customer-payments" name="customer-payments" list={CustomerPaymentList} />,
    <Resource key="customer-types" name="customer-types" list={CustomerTypeList} />,
    <Resource key="customers" name="customers" list={CustomerList} />,
    <Resource key="customer-milk-rates" name="customer-milk-rates" list={CustomerMilkRateList} />,
];