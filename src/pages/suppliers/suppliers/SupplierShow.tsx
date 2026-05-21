import { Show, SimpleShowLayout, TextField, NumberField, DateField, FunctionField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierShow = () => (
    <Show title="Supplier">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Supplier Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <TextField source="supplier_code" label="Supplier Code" />
                            <TextField source="supplier_type" label="Type" />
                            <FunctionField
                                label="Name"
                                render={(record: any) =>
                                    String(record?.supplier_type).toLowerCase() === "company"
                                        ? record.company_name
                                        : record.full_name
                                }
                            />
                            <TextField source="category_name" label="Category" />
                            <TextField source="email_address" label="Email" />
                            <TextField source="phone_no" label="Phone" />
                            <NumberField source="current_balance" label="Balance" />
                            <TextField source="status" label="Status" />
                            <DateField source="created_at" showTime />
                            <DateField source="updated_at" showTime />
                        </SimpleShowLayout>
                    </CardContent>
            </Card>
        </Box>
        </Box>
    </Show>
);