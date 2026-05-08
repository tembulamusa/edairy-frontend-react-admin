
import { List, DataTable, DateField, TextField, EditButton, DeleteButton } from 'react-admin';

export const TrainingSessionList = () => (
    <List title="Training Sessions">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="MassTrainingUserID" label="Mass Training User ID" />
            <DataTable.Col source="Partner" label="Partner" />
            <DataTable.Col source="SessionStartTime" label="Session Start Time">
                <DateField source="SessionStartTime" showTime />
            </DataTable.Col>
            <DataTable.Col source="SessionEndTime" label="Session End Time">
                <DateField source="SessionEndTime" showTime />
            </DataTable.Col>
            <DataTable.Col source="Topic" label="Topic" />
            <DataTable.Col source="Description" label="Description" />
            <DataTable.Col source="Trainers" label="Trainers" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
