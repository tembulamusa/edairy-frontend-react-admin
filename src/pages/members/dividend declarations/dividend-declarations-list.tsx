import { List, DataTable, FunctionField } from 'react-admin';

type DividendDeclarationRecord = {
    ApprovedBy?: number;
};

const formatApprovedBy = (approvedBy?: number) => {
    if (!approvedBy) return "Not approved";
    return String(approvedBy);
};

export const DividendDeclarationList = () => (
    <List title="Dividend Declarations">
        <DataTable>
            <DataTable.Col source="FiscalYear" label="Fiscal Year" />
            <DataTable.Col source="Period" label="Period" />
            <DataTable.Col source="TotalPool" label="Total Pool" />
            <DataTable.Col source="RatePerShare" label="Rate Per Share" />
            <DataTable.Col source="CalculationType" label="Calculation Type" />
            <DataTable.Col source="Status" label="Status" />
            <DataTable.Col label="Approved By">
                <FunctionField
                    render={(record: DividendDeclarationRecord) =>
                        formatApprovedBy(record?.ApprovedBy)
                    }
                />
            </DataTable.Col>
        </DataTable>
    </List>
);
