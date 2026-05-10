import { List, DataTable, EditButton, DeleteButton, DateField, FunctionField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

type MilkRejectRecord = {
    Confirmed?: number | boolean;
    TransactionDate?: string;
};

export const MilkRejectsList = () => (
    <List title="Milk Rejects">
        <DataTable>
            <DataTable.Col source="TransactionDate" label="Date">
                <DateField source="TransactionDate" />
            </DataTable.Col>
            <DataTable.Col source="RouteName" label="Route Name" />
            <DataTable.Col source="Quantity" label="Quantity" />
            <DataTable.Col source="TransporterName" label="Transporter Name" />
            <DataTable.Col source="MemberName" label="Member Name" />
            <DataTable.Col label="Confirmed">
                <FunctionField
                    render={(record: MilkRejectRecord) =>
                        record?.Confirmed === 1 || record?.Confirmed === true ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="Reason" label="Reason" />
            <DataTable.Col source="Description" label="Description" />
            <DataTable.Col source="MilkDeliveryShift" label="Shift" />
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
