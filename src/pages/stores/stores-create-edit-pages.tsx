import type { ReactElement } from 'react';
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
    fields: ReactElement
) => () => (
    <TransporterCreatePage resource={resource} title={title} subtitle={subtitle} successMessage={successMessage}>
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

export const StoreCreate = createPage(
    'stores',
    'New Store',
    'Register a store location used for inventory and sales.',
    'Store created successfully',
    <StoreSetupFormFields />
);
export const StoreEdit = editPage(
    'stores',
    'Edit Store',
    'Update store details.',
    'Store updated successfully',
    <StoreSetupFormFields />
);

export const ItemCategoryCreate = createPage(
    'item-categories',
    'New Item Category',
    'Define a category for grouping store inventories and items.',
    'Item category created successfully',
    <ItemCategoryFormFields />
);
export const ItemCategoryEdit = editPage(
    'item-categories',
    'Edit Item Category',
    'Update item category details.',
    'Item category updated successfully',
    <ItemCategoryFormFields />
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
