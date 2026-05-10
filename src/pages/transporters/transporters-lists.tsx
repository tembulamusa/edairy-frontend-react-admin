/* eslint-disable react-refresh/only-export-components */
import { List, DataTable, FunctionField, DateField, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const createSimpleList = (title: string) => () => (
    <List title={title}>
        <DataTable>
            <DataTable.Col source="Name" label="Name" />
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
    <List title="Transporters">
        <DataTable>
            <DataTable.Col source="TransporterNo" label="Transporter No">
                <FunctionField
                    render={(record: TransporterRecord) => record?.TransporterNo || ""}
                />
            </DataTable.Col>
            <DataTable.Col label="Type">
                <FunctionField
                    render={(record: TransporterRecord) =>
                        record?.Individual ? "individual" : record?.Company ? "company" : ""
                    }
                />
            </DataTable.Col>
            <DataTable.Col label="Name">
                <FunctionField
                    render={(record: TransporterRecord) =>
                        record?.Individual
                            ? [record.Individual.FirstName, record.Individual.LastName]
                                .filter(Boolean)
                                .join(" ")
                            : record?.Company?.CompanyName || ""
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="Status" label="Status">
                <FunctionField render={(record: TransporterRecord) => record?.Status || ""} />
            </DataTable.Col>
        </DataTable>
    </List>
);

export const IndividualTransporterList = () => (
    <List title="Individual Transporters">
        <DataTable>
            <DataTable.Col source="FirstName" label="First Name" />
            <DataTable.Col source="LastName" label="Last Name" />
            <DataTable.Col source="PrimaryPhone" label="Phone Number" />
            <DataTable.Col label="Actions">
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </DataTable.Col>
        </DataTable>
    </List>
);
export const CompanyTransporterList = () => (
    <List title="Company Transporters">
        <DataTable>
            <DataTable.Col source="CompanyName" label="Name" />
            <DataTable.Col source="RegistrationNo" label="Registration Number" />
            <DataTable.Col source="ContactPersonName" label="Contact Person" />
            <DataTable.Col source="ContactPersonPhone" label="Contact Phone" />
            <DataTable.Col label="Actions">
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </DataTable.Col>
        </DataTable>
    </List>
);
export const TransporterVehicleList = () => (
    <List title="Transporter Vehicles">
        <DataTable>
            <DataTable.Col source="RegistrationNo" label="Registration Number" />
            <DataTable.Col source="VehicleType" label="Type" />
            <DataTable.Col source="CapacityLitres" label="Capacity" />
            <DataTable.Col source="Active" label="Status" />
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
    <List title="Transporter Route Assignments">
        <DataTable>
            <DataTable.Col source="TransporterNo" label="Transporter No" />
            <DataTable.Col source="RouteName" label="Route Name">
                <FunctionField render={(record: TransporterRouteAssignmentRecord) => record?.RouteName || ""} />
            </DataTable.Col>
            <DataTable.Col source="StartDate" label="Start Date">
                <DateField source="StartDate" />
            </DataTable.Col>
            <DataTable.Col source="EndDate" label="End Date">
                <DateField source="EndDate" />
            </DataTable.Col>
            <DataTable.Col source="Active" label="Status">
                <FunctionField render={(record: TransporterRouteAssignmentRecord) => record?.Active ? "true" : "false"} />
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
    <List title="Transporter Drivers">
        <DataTable>
            <DataTable.Col label="Name">
                <FunctionField
                    render={(record: TransporterDriverRecord) =>
                        [record?.FirstName, record?.LastName].filter(Boolean).join(" ")
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="DriverNo" label="Driver No" />
            <DataTable.Col source="PrimaryPhone" label="Primary Phone" />
            <DataTable.Col source="DrivingLicenseNo" label="Driving License No" />
            <DataTable.Col source="Status" label="Status" />
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
    <List title="Transporter Driver Assignments">
        <DataTable>
            <DataTable.Col source="DriverName" label="Driver Name" />
            <DataTable.Col source="VehicleRegNo" label="Vehicle Number" />
            <DataTable.Col source="AssignedFrom" label="From">
                <DateField source="AssignedFrom" />
            </DataTable.Col>
            <DataTable.Col source="AssignedTo" label="To">
                <DateField source="AssignedTo" />
            </DataTable.Col>
            <DataTable.Col source="AssignmentType" label="Assignment Type" />
            <DataTable.Col label="Active">
                <FunctionField
                    render={(record: TransporterDriverAssignmentRecord) =>
                        record?.Active ? "✓" : "✗"
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
    <List title="Transporter Benefits">
        <DataTable>
            <DataTable.Col source="Name" label="Name" />
            <DataTable.Col source="Rate" label="Rate" />
            <DataTable.Col source="MinQuantity" label="Minimum Quantity" />
            <DataTable.Col source="RouteName" label="Route Name" />
            <DataTable.Col source="StartDate" label="Start Date">
                <DateField source="StartDate" />
            </DataTable.Col>
            <DataTable.Col source="EndDate" label="End Date">
                <DateField source="EndDate" />
            </DataTable.Col>
            <DataTable.Col label="Status">
                <FunctionField
                    render={(record: TransporterBenefitRecord) =>
                        String(record?.Status) === "1" ? (
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
export const MonthlyPayDateRangeList = createSimpleList("Monthly Pay Date Ranges");
export const PayRateList = createSimpleList("Pay Rates");
export const TransporterPaymentList = createSimpleList("Transporter Payments");
export const DeductionsRecoveryList = createSimpleList("Deductions Recovery");
export const TransporterPayrollList = createSimpleList("Transporter Payroll");
export const TransporterDeductionList = createSimpleList("Transporter Deductions");
export const TransportVehicleList = createSimpleList("Transport Vehicles");
export const TransporterPayrollSummaryList = createSimpleList("Transporter Payroll Summary");
export const TransporterPayrollBankSummaryList = createSimpleList("Transporter Payroll Bank Summary");
export const TransporterStatementList = createSimpleList("Transporter Statement");
