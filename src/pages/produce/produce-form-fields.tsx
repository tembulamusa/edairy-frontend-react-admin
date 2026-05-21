import type { ReactNode } from 'react';
import {
    TextInput,
    NumberInput,
    DateInput,
    BooleanInput,
    ReferenceInput,
    SelectInput,
    required,
} from 'react-admin';
import Grid from '@mui/material/Grid';

const gridField = (child: ReactNode) => (
    <Grid size={{ xs: 12, md: 6 }}>{child}</Grid>
);

const transporterOptionText = (record: {
    transporter_no?: string;
    primary_phone?: string;
    id?: number;
}) =>
    record.transporter_no
        ? `${record.transporter_no}${record.primary_phone ? ` — ${record.primary_phone}` : ''}`
        : String(record.id ?? '');

const memberOptionText = (record: {
    first_name?: string;
    last_name?: string;
    member_no?: string;
}) =>
    `${record.first_name ?? ''} ${record.last_name ?? ''} (${record.member_no ?? ''})`.trim();

export const NameDescriptionFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(<TextInput source="name" label="Name" validate={required()} fullWidth variant="outlined" />)}
        <Grid size={{ xs: 12 }}>
            <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
        </Grid>
    </Grid>
);

export const MilkCanFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <ReferenceInput source="route_id" reference="routes">
                <SelectInput
                    label="Route"
                    optionText="name"
                    optionValue="id"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(<TextInput source="can_id" label="Can ID" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<TextInput source="can_type" label="Can Type" validate={required()} fullWidth variant="outlined" />)}
        {gridField(
            <NumberInput source="can_size" label="Can Size (L)" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <NumberInput source="tare_weight" label="Tare Weight" validate={required()} fullWidth variant="outlined" />
        )}
    </Grid>
);

export const MilkJournalFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <ReferenceInput source="route_id" reference="routes">
                <SelectInput
                    label="Route"
                    optionText="name"
                    optionValue="id"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <ReferenceInput source="transporter_id" reference="transporters">
                <SelectInput
                    label="Transporter"
                    optionText={transporterOptionText}
                    optionValue="id"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <DateInput source="journal_date" label="Journal Date" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <ReferenceInput source="milk_delivery_shift_id" reference="milk-delivery-shifts">
                <SelectInput
                    label="Milk Delivery Shift"
                    optionText="name"
                    optionValue="id"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <ReferenceInput source="user_id" reference="users">
                <SelectInput label="User" optionText="name" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(<BooleanInput source="confirmed" label="Confirmed" fullWidth />)}
    </Grid>
);

export const MilkRejectFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <DateInput
                source="transaction_date"
                label="Transaction Date"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <ReferenceInput source="route_id" reference="routes">
                <SelectInput label="Route" optionText="name" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(<NumberInput source="quantity" label="Quantity" validate={required()} fullWidth variant="outlined" />)}
        {gridField(
            <ReferenceInput source="transporter_id" reference="transporters">
                <SelectInput
                    label="Transporter"
                    optionText={transporterOptionText}
                    optionValue="id"
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <ReferenceInput source="member_id" reference="members">
                <SelectInput label="Member" optionText={memberOptionText} optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(<BooleanInput source="confirmed" label="Confirmed" fullWidth />)}
        {gridField(<TextInput source="reason" label="Reason" fullWidth variant="outlined" />)}
        <Grid size={{ xs: 12 }}>
            <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
        </Grid>
        {gridField(
            <ReferenceInput source="milk_delivery_shift_id" reference="milk-delivery-shifts">
                <SelectInput label="Shift" optionText="name" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
    </Grid>
);

export const MilkDeliveryFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <DateInput
                source="transaction_date"
                label="Transaction Date"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <NumberInput source="quantity_accepted" label="Quantity Accepted" fullWidth variant="outlined" />
        )}
        {gridField(<NumberInput source="amount" label="Amount" fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="amount_paid" label="Amount Paid" fullWidth variant="outlined" />)}
        {gridField(<TextInput source="delivery_note_number" label="Delivery Note Number" fullWidth variant="outlined" />)}
        {gridField(<TextInput source="customer_name" label="Customer Name" fullWidth variant="outlined" />)}
        {gridField(
            <ReferenceInput source="route_id" reference="routes">
                <SelectInput label="Route" optionText="name" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(
            <ReferenceInput source="transporter_id" reference="transporters">
                <SelectInput label="Transporter" optionText={transporterOptionText} optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(<BooleanInput source="confirmed" label="Confirmed" fullWidth />)}
        {gridField(<BooleanInput source="invoiced" label="Invoiced" fullWidth />)}
    </Grid>
);

export const MilkLocalSaleFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <DateInput source="transaction_date" label="Transaction Date" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(<NumberInput source="quantity" label="Quantity" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="rate" label="Rate" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="amount" label="Amount" fullWidth variant="outlined" />)}
        {gridField(
            <ReferenceInput source="product_grade_id" reference="product-grades">
                <SelectInput label="Product Grade" optionText="name" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(<TextInput source="ref_number" label="Reference Number" fullWidth variant="outlined" />)}
        {gridField(
            <ReferenceInput source="transporter_id" reference="transporters">
                <SelectInput label="Transporter" optionText={transporterOptionText} optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
    </Grid>
);

export const DailyMilkVarianceFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(<DateInput source="day" label="Day" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<TextInput source="month" label="Month" fullWidth variant="outlined" />)}
        {gridField(<TextInput source="transporter" label="Transporter" fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="field_collections" label="Field Collections" fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="mcc" label="MCC" fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="cash_sales" label="Cash Sales" fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="credit_sales" label="Credit Sales" fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="rejects" label="Rejects" fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="balance" label="Balance" fullWidth variant="outlined" />)}
    </Grid>
);

