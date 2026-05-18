import { Resource } from 'react-admin';

/* ============ SUPPLIERS MODULE ============ */
import { SupplierCategoryList } from '../pages/suppliers/supplier categories/supplier-categories-list';
import { SuppliersList } from '../pages/suppliers/suppliers/suppliers-list';
import { SupplierBankAccountList } from '../pages/suppliers/supplier bank accounts/supplier-bank-accounts-list';
import { SupplierContactList } from '../pages/suppliers/supplier contacts/supplier-contacts-list';
import { SupplierDocumentList } from '../pages/suppliers/supplier documents/supplier-documents-list';
import { SupplierQuoteList } from '../pages/suppliers/supplier quotes/supplier-quotes-list';
import { PurchaseOrdersList } from '../pages/suppliers/purchase orders/purchase-orders-list';
import { PurchaseRequisitionList } from '../pages/suppliers/purchase requisitions/purchase-requisitions-list';

export const suppliersResources = [
    <Resource key="supplier-categories" name="supplier-categories" list={SupplierCategoryList} />,
    <Resource key="suppliers" name="suppliers" list={SuppliersList} />,
    <Resource key="supplier-bank-accounts" name="supplier-bank-accounts" list={SupplierBankAccountList} />,
    <Resource key="supplier-contacts" name="supplier-contacts" list={SupplierContactList} />,
    <Resource key="supplier-documents" name="supplier-documents" list={SupplierDocumentList} />,
    <Resource key="supplier-quotes" name="supplier-quotes" list={SupplierQuoteList} />,
    <Resource key="purchase-orders" name="purchase-orders" list={PurchaseOrdersList} />,
    <Resource key="purchase-requisitions" name="purchase-requisitions" list={PurchaseRequisitionList} />,
];