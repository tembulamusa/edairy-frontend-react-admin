import { Resource } from 'react-admin';

/* ============ ADMIN MODULE ============ */
import { LicenceList } from '../pages/admin/licence/licence-list';
import { PermissionList } from '../pages/admin/permissions/permissions-list';
import { PermissionCreate } from './permission-create';
import { PermissionEdit } from './permission-edit';
import { RoleList } from '../pages/admin/roles/roles-list';
import { RoleCreate } from '../pages/admin/roles/RoleCreate';
import { UserList } from '../pages/admin/users/users-list';
import { UserCreate } from '../pages/admin/users/UserCreate';
import { UserEdit } from './user-edit';
import { UserContactDetailList } from '../pages/admin/user contact details/user-contact-details-list';
import { AssetRegisterList } from '../pages/admin/asset registers/asset-registers-list';
import { AssetRegisterCreate } from '../pages/admin/asset registers/AssetRegisterCreate';
import { AssetRegisterEdit } from '../pages/admin/asset registers/AssetRegisterEdit';
import { AssetRegisterShow } from '../pages/admin/asset registers/AssetRegisterShow';
import { AssetSoftwareList } from '../pages/admin/asset softwares/asset-softwares-list';
import { AssetSoftwareCreate } from '../pages/admin/asset softwares/AssetSoftwareCreate';
import { AssetSoftwareEdit } from '../pages/admin/asset softwares/AssetSoftwareEdit';
import { AssetSoftwareShow } from '../pages/admin/asset softwares/AssetSoftwareShow';
import { FixedAssetList } from '../pages/admin/fixed assets/fixed-assets-list';
import { AssetCategoryList } from '../pages/admin/asset categories/asset-categories-list';
import { AssetCategoryCreate } from '../pages/admin/asset categories/AssetCategoryCreate';
import { AssetCategoryEdit } from '../pages/admin/asset categories/AssetCategoryEdit';
import { AssetCategoryShow } from '../pages/admin/asset categories/AssetCategoryShow';
import { AssetAssignmentList } from '../pages/admin/asset assignments/asset-assignments-list';
import { AssetAssignmentShow } from '../pages/admin/asset assignments/AssetAssignmentShow';
import { AssetAssignmentEdit } from '../pages/admin/asset assignments/AssetAssignmentEdit';
import { AssetAssignmentCreate } from '../pages/admin/asset assignments/AssetAssignmentCreate';
import { AssetDepreciationEntryList } from '../pages/admin/asset depreciation entries/asset-depreciation-entries-list';
import { AssetDepreciationEntryCreate } from '../pages/admin/asset depreciation entries/AssetDepreciationEntryCreate';
import { AssetDepreciationEntryEdit } from '../pages/admin/asset depreciation entries/AssetDepreciationEntryEdit';
import { AssetDepreciationEntryShow } from '../pages/admin/asset depreciation entries/AssetDepreciationEntryShow';
import { ShareDividendList as AdminShareDividendList } from '../pages/admin/share dividends/share-dividends-list';
import { ShareDividendCreate } from '../pages/admin/share dividends/ShareDividendCreate';
import { ShareRegistrationList } from '../pages/admin/share registrations/share-registrations-list';
import { SmsList } from '../pages/admin/sms/sms-list';
import { SmsErrorCodeList } from '../pages/admin/sms error codes/sms-error-codes-list';
import { OrganizationDetailsList } from '../pages/admin/organization/organization details/organization-details-list';
import { OrganizationDetailCreate } from '../pages/admin/organization/organization details/OrganizationDetailCreate';
import { OrganizationDetailEdit } from '../pages/admin/organization/organization details/OrganizationDetailEdit';
import { OrganizationDetailShow } from '../pages/admin/organization/organization details/OrganizationDetailShow';
import { DocumentTypeList } from '../pages/admin/organization/document types/document-types-list';
import { DocumentTypeCreate } from '../pages/admin/organization/document types/DocumentTypeCreate';
import { DocumentTypeEdit } from '../pages/admin/organization/document types/DocumentTypeEdit';
import { DocumentTypeShow } from '../pages/admin/organization/document types/DocumentTypeShow';
import { DirectorManagementList } from '../pages/admin/organization/directors and management/directors-management-list';
import { DirectorManagementCreate } from '../pages/admin/organization/directors and management/DirectorManagementCreate';
import { DirectorManagementEdit } from '../pages/admin/organization/directors and management/DirectorManagementEdit';
import { DirectorManagementShow } from '../pages/admin/organization/directors and management/DirectorManagementShow';
import { DocumentList } from '../pages/admin/organization/documents/documents-list';
import { DocumentCreate } from '../pages/admin/organization/documents/DocumentCreate';
import { DocumentEdit } from '../pages/admin/organization/documents/DocumentEdit';
import { DocumentShow } from '../pages/admin/organization/documents/DocumentShow';
import { DepartmentList } from '../pages/admin/organization/departments/departments-list';
import { DepartmentCreate } from '../pages/admin/organization/departments/DepartmentCreate';
import { DepartmentEdit } from '../pages/admin/organization/departments/DepartmentEdit';
import { DepartmentShow } from '../pages/admin/organization/departments/DepartmentShow';
import { BankList } from '../pages/admin/organization/banks/banks-list';
import { BankCreate } from '../pages/admin/organization/banks/BankCreate';
import { BankEdit } from '../pages/admin/organization/banks/BankEdit';
import { BankShow } from '../pages/admin/organization/banks/BankShow';
import { SiteList } from '../pages/admin/organization/sites/sites-list';
import { SiteCreate } from '../pages/admin/organization/sites/SiteCreate';
import { SiteEdit } from '../pages/admin/organization/sites/SiteEdit';
import { SiteShow } from '../pages/admin/organization/sites/SiteShow';
import { OrganizationAddressesList } from '../pages/admin/organization/organization addresses/organization-addresses-list';
import { OrganizationAddressCreate } from '../pages/admin/organization/organization addresses/OrganizationAddressCreate';
import { OrganizationAddressEdit } from '../pages/admin/organization/organization addresses/OrganizationAddressEdit';
import { OrganizationAddressShow } from '../pages/admin/organization/organization addresses/OrganizationAddressShow';
import { OrganizationBanksList } from '../pages/admin/organization/organization banks/organization-banks-list';
import { OrganizationBankCreate } from '../pages/admin/organization/organization banks/OrganizationBankCreate';
import { OrganizationBankEdit } from '../pages/admin/organization/organization banks/OrganizationBankEdit';
import { OrganizationBankShow } from '../pages/admin/organization/organization banks/OrganizationBankShow';
import { OrganizationDocumentsList } from '../pages/admin/organization/organization documents/organization-documents-list';
import { OrganizationDocumentCreate } from '../pages/admin/organization/organization documents/OrganizationDocumentCreate';
import { OrganizationDocumentEdit } from '../pages/admin/organization/organization documents/OrganizationDocumentEdit';
import { OrganizationDocumentShow } from '../pages/admin/organization/organization documents/OrganizationDocumentShow';
import { OrganizationKybCommentsList } from '../pages/admin/organization/organization-kyb-comments-list';
import { OrganizationLeadershipsList } from '../pages/admin/organization/organization leaderships/organization-leaderships-list';
import { OrganizationLeadershipCreate } from '../pages/admin/organization/organization leaderships/OrganizationLeadershipCreate';
import { OrganizationLeadershipEdit } from '../pages/admin/organization/organization leaderships/OrganizationLeadershipEdit';
import { OrganizationLeadershipShow } from '../pages/admin/organization/organization leaderships/OrganizationLeadershipShow';
import { OrganizationWalletsList } from '../pages/admin/organization/organization wallets/organization-wallets-list';
import { OrganizationWalletCreate } from '../pages/admin/organization/organization wallets/OrganizationWalletCreate';
import { OrganizationWalletEdit } from '../pages/admin/organization/organization wallets/OrganizationWalletEdit';
import { OrganizationWalletShow } from '../pages/admin/organization/organization wallets/OrganizationWalletShow';
import { PaymentTypeList } from '../pages/admin/payment types/payment-types-list';
import { RelationshipList } from '../pages/admin/relationships/relationships-list';
import { LocationList } from '../pages/admin/locations/locations-list';
import { LocationCreate } from '../pages/admin/locations/LocationCreate';
import { LocationEdit } from '../pages/admin/locations/LocationEdit';
import { LocationShow } from '../pages/admin/locations/LocationShow';
import { FixedAssetCreate } from '../pages/admin/fixed assets/FixedAssetCreate';
import { FixedAssetEdit } from '../pages/admin/fixed assets/FixedAssetEdit';
import { RoleEdit } from '../pages/admin/roles/edit';
import { ActivityLogList } from '../pages/admin/audit logs/activity-log-list';

