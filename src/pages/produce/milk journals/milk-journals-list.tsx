import { List, DataTable, DateField, FunctionField } from "react-admin";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export const MilkJournalsList = () => (
    <List title="Milk Journals">
        <DataTable>
            <DataTable.Col source="Journal" label="Journal" />
            <DataTable.Col source="JournalDate" label="Journal Date">
                <DateField source="JournalDate" />
            </DataTable.Col>
            <DataTable.Col source="MilkDeliveryShift" label="Milk Delivery Shift" />
            <DataTable.Col source="RouteName" label="Route Name" />
            <DataTable.Col label="Confirmed">
                <FunctionField
                    render={(record) =>
                        record?.Confirmed ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="EntriesCount" label="Entries Count" />
        </DataTable>
    </List>
);
