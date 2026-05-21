import {
    TextInput,
    NumberInput,
    ReferenceInput,
    SelectInput,
    DateInput,
    required,
} from 'react-admin';
import Grid from '@mui/material/Grid';

export const TransportRateFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 6 }}>
            <ReferenceInput source="route_id" reference="routes">
                <SelectInput label="Route" optionText="name" optionValue="id" fullWidth variant="outlined" validate={required()} />
            </ReferenceInput>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            <ReferenceInput source="transporter_id" reference="transporters">
                <SelectInput
                    label="Transporter"
                    optionText={(record) =>
                        record.transporter_no ??
                        record.name ??
                        [record.first_name, record.last_name].filter(Boolean).join(' ') ??
                        String(record.id ?? '')
                    }
                    optionValue="id"
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            <ReferenceInput source="member_id" reference="members">
                <SelectInput
                    label="Member"
                    optionText={(record) =>
                        `${record.first_name ?? ''} ${record.last_name ?? ''} (${record.member_no ?? ''})`.trim()
                    }
                    optionValue="id"
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            <NumberInput source="rate" label="Rate (per KG)" validate={required()} fullWidth variant="outlined" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            <DateInput source="effective_date" label="Effective Date" validate={required()} fullWidth variant="outlined" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            <TextInput source="status" label="Status" fullWidth variant="outlined" />
        </Grid>
    </Grid>
);
