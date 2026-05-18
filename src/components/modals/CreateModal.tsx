import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { ReactNode } from 'react';

interface CreateModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

export const CreateModal = ({ open, onClose, title, children }: CreateModalProps) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{title}</DialogTitle>
            <DialogContent dividers sx={{ p: 0 }}>
                {children}
            </DialogContent>
        </Dialog>
    );
};
