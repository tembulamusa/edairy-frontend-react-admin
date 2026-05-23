import type { ReactNode } from 'react';
import { Create, SimpleForm, type RaRecord } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import {
    transporterCreateMainSx,
    transporterCreateWrapperSx,
    transporterSimpleFormSx,
} from './transporter-page-layout';
import { TransporterCreateToolbar } from './transporter-toolbar';

type TransporterCreatePageProps = {
    resource: string;
    title: string;
    subtitle: string;
    successMessage: string;
    children: ReactNode;
    transform?: (data: RaRecord) => RaRecord | Promise<RaRecord>;
    listRedirectResource?: string;
};

export const TransporterCreatePage = ({
    resource,
    title,
    subtitle,
    successMessage,
    children,
    transform,
    listRedirectResource,
}: TransporterCreatePageProps) => (
    <Create resource={resource} title={false} sx={transporterCreateMainSx}>
        <Box sx={transporterCreateWrapperSx}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', width: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {subtitle}
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm
                        transform={transform}
                        toolbar={
                            <TransporterCreateToolbar
                                resource={resource}
                                successMessage={successMessage}
                                listRedirectResource={listRedirectResource}
                            />
                        }
                        sx={transporterSimpleFormSx}
                    >
                        {children}
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);
