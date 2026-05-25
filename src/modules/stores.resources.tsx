import { Resource } from 'react-admin';
/* ============ STORES MODULE ============ */
import { StoreSalesList } from '../pages/stores/store sales/store-sales-list';
import { InterstoreTransferList } from '../pages/stores/interstore transfer/interstore-transfer-list';
import { StoreStocksList } from '../pages/stores/store stocks/store-stocks-list';
import { StoreItemsList } from '../pages/stores/store items/store-items-list';
import { ItemCategoriesList } from '../pages/stores/item categories/item-categories-list';
import { StoresList } from '../pages/stores/stores/stores-list';
import { StoreInventoriesList } from '../pages/stores/store inventories/store-inventories-list';
import { StoreStockTakingsList } from '../pages/stores/store stock takings/store-stock-takings-list';
import { StoreStockMovementsList } from '../pages/stores/store stock movements/store-stock-movements-list';
import { StoreStockMovementTypesList } from '../pages/stores/store stock movement types/store-stock-movement-types-list';

export const storesResources = [
    <Resource key="store-sales" name="store-sales" list={StoreSalesList} />,
    <Resource key="inter-store-transfers" name="inter-store-transfers" list={InterstoreTransferList} />,
    <Resource key="store-stocks" name="store-stocks" list={StoreStocksList} />,
    <Resource key="store-items" name="store-items" list={StoreItemsList} />,
    <Resource key="item-categories" name="item-categories" list={ItemCategoriesList} />,
    <Resource key="stores" name="stores" list={StoresList} />,
    <Resource key="store-inventories" name="store-inventories" list={StoreInventoriesList} />,
    <Resource key="store-stock-takings" name="store-stock-takings" list={StoreStockTakingsList} />,
    <Resource key="store-stock-movements" name="store-stock-movements" list={StoreStockMovementsList} />,
    <Resource key="store-stock-movement-types" name="store-stock-movement-types" list={StoreStockMovementTypesList} />,
];