import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    ReferenceInput,
    SelectInput,
    required,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const AssetAssignmentEdit = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Edit Asset Assignment
            </Typography>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                sx={{ mb: 3 }}
            >
                <MuiLink underline="hover" color="inherit" href="/">
                    Home
                </MuiLink>
                <MuiLink underline="hover" color="inherit" href="/admin">
                    Admin
                </MuiLink>
                <MuiLink underline="hover" color="inherit" href="/asset-assignments">
                    Asset Assignments
                </MuiLink>
                <Typography color="text.primary" fontWeight="bold">
                    Edit
                </Typography>
            </Breadcrumbs>

            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Edit title={false} mutationMode="pessimistic" redirect="list">
                        <SimpleForm sx={{ maxWidth: 600 }}>
                            <ReferenceInput source="asset_id" reference="fixed-assets">
                                <SelectInput label="Asset" optionText="asset_name" fullWidth validate={[required()]} />
                            </ReferenceInput>
                            <ReferenceInput source="assigned_to_id" reference="users">
                                <SelectInput label="Assign To User" optionText="name" fullWidth validate={[required()]} />
                            </ReferenceInput>
                            <DateInput source="assigned_at" label="Assignment Date" fullWidth validate={[required()]} />
                            <DateInput source="due_date" label="Due Date" fullWidth />
                            <SelectInput
                                source="status"
                                label="Status"
                                choices={[
                                    { id: 'ASSIGNED', name: 'ASSIGNED' },
                                    { id: 'RETURNED', name: 'RETURNED' },
                                ]}
                                fullWidth
                                validate={[required()]}
                            />
                            <TextInput source="notes" label="Assignment Notes" multiline rows={3} fullWidth />
                        </SimpleForm>
                    </Edit>
                </CardContent>
            </Card>
        </Box>
    );
};