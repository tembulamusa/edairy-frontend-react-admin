
import { List, DataTable, DateField, TextField, EditButton, DeleteButton, BooleanField } from 'react-admin';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export const ShareTypeList = () => (
    <List title="Share Types">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="Rate" label="Rate" />
            <DataTable.Col source="ShareCode" label="Code" />
            <DataTable.Col source="Description" label="Description" />
            <DataTable.Col source="Mandatory" label="Mandatory">
                <BooleanField 
                    source="Mandatory" 
                    TrueIcon={CheckIcon} 
                    FalseIcon={CloseIcon}
                    sx={{
                        '& .RaBooleanField-true': { color: 'green' },
                        '& .RaBooleanField-false': { color: 'red' },
                    }}
                />
            </DataTable.Col>
            <DataTable.Col source="ShareValue" label="Share Value" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
