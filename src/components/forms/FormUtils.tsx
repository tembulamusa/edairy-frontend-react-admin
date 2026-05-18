import { SimpleForm, useCreate, useNotify, useRefresh, Toolbar, SaveButton } from 'react-admin';
import { ReactNode, useState } from 'react';
import { Button } from '@mui/material';
import { CreateModal } from '../modals/CreateModal';

interface BaseFormProps {
    resource: string;
    children: ReactNode;
    onSuccess?: () => void;
    transform?: (data: any) => any;
}

const CustomToolbar = (props: any) => (
    <Toolbar {...props} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <SaveButton />
        <Button onClick={props.onCancel}>Cancel</Button>
    </Toolbar>
);

export const BaseForm = ({ resource, children, onSuccess, transform }: BaseFormProps) => {
    const [create] = useCreate();
    const notify = useNotify();
    const refresh = useRefresh();

    const handleSubmit = async (data: any) => {
        const finalData = transform ? transform(data) : data;
        create(
            resource,
            { data: finalData },
            {
                onSuccess: () => {
                    notify(`${resource} created successfully`, { type: 'success' });
                    refresh();
                    if (onSuccess) onSuccess();
                },
                onError: (error: any) => {
                    notify(error.message || `Failed to create ${resource}`, { type: 'error' });
                },
            }
        );
    };

    return (
        <SimpleForm
            onSubmit={handleSubmit}
            toolbar={<CustomToolbar onCancel={onSuccess} />}
        >
            {children}
        </SimpleForm>
    );
};

interface CreateButtonProps {
    resource: string;
    title: string;
    children: ReactNode;
    transform?: (data: any) => any;
}

export const CreateButton = ({ resource, title, children, transform }: CreateButtonProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button variant="contained" onClick={() => setOpen(true)} sx={{ mb: 2 }}>
                Create {title}
            </Button>
            <CreateModal open={open} onClose={() => setOpen(false)} title={`Create ${title}`}>
                <BaseForm resource={resource} onSuccess={() => setOpen(false)} transform={transform}>
                    {children}
                </BaseForm>
            </CreateModal>
        </>
    );
};
