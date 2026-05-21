import { Stack, Button } from '@mui/material';

type WizardCreateActionsProps = {
    saving: boolean;
    showBack: boolean;
    showNext: boolean;
    onCancel: () => void;
    onBack: () => void;
    onNext: () => void;
    onSave: () => void;
    onSaveAndAddNew: () => void;
    saveLabel?: string;
    saveAndAddLabel?: string;
};

/** Final-step actions for multi-step create wizards. */
export const WizardCreateActions = ({
    saving,
    showBack,
    showNext,
    onCancel,
    onBack,
    onNext,
    onSave,
    onSaveAndAddNew,
    saveLabel = 'Save',
    saveAndAddLabel = 'Save and Add New',
}: WizardCreateActionsProps) => (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button variant="outlined" onClick={onCancel} disabled={saving}>
            Cancel
        </Button>
        <Stack direction="row" spacing={1}>
            {showBack ? (
                <Button onClick={onBack} disabled={saving}>
                    Back
                </Button>
            ) : null}
            {showNext ? (
                <Button variant="contained" onClick={onNext} disabled={saving}>
                    Next
                </Button>
            ) : (
                <>
                    <Button variant="contained" onClick={onSave} disabled={saving}>
                        {saving ? 'Saving...' : saveLabel}
                    </Button>
                    <Button variant="contained" onClick={onSaveAndAddNew} disabled={saving}>
                        {saving ? 'Saving...' : saveAndAddLabel}
                    </Button>
                </>
            )}
        </Stack>
    </Stack>
);
