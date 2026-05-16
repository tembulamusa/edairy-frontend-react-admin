import { List, DataTable, EditButton, DeleteButton, DateField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const MilkLocalSalesList = () => (
    <List title="Milk Local Sales">
        <DataTable>
            <DataTable.Col source="transaction_date" label="Transaction Date">
                <DateField source="transaction_date" />
            </DataTable.Col>
            <DataTable.Col source="quantity" label="Quantity" />
            <DataTable.Col source="rate" label="Rate" />
            <DataTable.Col source="amount" label="Amount" />
            <DataTable.Col source="grade_name" label="Grade Name" />
            <DataTable.Col source="ref_number" label="Ref Number" />
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
