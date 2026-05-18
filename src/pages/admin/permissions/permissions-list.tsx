import { List, DataTable, EditButton, DeleteButton, TextInput, required, Toolbar } from 'react-admin';
import { CreateButton } from '../../../components/forms/FormUtils';

import Tooltip from '@mui/material/Tooltip';
import { Stack } from '@mui/material';


export const PermissionList = () => (
    <List 
        title="Permissions"
        actions={
            <CreateButton resource="permissions" title="Permission">
                <TextInput source="name" validate={required()} fullWidth />
                <TextInput source="guard_name" fullWidth />
            </CreateButton>
        }
    >
        <DataTable rowClick="show" title="Permissions">
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="guard_name" label="Guard Name" />
            <DataTable.Col label="Actions">
                 <Stack direction="row" spacing={1} alignItems="center">

                    <Tooltip title ="Edit Record">
                        <span>
                            <EditButton label={false}  />
                        </span>
                    </Tooltip>
                    <Tooltip title ="Delete Record">
                        <span>
                            <DeleteButton  
                            label={false} 
                            mutationMode="pessimistic"
                            confirmTitle="⚠️ Confirm deletion"
                            confirmContent="This will permanently remove the record."
                            />
                        </span>
                    </Tooltip>
                </Stack>
                
            </DataTable.Col>
        </DataTable>
    </List>
);
