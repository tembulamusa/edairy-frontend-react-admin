import React from 'react';

/* ============ ADMIN MODULE ============ */
import { LicenceList } from '../../pages/admin/licence/licence-list';
import { AuditLogList } from '../../pages/admin/audit logs/audit-logs-list';
import { PermissionList } from '../../pages/admin/permissions/permissions-list';
import { RoleList } from '../../pages/admin/roles/roles-list';
import { UserList } from '../../pages/admin/users/users-list';
import { UserContactDetailList } from '../../pages/admin/user contact details/user-contact-details-list';
import { AssetRegisterList } from '../../pages/admin/asset registers/asset-registers-list';
import { AssetSoftwareList } from '../../pages/admin/asset softwares/asset-softwares-list';
import { FixedAssetList } from '../../pages/admin/fixed assets/fixed-assets-list';
import { AssetCategoryList } from '../../pages/admin/asset categories/asset-categories-list';
import { AssetAssignmentList } from '../../pages/admin/asset assignments/asset-assignments-list';
import { AssetDepreciationEntryList } from '../../pages/admin/asset depreciation entries/asset-depreciation-entries-list';
import { ShareDividendList as AdminShareDividendList } from '../../pages/admin/share dividends/share-dividends-list';
import { ShareRegistrationList } from '../../pages/admin/share registrations/share-registrations-list';
import { SmsList } from '../../pages/admin/sms/sms-list';
import { SmsErrorCodeList } from '../../pages/admin/sms error codes/sms-error-codes-list';
import { OrganizationDetailsList } from '../../pages/admin/organization/organization details/organization-details-list';
import { DocumentTypeList } from '../../pages/admin/organization/document types/document-types-list';
import { DirectorManagementList } from '../../pages/admin/organization/directors and management/directors-management-list';
import { DocumentList } from '../../pages/admin/organization/documents/documents-list';
import { DepartmentList } from '../../pages/admin/organization/departments/departments-list';
import { BankList } from '../../pages/admin/organization/banks/banks-list';
import { SiteList } from '../../pages/admin/organization/sites/sites-list';
import { OrganizationAddressesList } from '../../pages/admin/organization/organization addresses/organization-addresses-list';
import { OrganizationBanksList } from '../../pages/admin/organization/organization banks/organization-banks-list';
import { OrganizationDocumentsList } from '../../pages/admin/organization/organization documents/organization-documents-list';
import { OrganizationKybCommentsList } from '../../pages/admin/organization/organization-kyb-comments-list';
import { OrganizationLeadershipsList } from '../../pages/admin/organization/organization leaderships/organization-leaderships-list';
import { OrganizationWalletsList } from '../../pages/admin/organization/organization wallets/organization-wallets-list';
import { PaymentTypeList } from '../../pages/admin/payment types/payment-types-list';
import { RelationshipList } from '../../pages/admin/relationships/relationships-list';
import { LocationList } from '../../pages/admin/locations/locations-list';
import { ShareTransactionList } from '../../pages/admin/share transactions/share-transactions-list';

// Define the interface for the dictionary structure
interface AdminResourceConfig {
  name: string;
  key: string;
  lst: React.ComponentType<any>;
}

export const AdminResources = (): AdminResourceConfig[] => {
  return [
    { key: 'licence', name: 'licence', lst: LicenceList },
    { key: 'activity-logs', name: 'activity-logs', lst: AuditLogList },
    { key: 'permissions', name: 'permissions', lst: PermissionList },
    { key: 'roles', name: 'roles', lst: RoleList },
    { key: 'users', name: 'users', lst: UserList },
    { key: 'user-contact-details', name: 'user-contact-details', lst: UserContactDetailList },
    { key: 'asset-registers', name: 'asset-registers', lst: AssetRegisterList },
    { key: 'asset-softwares', name: 'asset-softwares', lst: AssetSoftwareList },
    { key: 'fixed-assets', name: 'fixed-assets', lst: FixedAssetList },
    { key: 'asset-categories', name: 'asset-categories', lst: AssetCategoryList },
    { key: 'asset-assignments', name: 'asset-assignments', lst: AssetAssignmentList },
    { key: 'asset-depreciation-entries', name: 'asset-depreciation-entries', lst: AssetDepreciationEntryList },
    { key: 'share-dividends', name: 'share-dividends', lst: AdminShareDividendList },
    { key: 'share-registrations', name: 'share-registrations', lst: ShareRegistrationList },
    { key: 'share-transactions', name: 'share-transactions', lst: ShareTransactionList },
    { key: 'sms', name: 'sms', lst: SmsList },
    { key: 'sms-error-codes', name: 'sms-error-codes', lst: SmsErrorCodeList },
    { key: 'organization-details', name: 'organization-details', lst: OrganizationDetailsList },
    { key: 'organization-addresses', name: 'organization-addresses', lst: OrganizationAddressesList },
    { key: 'organization-banks', name: 'organization-banks', lst: OrganizationBanksList },
    { key: 'organization-documents', name: 'organization-documents', lst: OrganizationDocumentsList },
    { key: 'organization-kyb-comments', name: 'organization-kyb-comments', lst: OrganizationKybCommentsList },
    { key: 'organization-leaderships', name: 'organization-leaderships', lst: OrganizationLeadershipsList },
    { key: 'organization-wallets', name: 'organization-wallets', lst: OrganizationWalletsList },
    { key: 'document-types', name: 'document-types', lst: DocumentTypeList },
    { key: 'directors-and-management', name: 'directors-and-management', lst: DirectorManagementList },
    { key: 'documents', name: 'documents', lst: DocumentList },
    { key: 'departments', name: 'departments', lst: DepartmentList },
    { key: 'banks', name: 'banks', lst: BankList },
    { key: 'sites', name: 'sites', lst: SiteList },
    { key: 'payment-types', name: 'payment-types', lst: PaymentTypeList },
    { key: 'relationships', name: 'relationships', lst: RelationshipList },
    { key: 'locations', name: 'locations', lst: LocationList },
  ];
};

export default AdminResources;