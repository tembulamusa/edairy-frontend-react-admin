import type { ReactNode } from 'react';
import { Alert } from '@mui/material';
import type { NotificationType } from 'react-admin';

type NotifyFn = (message: ReactNode, options?: { type?: NotificationType; autoHideDuration?: number }) => void;

/** Success toast with an explicit green background (e.g. payment / save success). */
export const notifySuccessGreen = (notify: NotifyFn, message: string, autoHideDuration = 2000) => {
    notify(
        <Alert severity="success" sx={{ bgcolor: 'success.light', color: 'success.dark', width: '100%' }}>
            {message}
        </Alert>,
        { type: 'success', autoHideDuration }
    );
};
