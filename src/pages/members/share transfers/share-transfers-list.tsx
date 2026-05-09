
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
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="TransactionDate" label="Transaction Date">
                <DateField source="TransactionDate" />
            </DataTable.Col>
            <DataTable.Col label="From">
                <FunctionField
                    render={(record: ShareTransferRecord) => formatMember(record?.FromMemberFirstName, record?.FromMemberLastName, record?.FromMemberNo)}
                />
            </DataTable.Col>
            <DataTable.Col label="To">
                <FunctionField
                    render={(record: ShareTransferRecord) => formatMember(record?.ToMemberFirstName, record?.ToMemberLastName, record?.ToMemberNo)}
                />
            </DataTable.Col>
            <DataTable.Col source="ShareUnits" label="Share Units" />
            <DataTable.Col source="TransferAmount" label="Transfer Amount" />
            <DataTable.Col source="ReferenceNo" label="Reference No" />
            <DataTable.Col source="Status" label="Status" />
            <DataTable.Col source="ApprovedByUserName" label="Approved By User" />
            <DataTable.Col source="DateApproved" label="Date Approved">
                <DateField source="DateApproved" />
            </DataTable.Col>
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);