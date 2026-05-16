import {
    List,
    DataTable,
    EditButton,
    DeleteButton,
} from "react-admin";

export const OrganizationWalletsList = () => (
    <List title={"Organization Wallets"}>
        <DataTable>

            <DataTable.Col source="wallet_type_name" label="Wallet Type" />
            <DataTable.Col source="wallet_id" label="Wallet ID" />
            <DataTable.Col source="wallet_name" label="Wallet Name" />

            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>

        </DataTable>
    </List>
);