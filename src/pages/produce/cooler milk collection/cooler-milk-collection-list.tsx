import { List, DataTable, EditButton, DeleteButton, DateField, FunctionField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

type CoolerMilkCollectionRecord = {
    Confirmed?: number | boolean;
};

export const CoolerMilkCollectionList = () => (
    <List title="Cooler Milk Collection">
        <DataTable>
            <DataTable.Col source="transaction_date" label="Transaction Date">
                <DateField source="transaction_date" />
            </DataTable.Col>
            <DataTable.Col source="quantity" label="Quantity" />
            <DataTable.Col source="vehicle_reg_no" label="Vehicle Reg No" />
            <DataTable.Col source="milk_delivery_shift" label="Milk Delivery Shift" />
            <DataTable.Col label="Confirmed">
                <FunctionField
                    render={(record: CoolerMilkCollectionRecord) =>
                        record?.confirmed === 1 || record?.confirmed === true ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="transporter_no" label="Transporter No" />
            <DataTable.Col source="route_name" label="Route Name" />
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
