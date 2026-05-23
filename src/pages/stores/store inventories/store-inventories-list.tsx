import { DataTable, FunctionField } from 'react-admin';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { StoresListWrapper } from '../shared/stores-list-layout';

type StoreInventoryRecord = {
    is_active?: number | boolean;
};

export const StoreInventoriesList = () => (
    <StoresListWrapper title="Store Inventories" subtitle="Manage inventory groupings for store items">
        <DataTable.Col source="inventory_name" label="Inventory Name" />
        <DataTable.Col source="category_name" label="Category" />
        <DataTable.Col source="description" label="Description" />
        <DataTable.Col label="Active">
            <FunctionField
                render={(record: StoreInventoryRecord) =>
                    record?.is_active === 1 || record?.is_active === true ? (
                        <CheckCircleOutlineIcon sx={{ color: 'success.main' }} fontSize="small" />
                    ) : (
                        <CancelOutlinedIcon sx={{ color: 'error.main' }} fontSize="small" />
                    )
                }
            />
        </DataTable.Col>
    </StoresListWrapper>
);
