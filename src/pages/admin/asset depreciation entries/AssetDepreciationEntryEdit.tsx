import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    DateInput,
    ReferenceInput,
    SelectInput,
    required,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const AssetDepreciationEntryEdit = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Edit Depreciation Entry
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
                <MuiLink underline="hover" color="inherit" href="/asset-depreciation-entries">
                    Asset Depreciation Entries
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
                            <DateInput source="depreciation_date" label="Depreciation Date" fullWidth validate={[required()]} />
                            <NumberInput source="depreciation_amount" label="Depreciation Amount" fullWidth validate={[required()]} />
                            <NumberInput source="book_value" label="Book Value" fullWidth validate={[required()]} />
                            <TextInput source="notes" label="Administrative Notes" multiline rows={3} fullWidth />
                        </SimpleForm>
                    </Edit>
                </CardContent>
            </Card>
        </Box>
    );
};