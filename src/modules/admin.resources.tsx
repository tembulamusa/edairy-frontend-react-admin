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
import { AssetSoftwareList } from '../pages/admin/asset softwares/asset-softwares-list';
import { FixedAssetList } from '../pages/admin/fixed assets/fixed-assets-list';
import { AssetCategoryList } from '../pages/admin/asset categories/asset-categories-list';
import { AssetCategoryCreate } from '../pages/admin/asset categories/AssetCategoryCreate';
import { AssetCategoryEdit } from '../pages/admin/asset categories/AssetCategoryEdit';
import { AssetAssignmentList } from '../pages/admin/asset assignments/asset-assignments-list';
import { AssetAssignmentShow } from '../pages/admin/asset assignments/AssetAssignmentShow';
import { AssetAssignmentCreate } from '../pages/admin/asset assignments/AssetAssignmentCreate';
import { AssetDepreciationEntryList } from '../pages/admin/asset depreciation entries/asset-depreciation-entries-list';
import { AssetDepreciationEntryCreate } from '../pages/admin/asset depreciation entries/AssetDepreciationEntryCreate';
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
import { DirectorManagementList } from '../pages/admin/organization/directors and management/directors-management-list';
import { DocumentList } from '../pages/admin/organization/documents/documents-list';
import { DocumentCreate } from '../pages/admin/organization/documents/DocumentCreate';
import { DocumentEdit } from '../pages/admin/organization/documents/DocumentEdit';
import { DocumentShow } from '../pages/admin/organization/documents/DocumentShow';
import { DepartmentList } from '../pages/admin/organization/departments/departments-list';
import { BankList } from '../pages/admin/organization/banks/banks-list';
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
    <Resource key="asset-registers" name="asset-registers" list={AssetRegisterList} />,
    <Resource key="asset-softwares" name="asset-softwares" list={AssetSoftwareList} />,
    <Resource key="fixed-assets" name="fixed-assets" list={FixedAssetList} create={FixedAssetCreate} edit={FixedAssetEdit} />,
    <Resource key="asset-categories" name="asset-categories" list={AssetCategoryList} create={AssetCategoryCreate} edit={AssetCategoryEdit} />,
    <Resource key="asset-assignments" name="asset-assignments" list={AssetAssignmentList} create={AssetAssignmentCreate} show={AssetAssignmentShow} />,
    <Resource key="asset-depreciation-entries" name="asset-depreciation-entries" list={AssetDepreciationEntryList} create={AssetDepreciationEntryCreate} />,

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

    <Resource key="document-types" name="document-types" list={DocumentTypeList} />,
    <Resource key="directors-and-management" name="directors-and-management" list={DirectorManagementList} />,
    <Resource key="documents" name="documents" list={DocumentList} create={DocumentCreate} edit={DocumentEdit} show={DocumentShow} />,
    <Resource key="departments" name="departments" list={DepartmentList} />,
    <Resource key="banks" name="banks" list={BankList} />,
    <Resource key="sites" name="sites" list={SiteList} create={SiteCreate} edit={SiteEdit} show={SiteShow} />,

    <Resource key="payment-types" name="payment-types" list={PaymentTypeList} />,
    <Resource key="relationships" name="relationships" list={RelationshipList} />,
    <Resource key="locations" name="locations" list={LocationList} />,
];
