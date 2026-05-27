import { MenuItem } from '@mui/material';
import { useGetList } from 'react-admin';
import { WizardTextField } from '../../../transporters/create wizard/wizard-textfield';

type WizardReferenceSelectProps = {
    resource: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    optionText: (record: Record<string, unknown>) => string;
    required?: boolean;
    error?: boolean;
    helperText?: string;
};

export const WizardReferenceSelect = ({
    resource,
    label,
    value,
    onChange,
    optionText,
    required,
    error,
    helperText,
}: WizardReferenceSelectProps) => {
    const { data = [], isLoading } = useGetList(resource, {
        pagination: { page: 1, perPage: 500 },
        sort: { field: 'id', order: 'ASC' },
    });

    return (
        <WizardTextField
            select
            required={required}
            label={label}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            error={error}
            helperText={helperText ?? (isLoading ? 'Loading...' : undefined)}
            disabled={isLoading}
        >
            <MenuItem value="">
                <em>Select {label}</em>
            </MenuItem>
            {data.map((record) => (
                <MenuItem key={String(record.id)} value={String(record.id)}>
                    {optionText(record as Record<string, unknown>)}
                </MenuItem>
            ))}
        </WizardTextField>
    );
};
