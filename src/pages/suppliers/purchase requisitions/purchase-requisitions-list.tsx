import {
    List,
    DataTable,
    EditButton,
    DeleteButton,
    FunctionField,
    DateField,
} from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

type PurchaseRequisitionRecord = {
    RequisitionNo?: string;
    RequisitionDate?: string;
    Description?: string;
    Status?: string;
};

const formatRequisitionDate = (value?: string) => {
    if (!value || value.startsWith("0001-01-01")) return "";

    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(new Date(value));
};

export const PurchaseRequisitionList = () => (
    <List title="Purchase Requisitions">
        <DataTable>
            <DataTable.Col source="RequisitionNo" label="Requisition No" />
            <DataTable.Col source="RequisitionDate" label="Requisition Date">
                <DateField source="RequisitionDate" />
            </DataTable.Col>
            <DataTable.Col source="Description" label="Description" />
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
