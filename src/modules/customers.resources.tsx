import { Resource } from 'react-admin';

/* ============ CUSTOMERS MODULE ============ */
import { CustomerBillingList } from '../pages/customers/customer billings/customer-billings-list';
import { CustomerInvoiceList } from '../pages/customers/customer invoices/customer-invoices-list';
import { CustomerPaymentList } from '../pages/customers/customer payments/customer-payments-list';
import { CustomerTypeList } from '../pages/customers/customer types/customer-types-list';
import { CustomerList } from '../pages/customers/customers/customers-list';
import { CustomerMilkRateList } from '../pages/customers/customer milk rates/customer-milk-rates-list';
import { CustomerBillingCreate } from '../pages/customers/customer billings/CustomerBillingCreate';
import { CustomerBillingEdit } from '../pages/customers/customer billings/CustomerBillingEdit';
import { CustomerBillingShow } from '../pages/customers/customer billings/CustomerBillingShow';
import { CustomerInvoiceCreate } from '../pages/customers/customer invoices/CustomerInvoiceCreate';
import { CustomerInvoiceEdit } from '../pages/customers/customer invoices/CustomerInvoiceEdit';
import { CustomerInvoiceShow } from '../pages/customers/customer invoices/CustomerInvoiceShow';
import { CustomerPaymentCreate } from '../pages/customers/customer payments/CustomerPaymentCreate';
import { CustomerPaymentEdit } from '../pages/customers/customer payments/CustomerPaymentEdit';
import { CustomerPaymentShow } from '../pages/customers/customer payments/CustomerPaymentShow';
import { CustomerTypeCreate } from '../pages/customers/customer types/CustomerTypeCreate';
import { CustomerTypeEdit } from '../pages/customers/customer types/CustomerTypeEdit';
import { CustomerTypeShow } from '../pages/customers/customer types/CustomerTypeShow';
import { CustomerCreate } from '../pages/customers/customers/CustomerCreate';
import { CustomerEdit } from '../pages/customers/customers/CustomerEdit';
import { CustomerShow } from '../pages/customers/customers/CustomerShow';
import { CustomerMilkRateCreate } from '../pages/customers/customer milk rates/CustomerMilkRateCreate';
import { CustomerMilkRateEdit } from '../pages/customers/customer milk rates/CustomerMilkRateEdit';
import { CustomerMilkRateShow } from '../pages/customers/customer milk rates/CustomerMilkRateShow';

export const customersResources = [
    <Resource key="customer-billings" name="customer-billings" list={CustomerBillingList} create={CustomerBillingCreate} edit={CustomerBillingEdit} show={CustomerBillingShow} />,
    <Resource key="customer-invoices" name="customer-invoices" list={CustomerInvoiceList} create={CustomerInvoiceCreate} edit={CustomerInvoiceEdit} show={CustomerInvoiceShow} />,
    <Resource key="customer-payments" name="customer-payments" list={CustomerPaymentList} create={CustomerPaymentCreate} edit={CustomerPaymentEdit} show={CustomerPaymentShow} />,
    <Resource key="customer-types" name="customer-types" list={CustomerTypeList} create={CustomerTypeCreate} edit={CustomerTypeEdit} show={CustomerTypeShow} />,
    <Resource key="customers" name="customers" list={CustomerList} create={CustomerCreate} edit={CustomerEdit} show={CustomerShow} />,
    <Resource key="customer-milk-rates" name="customer-milk-rates" list={CustomerMilkRateList} create={CustomerMilkRateCreate} edit={CustomerMilkRateEdit} show={CustomerMilkRateShow} />,
];