import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    ReferenceField,
} from 'react-admin';
import {
    Card,
    CardContent,
    Typography,
    Box,
    Breadcrumbs,
    Link as MuiLink,
} from '@mui/material';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const AssetAssignmentShow = () => (
    <Box sx={{ p: 2 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
            Asset Assignment Details
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
                Show
            </Typography>
        </Breadcrumbs>

        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
                <Show title={false}>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <ReferenceField source="asset_id" reference="fixed-assets" link="show">
                            <TextField source="asset_name" label="Asset Assigned" />
                        </ReferenceField>
                        <ReferenceField source="assigned_to_id" reference="users" link="show">
                            <TextField source="name" label="Recipient" />
                        </ReferenceField>
                        <DateField source="assignment_date" label="Date of Assignment" />
                        <DateField source="due_date" label="Expected Return" />
                        <TextField source="status" label="Assignment Status" />
                        <TextField
                            source="notes"
                            label="Administrative Remarks"
                            multiline
                        />
                    </SimpleShowLayout>
                </Show>
            </CardContent>
        </Card>
    </Box>
);