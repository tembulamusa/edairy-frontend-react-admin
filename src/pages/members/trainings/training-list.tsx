
import { List, DataTable, DateField, TextField } from 'react-admin';

export const TrainingList = () => (
    <List title="Trainings">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At" />
            <DataTable.Col source="Venue" label="Venue" />
            <DataTable.Col source="TrainingDate" label="Training Date" />
            <DataTable.Col source="Topic" label="Topic" />
            <DataTable.Col source="Description" label="Description" />
            <DataTable.Col source="Facilitator" label="Facilitator" />
        </DataTable>
    </List>
);
