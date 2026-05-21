import {
    Edit,
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
    '& .RaEdit-main': { display: 'flex', justifyContent: 'center', padding: 2 },
} as const;

const memberSimpleFormSx = {
    '& .RaSimpleForm-toolbar': { mt: 3, px: 0, backgroundColor: 'transparent' },
    '& .MuiInputBase-root': { borderRadius: 2 },
    width: '100%',
} as const;

const LocationEditToolbar = () => {
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
                            notify('Location updated successfully', { type: 'success' });
                            redirect('list', 'locations');
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

export const LocationEdit = () => (
    <Edit title={false} sx={memberFormCardSx}>
        <Box sx={{ width: '100%', maxWidth: 1100 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', width: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                        Edit Location
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Update the location name used on routes.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm toolbar={<LocationEditToolbar />} sx={memberSimpleFormSx}>
                        <LocationFormFields />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Edit>
);
