/* eslint-disable react-refresh/only-export-components */
import { List, DataTable, FunctionField, DateField, EditButton, DeleteButton, TextInput } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { CreateButton } from "../../components/forms/FormUtils";

const createSimpleList = (title: string, resource: string) => () => (
    <List 
        title={title}
        actions={<CreateButton resource={resource} title={title}>
            <TextInput source="name" fullWidth />
            <TextInput source="description" fullWidth multiline />
        </CreateButton>}
    >
        <DataTable>
            <DataTable.Col source="name" label="Name" />
        </DataTable>
    </List>
);

type TransporterRecord = {
    TransporterNo?: string;
    Status?: string;
    Individual?: {
        FirstName?: string;
        LastName?: string;
    } | null;
    Company?: {
        CompanyName?: string;
    } | null;
};

export const TransporterList = () => (
    <List 
        title="Transporters"
        actions={<CreateButton resource="transporters" title="Transporter">
            <TextInput source="transporter_no" fullWidth />
            <TextInput source="status" fullWidth />
        </CreateButton>}
    >
        <DataTable>
            <DataTable.Col source="transporter_no" label="Transporter No">
                <FunctionField
                    render={(record: TransporterRecord) => record?.transporter_no || ""}
                />
            </DataTable.Col>
            <DataTable.Col label="Type">
                <FunctionField
                    render={(record: TransporterRecord) =>
                        record?.individual ? "individual" : record?.company ? "company" : ""
                    }
                />
            </DataTable.Col>
            <DataTable.Col label="Name">
                <FunctionField
                    render={(record: TransporterRecord) =>
                        record?.individual
                            ? [record.individual.first_name, record.individual.last_name]
                                .filter(Boolean)
                                .join(" ")
                            : record?.company?.company_name || ""
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="status" label="Status">
                <FunctionField render={(record: TransporterRecord) => record?.status || ""} />
            </DataTable.Col>
        </DataTable>
    </List>
);

export const IndividualTransporterList = () => (
    <List 
        title="Individual Transporters"
        actions={<CreateButton resource="individual-transporters" title="Individual Transporter">
            <TextInput source="first_name" fullWidth />
            <TextInput source="last_name" fullWidth />
            <TextInput source="primary_phone" fullWidth />
        </CreateButton>}
    >
        <DataTable>
            <DataTable.Col source="first_name" label="First Name" />
            <DataTable.Col source="last_name" label="Last Name" />
            <DataTable.Col source="primary_phone" label="Phone Number" />
            <DataTable.Col label="Actions">
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </DataTable.Col>
        </DataTable>
    </List>
);
export const CompanyTransporterList = () => (
    <List 
        title="Company Transporters"
        actions={<CreateButton resource="company-transporters" title="Company Transporter">
            <TextInput source="company_name" fullWidth />
            <TextInput source="registration_no" fullWidth />
            <TextInput source="contact_person_name" fullWidth />
            <TextInput source="contact_person_phone" fullWidth />
        </CreateButton>}
    >
        <DataTable>
            <DataTable.Col source="company_name" label="Name" />
            <DataTable.Col source="registration_no" label="Registration Number" />
            <DataTable.Col source="contact_person_name" label="Contact Person" />
            <DataTable.Col source="contact_person_phone" label="Contact Phone" />
            <DataTable.Col label="Actions">
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </DataTable.Col>
        </DataTable>
    </List>
);
export const TransporterVehicleList = () => (
    <List 
        title="Transporter Vehicles"
        actions={<CreateButton resource="transporter-vehicles" title="Transporter Vehicle">
            <TextInput source="registration_no" fullWidth />
            <TextInput source="vehicle_type" fullWidth />
            <TextInput source="capacity_litres" fullWidth />
        </CreateButton>}
    >
        <DataTable>
            <DataTable.Col source="registration_no" label="Registration Number" />
            <DataTable.Col source="vehicle_type" label="Type" />
            <DataTable.Col source="capacity_litres" label="Capacity" />
            <DataTable.Col source="active" label="Status" />
            <DataTable.Col label="Actions">
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </DataTable.Col>
        </DataTable>
    </List>
);
type TransporterRouteAssignmentRecord = {
    TransporterNo?: string;
    RouteName?: string;
    StartDate?: string;
    EndDate?: string;
    Active?: boolean;
};

export const TransporterRouteAssignmentList = () => (
    <List 
        title="Transporter Route Assignments"
        actions={<CreateButton resource="transporter-route-assignments" title="Route Assignment">
            <TextInput source="transporter_no" fullWidth />
            <TextInput source="route_name" fullWidth />
            <TextInput source="start_date" fullWidth />
            <TextInput source="end_date" fullWidth />
        </CreateButton>}
    >
        <DataTable>
            <DataTable.Col source="transporter_no" label="Transporter No" />
            <DataTable.Col source="route_name" label="Route Name">
                <FunctionField render={(record: TransporterRouteAssignmentRecord) => record?.route_name || ""} />
            </DataTable.Col>
            <DataTable.Col source="start_date" label="Start Date">
                <DateField source="start_date" />
            </DataTable.Col>
            <DataTable.Col source="end_date" label="End Date">
                <DateField source="end_date" />
            </DataTable.Col>
            <DataTable.Col source="active" label="Status">
                <FunctionField render={(record: TransporterRouteAssignmentRecord) => record?.active ? "true" : "false"} />
            </DataTable.Col>
            <DataTable.Col label="Actions">
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </DataTable.Col>
        </DataTable>
    </List>
);
type TransporterDriverRecord = {
    FirstName?: string;
    LastName?: string;
    DriverNo?: string;
    PrimaryPhone?: string;
    DrivingLicenseNo?: string;
    Status?: string;
};

export const TransporterDriverList = () => (
    <List 
        title="Transporter Drivers"
        actions={<CreateButton resource="transporter-drivers" title="Driver">
            <TextInput source="first_name" fullWidth />
            <TextInput source="last_name" fullWidth />
            <TextInput source="driver_no" fullWidth />
            <TextInput source="primary_phone" fullWidth />
            <TextInput source="driving_license_no" fullWidth />
        </CreateButton>}
    >
        <DataTable>
            <DataTable.Col label="Name">
                <FunctionField
                    render={(record: TransporterDriverRecord) =>
                        [record?.first_name, record?.last_name].filter(Boolean).join(" ")
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="driver_no" label="Driver No" />
            <DataTable.Col source="primary_phone" label="Primary Phone" />
            <DataTable.Col source="driving_license_no" label="Driving License No" />
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col label="Actions">
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </DataTable.Col>
        </DataTable>
    </List>
);
type TransporterDriverAssignmentRecord = {
    DriverName?: string;
    VehicleRegNo?: string;
    AssignedFrom?: string;
    AssignedTo?: string | null;
    AssignmentType?: string;
    Active?: boolean;
};

export const TransporterDriverAssignmentList = () => (
    <List 
        title="Transporter Driver Assignments"
        actions={<CreateButton resource="transporter-driver-assignments" title="Driver Assignment">
            <TextInput source="driver_name" fullWidth />
            <TextInput source="vehicle_reg_no" fullWidth />
            <TextInput source="assignment_type" fullWidth />
        </CreateButton>}
    >
        <DataTable>
            <DataTable.Col source="driver_name" label="Driver Name" />
            <DataTable.Col source="vehicle_reg_no" label="Vehicle Number" />
            <DataTable.Col source="assigned_from" label="From">
                <DateField source="assigned_from" />
            </DataTable.Col>
            <DataTable.Col source="assigned_to" label="To">
                <DateField source="assigned_to" />
            </DataTable.Col>
            <DataTable.Col source="assignment_type" label="Assignment Type" />
            <DataTable.Col label="Active">
                <FunctionField
                    render={(record: TransporterDriverAssignmentRecord) =>
                        record?.active ? "✓" : "✗"
                    }
                />
            </DataTable.Col>
            <DataTable.Col label="Actions">
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </DataTable.Col>
        </DataTable>
    </List>
);
type TransporterBenefitRecord = {
    Name?: string;
    Rate?: string | number;
    MinQuantity?: string | number;
    RouteName?: string;
    StartDate?: string;
    EndDate?: string;
    Status?: string | number;
};

export const TransporterBenefitList = () => (
    <List 
        title="Transporter Benefits"
        actions={<CreateButton resource="transporter-benefits" title="Benefit">
            <TextInput source="name" fullWidth />
            <TextInput source="rate" fullWidth />
            <TextInput source="route_name" fullWidth />
        </CreateButton>}
    >
        <DataTable>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="rate" label="Rate" />
            <DataTable.Col source="min_quantity" label="Minimum Quantity" />
            <DataTable.Col source="route_name" label="Route Name" />
            <DataTable.Col source="start_date" label="Start Date">
                <DateField source="start_date" />
            </DataTable.Col>
            <DataTable.Col source="end_date" label="End Date">
                <DateField source="end_date" />
            </DataTable.Col>
            <DataTable.Col label="Status">
                <FunctionField
                    render={(record: TransporterBenefitRecord) =>
                        String(record?.status) === "1" ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
            </DataTable.Col>
            <DataTable.Col label="Actions">
                <EditButton
                    label=""
                    icon={<EditOutlinedIcon fontSize="small" />}
                    sx={{ minWidth: 0, p: 0.5 }}
                />
                <DeleteButton
                    label=""
                    icon={<DeleteOutlineIcon fontSize="small" />}
                    sx={{ minWidth: 0, p: 0.5 }}
                />
            </DataTable.Col>
        </DataTable>
    </List>
);
export const MonthlyPayDateRangeList = createSimpleList("Monthly Pay Date Ranges", "monthly-pay-date-ranges");
export const PayRateList = createSimpleList("Pay Rates", "pay-rates");
export const TransporterPaymentList = createSimpleList("Transporter Payments", "transporter-payments");
export const DeductionsRecoveryList = createSimpleList("Deductions Recovery", "deductions-recovery");
export const TransporterPayrollList = createSimpleList("Transporter Payroll", "transporter-payroll");
export const TransporterDeductionList = createSimpleList("Transporter Deductions", "transporter-deductions");
export const TransportVehicleList = createSimpleList("Transport Vehicles", "transport-vehicles");
export const TransporterPayrollSummaryList = createSimpleList("Transporter Payroll Summary", "transporter-payroll-summary");
export const TransporterPayrollBankSummaryList = createSimpleList("Transporter Payroll Bank Summary", "transporter-payroll-bank-summary");
export const TransporterStatementList = createSimpleList("Transporter Statement", "transporter-statement");

