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
        </DataTable>
    </List>
);
