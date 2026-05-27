import { useEffect, useRef, type ReactNode } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
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

const today = new Date().toLocaleDateString('en-CA');

const validateTransactionDateNotFuture = (value: string | Date | null | undefined) => {
    if (!value) return undefined;
    const selectedDate = new Date(value);
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    if (selectedDate > todayDate) {
        return 'Transaction date cannot be greater than today';
    }
    return undefined;
};

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
                validate={[required(), validateTransactionDateNotFuture]}
                max={today}
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

const customerOptionText = (record: {
    full_name?: string;
    full_names?: string;
    id?: number;
}) => record.full_name?.trim() || record.full_names?.trim() || String(record.id ?? '');

export const MilkDeliveryFormFields = () => {
    const { setValue, getValues } = useFormContext();

    useEffect(() => {
        const current = getValues('transaction_date');
        if (!current) {
            setValue('transaction_date', today, { shouldDirty: false });
        }
    }, [getValues, setValue]);

    return (
        <Grid container spacing={2} alignItems="flex-start">
            {gridField(
                <DateInput
                    source="transaction_date"
                    label="Transaction Date"
                    validate={[required(), validateTransactionDateNotFuture]}
                    maxValue={today}
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
            {gridField(
                <ReferenceInput source="customer_id" reference="customers">
                    <SelectInput
                        label="Customer"
                        optionText={customerOptionText}
                        optionValue="id"
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
                        fullWidth
                        variant="outlined"
                    />
                </ReferenceInput>
            )}
        </Grid>
    );
};

export const MilkLocalSaleFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <DateInput source="transaction_date" label="Transaction Date" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(<NumberInput source="quantity" label="Quantity" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="rate" label="Rate" validate={required()} fullWidth variant="outlined" />)}
        {gridField(<NumberInput source="amount" label="Amount" fullWidth variant="outlined" />)}
        {gridField(
            <ReferenceInput source="grade_id" reference="product-grades">
                <SelectInput label="Grade" optionText="name" optionValue="id" fullWidth variant="outlined" />
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
            <ReferenceInput source="can_id" reference="milk-cans">
                <SelectInput label="Can ID" optionText="can_id" optionValue="id" fullWidth variant="outlined" />
            </ReferenceInput>
        )}
        {gridField(
            <SelectInput
                source="movement_type"
                label="Movement Type"
                choices={[
                    { id: 'ISSUE_TO_TRANSPORTER', name: 'Issue to Transporter' },
                    { id: 'DELIVER_TO_FARM', name: 'Deliver to Farm' },
                    { id: 'PICKUP_FROM_FARM', name: 'Pickup from Farm' },
                    { id: 'DELIVER_TO_COOLER', name: 'Deliver to Cooler' },
                    { id: 'RETURN_TO_COOP', name: 'Return to Coop' },
                    { id: 'TRANSFER', name: 'Transfer' },
                ]}
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <SelectInput
                source="condition_on_return"
                label="Return Condition"
                choices={[
                    { id: 'GOOD', name: 'Good' },
                    { id: 'DAMAGED', name: 'Damaged' },
                    { id: 'MISSING_MILK', name: 'Missing Milk' },
                    { id: 'LEAKING', name: 'Leaking' },
                ]}
                defaultValue="GOOD"
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <ReferenceInput source="shift_id" reference="milk-delivery-shifts">
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

const vehicleOptionText = (record: {
    registration_no?: string;
    vehicle_type?: string;
    id?: number;
}) =>
    record.registration_no
        ? `${record.registration_no}${record.vehicle_type ? ` — ${record.vehicle_type}` : ''}`
        : String(record.id ?? '');

const noopFilterId = -1;

export const CoolerMilkCollectionFormFields = () => {
    const { setValue } = useFormContext();
    const transporterId = useWatch({ name: 'transporter_id' });
    const prevTransporterId = useRef<unknown>(undefined);

    useEffect(() => {
        if (prevTransporterId.current !== undefined && prevTransporterId.current !== transporterId) {
            setValue('transporter_vehicle_id', '', { shouldDirty: true, shouldValidate: true });
        }
        prevTransporterId.current = transporterId;
    }, [transporterId, setValue]);

    return (
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
                <NumberInput source="quantity" label="Quantity" validate={required()} fullWidth variant="outlined" />
            )}
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
                <ReferenceInput
                    source="transporter_vehicle_id"
                    reference="transporter-vehicles"
                    filter={
                        transporterId
                            ? { transporter_id: transporterId }
                            : { transporter_id: noopFilterId }
                    }
                >
                    <SelectInput
                        label="Vehicle"
                        optionText={vehicleOptionText}
                        optionValue="id"
                        fullWidth
                        variant="outlined"
                        disabled={!transporterId}
                        helperText={!transporterId ? 'Select a transporter first' : undefined}
                    />
                </ReferenceInput>
            )}
            {gridField(
                <ReferenceInput source="milk_delivery_shift_id" reference="milk-delivery-shifts">
                    <SelectInput label="Shift" optionText="name" optionValue="id" fullWidth variant="outlined" />
                </ReferenceInput>
            )}
            {gridField(
                <ReferenceInput source="route_id" reference="routes">
                    <SelectInput label="Route" optionText="name" optionValue="id" fullWidth variant="outlined" />
                </ReferenceInput>
            )}
        </Grid>
    );
};

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
