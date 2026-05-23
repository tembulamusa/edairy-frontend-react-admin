import { Toolbar, SaveButton, useNotify, useRedirect } from 'react-admin';
import { Box, Button } from '@mui/material';
import { ResourceCreateToolbar } from '../../../components/forms/ResourceCreateToolbar';

type TransporterCreateToolbarProps = {
    resource: string;
    successMessage: string;
    listRedirectResource?: string;
};

export const TransporterCreateToolbar = ({
    resource,
    successMessage,
    listRedirectResource,
}: TransporterCreateToolbarProps) => (
    <ResourceCreateToolbar
        resource={resource}
        successMessage={successMessage}
        listRedirectResource={listRedirectResource}
    />
);

export const TransporterEditToolbar = ({ resource, successMessage }: TransporterCreateToolbarProps) => {
    const notify = useNotify();
    const redirect = useRedirect();

    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <SaveButton
                    label="Save Changes"
                    variant="contained"
                    mutationOptions={{
                        onSuccess: () => {
                            notify(successMessage, { type: 'success' });
                            redirect('list', resource);
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('list', resource)}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};
