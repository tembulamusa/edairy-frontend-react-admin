
import { List, DataTable, DateField, EditButton, DeleteButton, FunctionField } from 'react-admin';

type ShareTransferRecord = {
    FromMemberNo?: string;
    FromMemberFirstName?: string;
    FromMemberLastName?: string;
    ToMemberNo?: string;
    ToMemberFirstName?: string;
    ToMemberLastName?: string;
};

const formatMember = (firstName?: string, lastName?: string, memberNo?: string) => {
    const name = [firstName, lastName].filter(Boolean).join(" ");

    if (name && memberNo) return `${name}(${memberNo})`;
    if (name) return name;
    if (memberNo) return `(${memberNo})`;

    return "";
};

export const ShareTransferList = () => (
    <List title="Share Transfers">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="transaction_date" label="Transaction Date">
                <DateField source="transaction_date" />
            </DataTable.Col>
            <DataTable.Col label="From">
                <FunctionField
                    render={(record: ShareTransferRecord) => formatMember(record?.from_member_first_name, record?.from_member_last_name, record?.from_member_no)}
                />
            </DataTable.Col>
            <DataTable.Col label="To">
                <FunctionField
                    render={(record: ShareTransferRecord) => formatMember(record?.to_member_first_name, record?.to_member_last_name, record?.to_member_no)}
                />
            </DataTable.Col>
            <DataTable.Col source="share_units" label="Share Units" />
            <DataTable.Col source="transfer_amount" label="Transfer Amount" />
            <DataTable.Col source="reference_no" label="Reference No" />
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col source="approved_by_user_name" label="Approved By User" />
            <DataTable.Col source="date_approved" label="Date Approved">
                <DateField source="date_approved" />
            </DataTable.Col>
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);