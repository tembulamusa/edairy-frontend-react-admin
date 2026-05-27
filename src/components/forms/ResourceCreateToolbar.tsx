import { Toolbar, SaveButton, useNotify, useRedirect, useRefresh } from 'react-admin';
import { Box, Button } from '@mui/material';
import { useRedirectToCreateAfterNotify, useRedirectToCreateWithReload } from './redirect-to-create-with-reload';
import { notifySuccessGreen } from './notify-success-green';

export type ResourceCreateToolbarProps = {
    resource: string;
    successMessage?: string;
    saveLabel?: string;
    saveAndAddLabel?: string;
    /** After Save, redirect to this resource's list instead of the create resource. */
    listRedirectResource?: string;
    /** Show toast first, then full-page reload to create (no session flash). */
    notifyThenReloadOnSaveAndAdd?: boolean;
    /** Use a green-background success toast for Save / Save and Add New. */
    greenSuccessNotification?: boolean;
    /** Delay before reload when notifyThenReloadOnSaveAndAdd is true (ms). */
    notifyThenReloadDelayMs?: number;
};

/**
 * Standard create toolbar: Save → list, Save and Add New → fresh create page, Cancel → list.
 */
export const ResourceCreateToolbar = ({
    resource,
    successMessage = 'Record created successfully',
    saveLabel = 'Save',
    saveAndAddLabel = 'Save and Add New',
    listRedirectResource,
    notifyThenReloadOnSaveAndAdd = false,
    greenSuccessNotification = false,
    notifyThenReloadDelayMs,
}: ResourceCreateToolbarProps) => {
    const notify = useNotify();
    const redirect = useRedirect();
    const refresh = useRefresh();
    const redirectToCreateWithReload = useRedirectToCreateWithReload();
    const redirectToCreateAfterNotify = useRedirectToCreateAfterNotify();
    const saveListResource = listRedirectResource ?? resource;

    const showSuccess = (message: string, autoHideDuration?: number) => {
        if (greenSuccessNotification) {
            notifySuccessGreen(notify, message, autoHideDuration);
        } else {
            notify(message, { type: 'success', autoHideDuration });
        }
    };

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
                <SaveButton
                    label={saveLabel}
                    variant="contained"
                    redirect={false}
                    mutationOptions={{
                        onSuccess: () => {
                            showSuccess(successMessage);
                            refresh();
                            redirect('list', saveListResource);
                        },
                    }}
                />
                <SaveButton
                    label={saveAndAddLabel}
                    variant="contained"
                    redirect={false}
                    mutationOptions={{
                        onSuccess: () => {
                            refresh();
                            if (notifyThenReloadOnSaveAndAdd) {
                                redirectToCreateAfterNotify(resource, successMessage, {
                                    delayMs: notifyThenReloadDelayMs,
                                    greenBackground: greenSuccessNotification,
                                });
                            } else {
                                redirectToCreateWithReload(resource, successMessage);
                            }
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
