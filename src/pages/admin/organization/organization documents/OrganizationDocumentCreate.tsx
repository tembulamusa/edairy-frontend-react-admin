import {
    Create,
    SimpleForm,
    SelectInput,
    required,
    useNotify,
    useRedirect,
    useGetList,
    Toolbar,
    SaveButton,
} from 'react-admin';
import { useRedirectToCreateWithReload } from '../../../../components/forms/redirect-to-create-with-reload';
import { DocumentUploadInput } from './DocumentUploadInput';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';
import {
    organizationCreateMainSx,
    organizationCreateWrapperSx,
    organizationFormGridSx,
    organizationSimpleFormSx,
} from '../organizationCreateLayout';

type UploadedFileValue = {
    rawFile?: File;
    src?: string;
    title?: string;
};

const fileToDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(file);
    });

const transformOrganizationDocument = async (data: Record<string, unknown>) => {
    const { document, ...rest } = data;
    let documentPayload: unknown = document;

    const upload = (Array.isArray(document) ? document[0] : document) as UploadedFileValue | undefined;

    if (upload?.rawFile instanceof File) {
        documentPayload = await fileToDataUrl(upload.rawFile);
    } else if (typeof upload?.src === 'string') {
        documentPayload = upload.src;
    }

    return {
        ...rest,
        document: documentPayload,
    };
};

const DocumentTypeSelect = () => {
    const { data: documentTypes = [], isLoading } = useGetList('document-types', {
        pagination: { page: 1, perPage: 200 },
        sort: { field: 'name', order: 'ASC' },
    });

    return (
        <SelectInput
            source="document_type_id"
            label="Document Type"
            choices={documentTypes}
            optionText="document_type"
            optionValue="id"
            isLoading={isLoading}
            fullWidth
            variant="outlined"
            validate={required()}
        />
    );
};

const OrganizationDocumentCreateToolbar = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const redirectToCreateWithReload = useRedirectToCreateWithReload();

    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <SaveButton label="Save" variant="contained" redirect="list" />
                <SaveButton
                    label="Save and Add New"
                    variant="contained"
                    mutationOptions={{
                        onSuccess: () => {
                            redirectToCreateWithReload('organization-documents', 'Organization document created successfully');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'grey.500',
                    color: 'white',
                    '&:hover': { backgroundColor: 'grey.700' },
                }}
                onClick={() => redirect('/organization-documents')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const OrganizationDocumentCreate = () => (
    <Create title={false} sx={organizationCreateMainSx} transform={transformOrganizationDocument}>
        <Box sx={organizationCreateWrapperSx}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: 'hidden' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                        New Organization Document
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Select a document type and upload the file.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm toolbar={<OrganizationDocumentCreateToolbar />} sx={organizationSimpleFormSx}>
                        <Grid container spacing={3} sx={organizationFormGridSx}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <DocumentTypeSelect />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <DocumentUploadInput validate={required()} />
                            </Grid>
                        </Grid>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);
