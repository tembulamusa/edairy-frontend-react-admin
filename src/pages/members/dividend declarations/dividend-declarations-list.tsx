import {
    List,
    Datagrid,
    TextField,
    FunctionField,
    EditButton,
    DeleteButton,
    SearchInput
} from "react-admin";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

const ListBreadcrumbs = ({ title }: { title: string }) => (
    <Box sx={{ mb: 2, mt: 1 }}>
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            <Typography color="text.primary">{title}</Typography>
        </Breadcrumbs>
    </Box>
);

const listFilters = [
    <SearchInput source="q" alwaysOn placeholder="Search..." />,
];

type DividendDeclarationRecord = {
    approved_by?: number;
};

const formatApprovedBy = (approvedBy?: number) => {
    if (!approvedBy) return "Not approved";
    return String(approvedBy);
};

export const DividendDeclarationList = () => (
    <>
        <ListBreadcrumbs title="Dividend Declarations" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="fiscal_year" label="Fiscal Year" />
                <TextField source="period" label="Period" />
                <TextField source="total_pool" label="Total Pool" />
                <TextField source="rate_per_share" label="Rate Per Share" />
                <TextField source="calculation_type" label="Calculation Type" />
                <TextField source="status" label="Status" />
                <FunctionField
                    label="Approved By"
                    render={(record: DividendDeclarationRecord) =>
                        formatApprovedBy(record?.approved_by)
                    }
                />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);
