import {
    Create,
    SimpleForm,
} from 'react-admin';

import {
    Card,
    CardContent,
    Typography,
    Box,
    Divider,
} from '@mui/material';

import Grid from '@mui/material/Grid';

import { FixedAssetForm } from './FixedAssetForm';

export const FixedAssetCreate = () => {
    return (
        <Create
            title={false}
            sx={{
                "& .RaCreate-main": {
                    display: "flex",
                    justifyContent: "center",
                    padding: 2,
                },
            }}
        >
 
                <Card
                    elevation={3}
                    sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                    }}
                >
                    <CardContent sx={{ p: 4 }}>
                        <Grid
                            container
                            spacing={2}
                            alignItems="center"
                            justifyContent="space-between"
                            mb={2}
                        >
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                >
                                    Create Fixed Asset
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Fill in the information below to register a new fixed asset.
                                </Typography>
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 4 }} />

                        <SimpleForm
                            sx={{
                                "& .RaSimpleForm-toolbar": {
                                    mt: 3,
                                    px: 0,
                                },

                                "& .MuiInputBase-root": {
                                    borderRadius: 2,
                                },
                            }}
                        >
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid size={12}>
                                    <FixedAssetForm />
                                </Grid>
                            </Grid>
                        </SimpleForm>
                    </CardContent>
                </Card>
            
        </Create>
    );
};