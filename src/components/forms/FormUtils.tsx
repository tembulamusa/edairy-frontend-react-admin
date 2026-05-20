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
        {/* <SaveButton
            label="Create & Create New"
            type="button"
            variant="text"
            mutationOptions={{
                onSuccess: (_data, _variables, context) => {
                    context?.reset?.();
                },
            }}
        /> */}
        <Button onClick={props.onCancel}>Cancel</Button>
    </Toolbar>
);

export const BaseForm = ({ resource, children, onSuccess, transform }: BaseFormProps) => {
    const [create] = useCreate();
    const notify = useNotify();
    const refresh = useRefresh();

    const handleSubmit = async (
        data: any,
        redirect: boolean = true
    ) => {
        const finalData = transform ? transform(data) : data;

        create(
            resource,
            { data: finalData },
            {
                onSuccess: () => {
                    notify(`${resource} created successfully`, {
                        type: 'success',
                    });

                    refresh();

                    if (redirect && onSuccess) {
                        onSuccess();
                    }
                },

                onError: (error: any) => {
                    notify(
                        error.message || `Failed to create ${resource}`,
                        { type: 'error' }
                    );
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
    sx?: any;
    variant?: "contained" | "outlined" | "text";
}

export const CreateButton = ({ resource, title, children, transform, sx, variant = "contained" }: CreateButtonProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button variant={variant} onClick={() => setOpen(true)} sx={sx}>
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
