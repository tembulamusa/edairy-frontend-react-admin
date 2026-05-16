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
            <DataTable.Col source="supplier_code" label="Supplier Code" />
            <DataTable.Col source="supplier_type" label="Type" />
            <DataTable.Col label="Name">
                <FunctionField
                    render={(record: SupplierRecord) =>
                        record?.supplier_type === "company"
                            ? record.company_name
                            : record.full_name
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="category_name" label="Category" />
            <DataTable.Col source="email_address" label="Email" />
            <DataTable.Col source="phone_no" label="Phone" />
            <DataTable.Col source="current_balance" label="Balance">
                <NumberField source="current_balance" />
            </DataTable.Col>
            <DataTable.Col source="status" label="Status" />
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
