import { List, DataTable, EditButton, DeleteButton, TextInput } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CreateButton } from "../../components/forms/FormUtils";

export const createHumanResourceList = (title: string, resource: string) => () => (
    <List 
        title={title}
        actions={<CreateButton resource={resource} title={title}>
            <TextInput source="name" fullWidth />
            <TextInput source="description" fullWidth multiline />
            <TextInput source="status" fullWidth />
        </CreateButton>}
    >
        <DataTable>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="description" label="Description" />
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
