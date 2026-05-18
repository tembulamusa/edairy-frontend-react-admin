import { List, DataTable, EditButton, DeleteButton, FunctionField, TextInput, required } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { CreateButton } from "../../../components/forms/FormUtils";

export const EmployeeDeductionTypesList = () => (
    <List
        title="Employee Deduction Types"
        actions={
            <CreateButton resource="employee-deduction-types" title="Employee Deduction Type">
                <TextInput source="name" label="Name" validate={[required()]} fullWidth />
                <TextInput source="description" label="Description" fullWidth />
                <TextInput source="is_statutory" label="Statutory" fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="description" label="Description" />
            <DataTable.Col source="is_statutory" label="Statutory">
                <FunctionField
                    render={(record: { is_statutory?: boolean }) =>
                        record?.is_statutory ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
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
