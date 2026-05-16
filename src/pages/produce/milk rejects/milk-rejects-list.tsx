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
            <DataTable.Col source="transaction_date" label="Date">
                <DateField source="transaction_date" />
            </DataTable.Col>
            <DataTable.Col source="route_name" label="Route Name" />
            <DataTable.Col source="quantity" label="Quantity" />
            <DataTable.Col source="transporter_name" label="Transporter Name" />
            <DataTable.Col source="member_name" label="Member Name" />
            <DataTable.Col label="Confirmed">
                <FunctionField
                    render={(record: MilkRejectRecord) =>
                        record?.confirmed === 1 || record?.confirmed === true ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="reason" label="Reason" />
            <DataTable.Col source="description" label="Description" />
            <DataTable.Col source="milk_delivery_shift" label="Shift" />
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
