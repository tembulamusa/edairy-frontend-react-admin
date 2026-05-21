import {
    Create,
    SimpleForm,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import { LocationFormFields } from './location-form-fields';

const memberFormCardSx = {
    '& .RaCreate-main': { display: 'flex', justifyContent: 'center', padding: 2 },
} as const;

const memberSimpleFormSx = {
    '& .RaSimpleForm-toolbar': { mt: 3, px: 0, backgroundColor: 'transparent' },
    '& .MuiInputBase-root': { borderRadius: 2 },
    width: '100%',
} as const;

const LocationCreateToolbar = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <SaveButton label="Save" variant="contained" redirect="list" />
                <SaveButton
                    label="Save and Add New"
                    variant="contained"
                    mutationOptions={{
                        onSuccess: () => {
                            notify('Location created successfully', { type: 'success' });
                            redirect('create', 'locations');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('/locations')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const LocationCreate = () => (
    <Create title={false} sx={memberFormCardSx}>
        <Box sx={{ width: '100%', maxWidth: 1100 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', width: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                        New Location
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Add a location that can be assigned to collection routes.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm toolbar={<LocationCreateToolbar />} sx={memberSimpleFormSx}>
                        <LocationFormFields />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);
