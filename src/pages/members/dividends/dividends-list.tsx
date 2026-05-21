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
    <>
        <ListBreadcrumbs title="Share Dividends" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <FunctionField
                    label="Member"
                    render={(record: ShareDividendRecord) => formatMember(record?.first_name, record?.last_name, record?.member_no)}
                />
                <TextField source="fiscal_year" label="Fiscal Year" />
                <TextField source="period" label="Period" />
                <TextField source="calculation_type" label="Calculation Type" />
                <TextField source="share_units" label="Share Units" />
                <TextField source="calculation_amount" label="Calculation Amount" />
                <TextField source="dividend_amount" label="Dividend Amount" />
                <TextField source="include_in_milk" label="Include In Milk" />
                <TextField source="status" label="Status" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);
