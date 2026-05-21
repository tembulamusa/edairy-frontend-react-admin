/* eslint-disable react-refresh/only-export-components */
import {
    List,
    Datagrid,
    TextField,
    FunctionField,
    DateField,
    EditButton,
    DeleteButton,
    SearchInput,
    BooleanField
} from "react-admin";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

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

type TransporterRecord = {
    TransporterNo?: string;
    transporter_no?: string;
    Status?: string;
    status?: string;
    Individual?: {
        FirstName?: string;
        LastName?: string;
    } | null;
    individual?: {
        first_name?: string;
        last_name?: string;
    } | null;
    Company?: {
        CompanyName?: string;
    } | null;
    company?: {
        company_name?: string;
    } | null;
};

export const TransporterList = () => (
    <>
        <ListBreadcrumbs title="Transporters" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="transporter_no" label="Transporter No" />
                <FunctionField
                    label="Type"
                    render={(record: TransporterRecord) =>
                        record?.individual ? "Individual" : record?.company ? "Company" : ""
                    }
                />
                <FunctionField
                    label="Name"
                    render={(record: TransporterRecord) =>
                        record?.individual
                            ? [record.individual.first_name, record.individual.last_name].filter(Boolean).join(" ")
                            : record?.company?.company_name || ""
                    }
                />
                <TextField source="status" label="Status" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const IndividualTransporterList = () => (
    <>
        <ListBreadcrumbs title="Individual Transporters" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="first_name" label="First Name" />
                <TextField source="last_name" label="Last Name" />
                <TextField source="primary_phone" label="Phone Number" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const CompanyTransporterList = () => (
    <>
        <ListBreadcrumbs title="Company Transporters" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="company_name" label="Name" />
                <TextField source="registration_no" label="Registration Number" />
                <TextField source="contact_person_name" label="Contact Person" />
                <TextField source="contact_person_phone" label="Contact Phone" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const TransporterVehicleList = () => (
    <>
        <ListBreadcrumbs title="Transporter Vehicles" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="registration_no" label="Registration Number" />
                <TextField source="vehicle_type" label="Type" />
                <TextField source="capacity_litres" label="Capacity" />
                <BooleanField source="active" label="Status" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const TransporterRouteAssignmentList = () => (
    <>
        <ListBreadcrumbs title="Transporter Route Assignments" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="transporter_no" label="Transporter No" />
                <TextField source="route_name" label="Route Name" />
                <DateField source="start_date" label="Start Date" />
                <DateField source="end_date" label="End Date" />
                <BooleanField source="active" label="Status" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

type TransporterDriverRecord = {
    FirstName?: string;
    first_name?: string;
    LastName?: string;
    last_name?: string;
    DriverNo?: string;
    PrimaryPhone?: string;
    DrivingLicenseNo?: string;
    Status?: string;
};

export const TransporterDriverList = () => (
    <>
        <ListBreadcrumbs title="Transporter Drivers" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <FunctionField
                    label="Name"
                    render={(record: TransporterDriverRecord) =>
                        [record?.first_name, record?.last_name].filter(Boolean).join(" ")
                    }
                />
                <TextField source="driver_no" label="Driver No" />
                <TextField source="primary_phone" label="Primary Phone" />
                <TextField source="driving_license_no" label="Driving License No" />
                <TextField source="status" label="Status" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const TransporterDriverAssignmentList = () => (
    <>
        <ListBreadcrumbs title="Transporter Driver Assignments" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="driver_name" label="Driver Name" />
                <TextField source="vehicle_reg_no" label="Vehicle Number" />
                <DateField source="assigned_from" label="From" />
                <DateField source="assigned_to" label="To" />
                <TextField source="assignment_type" label="Assignment Type" />
                <BooleanField source="active" label="Active" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

type TransporterBenefitRecord = {
    status?: string | number;
};

export const TransporterBenefitList = () => (
    <>
        <ListBreadcrumbs title="Transporter Benefits" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="name" label="Name" />
                <TextField source="rate" label="Rate" />
                <TextField source="min_quantity" label="Minimum Quantity" />
                <TextField source="route_name" label="Route Name" />
                <DateField source="start_date" label="Start Date" />
                <DateField source="end_date" label="End Date" />
                <FunctionField
                    label="Status"
                    render={(record: TransporterBenefitRecord) =>
                        String(record?.status) === "1" ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const MonthlyPayDateRangeList = () => (
    <>
        <ListBreadcrumbs title="Monthly Pay Date Ranges" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="month" label="Month" />
                <DateField source="start_date" label="Start Date" />
                <DateField source="end_date" label="End Date" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const PayRateList = () => (
    <>
        <ListBreadcrumbs title="Pay Rates" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="route_name" label="Route Name" />
                <TextField source="rate" label="Rate" />
                <DateField source="effective_date" label="Effective Date" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const TransporterPaymentList = () => (
    <>
        <ListBreadcrumbs title="Transporter Payments" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="transporter_no" label="Transporter No" />
                <TextField source="amount" label="Amount" />
                <DateField source="payment_date" label="Payment Date" />
                <TextField source="reference_no" label="Reference No" />
                <TextField source="status" label="Status" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const DeductionsRecoveryList = () => (
    <>
        <ListBreadcrumbs title="Deductions Recovery" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="transporter_no" label="Transporter No" />
                <TextField source="deduction_type" label="Deduction Type" />
                <TextField source="amount" label="Amount" />
                <DateField source="date" label="Date" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const TransporterPayrollList = () => (
    <>
        <ListBreadcrumbs title="Transporter Payroll" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="transporter_no" label="Transporter No" />
                <TextField source="period" label="Period" />
                <TextField source="gross_pay" label="Gross Pay" />
                <TextField source="total_deductions" label="Total Deductions" />
                <TextField source="net_pay" label="Net Pay" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const TransporterDeductionList = () => (
    <>
        <ListBreadcrumbs title="Transporter Deductions" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="transporter_no" label="Transporter No" />
                <TextField source="deduction_name" label="Deduction Name" />
                <TextField source="amount" label="Amount" />
                <DateField source="date" label="Date" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const TransportVehicleList = () => (
    <>
        <ListBreadcrumbs title="Transport Vehicles" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="registration_no" label="Registration No" />
                <TextField source="make" label="Make" />
                <TextField source="model" label="Model" />
                <TextField source="capacity" label="Capacity" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const TransporterPayrollSummaryList = () => (
    <>
        <ListBreadcrumbs title="Transporter Payroll Summary" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="period" label="Period" />
                <TextField source="total_transporters" label="Total Transporters" />
                <TextField source="total_gross" label="Total Gross" />
                <TextField source="total_deductions" label="Total Deductions" />
                <TextField source="total_net" label="Total Net" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const TransporterPayrollBankSummaryList = () => (
    <>
        <ListBreadcrumbs title="Transporter Payroll Bank Summary" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="bank_name" label="Bank Name" />
                <TextField source="period" label="Period" />
                <TextField source="no_of_transactions" label="Transactions" />
                <TextField source="total_amount" label="Total Amount" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);

export const TransporterStatementList = () => (
    <>
        <ListBreadcrumbs title="Transporter Statement" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <TextField source="transporter_no" label="Transporter No" />
                <DateField source="date" label="Date" />
                <TextField source="description" label="Description" />
                <TextField source="debit" label="Debit" />
                <TextField source="credit" label="Credit" />
                <TextField source="balance" label="Balance" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);
