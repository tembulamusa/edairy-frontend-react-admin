import { List, DataTable, NumberField, FunctionField, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

type SupplierRecord = {
    SupplierType?: string;
    CompanyName?: string;
    FullName?: string;
};

export const SuppliersList = () => (
    <List title="Suppliers">
        <DataTable>
            <DataTable.Col source="SupplierCode" label="Supplier Code" />
            <DataTable.Col source="SupplierType" label="Type" />
            <DataTable.Col label="Name">
                <FunctionField
                    render={(record: SupplierRecord) =>
                        record?.SupplierType === "company"
                            ? record.CompanyName
                            : record.FullName
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="CategoryName" label="Category" />
            <DataTable.Col source="EmailAddress" label="Email" />
            <DataTable.Col source="PhoneNo" label="Phone" />
            <DataTable.Col source="CurrentBalance" label="Balance">
                <NumberField source="CurrentBalance" />
            </DataTable.Col>
            <DataTable.Col source="Status" label="Status" />
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
