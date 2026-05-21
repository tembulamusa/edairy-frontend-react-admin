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
import { SupplierCategoryCreate } from '../pages/suppliers/supplier categories/SupplierCategoryCreate';
import { SupplierCategoryEdit } from '../pages/suppliers/supplier categories/SupplierCategoryEdit';
import { SupplierCategoryShow } from '../pages/suppliers/supplier categories/SupplierCategoryShow';
import { SupplierCreate } from '../pages/suppliers/suppliers/SupplierCreate';
import { SupplierEdit } from '../pages/suppliers/suppliers/SupplierEdit';
import { SupplierShow } from '../pages/suppliers/suppliers/SupplierShow';
import { SupplierContactCreate } from '../pages/suppliers/supplier contacts/SupplierContactCreate';
import { SupplierContactEdit } from '../pages/suppliers/supplier contacts/SupplierContactEdit';
import { SupplierContactShow } from '../pages/suppliers/supplier contacts/SupplierContactShow';
import { SupplierDocumentCreate } from '../pages/suppliers/supplier documents/SupplierDocumentCreate';
import { SupplierDocumentEdit } from '../pages/suppliers/supplier documents/SupplierDocumentEdit';
import { SupplierDocumentShow } from '../pages/suppliers/supplier documents/SupplierDocumentShow';
import { SupplierQuoteCreate } from '../pages/suppliers/supplier quotes/SupplierQuoteCreate';
import { SupplierQuoteEdit } from '../pages/suppliers/supplier quotes/SupplierQuoteEdit';
import { SupplierQuoteShow } from '../pages/suppliers/supplier quotes/SupplierQuoteShow';
import { PurchaseOrderCreate } from '../pages/suppliers/purchase orders/PurchaseOrderCreate';
import { PurchaseOrderEdit } from '../pages/suppliers/purchase orders/PurchaseOrderEdit';
import { PurchaseOrderShow } from '../pages/suppliers/purchase orders/PurchaseOrderShow';
import { PurchaseRequisitionCreate } from '../pages/suppliers/purchase requisitions/PurchaseRequisitionCreate';
import { PurchaseRequisitionEdit } from '../pages/suppliers/purchase requisitions/PurchaseRequisitionEdit';
import { PurchaseRequisitionShow } from '../pages/suppliers/purchase requisitions/PurchaseRequisitionShow';


export const suppliersResources = [
    <Resource key="supplier-categories" name="supplier-categories" list={SupplierCategoryList} create={SupplierCategoryCreate} edit={SupplierCategoryEdit} show={SupplierCategoryShow} />,
    <Resource key="suppliers" name="suppliers" list={SuppliersList} create={SupplierCreate} edit={SupplierEdit} show={SupplierShow} />,
    <Resource key="supplier-bank-accounts" name="supplier-bank-accounts" list={SupplierBankAccountList} />,
    <Resource key="supplier-contacts" name="supplier-contacts" list={SupplierContactList} create={SupplierContactCreate} edit={SupplierContactEdit} show={SupplierContactShow} />,
    <Resource key="supplier-documents" name="supplier-documents" list={SupplierDocumentList} create={SupplierDocumentCreate} edit={SupplierDocumentEdit} show={SupplierDocumentShow} />,
    <Resource key="supplier-quotes" name="supplier-quotes" list={SupplierQuoteList} create={SupplierQuoteCreate} edit={SupplierQuoteEdit} show={SupplierQuoteShow} />,
    <Resource key="purchase-orders" name="purchase-orders" list={PurchaseOrdersList} create={PurchaseOrderCreate} edit={PurchaseOrderEdit} show={PurchaseOrderShow} />,
    <Resource key="purchase-requisitions" name="purchase-requisitions" list={PurchaseRequisitionList} create={PurchaseRequisitionCreate} edit={PurchaseRequisitionEdit} show={PurchaseRequisitionShow} />,
];