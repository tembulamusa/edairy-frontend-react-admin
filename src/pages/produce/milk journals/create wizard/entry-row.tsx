import { IconButton, MenuItem, Stack, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { WizardTextField } from '../../../transporters/create wizard/wizard-textfield';
import type { MilkJournalCreateErrors, MilkJournalEntryDraft } from './milk-journal-create-wizard.types';
import type { WizardChoice } from './use-wizard-list-choices';

const compactFieldSx = {
    '& .MuiOutlinedInput-root': { borderRadius: 1.5 },
    '& .MuiInputBase-input': { py: 1, fontSize: '0.875rem' },
} as const;

type EntryRowProps = {
    entry: MilkJournalEntryDraft;
    errors: MilkJournalCreateErrors;
    memberChoices: WizardChoice[];
    centerChoices: WizardChoice[];
    canChoices: WizardChoice[];
    listsLoading: boolean;
    canRemove: boolean;
    onChange: (patch: Partial<MilkJournalEntryDraft>) => void;
    onRemove: () => void;
};

const InlineSelect = ({
    placeholder,
    value,
    choices,
    disabled,
    error,
    flex,
    onChange,
}: {
    placeholder: string;
    value: string;
    choices: WizardChoice[];
    disabled?: boolean;
    error?: boolean;
    flex?: number | string;
    onChange: (value: string) => void;
}) => (
    <WizardTextField
        select
        size="small"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        error={error}
        sx={{ ...compactFieldSx, flex: flex ?? 1, minWidth: 0 }}
        SelectProps={{ displayEmpty: true }}
    >
        <MenuItem value="">
            <em>{placeholder}</em>
        </MenuItem>
        {choices.map((choice) => (
            <MenuItem key={choice.id} value={choice.id}>
                {choice.label}
            </MenuItem>
        ))}
    </WizardTextField>
);

export const EntryRow = ({
    entry,
    errors,
    memberChoices,
    centerChoices,
    canChoices,
    listsLoading,
    canRemove,
    onChange,
    onRemove,
}: EntryRowProps) => (
    <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{
            py: 0.75,
            px: 0.5,
            borderBottom: '1px solid',
            borderColor: 'grey.100',
            '&:last-child': { borderBottom: 'none' },
        }}
    >
        <InlineSelect
            placeholder="Select member"
            value={entry.member_id}
            choices={memberChoices}
            disabled={listsLoading}
            error={Boolean(errors[`entry_${entry.id}_member_id`])}
            flex={2}
            onChange={(member_id) => onChange({ member_id })}
        />
        <WizardTextField
            size="small"
            type="number"
            placeholder="Litres"
            value={entry.quantity}
            onChange={(event) => onChange({ quantity: event.target.value })}
            error={Boolean(errors[`entry_${entry.id}_quantity`])}
            sx={{ ...compactFieldSx, flex: '0 0 96px', maxWidth: 96 }}
        />
        <InlineSelect
            placeholder="Center (optional)"
            value={entry.route_center_id}
            choices={centerChoices}
            disabled={listsLoading}
            flex={1.25}
            onChange={(route_center_id) => onChange({ route_center_id })}
        />
        <InlineSelect
            placeholder="Can (optional)"
            value={entry.can_id}
            choices={canChoices}
            disabled={listsLoading}
            flex={1}
            onChange={(can_id) => onChange({ can_id })}
        />
        <IconButton
            size="small"
            color="error"
            onClick={onRemove}
            disabled={!canRemove}
            aria-label="Remove entry"
            sx={{ flexShrink: 0 }}
        >
            <DeleteOutlineIcon fontSize="small" />
        </IconButton>
    </Stack>
);

export const EntryTableHeader = () => (
    <Stack
        direction="row"
        spacing={1}
        sx={{
            py: 1,
            px: 0.5,
            borderBottom: '1px solid',
            borderColor: 'grey.200',
            bgcolor: 'grey.50',
            borderRadius: '8px 8px 0 0',
        }}
    >
        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ flex: 2 }}>
            Member
        </Typography>
        <Typography
            variant="caption"
            fontWeight={700}
            color="text.secondary"
            sx={{ flex: '0 0 96px', maxWidth: 96 }}
        >
            Litres
        </Typography>
        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ flex: 1.25 }}>
            Center
        </Typography>
        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ flex: 1 }}>
            Can
        </Typography>
        <Typography variant="caption" sx={{ width: 34 }} />
    </Stack>
);
