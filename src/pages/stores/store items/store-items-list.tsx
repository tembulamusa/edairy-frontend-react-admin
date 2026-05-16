import { List, DataTable, EditButton, DeleteButton, FunctionField } from "react-admin";
import { Box } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import defaultThumbnail from "../../../assets/logo.png";

type StoreItemRecord = {
    Thumbnail?: string;
    ItemName?: string;
    InventoryName?: string;
};

const getImageUrl = (thumbnail?: string) => {
    if (!thumbnail) return defaultThumbnail;
    if (thumbnail.startsWith('http')) return thumbnail;
    return `http://192.168.1.10/${thumbnail}`;
};

export const StoreItemsList = () => (
    <List title="Store Items">
        <DataTable>
            <DataTable.Col source="inventory_name" label="Name" />
            <DataTable.Col label="Item">
                <FunctionField
                    render={(record: StoreItemRecord) => (
                        <Box display="flex" alignItems="center" gap={1}>
                            <img
                                src={getImageUrl(record?.thumbnail)}
                                alt={record?.item_name || record?.inventory_name || 'Item'}
                                style={{ maxWidth: 40, maxHeight: 40, objectFit: 'cover' }}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = defaultThumbnail;
                                }}
                            />
                            <span>{record?.item_name || record?.inventory_name}</span>
                        </Box>
                    )}
                />
            </DataTable.Col>
            <DataTable.Col source="sku" label="SKU" />
            <DataTable.Col source="default_buying_price" label="Buying Price" />
            <DataTable.Col source="default_selling_price" label="Selling Price" />
            <DataTable.Col source="default_selling_price_credit" label="Credit Price" />
            <DataTable.Col source="reorder_point" label="Reorder Point" />
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
