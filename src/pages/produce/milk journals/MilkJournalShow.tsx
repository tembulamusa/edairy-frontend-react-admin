import { Show, SimpleShowLayout, TextField, DateField, NumberField, FunctionField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const MilkJournalShow = () => (
    <Show title="Milk Journal Details">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Milk Journal Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <TextField source="journal" label="Journal" />
                            <DateField source="journal_date" label="Journal Date" />
                            <TextField source="milk_delivery_shift" label="Milk Delivery Shift" />
                            <TextField source="route_name" label="Route Name" />
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
                            <NumberField source="entries_count" label="Entries Count" />
                            <DateField source="created_at" showTime />
                            <DateField source="updated_at" showTime />
                        </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);