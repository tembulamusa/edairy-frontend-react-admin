import { ListGuesser, Resource } from 'react-admin';

/* ============ ADMIN MODULE ============ */
import { LicenceList } from '../pages/admin/licence/licence-list';
import { AuditLogList } from '../pages/admin/audit logs/audit-logs-list';
import { PermissionList } from '../pages/admin/permissions/permissions-list';
import { RoleList } from '../pages/admin/roles/roles-list';
import { UserList } from '../pages/admin/users/users-list';
import { UserContactDetailList } from '../pages/admin/user contact details/user-contact-details-list';
import { AssetRegisterList } from '../pages/admin/asset registers/asset-registers-list';
import { AssetSoftwareList } from '../pages/admin/asset softwares/asset-softwares-list';
import { FixedAssetList } from '../pages/admin/fixed assets/fixed-assets-list';
import { AssetCategoryList } from '../pages/admin/asset categories/asset-categories-list';
import { AssetAssignmentList } from '../pages/admin/asset assignments/asset-assignments-list';
import { AssetDepreciationEntryList } from '../pages/admin/asset depreciation entries/asset-depreciation-entries-list';
import { ShareDividendList as AdminShareDividendList } from '../pages/admin/share dividends/share-dividends-list';
import { ShareRegistrationList } from '../pages/admin/share registrations/share-registrations-list';
import { SmsList } from '../pages/admin/sms/sms-list';
import { SmsErrorCodeList } from '../pages/admin/sms error codes/sms-error-codes-list';
import { OrganizationDetailsList } from '../pages/admin/organization/organization details/organization-details-list';
import { DocumentTypeList } from '../pages/admin/organization/document types/document-types-list';
import { DirectorManagementList } from '../pages/admin/organization/directors and management/directors-management-list';
import { DocumentList } from '../pages/admin/organization/documents/documents-list';
import { DepartmentList } from '../pages/admin/organization/departments/departments-list';
import { BankList } from '../pages/admin/organization/banks/banks-list';
import { SiteList } from '../pages/admin/organization/sites/sites-list';
import { OrganizationAddressesList } from '../pages/admin/organization/organization addresses/organization-addresses-list';
import { OrganizationBanksList } from '../pages/admin/organization/organization banks/organization-banks-list';
import { OrganizationDocumentsList } from '../pages/admin/organization/organization documents/organization-documents-list';
import { OrganizationKybCommentsList } from '../pages/admin/organization/organization-kyb-comments-list';
import { OrganizationLeadershipsList } from '../pages/admin/organization/organization leaderships/organization-leaderships-list';
import { OrganizationWalletsList } from '../pages/admin/organization/organization wallets/organization-wallets-list';
import { PaymentTypeList } from '../pages/admin/payment types/payment-types-list';
import { RelationshipList } from '../pages/admin/relationships/relationships-list';
import { LocationList } from '../pages/admin/locations/locations-list';

export const adminResources = [
    <Resource key="licence" name="licence" list={LicenceList} />,
    <Resource key="activity-logs" name="activity-logs" list={ListGuesser} />,
    <Resource key="permissions" name="permissions" list={PermissionList} />,
    <Resource key="roles" name="roles" list={RoleList} />,
    <Resource key="users" name="users" list={UserList} />,
    <Resource key="user-contact-details" name="user-contact-details" list={UserContactDetailList} />,

    <Resource key="asset-registers" name="asset-registers" list={AssetRegisterList} />,
    <Resource key="asset-softwares" name="asset-softwares" list={AssetSoftwareList} />,
    <Resource key="fixed-assets" name="fixed-assets" list={FixedAssetList} />,
    <Resource key="asset-categories" name="asset-categories" list={AssetCategoryList} />,
    <Resource key="asset-assignments" name="asset-assignments" list={AssetAssignmentList} />,
    <Resource key="asset-depreciation-entries" name="asset-depreciation-entries" list={AssetDepreciationEntryList} />,

    <Resource key="share-dividends" name="share-dividends" list={AdminShareDividendList} />,
    <Resource key="share-registrations" name="share-registrations" list={ShareRegistrationList} />,

    <Resource key="sms" name="sms" list={SmsList} />,
    <Resource key="sms-error-codes" name="sms-error-codes" list={SmsErrorCodeList} />,

    <Resource key="organization-details" name="organization-details" list={OrganizationDetailsList} />,
    <Resource key="organization-addresses" name="organization-addresses" list={OrganizationAddressesList} />,
    <Resource key="organization-banks" name="organization-banks" list={OrganizationBanksList} />,
    <Resource key="organization-documents" name="organization-documents" list={OrganizationDocumentsList} />,
    <Resource key="organization-kyb-comments" name="organization-kyb-comments" list={OrganizationKybCommentsList} />,
    <Resource key="organization-leaderships" name="organization-leaderships" list={OrganizationLeadershipsList} />,
    <Resource key="organization-wallets" name="organization-wallets" list={OrganizationWalletsList} />,

    <Resource key="document-types" name="document-types" list={DocumentTypeList} />,
    <Resource key="directors-and-management" name="directors-and-management" list={DirectorManagementList} />,
    <Resource key="documents" name="documents" list={DocumentList} />,
    <Resource key="departments" name="departments" list={DepartmentList} />,
    <Resource key="banks" name="banks" list={BankList} />,
    <Resource key="sites" name="sites" list={SiteList} />,

    <Resource key="payment-types" name="payment-types" list={PaymentTypeList} />,
    <Resource key="relationships" name="relationships" list={RelationshipList} />,
    <Resource key="locations" name="locations" list={LocationList} />,
];