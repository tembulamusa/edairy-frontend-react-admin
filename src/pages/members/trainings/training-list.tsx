
import { List, DataTable, DateField, TextField } from 'react-admin';

export const TrainingList = () => (
    <List title="Trainings">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At" />
            <DataTable.Col source="venue" label="Venue" />
            <DataTable.Col source="training_date" label="Training Date" />
            <DataTable.Col source="topic" label="Topic" />
            <DataTable.Col source="description" label="Description" />
            <DataTable.Col source="facilitator" label="Facilitator" />
        </DataTable>
    </List>
);
