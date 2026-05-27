import type { ReactElement } from 'react';
import type { RaRecord } from 'react-admin';
import { TransporterCreatePage } from '../transporters/shared/TransporterCreatePage';
import { TransporterEditPage } from '../transporters/shared/TransporterEditPage';
import {
    ItemCategoryFormFields,
    StoreInventoryFormFields,
    StoreItemFormFields,
    StoreSetupFormFields,
    StoreStockMovementTypeFormFields,
    SupplyFormFields,
    SupplyRejectFormFields,
} from './shared/store-form-fields';

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
    fields: ReactElement
) => () => (
    <TransporterEditPage resource={resource} title={title} subtitle={subtitle} successMessage={successMessage}>
        {fields}
    </TransporterEditPage>
);

const transformStoreRecord = (data: RaRecord): RaRecord => {
    const { status: _status, store: _store, ...rest } = data;
    return rest;
};

const transformItemCategoryRecord = (data: RaRecord): RaRecord => {
    const { status: _status, ...rest } = data;
    return rest;
};

export const StoreCreate = () => (
    <TransporterCreatePage
        resource="stores"
        title="New Store"
        subtitle="Register a store location used for inventory and sales."
        successMessage="Store created successfully"
        transform={transformStoreRecord}
        saveLabel="Save"
        saveAndAddLabel="Save and Add New"
    >
        <StoreSetupFormFields />
    </TransporterCreatePage>
);

export const StoreEdit = () => (
    <TransporterEditPage
        resource="stores"
        title="Edit Store"
        subtitle="Update store details."
        successMessage="Store updated successfully"
        transform={transformStoreRecord}
    >
        <StoreSetupFormFields />
    </TransporterEditPage>
);

export const ItemCategoryCreate = () => (
    <TransporterCreatePage
        resource="item-categories"
        title="New Item Category"
        subtitle="Define a category for grouping store inventories and items."
        successMessage="Item category created successfully"
        transform={transformItemCategoryRecord}
        saveLabel="Save"
        saveAndAddLabel="Save and Add New"
    >
        <ItemCategoryFormFields />
    </TransporterCreatePage>
);

export const ItemCategoryEdit = () => (
    <TransporterEditPage
        resource="item-categories"
        title="Edit Item Category"
        subtitle="Update item category details."
        successMessage="Item category updated successfully"
        transform={transformItemCategoryRecord}
    >
        <ItemCategoryFormFields />
    </TransporterEditPage>
);

export const StoreInventoryCreate = createPage(
    'store-inventories',
    'New Store Inventory',
    'Create an inventory grouping for store items.',
    'Store inventory created successfully',
    <StoreInventoryFormFields />
);
export const StoreInventoryEdit = editPage(
    'store-inventories',
    'Edit Store Inventory',
    'Update store inventory details.',
    'Store inventory updated successfully',
    <StoreInventoryFormFields />
);

export const StoreItemCreate = createPage(
    'store-items',
    'New Store Item',
    'Add a sellable item with pricing and stock settings.',
    'Store item created successfully',
    <StoreItemFormFields />
);
export const StoreItemEdit = editPage(
    'store-items',
    'Edit Store Item',
    'Update store item details and pricing.',
    'Store item updated successfully',
    <StoreItemFormFields />
);

export const SupplyCreate = createPage(
    'supplies',
    'New Supply',
    'Record goods received from a vendor into a store.',
    'Supply created successfully',
    <SupplyFormFields />
);
export const SupplyEdit = editPage(
    'supplies',
    'Edit Supply',
    'Update supply receipt details.',
    'Supply updated successfully',
    <SupplyFormFields />
);

export const SupplyRejectCreate = createPage(
    'supply-rejects',
    'New Supply Reject',
    'Record rejected items from a supply delivery.',
    'Supply reject created successfully',
    <SupplyRejectFormFields />
);
export const SupplyRejectEdit = editPage(
    'supply-rejects',
    'Edit Supply Reject',
    'Update supply reject details.',
    'Supply reject updated successfully',
    <SupplyRejectFormFields />
);

export {
    InterstoreTransferCreate,
    InterstoreTransferEdit,
} from './interstore transfer/InterstoreTransferFormPage';

export {
    StoreStockTakingCreate,
    StoreStockTakingEdit,
} from './store stock takings/StoreStockTakingFormPage';

export { StoreStockMovementCreate } from './store stock movements/StoreStockMovementFormPage';

export const StoreStockMovementTypeCreate = createPage(
    'store-stock-movement-types',
    'New Stock Movement Type',
    'Define a movement type used in stock ledger entries.',
    'Stock movement type created successfully',
    <StoreStockMovementTypeFormFields />
);
export const StoreStockMovementTypeEdit = editPage(
    'store-stock-movement-types',
    'Edit Stock Movement Type',
    'Update stock movement type details.',
    'Stock movement type updated successfully',
    <StoreStockMovementTypeFormFields />
);
