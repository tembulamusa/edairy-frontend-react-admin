import { List, DataTable, FunctionField, TextInput, required, EditButton, DeleteButton } from 'react-admin';
import { CreateButton } from '../../../components/forms/FormUtils';

type DividendDeclarationRecord = {
    ApprovedBy?: number;
};

const formatApprovedBy = (approvedBy?: number) => {
    if (!approvedBy) return "Not approved";
    return String(approvedBy);
};

export const DividendDeclarationList = () => (
    <List title="Dividend Declarations" actions={
        <CreateButton resource="dividend-declarations" title="Dividend Declaration">
            <TextInput source="fiscal_year" validate={[required()]} fullWidth />
            <TextInput source="period" validate={[required()]} fullWidth />
            <TextInput source="total_pool" validate={[required()]} fullWidth />
            <TextInput source="rate_per_share" validate={[required()]} fullWidth />
            <TextInput source="calculation_type" validate={[required()]} fullWidth />
            <TextInput source="status" validate={[required()]} fullWidth />
            <TextInput source="moses" validate={[]} fullWidth />

        </CreateButton>
    }>
        <DataTable>
            <DataTable.Col source="fiscal_year" label="Fiscal Year" />
            <DataTable.Col source="period" label="Period" />
            <DataTable.Col source="total_pool" label="Total Pool" />
            <DataTable.Col source="rate_per_share" label="Rate Per Share" />
            <DataTable.Col source="calculation_type" label="Calculation Type" />
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col label="Approved By">
                <FunctionField
                    render={(record: DividendDeclarationRecord) =>
                        formatApprovedBy(record?.approved_by)
                    }
                />
            </DataTable.Col>
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
