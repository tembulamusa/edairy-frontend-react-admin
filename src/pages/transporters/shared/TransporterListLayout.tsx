import type { ReactElement, ReactNode } from 'react';
import { List, useResourceContext } from 'react-admin';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import { ListCreateButton } from '../../../components/forms/ListCreateButton';
import { listCreateButtonSx } from './transporter-page-layout';

type TransporterListLayoutProps = {
    title: string;
    subtitle: string;
    children: ReactNode;
    rowClick?: 'edit' | 'show' | false;
    filters?: ReactElement[];
    showCreateButton?: boolean;
};

export const TransporterListLayout = ({
    title,
    subtitle,
    children,
    rowClick = 'edit',
    filters,
    showCreateButton = true,
}: TransporterListLayoutProps) => {
    const resource = useResourceContext() ?? '';
    const can = useCan();
    const canCreate = showCreateButton && can(resource, 'create');

    return (
        <Box sx={{ p: 2 }}>
            <ListBreadcrumbs />
            <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: 'hidden' }}>
                <CardContent>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                        mb={2}
                    >
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h5" fontWeight="bold">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {subtitle}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 'auto' }}>
                            {canCreate && (
                                <ListCreateButton resource={resource} sx={listCreateButtonSx} />
                            )}
                        </Grid>
                    </Grid>
                    <List title={false} actions={false} filters={filters}>
                        {children}
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};

export const transporterDataTableSx = {
    '& .RaDataTable-headerCell': {
        fontWeight: 'bold',
        backgroundColor: '#f5f5f5',
    },
} as const;
