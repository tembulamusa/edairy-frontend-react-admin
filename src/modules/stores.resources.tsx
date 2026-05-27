import { Resource, ShowGuesser } from 'react-admin';

/* ============ STORES MODULE ============ */

import { StoreSalesList } from '../pages/stores/store sales/store-sales-list';

import { StoreSaleCreate } from '../pages/stores/store sales/StoreSaleCreate';

import { SuppliesList } from '../pages/stores/supplies/supplies-list';

import { SupplyRejectsList } from '../pages/suppliers/supply rejects/supply-rejects-list';

import { InterstoreTransferList } from '../pages/stores/interstore transfer/interstore-transfer-list';

import { StoreStocksList } from '../pages/stores/store stocks/store-stocks-list';

import { StoreItemsList } from '../pages/stores/store items/store-items-list';

import { ItemCategoriesList } from '../pages/stores/item categories/item-categories-list';

import { StoresList } from '../pages/stores/stores/stores-list';

import { StoreInventoriesList } from '../pages/stores/store inventories/store-inventories-list';

import { StoreStockTakingsList } from '../pages/stores/store stock takings/store-stock-takings-list';

import { StoreStockMovementsList } from '../pages/stores/store stock movements/store-stock-movements-list';

import { StoreStockMovementTypesList } from '../pages/stores/store stock movement types/store-stock-movement-types-list';

import {

    InterstoreTransferCreate,

    InterstoreTransferEdit,

    ItemCategoryCreate,

    ItemCategoryEdit,

    StoreCreate,

    StoreEdit,

    StoreInventoryCreate,

    StoreInventoryEdit,

    StoreItemCreate,

    StoreItemEdit,

    StoreStockMovementTypeCreate,

    StoreStockMovementTypeEdit,

    StoreStockMovementCreate,

    StoreStockTakingCreate,

    StoreStockTakingEdit,

    SupplyCreate,

    SupplyEdit,

    SupplyRejectCreate,

    SupplyRejectEdit,

} from '../pages/stores/stores-create-edit-pages';



export const storesResources = [

    <Resource key="store-sales" name="store-sales" list={StoreSalesList} create={StoreSaleCreate} show={ShowGuesser} />,

    <Resource key="supplies" name="supplies" list={SuppliesList} create={SupplyCreate} edit={SupplyEdit} show={ShowGuesser} />,

    <Resource

        key="supply-rejects"

        name="supply-rejects"

        list={SupplyRejectsList}

        create={SupplyRejectCreate}

        edit={SupplyRejectEdit}

        show={ShowGuesser}

    />,

    <Resource

        key="inter-store-transfers"

        name="inter-store-transfers"

        list={InterstoreTransferList}

        create={InterstoreTransferCreate}

        edit={InterstoreTransferEdit}

        show={ShowGuesser}

    />,

    <Resource key="store-stocks" name="store-stocks" list={StoreStocksList} show={ShowGuesser} />,

    <Resource key="store-items" name="store-items" list={StoreItemsList} create={StoreItemCreate} edit={StoreItemEdit} show={ShowGuesser} />,

    <Resource

        key="item-categories"

        name="item-categories"

        list={ItemCategoriesList}

        create={ItemCategoryCreate}

        edit={ItemCategoryEdit}

        show={ShowGuesser}

    />,

    <Resource key="stores" name="stores" list={StoresList} create={StoreCreate} edit={StoreEdit} show={ShowGuesser} />,

    <Resource

        key="store-inventories"

        name="store-inventories"

        list={StoreInventoriesList}

        create={StoreInventoryCreate}

        edit={StoreInventoryEdit}

        show={ShowGuesser}

    />,

    <Resource

        key="store-stock-takings"

        name="store-stock-takings"

        list={StoreStockTakingsList}

        create={StoreStockTakingCreate}

        edit={StoreStockTakingEdit}

        show={ShowGuesser}

    />,

    <Resource
        key="store-stock-movements"
        name="store-stock-movements"
        list={StoreStockMovementsList}
        create={StoreStockMovementCreate}
        show={ShowGuesser}
    />,

    <Resource

        key="store-stock-movement-types"

        name="store-stock-movement-types"

        list={StoreStockMovementTypesList}

        create={StoreStockMovementTypeCreate}

        edit={StoreStockMovementTypeEdit}

        show={ShowGuesser}

    />,

];

