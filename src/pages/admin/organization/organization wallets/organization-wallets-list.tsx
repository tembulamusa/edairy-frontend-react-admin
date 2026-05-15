import {
    List,
    DataTable,
    EditButton,
    DeleteButton,
} from "react-admin";

export const OrganizationWalletsList = () => (
    <List title={"Organization Wallets"}>
        <DataTable>

            <DataTable.Col source="WalletTypeName" label="Wallet Type" />
            <DataTable.Col source="WalletID" label="Wallet ID" />
            <DataTable.Col source="WalletName" label="Wallet Name" />

            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>

        </DataTable>
    </List>
);