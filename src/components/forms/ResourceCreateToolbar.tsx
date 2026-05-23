import { Toolbar, SaveButton, useNotify, useRedirect } from 'react-admin';
import { Box, Button } from '@mui/material';

export type ResourceCreateToolbarProps = {
    resource: string;
    successMessage?: string;
    saveLabel?: string;
    saveAndAddLabel?: string;
    /** After Save, redirect to this resource's list instead of the create resource. */
    listRedirectResource?: string;
};

/**
 * Standard create toolbar: Save → list, Save and Add New → fresh create page.
 */
export const ResourceCreateToolbar = ({
    resource,
    successMessage = 'Record created successfully',
    saveLabel = 'Save',
    saveAndAddLabel = 'Save and Add New',
    listRedirectResource,
}: ResourceCreateToolbarProps) => {
    const notify = useNotify();
    const redirect = useRedirect();
    const saveListResource = listRedirectResource ?? resource;

    return (
        <Toolbar
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
                px: 0,
            }}
        >
            <Box sx={{ display: 'flex', gap: 1 }}>
                {listRedirectResource ? (
                    <SaveButton
                        label={saveLabel}
                        variant="contained"
                        mutationOptions={{
                            onSuccess: () => {
                                notify(successMessage, { type: 'success' });
                                redirect('list', saveListResource);
                            },
                        }}
                    />
                ) : (
                    <SaveButton label={saveLabel} variant="contained" redirect="list" />
                )}
                <SaveButton
                    label={saveAndAddLabel}
                    variant="contained"
                    mutationOptions={{
                        onSuccess: () => {
                            notify(successMessage, { type: 'success' });
                            redirect('create', resource);
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'grey.500',
                    color: 'white',
                    '&:hover': { backgroundColor: 'grey.700' },
                }}
                onClick={() => redirect('list', resource)}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};
