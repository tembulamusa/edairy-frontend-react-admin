import {
    DataTable,
    DateField,
    FunctionField,
    EditButton,
    DeleteButton,
    useResourceContext,
} from 'react-admin';
import { Stack, Tooltip } from '@mui/material';
import { useCan } from '../../components/permissions/user-can';
import { TransporterListLayout, transporterDataTableSx } from './shared/TransporterListLayout';

type TransporterRecord = {
    transporter_no?: string;
    primary_phone?: string;
    email_address?: string;
    transporter_category?: string;
    status?: string;
    individual?: { first_name?: string; last_name?: string } | null;
    company?: { company_name?: string } | null;
};

const listActions = (canEdit: boolean, canDelete: boolean) => (
    <DataTable.Col label="Actions">
        <Stack direction="row" spacing={1} alignItems="center">
            {canEdit && (
                <Tooltip title="Edit Record">
                    <span>
                        <EditButton label={false} sx={{ minWidth: 36 }} />
                    </span>
                </Tooltip>
            )}
            {canDelete && (
                <Tooltip title="Delete Record">
                    <span>
                        <DeleteButton
                            label={false}
                            confirmColor="error"
                            mutationMode="pessimistic"
                            confirmTitle="⚠️ Confirm deletion"
                            confirmContent="This will permanently remove the record."
                            sx={{ minWidth: 36 }}
                        />
                    </span>
                </Tooltip>
            )}
        </Stack>
    </DataTable.Col>
);

const ListActionsCol = () => {
    const resource = useResourceContext() ?? '';
    const can = useCan();
    return listActions(can(resource, 'update'), can(resource, 'delete'));
};

export const TransporterTypeList = () => (
    <TransporterListLayout
        title="Transporter Types"
        subtitle="Manage transporter type classifications"
    >
        <DataTable rowClick="edit" sx={transporterDataTableSx}>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="description" label="Description" />
            <ListActionsCol />
        </DataTable>
    </TransporterListLayout>
);

export const TransporterList = () => (
    <TransporterListLayout
        title="Transporters"
        subtitle="Manage all transporter records"
    >
        <DataTable rowClick="edit" sx={transporterDataTableSx}>
            <DataTable.Col source="transporter_no" label="Transporter No" />
            <DataTable.Col source="category" label="Category" />
            <DataTable.Col source="primary_phone" label="Primary Phone" />
            <DataTable.Col source="email_address" label="Email" />
            <ListActionsCol />
        </DataTable>
    </TransporterListLayout>
);

export const IndividualTransporterList = () => (
    <TransporterListLayout
        title="Individual Transporters"
        subtitle="Manage individual transporter records"
        showCreateButton={false}
    >
        <DataTable rowClick="edit" sx={transporterDataTableSx}>
            <DataTable.Col source="transporter_id" label="Transporter ID" />
            <DataTable.Col source="first_name" label="First Name" />
            <DataTable.Col source="last_name" label="Last Name" />
            <DataTable.Col source="gender" label="Gender" />
            <DataTable.Col source="national_id_no" label="National ID" />
            <DataTable.Col source="next_of_kin_phone" label="Next of Kin Phone" />
            <ListActionsCol />
        </DataTable>
    </TransporterListLayout>
);

export const CompanyTransporterList = () => (
    <TransporterListLayout
        title="Company Transporters"
        subtitle="Manage company transporter records"
        showCreateButton={false}
    >
        <DataTable rowClick="edit" sx={transporterDataTableSx}>
            <DataTable.Col source="company_name" label="Company Name" />
            <DataTable.Col source="registration_no" label="Registration No" />
            <DataTable.Col source="kra_pin" label="KRA PIN" />
            <DataTable.Col source="contact_person_name" label="Contact Person" />
            <DataTable.Col source="contact_person_phone" label="Contact Phone" />
            <DataTable.Col source="town" label="Town" />
            <ListActionsCol />
        </DataTable>
    </TransporterListLayout>
);

export const TransporterVehicleList = () => (
    <TransporterListLayout
        title="Transporter Vehicles"
        subtitle="Manage vehicles assigned to transporters"
    >
        <DataTable rowClick="edit" sx={transporterDataTableSx}>
            <DataTable.Col source="transporter_id" label="Transporter ID" />
            <DataTable.Col source="registration_no" label="Registration Number" />
            <DataTable.Col source="vehicle_type" label="Type" />
            <DataTable.Col source="route_name" label="Route" />
            <DataTable.Col source="capacity_litres" label="Capacity" />
            <DataTable.Col source="active" label="Status" />
            <ListActionsCol />
        </DataTable>
    </TransporterListLayout>
);

type RouteAssignmentRecord = {
    transporter_id?: number;
    transporter_no?: string;
    route_id?: number;
    route_name?: string;
    active?: boolean;
};

