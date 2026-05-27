import { Show, SimpleShowLayout, TextField, NumberField, DateField, FunctionField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const MilkDeliveryShow = () => (
    <Show title="Milk Delivery Details">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Milk Delivery Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <DateField source="transaction_date" label="Date" />
                            <NumberField source="quantity_accepted" label="Quantity" />
                            <NumberField source="amount" label="Amount" />
                            <NumberField source="amount_paid" label="Paid" />
                            <TextField source="delivery_note_number" label="Delivery Note Number" />
                            <TextField source="customer_name" label="Customer" />
                            <FunctionField
                                label="Invoiced"
                                render={(record: any) =>
                                    record?.invoiced === 1 || record?.invoiced === true ? (
                                        <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                                    ) : (
                                        <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                                    )
                                }
                            />
                            <TextField source="route_name" label="Route" />
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
                            <TextField source="transporter_name" label="Transporter" />
                            <DateField source="created_at" showTime />
                            <DateField source="updated_at" showTime />
                        </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);