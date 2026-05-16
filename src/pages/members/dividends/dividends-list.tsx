
import { List, DataTable, EditButton, DeleteButton, FunctionField } from 'react-admin';

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
                    render={(record: ShareDividendRecord) => formatMember(record?.first_name, record?.last_name, record?.member_no)}
                />
            </DataTable.Col>
            <DataTable.Col source="fiscal_year" label="Fiscal Year" />
            <DataTable.Col source="period" label="Period" />
            <DataTable.Col source="calculation_type" label="Calculation Type" />
            <DataTable.Col source="share_units" label="Share Units" />
            <DataTable.Col source="calculation_amount" label="Calculation Amount" />
            <DataTable.Col source="dividend_amount" label="Dividend Amount" />
            <DataTable.Col source="include_in_milk" label="Include In Milk" />
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
