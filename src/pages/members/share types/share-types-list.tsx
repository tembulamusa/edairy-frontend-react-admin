
import { List, DataTable, DateField, TextField, EditButton, DeleteButton, BooleanField } from 'react-admin';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export const ShareTypeList = () => (
    <List title="Share Types">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="rate" label="Rate" />
            <DataTable.Col source="share_code" label="Code" />
            <DataTable.Col source="description" label="Description" />
            <DataTable.Col source="mandatory" label="Mandatory">
                <BooleanField 
                    source="mandatory" 
                    TrueIcon={CheckIcon} 
                    FalseIcon={CloseIcon}
                    sx={{
                        '& .RaBooleanField-true': { color: 'green' },
                        '& .RaBooleanField-false': { color: 'red' },
                    }}
                />
            </DataTable.Col>
            <DataTable.Col source="share_value" label="Share Value" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
