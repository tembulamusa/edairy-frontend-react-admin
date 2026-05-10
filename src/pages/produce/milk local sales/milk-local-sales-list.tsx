import { List, DataTable, EditButton, DeleteButton, DateField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const MilkLocalSalesList = () => (
    <List title="Milk Local Sales">
        <DataTable>
            <DataTable.Col source="TransactionDate" label="Transaction Date">
                <DateField source="TransactionDate" />
            </DataTable.Col>
            <DataTable.Col source="Quantity" label="Quantity" />
            <DataTable.Col source="Rate" label="Rate" />
            <DataTable.Col source="Amount" label="Amount" />
            <DataTable.Col source="GradeName" label="Grade Name" />
            <DataTable.Col source="RefNumber" label="Ref Number" />
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
