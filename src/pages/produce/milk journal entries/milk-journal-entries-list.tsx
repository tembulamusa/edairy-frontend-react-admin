import { List, DataTable, EditButton, DeleteButton, FunctionField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export const MilkJournalEntriesList = () => (
    <List title="Milk Journal Entries">
        <DataTable>
            <DataTable.Col source="MemberNo" label="Member No" />
            <DataTable.Col source="MemberName" label="Member Name" />
            <DataTable.Col source="MilkJournalBatchID" label="Milk Journal Batch" />
            <DataTable.Col source="RouteName" label="Route Name" />
            <DataTable.Col source="MilkDeliveryShift" label="Milk Delivery Shift" />
            <DataTable.Col label="Status">
                <FunctionField
                    render={(record) =>
                        record?.Status === "CONFIRMED" ? (
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
