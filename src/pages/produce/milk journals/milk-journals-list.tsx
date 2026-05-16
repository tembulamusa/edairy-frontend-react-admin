import { List, DataTable, DateField, FunctionField } from "react-admin";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export const MilkJournalsList = () => (
    <List title="Milk Journals">
        <DataTable>
            <DataTable.Col source="journal" label="Journal" />
            <DataTable.Col source="journal_date" label="Journal Date">
                <DateField source="journal_date" />
            </DataTable.Col>
            <DataTable.Col source="milk_delivery_shift" label="Milk Delivery Shift" />
            <DataTable.Col source="route_name" label="Route Name" />
            <DataTable.Col label="Confirmed">
                <FunctionField
                    render={(record) =>
                        record?.confirmed ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="entries_count" label="Entries Count" />
        </DataTable>
    </List>
);
