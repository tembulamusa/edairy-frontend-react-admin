
import { List, DataTable, DateField, TextField, EditButton, DeleteButton } from 'react-admin';

export const TrainingSessionList = () => (
    <List title="Training Sessions">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="mass_training_user_id" label="Mass Training User ID" />
            <DataTable.Col source="partner" label="Partner" />
            <DataTable.Col source="session_start_time" label="Session Start Time">
                <DateField source="session_start_time" showTime />
            </DataTable.Col>
            <DataTable.Col source="session_end_time" label="Session End Time">
                <DateField source="session_end_time" showTime />
            </DataTable.Col>
            <DataTable.Col source="topic" label="Topic" />
            <DataTable.Col source="description" label="Description" />
            <DataTable.Col source="trainers" label="Trainers" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
