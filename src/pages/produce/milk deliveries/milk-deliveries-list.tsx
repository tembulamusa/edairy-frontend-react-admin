import { List, DataTable, EditButton, DeleteButton, DateField, FunctionField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

type MilkDeliveryRecord = {
    Confirmed?: number | boolean;
    Invoiced?: number | boolean;
};

export const MilkDeliveryList = () => (
    <List title="Milk Deliveries">
        <DataTable>
            <DataTable.Col source="TransactionDate" label="Date">
                <DateField source="TransactionDate" />
            </DataTable.Col>
            <DataTable.Col source="QuantityAccepted" label="Quantity" />
            <DataTable.Col source="Amount" label="Amount" />
            <DataTable.Col source="AmountPaid" label="Paid" />
            <DataTable.Col source="DeliveryNoteNumber" label="Delivery Note Number" />
            <DataTable.Col source="CustomerName" label="Customer" />
            <DataTable.Col label="Invoiced">
                <FunctionField
                    render={(record: MilkDeliveryRecord) =>
                        record?.Invoiced === 1 || record?.Invoiced === true ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="RouteName" label="Route" />
            <DataTable.Col label="Confirmed">
                <FunctionField
                    render={(record: MilkDeliveryRecord) =>
                        record?.Confirmed === 1 || record?.Confirmed === true ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="TransporterName" label="Transporter" />
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
