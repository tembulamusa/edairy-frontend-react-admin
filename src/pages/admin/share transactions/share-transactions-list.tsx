import {
    List,
    TopToolbar,
    DataTable,
    DateField,
    TextField,
    NumberField,
    TextInput,
    useResourceContext,
    FilterButton,
    ExportButton,
    Pagination,
} from 'react-admin';
import { Box } from '@mui/material';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const shareTransactionFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

const ShareTransactionActions = () => (
    <TopToolbar>
        <FilterButton />
        <ExportButton />
    </TopToolbar>
);

export const ShareTransactionsList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "share-transactions";

    return (
        <Box sx={{ p: 2 }}>
            <ListBreadcrumbs />
            <List
                title="Share Transactions"
                filters={shareTransactionFilters}
                actions={<ShareTransactionActions />}
            >
                <DataTable
                    rowClick="show"
                    sx={{
                        '& .RaDataTable-headerCell': {
                            fontWeight: "bold",
                            backgroundColor: "#f5f5f5",
                        },
                    }}
                >
                    <DataTable.Col source="transaction_id" label="Transaction ID" />
                    <DataTable.Col source="transaction_date" label="Transaction Date">
                        <DateField source="transaction_date" showTime />
                    </DataTable.Col>
                    <DataTable.Col source="member_no" label="Member No." />
                    <DataTable.Col source="member_first_name" label="First Name" />
                    <DataTable.Col source="member_last_name" label="Last Name" />
                    <DataTable.Col source="transaction_type" label="Transaction Type" />
                    <DataTable.Col source="share_units" label="Share Units">
                        <NumberField source="share_units" />
                    </DataTable.Col>
                    <DataTable.Col source="unit_price" label="Unit Price">
                        <NumberField source="unit_price" />
                    </DataTable.Col>
                    <DataTable.Col source="balance_after" label="Balance After">
                        <NumberField source="balance_after" />
                    </DataTable.Col>
                </DataTable>
                <Pagination sx={{ mt: 2 }} />
            </List>
        </Box>
    );
};
