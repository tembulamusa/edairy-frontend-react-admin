import { useEffect } from 'react';
import { useNotify } from 'react-admin';
import { useLocation } from 'react-router-dom';
import { consumeCreateSuccessFlash } from './create-success-flash';
import { notifySuccessGreen } from './notify-success-green';

/** Toast after Save and Add New full-page reload (create pages without CreateSuccessBanner). */
export const CreateSuccessFlashListener = () => {
    const notify = useNotify();
    const location = useLocation();

    useEffect(() => {
        const stored = consumeCreateSuccessFlash();
        if (stored) {
            notifySuccessGreen(notify, stored);
        }
    }, [location.key, notify]);

    return null;
};
