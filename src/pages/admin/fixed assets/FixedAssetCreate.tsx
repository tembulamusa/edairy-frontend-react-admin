import {
    Create,
    SimpleForm,
} from 'react-admin';

import {
    Card,
    CardContent,
    Typography,
    Box,
} from '@mui/material';
import { FixedAssetForm } from './FixedAssetForm';

export const FixedAssetCreate = () => {
    return (
        <Create
            title="Create Fixed Asset"
            sx={{
                "& .RaCreate-main": {
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 2,
                },
            }}
        >
            <Box width="100%" >
                <Card elevation={3}>
                    <CardContent>
                        <Typography
                            variant="h5"
                            fontWeight={600}
                            mb={3}
                        >
                            Create Fixed Asset
                        </Typography>

                        <SimpleForm>
                            <FixedAssetForm />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Create>
    );
};