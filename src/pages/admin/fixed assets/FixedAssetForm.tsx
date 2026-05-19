import {
    TextInput,
    NumberInput,
    required,
    DateInput,
    SelectInput,
    BooleanInput,
    ReferenceInput,
} from 'react-admin';

export const FixedAssetForm = () => (
    <>
        <TextInput source="asset_code" validate={required()} fullWidth />
        <TextInput source="asset_name" validate={required()} fullWidth />
        <ReferenceInput source="asset_category_id" reference="asset-categories">
            <SelectInput optionText="name" fullWidth />
        </ReferenceInput>
        <TextInput source="serial_no" fullWidth />
        <TextInput source="barcode" fullWidth />
        <TextInput source="manufacturer" fullWidth />
        <ReferenceInput source="vendor_id" reference="vendors">
            <SelectInput optionText="name" fullWidth />
        </ReferenceInput>
        <NumberInput source="purchase_cost" validate={required()} fullWidth />
        <NumberInput source="salvage_value" fullWidth />
        <DateInput source="acquisition_date" validate={required()} fullWidth />
        <NumberInput source="useful_life_years" fullWidth />
        <SelectInput
            source="depreciation_method"
            choices={[
                { id: 'STRAIGHT_LINE', name: 'Straight Line' },
                { id: 'DECLINING_BALANCE', name: 'Declining Balance' },
                { id: 'UNITS_OF_PRODUCTION', name: 'Units of Production' },
            ]}
            fullWidth
        />
        <NumberInput source="depreciation_rate" fullWidth />
        <NumberInput source="accumulated_depreciation" fullWidth />
        <NumberInput source="book_value" fullWidth />
        <DateInput source="warranty_end_date" fullWidth />
        <TextInput source="current_location" fullWidth />
        <SelectInput
            source="status"
            choices={[
                { id: 'ACTIVE', name: 'Active' },
                { id: 'MAINTENANCE', name: 'Maintenance' },
                { id: 'DISPOSED', name: 'Disposed' },
                { id: 'WRITTEN_OFF', name: 'Written Off' },
            ]}
            fullWidth
        />
        <BooleanInput source="loanable" fullWidth />
        <TextInput source="comments" multiline fullWidth />
    </>
);