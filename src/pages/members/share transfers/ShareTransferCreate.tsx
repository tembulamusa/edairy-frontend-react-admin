import {
    Create,
    SimpleForm,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
} from 'react-admin';
import { useRedirectToCreateWithReload } from '../../../components/forms/redirect-to-create-with-reload';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import { ShareTransferFormFields, transformShareTransfer } from './ShareTransferFormFields';

const ShareTransferCreateToolbar = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const redirectToCreateWithReload = useRedirectToCreateWithReload();

    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <SaveButton label="Save" variant="contained" redirect="list" />
                <SaveButton
                    label="Save and Add New"
                    variant="contained"
                    mutationOptions={{
                        onSuccess: () => {
                            redirectToCreateWithReload('share-transfers', 'Share transfer recorded successfully');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('/share-transfers')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const ShareTransferCreate = () => (
    <Create
        title={false}
        sx={{
            '& .RaCreate-main': { display: 'flex', justifyContent: 'center', padding: 2 },
        }}
    >
        <Box sx={{ width: '100%', maxWidth: 1100 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', width: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                        New Share Transfer
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Transfer share units between share accounts. Select a share type first, then choose from
                        and to accounts (the from account cannot be selected as the destination).
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm
                        transform={transformShareTransfer}
                        toolbar={<ShareTransferCreateToolbar />}
                        sx={{
                            '& .RaSimpleForm-toolbar': { mt: 3, px: 0, backgroundColor: 'transparent' },
                            '& .MuiInputBase-root': { borderRadius: 2 },
                            width: '100%',
                        }}
                    >
                        <ShareTransferFormFields />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);
