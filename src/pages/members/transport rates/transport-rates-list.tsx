
import { List, DataTable, EditButton, DeleteButton } from 'react-admin';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const TransportRateList = () => (
    <List title="Transport Rates">
        <DataTable>
            <DataTable.Col source="rate" label="Rate" />
            <DataTable.Col source="transporter_no" label="Transporter No" />
            <DataTable.Col source="route_name" label="Route Name" />
            <DataTable.Col source="member_no" label="Member No" />
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col label="Actions">
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </DataTable.Col>
        </DataTable>
    </List>
);
