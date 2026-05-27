import { Show, SimpleShowLayout, TextField, NumberField, DateField, FunctionField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const CoolerMilkCollectionShow = () => (
    <Show title="Cooler Milk Collection Details">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Cooler Milk Collection Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <DateField source="transaction_date" label="Transaction Date" />
                            <NumberField source="quantity" label="Quantity" />
                            <TextField source="vehicle_reg_no" label="Vehicle Reg No" />
                            <TextField source="milk_delivery_shift" label="Milk Delivery Shift" />
                            <FunctionField
                                label="Confirmed"
                                render={(record: any) =>
                                    record?.confirmed === 1 || record?.confirmed === true ? (
                                        <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                                    ) : (
                                        <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                                    )
                                }
                            />
                            <TextField source="transporter_no" label="Transporter No" />
                            <TextField source="route_name" label="Route Name" />
                        </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);