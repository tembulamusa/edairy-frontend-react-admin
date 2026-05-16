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
            <DataTable.Col source="transaction_date" label="Date">
                <DateField source="transaction_date" />
            </DataTable.Col>
            <DataTable.Col source="quantity_accepted" label="Quantity" />
            <DataTable.Col source="amount" label="Amount" />
            <DataTable.Col source="amount_paid" label="Paid" />
            <DataTable.Col source="delivery_note_number" label="Delivery Note Number" />
            <DataTable.Col source="customer_name" label="Customer" />
            <DataTable.Col label="Invoiced">
                <FunctionField
                    render={(record: MilkDeliveryRecord) =>
                        record?.invoiced === 1 || record?.invoiced === true ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="route_name" label="Route" />
            <DataTable.Col label="Confirmed">
                <FunctionField
                    render={(record: MilkDeliveryRecord) =>
                        record?.confirmed === 1 || record?.confirmed === true ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="transporter_name" label="Transporter" />
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
