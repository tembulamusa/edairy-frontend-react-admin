import { useCallback } from 'react';
import { useCreatePath, useNotify } from 'react-admin';
import { setCreateSuccessFlash } from './create-success-flash';
import { notifySuccessGreen } from './notify-success-green';

const DEFAULT_NOTIFY_THEN_RELOAD_MS = 1500;

/** Full page navigation to create — resets form state after Save and Add New. */
export const useRedirectToCreateWithReload = () => {
    const createPath = useCreatePath();

    return useCallback(
        (resource: string, successMessage?: string) => {
            if (successMessage) {
                setCreateSuccessFlash(successMessage);
            }
            window.location.assign(createPath({ resource, type: 'create' }));
        },
        [createPath]
    );
};

/** Show success notification, then reload the create page (no duplicate flash after reload). */
export const useRedirectToCreateAfterNotify = () => {
    const createPath = useCreatePath();
    const notify = useNotify();

    return useCallback(
        (resource: string, successMessage: string, options?: { delayMs?: number; greenBackground?: boolean }) => {
            const delayMs = options?.delayMs ?? DEFAULT_NOTIFY_THEN_RELOAD_MS;
            const path = createPath({ resource, type: 'create' });

            if (options?.greenBackground) {
                notifySuccessGreen(notify, successMessage, delayMs);
            } else {
                notify(successMessage, { type: 'success', autoHideDuration: delayMs });
            }

            window.setTimeout(() => {
                window.location.assign(path);
            }, delayMs);
        },
        [createPath, notify]
    );
};
