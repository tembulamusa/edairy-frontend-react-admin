import { useEffect, useState } from 'react';
import { useNotify } from 'react-admin';
import { Alert } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { consumeCreateSuccessFlash } from './create-success-flash';
import { notifySuccessGreen } from './notify-success-green';

/** Shows a success alert and toast after Save and Add New redirects to a fresh create page. */
export const CreateSuccessBanner = () => {
    const notify = useNotify();
    const location = useLocation();
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        const stored = consumeCreateSuccessFlash();
        if (!stored) {
            setMessage(null);
            return;
        }

        setMessage(stored);
        notifySuccessGreen(notify, stored);
    }, [notify, location.key]);

    if (!message) {
        return null;
    }

    return (
        <Alert
            severity="success"
            sx={{ mb: 2, bgcolor: 'success.light', color: 'success.dark' }}
            onClose={() => setMessage(null)}
        >
            {message}
        </Alert>
    );
};
