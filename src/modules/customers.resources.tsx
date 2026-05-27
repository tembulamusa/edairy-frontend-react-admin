import { Resource } from 'react-admin';

/* ============ CUSTOMERS MODULE ============ */
import { CustomerBillingList } from '../pages/customers/customer billings/customer-billings-list';
import { CustomerBillingCreate } from '../pages/customers/customer billings/CustomerBillingCreate';
import { CustomerInvoiceList } from '../pages/customers/customer invoices/customer-invoices-list';
import { CustomerInvoiceCreate } from '../pages/customers/customer invoices/CustomerInvoiceCreate';
import { CustomerPaymentList } from '../pages/customers/customer payments/customer-payments-list';
import { CustomerTypeList } from '../pages/customers/customer types/customer-types-list';
import { CustomerList } from '../pages/customers/customers/customers-list';
import { CustomerMilkRateList } from '../pages/customers/customer milk rates/customer-milk-rates-list';
import { CustomerPayDateRangeList } from '../pages/customers/pay date ranges/pay-date-ranges-list';
import {
    CustomerTypeCreate,
    CustomerTypeEdit,
    CustomerMilkRateCreate,
    CustomerMilkRateEdit,
    CustomerCreate,
    CustomerEdit,
    CustomerPayDateRangeCreate,
    CustomerPayDateRangeEdit,
    CustomerBillingEdit,
    CustomerPaymentCreate,
    CustomerPaymentEdit,
    CustomerInvoiceEdit,
} from '../pages/customers/customers-create-edit-pages';

export const customersResources = [
    <Resource
        key="customer-billings"
        name="customer-billings"
        list={CustomerBillingList}
        create={CustomerBillingCreate}
        edit={CustomerBillingEdit}
    />,
    <Resource
        key="customer-invoices"
        name="customer-invoices"
        list={CustomerInvoiceList}
        create={CustomerInvoiceCreate}
        edit={CustomerInvoiceEdit}
    />,
    <Resource
        key="customer-payments"
        name="customer-payments"
        list={CustomerPaymentList}
        create={CustomerPaymentCreate}
        edit={CustomerPaymentEdit}
    />,
    <Resource
        key="customer-types"
        name="customer-types"
        list={CustomerTypeList}
        create={CustomerTypeCreate}
        edit={CustomerTypeEdit}
    />,
    <Resource
        key="customers"
        name="customers"
        list={CustomerList}
        create={CustomerCreate}
        edit={CustomerEdit}
    />,
    <Resource
        key="customer-milk-rates"
        name="customer-milk-rates"
        list={CustomerMilkRateList}
        create={CustomerMilkRateCreate}
        edit={CustomerMilkRateEdit}
    />,
    <Resource
        key="customer-pay-date-ranges"
        name="customer-pay-date-ranges"
        list={CustomerPayDateRangeList}
        create={CustomerPayDateRangeCreate}
        edit={CustomerPayDateRangeEdit}
    />,
];