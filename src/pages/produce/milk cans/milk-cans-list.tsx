import { List, DataTable, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const MilkCansList = () => (
    <List title="Milk Cans">
        <DataTable>
            <DataTable.Col source="CanID" label="Can ID" />
            <DataTable.Col source="CanType" label="Can Type" />
            <DataTable.Col source="CanSize" label="Can Size" />
            <DataTable.Col source="TareWeight" label="Tare Weight" />
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