export const adminResources = [
    <Resource key="licence" name="licence" list={LicenceList} />,
    <Resource key="activity-logs" name="activity-logs" list={ActivityLogList} />,
    <Resource key="permissions" name="permissions" list={PermissionList} create={PermissionCreate} edit={PermissionEdit} />,
    <Resource key="roles" name="roles" list={RoleList} create={RoleCreate} edit={RoleEdit} />,
    <Resource key="users" name="users" list={UserList} create={UserCreate} edit={UserEdit} />,
    <Resource key="user-contact-details" name="user-contact-details" list={UserContactDetailList} />,
    <Resource key="asset-registers" name="asset-registers" list={AssetRegisterList} create={AssetRegisterCreate} edit={AssetRegisterEdit} show={AssetRegisterShow} />,
    <Resource key="asset-softwares" name="asset-softwares" list={AssetSoftwareList} create={AssetSoftwareCreate} edit={AssetSoftwareEdit} show={AssetSoftwareShow} />,
    <Resource key="fixed-assets" name="fixed-assets" list={FixedAssetList} create={FixedAssetCreate} edit={FixedAssetEdit} />,
    <Resource key="asset-categories" name="asset-categories" list={AssetCategoryList} create={AssetCategoryCreate} edit={AssetCategoryEdit} show={AssetCategoryShow} />,
    <Resource key="asset-assignments" name="asset-assignments" list={AssetAssignmentList} create={AssetAssignmentCreate} edit={AssetAssignmentEdit} show={AssetAssignmentShow} />,
    <Resource key="asset-depreciation-entries" name="asset-depreciation-entries" list={AssetDepreciationEntryList} create={AssetDepreciationEntryCreate} edit={AssetDepreciationEntryEdit} show={AssetDepreciationEntryShow} />,

    <Resource key="share-dividends" name="share-dividends" list={AdminShareDividendList} create={ShareDividendCreate} />,
    <Resource key="share-registrations" name="share-registrations" list={ShareRegistrationList} />,

    <Resource key="sms" name="sms" list={SmsList} />,
    <Resource key="sms-error-codes" name="sms-error-codes" list={SmsErrorCodeList} />,

    <Resource key="organization-details" name="organization-details" list={OrganizationDetailsList} create={OrganizationDetailCreate} edit={OrganizationDetailEdit} show={OrganizationDetailShow} />,
    <Resource key="organization-addresses" name="organization-addresses" list={OrganizationAddressesList} create={OrganizationAddressCreate} edit={OrganizationAddressEdit} show={OrganizationAddressShow} />,
    <Resource key="organization-banks" name="organization-banks" list={OrganizationBanksList} create={OrganizationBankCreate} edit={OrganizationBankEdit} show={OrganizationBankShow} />,
    <Resource key="organization-documents" name="organization-documents" list={OrganizationDocumentsList} create={OrganizationDocumentCreate} edit={OrganizationDocumentEdit} show={OrganizationDocumentShow} />,
    <Resource key="organization-kyb-comments" name="organization-kyb-comments" list={OrganizationKybCommentsList} />,
    <Resource key="organization-leaderships" name="organization-leaderships" list={OrganizationLeadershipsList} create={OrganizationLeadershipCreate} edit={OrganizationLeadershipEdit} show={OrganizationLeadershipShow} />,
    <Resource key="organization-wallets" name="organization-wallets" list={OrganizationWalletsList} create={OrganizationWalletCreate} edit={OrganizationWalletEdit} show={OrganizationWalletShow} />,

    <Resource key="document-types" name="document-types" list={DocumentTypeList} create={DocumentTypeCreate} edit={DocumentTypeEdit} show={DocumentTypeShow} />,
    <Resource key="directors-and-management" name="directors-and-management" list={DirectorManagementList} create={DirectorManagementCreate} edit={DirectorManagementEdit} show={DirectorManagementShow} />,
    <Resource key="documents" name="documents" list={DocumentList} create={DocumentCreate} edit={DocumentEdit} show={DocumentShow} />,
    <Resource key="departments" name="departments" list={DepartmentList} create={DepartmentCreate} edit={DepartmentEdit} show={DepartmentShow} />,
    <Resource key="banks" name="banks" list={BankList} create={BankCreate} edit={BankEdit} show={BankShow} />,
    <Resource key="sites" name="sites" list={SiteList} create={SiteCreate} edit={SiteEdit} show={SiteShow} />,

    <Resource key="payment-types" name="payment-types" list={PaymentTypeList} />,
    <Resource key="relationships" name="relationships" list={RelationshipList} />,
    <Resource key="locations" name="locations" list={LocationList} create={LocationCreate} edit={LocationEdit} show={LocationShow} />,
];
