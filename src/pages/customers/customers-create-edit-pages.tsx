import type { ReactElement } from 'react';
import type { RaRecord } from 'react-admin';
import { TransporterCreatePage } from '../transporters/shared/TransporterCreatePage';
import { TransporterEditPage } from '../transporters/shared/TransporterEditPage';
import {
    CustomerMilkRateFormFields,
    CustomerFormFields,
    CustomerTypeFormFields,
    CustomerPayDateRangeFormFields,
    CustomerPayDateRangeCreateFormFields,
    CustomerBillingFormFields,
    CustomerPaymentFormFields,
    CustomerInvoiceFormFields,
} from './shared/customer-form-fields';
import { transformCustomerMilkRateRecord } from './shared/customer-milk-rate-transform';

const createPage = (
    resource: string,
    title: string,
    subtitle: string,
    successMessage: string,
    fields: ReactElement,
    transform?: (data: RaRecord) => RaRecord
) => () => (
    <TransporterCreatePage
        resource={resource}
        title={title}
        subtitle={subtitle}
        successMessage={successMessage}
        transform={transform}
        saveLabel="Save"
        saveAndAddLabel="Save and Add New"
    >
        {fields}
    </TransporterCreatePage>
);

const editPage = (
    resource: string,
    title: string,
    subtitle: string,
    successMessage: string,
    fields: ReactElement,
    transform?: (data: RaRecord) => RaRecord
) => () => (
    <TransporterEditPage
        resource={resource}
        title={title}
        subtitle={subtitle}
        successMessage={successMessage}
        transform={transform}
    >
        {fields}
    </TransporterEditPage>
);

const transformCustomerTypeRecord = (data: RaRecord): RaRecord => {
    const { status: _status, ...rest } = data;
    return rest;
};

const transformCustomerRecord = (data: RaRecord): RaRecord => {
    const { status: _status, customer_milk_rate_id: _customerMilkRateId, ...rest } = data;
    return rest;
};

export const CustomerTypeCreate = createPage(
    'customer-types',
    'New Customer Type',
    'Define a type used to classify customers.',
    'Customer type created successfully',
    <CustomerTypeFormFields />,
    transformCustomerTypeRecord
);

export const CustomerTypeEdit = editPage(
    'customer-types',
    'Edit Customer Type',
    'Update customer type details.',
    'Customer type updated successfully',
    <CustomerTypeFormFields />,
    transformCustomerTypeRecord
);

export const CustomerMilkRateCreate = () => (
    <TransporterCreatePage
        resource="customer-milk-rates"
        title="New Customer Milk Rate"
        subtitle="Set the milk rate for a customer, product grade, and pay period."
        successMessage="Customer milk rate created successfully"
        transform={transformCustomerMilkRateRecord}
        saveLabel="Save"
        saveAndAddLabel="Save and Add New"
    >
        <CustomerMilkRateFormFields />
    </TransporterCreatePage>
);

export const CustomerMilkRateEdit = editPage(
    'customer-milk-rates',
    'Edit Customer Milk Rate',
    'Update customer milk rate details.',
    'Customer milk rate updated successfully',
    <CustomerMilkRateFormFields />,
    transformCustomerMilkRateRecord
);

export const CustomerPayDateRangeCreate = () => (
    <TransporterCreatePage
        resource="customer-pay-date-ranges"
        title="New Customer Pay Date Range"
        subtitle="Define a billing period for customer deliveries and invoicing."
        successMessage="Customer pay date range created successfully"
        saveLabel="Save"
        saveAndAddLabel="Save and Add New"
    >
        <CustomerPayDateRangeCreateFormFields />
    </TransporterCreatePage>
);

export const CustomerPayDateRangeEdit = editPage(
    'customer-pay-date-ranges',
    'Edit Customer Pay Date Range',
    'Update customer pay date range details.',
    'Customer pay date range updated successfully',
    <CustomerPayDateRangeFormFields />
);

export const CustomerCreate = () => (
    <TransporterCreatePage
        resource="customers"
        title="New Customer"
        subtitle="Register a customer for deliveries, billing, and store sales."
        successMessage="Customer created successfully"
        transform={transformCustomerRecord}
        saveLabel="Save"
        saveAndAddLabel="Save and Add New"
        notifyThenReloadOnSaveAndAdd
        greenSuccessNotification
    >
        <CustomerFormFields />
    </TransporterCreatePage>
);

export const CustomerEdit = editPage(
    'customers',
    'Edit Customer',
    'Update customer details.',
    'Customer updated successfully',
    <CustomerFormFields />,
    transformCustomerRecord
);

export const CustomerBillingEdit = editPage(
    'customer-billings',
    'Edit Customer Billing',
    'Update customer billing details.',
    'Customer billing updated successfully',
    <CustomerBillingFormFields />
);

export const CustomerPaymentCreate = createPage(
    'customer-payments',
    'New Customer Payment',
    'Record a payment received from a customer against an invoice.',
    'Customer payment created successfully',
    <CustomerPaymentFormFields />
);

export const CustomerPaymentEdit = editPage(
    'customer-payments',
    'Edit Customer Payment',
    'Update customer payment details.',
    'Customer payment updated successfully',
    <CustomerPaymentFormFields />
);

export const CustomerInvoiceEdit = editPage(
    'customer-invoices',
    'Edit Customer Invoice',
    'Update customer invoice details.',
    'Customer invoice updated successfully',
    <CustomerInvoiceFormFields />
);