export const TransporterRouteAssignmentList = () => (
    <TransporterListLayout
        title="Transporter Route Assignments"
        subtitle="Manage route assignments for transporters"
    >
        <DataTable rowClick="edit" sx={transporterDataTableSx}>
            <DataTable.Col source="transporter_id" label="Transporter ID" />
            <DataTable.Col source="transporter_no" label="Transporter No" />
            <DataTable.Col source="route_id" label="Route ID" />
            <DataTable.Col source="route_name" label="Route">
                <FunctionField render={(record: RouteAssignmentRecord) => record?.route_name ?? ''} />
            </DataTable.Col>
            <DataTable.Col source="start_date" label="Start Date">
                <DateField source="start_date" />
            </DataTable.Col>
            <DataTable.Col source="end_date" label="End Date">
                <DateField source="end_date" />
            </DataTable.Col>
            <DataTable.Col source="active" label="Status">
                <FunctionField render={(record: RouteAssignmentRecord) => (record?.active ? 'Active' : 'Inactive')} />
            </DataTable.Col>
            <ListActionsCol />
        </DataTable>
    </TransporterListLayout>
);

type DriverRecord = {
    first_name?: string;
    last_name?: string;
};

export const TransporterDriverList = () => (
    <TransporterListLayout
        title="Transporter Drivers"
        subtitle="Manage driver records"
    >
        <DataTable rowClick="edit" sx={transporterDataTableSx}>
            <DataTable.Col label="Name">
                <FunctionField
                    render={(record: DriverRecord) =>
                        [record?.first_name, record?.last_name].filter(Boolean).join(' ')
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="transporter_id" label="Transporter ID" />
            <DataTable.Col source="driver_no" label="Driver No" />
            <DataTable.Col source="gender" label="Gender" />
            <DataTable.Col source="date_of_birth" label="Date of Birth">
                <DateField source="date_of_birth" />
            </DataTable.Col>
            <DataTable.Col source="national_id_no" label="National ID" />
            <DataTable.Col source="primary_phone" label="Primary Phone" />
            <DataTable.Col source="driving_license_no" label="Driving License No" />
            <DataTable.Col source="driving_license_expiry" label="License Expiry">
                <DateField source="driving_license_expiry" />
            </DataTable.Col>
            <DataTable.Col source="employment_date" label="Employment Date">
                <DateField source="employment_date" />
            </DataTable.Col>
            <ListActionsCol />
        </DataTable>
    </TransporterListLayout>
);

type DriverAssignmentRecord = {
    transporter_driver_id?: number;
    driver_name?: string;
    transporter_vehicle_id?: number;
    vehicle_reg_no?: string;
    active?: boolean;
};

export const TransporterDriverAssignmentList = () => (
    <TransporterListLayout
        title="Transporter Driver Assignments"
        subtitle="Manage driver to vehicle assignments"
    >
        <DataTable rowClick="edit" sx={transporterDataTableSx}>
            <DataTable.Col source="transporter_driver_id" label="Driver ID" />
            <DataTable.Col source="driver_name" label="Driver" />
            <DataTable.Col source="transporter_vehicle_id" label="Vehicle ID" />
            <DataTable.Col source="vehicle_reg_no" label="Vehicle" />
            <DataTable.Col source="assigned_from" label="Assigned From">
                <DateField source="assigned_from" />
            </DataTable.Col>
            <DataTable.Col source="assigned_to" label="Assigned To">
                <DateField source="assigned_to" />
            </DataTable.Col>
            <DataTable.Col source="assignment_type" label="Assignment Type" />
            <DataTable.Col label="Active">
                <FunctionField render={(record: DriverAssignmentRecord) => (record?.active ? '✓' : '✗')} />
            </DataTable.Col>
            <ListActionsCol />
        </DataTable>
    </TransporterListLayout>
);

type BenefitRecord = {
    name?: string;
    transporter_id?: number;
    transporter_no?: string;
    route_id?: number;
    route_name?: string;
};

export const TransporterBenefitList = () => (
    <TransporterListLayout
        title="Transporter Benefits"
        subtitle="Manage transporter benefit configurations"
    >
        <DataTable rowClick="edit" sx={transporterDataTableSx}>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col label="Transporter">
                <FunctionField
                    render={(record: BenefitRecord) =>
                        record?.transporter_no ?? (record?.transporter_id ? String(record.transporter_id) : '')
                    }
                />
            </DataTable.Col>
            <DataTable.Col label="Route">
                <FunctionField
                    render={(record: BenefitRecord) =>
                        record?.route_name ?? (record?.route_id ? String(record.route_id) : '')
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="rate" label="Rate" />
            <DataTable.Col source="min_quantity" label="Minimum Quantity" />
            <DataTable.Col source="start_date" label="Start Date">
                <DateField source="start_date" />
            </DataTable.Col>
            <DataTable.Col source="end_date" label="End Date">
                <DateField source="end_date" />
            </DataTable.Col>
            <ListActionsCol />
        </DataTable>
    </TransporterListLayout>
);
