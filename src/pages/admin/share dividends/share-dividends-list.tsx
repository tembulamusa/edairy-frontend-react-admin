import { List, DataTable, FunctionField } from 'react-admin';

type ShareDividendRecord = {
    MemberNo?: string;
    FirstName?: string;
    LastName?: string;
};

const formatMember = (firstName?: string, lastName?: string, memberNo?: string) => {
    const name = [firstName, lastName].filter(Boolean).join(" ");

    if (name && memberNo) return `${name}(${memberNo})`;
    if (name) return name;
    if (memberNo) return `(${memberNo})`;

    return "";
};

export const ShareDividendList = () => (
    <List title="Share Dividends">
        <DataTable>
            <DataTable.Col label="Member">
                <FunctionField
                    render={(record: ShareDividendRecord) =>
                        formatMember(record?.FirstName, record?.LastName, record?.MemberNo)
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="FiscalYear" label="Fiscal Year" />
            <DataTable.Col source="Period" label="Period" />
            <DataTable.Col source="ShareUnits" label="Share Units" />
            <DataTable.Col source="Status" label="Status" />
            <DataTable.Col source="RatePerShare" label="Rate Per Share" />
            <DataTable.Col source="TaxAmount" label="Tax Amount" />
            <DataTable.Col source="NetAmount" label="Net Amount" />
        </DataTable>
    </List>
);
