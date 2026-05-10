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
            <DataTable.Col source="InventoryName" label="Name" />
            <DataTable.Col label="Item">
                <FunctionField
                    render={(record: StoreItemRecord) => (
                        <Box display="flex" alignItems="center" gap={1}>
                            <img
                                src={getImageUrl(record?.Thumbnail)}
                                alt={record?.ItemName || record?.InventoryName || 'Item'}
                                style={{ maxWidth: 40, maxHeight: 40, objectFit: 'cover' }}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = defaultThumbnail;
                                }}
                            />
                            <span>{record?.ItemName || record?.InventoryName}</span>
                        </Box>
                    )}
                />
            </DataTable.Col>
            <DataTable.Col source="SKU" label="SKU" />
            <DataTable.Col source="DefaultBuyingPrice" label="Buying Price" />
            <DataTable.Col source="DefaultSellingPrice" label="Selling Price" />
            <DataTable.Col source="DefaultSellingPriceCredit" label="Credit Price" />
            <DataTable.Col source="ReorderPoint" label="Reorder Point" />
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
