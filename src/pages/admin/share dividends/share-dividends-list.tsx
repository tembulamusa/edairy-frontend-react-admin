import {
    List,
    TopToolbar,
    DataTable,
    DateField,
    EditButton,
    DeleteButton,
    useResourceContext,
    CreateButton,
    FilterButton,
    ExportButton,
    TextInput,
    Pagination,
    FunctionField,
} from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

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

const shareDividendFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

const ShareDividendActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton
            variant="contained"
            sx={{ backgroundColor: 'primary.main', color: 'white', ml: 1, '&:hover': { backgroundColor: 'primary.dark' } }}
        />
        <ExportButton />
    </TopToolbar>
);

export const ShareDividendList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "share-dividends";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");

    return (
        <Box sx={{ p: 2 }}>
            <ListBreadcrumbs />
            <List
                title="Share Dividends"
                filters={shareDividendFilters}
                actions={<ShareDividendActions />}
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
                        <Stack direction="row" spacing={1} alignItems="center">
                            {canEdit && (
                                <Tooltip title="Edit Record">
                                    <span>
                                        <EditButton
                                            label={false}
                                            sx={{
                                                minWidth: 36,
                                            }}
                                        />
                                    </span>
                                </Tooltip>
                            )}
                        </Stack>
                    </DataTable.Col>
                </DataTable>
                <Pagination sx={{ mt: 2 }} />
            </List>
        </Box>
    );
};
