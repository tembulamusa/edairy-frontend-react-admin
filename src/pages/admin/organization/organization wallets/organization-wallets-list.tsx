import {
    List,
    DataTable,
    EditButton,
    DeleteButton,
    TextInput,
    required,
} from "react-admin";
import { CreateButton } from "../../../../components/forms/FormUtils";

export const OrganizationWalletsList = () => (
    <List 
        title={"Organization Wallets"}
        actions={
            <CreateButton resource="organization-wallets" title="Organization Wallet">
                <TextInput source="wallet_id" validate={required()} fullWidth />
                <TextInput source="wallet_name" validate={required()} fullWidth />
                <TextInput source="wallet_type_name" fullWidth />
            </CreateButton>
        }
    >
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