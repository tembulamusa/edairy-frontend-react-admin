import { Button } from '@mui/material';
import { useCreatePath, useTranslate } from 'react-admin';
import { Link } from 'react-router-dom';

type ListCreateButtonProps = {
    resource: string;
    sx?: object;
};

/** Navigates to the resource create page (not a modal). */
export const ListCreateButton = ({ resource, sx }: ListCreateButtonProps) => {
    const createPath = useCreatePath();
    const translate = useTranslate();
    const to = createPath({ resource, type: 'create' });

    return (
        <Button component={Link} to={to} variant="contained" sx={sx}>
            {translate('ra.action.create')}
        </Button>
    );
};
