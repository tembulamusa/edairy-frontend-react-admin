import { List, DataTable, FunctionField, TextInput, required, EditButton, DeleteButton } from 'react-admin';
import { CreateButton } from '../../../components/forms/FormUtils';

type ShareDividendRecord = {
    member_no?: string;
    first_name?: string;
    last_name?: string;
};

const formatMember = (firstName?: string, lastName?: string, memberNo?: string) => {
    const name = [firstName, lastName].filter(Boolean).join(" ");

    if (name && memberNo) return `${name}(${memberNo})`;
    if (name) return name;
    if (memberNo) return `(${memberNo})`;

    return "";
};

export const ShareDividendList = () => (
    <List 
        title="Share Dividends"
        actions={
            <CreateButton resource="share-dividends" title="Share Dividend">
                <TextInput source="member_no" validate={required()} fullWidth />
                <TextInput source="fiscal_year" validate={required()} fullWidth />
                <TextInput source="period" validate={required()} fullWidth />
                <TextInput source="share_units" validate={required()} fullWidth />
                <TextInput source="rate_per_share" validate={required()} fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col label="Member">
                <FunctionField
                    render={(record: ShareDividendRecord) =>
                        formatMember(record?.first_name, record?.last_name, record?.member_no)
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="fiscal_year" label="Fiscal Year" />
            <DataTable.Col source="period" label="Period" />
            <DataTable.Col source="share_units" label="Share Units" />
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col source="rate_per_share" label="Rate Per Share" />
            <DataTable.Col source="tax_amount" label="Tax Amount" />
            <DataTable.Col source="net_amount" label="Net Amount" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
