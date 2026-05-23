import type { ReactNode } from 'react';
import {
    BooleanInput,
    DateInput,
    NumberInput,
    ReferenceInput,
    SelectInput,
    TextInput,
    required,
} from 'react-admin';
import Grid from '@mui/material/Grid';
import { StoreSelectInput } from './store-select-input';

const gridField = (child: ReactNode) => (
    <Grid size={{ xs: 12, md: 6 }}>{child}</Grid>
);

const fullWidthField = (child: ReactNode) => <Grid size={{ xs: 12 }}>{child}</Grid>;

const statusChoices = [
    { id: 'ACTIVE', name: 'Active' },
    { id: 'INACTIVE', name: 'Inactive' },
];

const storeSelect = (source: string, fieldLabel: string) =>
    gridField(<StoreSelectInput source={source} label={fieldLabel} />);

const storeItemSelect = (source = 'item_id', label = 'Store Item') =>
    gridField(
        <ReferenceInput source={source} reference="store-items">
            <SelectInput
                label={label}
                optionText={(record) => record?.item_name ?? record?.inventory_name ?? record?.id}
                validate={required()}
                fullWidth
                variant="outlined"
            />
        </ReferenceInput>
    );

export const NameDescriptionStatusFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(<TextInput source="name" label="Name" validate={required()} fullWidth variant="outlined" />)}
        {gridField(
            <SelectInput source="status" label="Status" choices={statusChoices} fullWidth variant="outlined" defaultValue="ACTIVE" />
        )}
        {fullWidthField(
            <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
        )}
    </Grid>
);

export const ItemCategoryFormFields = () => <NameDescriptionStatusFormFields />;

export const StoreSetupFormFields = () => <NameDescriptionStatusFormFields />;

export const StoreInventoryFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <TextInput source="inventory_name" label="Inventory Name" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <ReferenceInput source="category_id" reference="item-categories">
                <SelectInput label="Category" optionText="name" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {fullWidthField(
            <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
        )}
        {gridField(<BooleanInput source="is_active" label="Active" defaultValue={true} />)}
    </Grid>
);

export const StoreItemFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <ReferenceInput source="store_inventory_id" reference="store-inventories">
                <SelectInput
                    label="Inventory"
                    optionText="inventory_name"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(<TextInput source="item_name" label="Item Name" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<TextInput source="sku" label="SKU" fullWidth variant="outlined" />)}
        {gridField(
            <NumberInput source="default_buying_price" label="Buying Price" fullWidth variant="outlined" />
        )}
        {gridField(
            <NumberInput source="default_selling_price" label="Selling Price" fullWidth variant="outlined" />
        )}
        {gridField(
            <NumberInput source="default_selling_price_credit" label="Credit Selling Price" fullWidth variant="outlined" />
        )}
        {gridField(<NumberInput source="reorder_point" label="Reorder Point" fullWidth variant="outlined" />)}
        {gridField(
            <SelectInput source="status" label="Status" choices={statusChoices} fullWidth variant="outlined" defaultValue="ACTIVE" />
        )}
    </Grid>
);

export const SupplyFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <DateInput source="supplied_date" label="Supplied Date" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <ReferenceInput source="vendor_id" reference="suppliers">
                <SelectInput
                    label="Vendor"
                    optionText={(record) => record?.name ?? record?.vendor_name ?? record?.id}
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {storeSelect('store_id', 'Store')}
        {gridField(<BooleanInput source="settled" label="Settled" />)}
    </Grid>
);

export const SupplyRejectFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <ReferenceInput source="supply_id" reference="supplies">
                <SelectInput label="Supply" optionText="reference" validate={required()} fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(<NumberInput source="quantity" label="Quantity" validate={required()} fullWidth variant="outlined" />)}
        {fullWidthField(
            <TextInput source="reason" label="Reason" validate={required()} multiline rows={3} fullWidth variant="outlined" />
        )}
    </Grid>
);

export const InterstoreTransferFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {storeSelect('from_store_id', 'From Store')}
        {storeSelect('to_store_id', 'To Store')}
        {gridField(
            <DateInput source="transfer_date" label="Transfer Date" validate={required()} fullWidth variant="outlined" />
        )}
    </Grid>
);

export const StoreStockFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {storeSelect('store_id', 'Store')}
        {storeItemSelect()}
        {gridField(<NumberInput source="quantity" label="Quantity" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<TextInput source="unit" label="Unit" fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="buying_price" label="Buying Price" fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="selling_price" label="Selling Price" fullWidth variant="outlined" />)}
        {gridField(
            <NumberInput source="credit_selling_price" label="Credit Selling Price" fullWidth variant="outlined" />
        )}
    </Grid>
);

export const StoreStockMovementTypeFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <TextInput source="movement_name" label="Movement Type" validate={required()} fullWidth variant="outlined" />
        )}
        {fullWidthField(
            <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
        )}
    </Grid>
);
