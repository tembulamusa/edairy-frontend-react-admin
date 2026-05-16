import {
    List,
    DataTable,
    NumberField,
    EditButton,
    DeleteButton
} from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const LoanApplicationsList = () => (
    <List title="Loan Applications">
        <DataTable>

            <DataTable.Col source="name" label="Name" />

            <DataTable.Col source="credit_limit" label="Credit Limit">
                <NumberField source="credit_limit" />
            </DataTable.Col>

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