export const StrayMilkCollectionFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <ReferenceInput source="member_id" reference="members">
                <SelectInput label="Member" optionText={memberOptionText} optionValue="id" validate={required()} fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(<NumberInput source="quantity" label="Quantity" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<DateInput source="journal_date" label="Journal Date" validate={required()} fullWidth variant="outlined" />)}
        {gridField(
            <ReferenceInput source="milk_delivery_shift_id" reference="milk-delivery-shifts">
                <SelectInput label="Shift" optionText="name" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(
            <ReferenceInput source="member_route_id" reference="routes">
                <SelectInput label="Member Route" optionText="name" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(
            <ReferenceInput source="journal_route_id" reference="routes">
                <SelectInput label="Journal Route" optionText="name" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
    </Grid>
);

export const CanMovementFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <DateInput source="movement_date" label="Movement Date" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <ReferenceInput source="milk_can_id" reference="milk-cans">
                <SelectInput label="Milk Can" optionText="can_id" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(<TextInput source="can_code" label="Can Code" fullWidth variant="outlined" />)}
        {gridField(<TextInput source="movement_type" label="Movement Type" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="quantity" label="Quantity" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<TextInput source="condition_on_return" label="Condition on Return" fullWidth variant="outlined" />)}
        {gridField(
            <ReferenceInput source="milk_delivery_shift_id" reference="milk-delivery-shifts">
                <SelectInput label="Shift" optionText="name" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(
            <ReferenceInput source="transporter_id" reference="transporters">
                <SelectInput label="Transporter" optionText={transporterOptionText} optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(
            <ReferenceInput source="route_id" reference="routes">
                <SelectInput label="Route" optionText="name" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
    </Grid>
);

export const CoolerMilkCollectionFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <DateInput source="transaction_date" label="Transaction Date" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(<NumberInput source="quantity" label="Quantity" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<TextInput source="vehicle_reg_no" label="Vehicle Registration" fullWidth variant="outlined" />)}
        {gridField(
            <ReferenceInput source="milk_delivery_shift_id" reference="milk-delivery-shifts">
                <SelectInput label="Shift" optionText="name" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(<BooleanInput source="confirmed" label="Confirmed" fullWidth />)}
        {gridField(
            <ReferenceInput source="transporter_id" reference="transporters">
                <SelectInput label="Transporter" optionText={transporterOptionText} optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(
            <ReferenceInput source="route_id" reference="routes">
                <SelectInput label="Route" optionText="name" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
    </Grid>
);

export const MemberPaymentFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <ReferenceInput source="member_id" reference="members">
                <SelectInput label="Member" optionText={memberOptionText} optionValue="id" validate={required()} fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(<NumberInput source="amount" label="Amount" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<DateInput source="payment_date" label="Payment Date" fullWidth variant="outlined" />)}
        {gridField(<TextInput source="reference" label="Reference" fullWidth variant="outlined" />)}
        <Grid size={{ xs: 12 }}>
            <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
        </Grid>
    </Grid>
);

export const MemberDeductionFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <ReferenceInput source="member_id" reference="members">
                <SelectInput label="Member" optionText={memberOptionText} optionValue="id" validate={required()} fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(<NumberInput source="amount" label="Amount" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<DateInput source="deduction_date" label="Deduction Date" fullWidth variant="outlined" />)}
        {gridField(<TextInput source="deduction_type" label="Deduction Type" fullWidth variant="outlined" />)}
        <Grid size={{ xs: 12 }}>
            <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
        </Grid>
    </Grid>
);

export const MemberPayrollFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <ReferenceInput source="member_id" reference="members">
                <SelectInput label="Member" optionText={memberOptionText} optionValue="id" validate={required()} fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(<TextInput source="period" label="Period" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="gross_amount" label="Gross Amount" fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="net_amount" label="Net Amount" fullWidth variant="outlined" />)}
        {gridField(<TextInput source="status" label="Status" fullWidth variant="outlined" />)}
    </Grid>
);
