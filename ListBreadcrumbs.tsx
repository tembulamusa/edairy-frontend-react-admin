import * as React from 'react';
import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import { useResourceContext, useTranslate } from 'react-admin';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const ListBreadcrumbs = () => {
    const resource = useResourceContext();
    const translate = useTranslate();

    // Translates the resource name (e.g., 'customers' -> 'Customers')
    const resourceName = translate(`resources.${resource}.name`, {
        smart_count: 2,
        defaultValue: resource,
    });

    return (
        <Box sx={{ mb: 2, mt: 1 }}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                    href="#/"
                    sx={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem' }}
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Dashboard
                </Link>
                <Typography color="text.primary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>
                    {resourceName}
                </Typography>
            </Breadcrumbs>
        </Box>
    );
};