import {
  Admin,
  Resource
} from 'react-admin'

import { dataProvider } from "./dataProvider"
import Layout from './Layout';
import { authProvider } from './components/auth/auth-provider';
import { LoginPage } from './pages/auth/login';
import { Logo } from './components/logo';
import { Dashboard } from './pages/dashboard';

/* ============ MEMBERS MODULE ============ */
import { MemberList } from './pages/members/members/member-list';
import { MemberBankAccountList } from './pages/members/member bank accounts/member-bank-account-list';
import { TransportRateList } from './pages/members/transport rates/transport-rates-list';
import { MemberTypeList } from './pages/members/member types/member-types-list';
import { RouteList } from './pages/members/routes/routes-list';
import { RouteCenterList } from './pages/members/route centers/route-center-list';
import { PaymentModeList } from './pages/members/payment modes/payment-mode-list';
import { TrainingList } from './pages/members/trainings/training-list';
import { TrainingSessionList } from './pages/members/training sessions/training-session-list';
import { TrainingSessionAttendeesList } from './pages/members/training session attendees/training-session-attendees-list';
import { ExchangeVisitList } from './pages/members/exchange visits/exchange-visit-list';
import { ExchangeVisitAttendeesList } from './pages/members/exchange visit attendees/exchange-visit-attendees-list';
import { ShareTypeList } from './pages/members/share types/share-types-list';
import { MemberShareList } from './pages/members/member shares/member-shares-list';
import { ShareTransactionList } from './pages/members/share transactions/share-transactions-list';
import { SharePaymentList } from './pages/members/share payments/share-payments-list';
import { ShareTransferList } from './pages/members/share transfers/share-transfers-list';
import { DividendDeclarationList } from './pages/members/dividend declarations/dividend-declarations-list';
import { ShareDividendList as MemberShareDividendList } from './pages/members/dividends/dividends-list';
import { MemberWithMissingDetailsList } from './pages/members/reports/member-with-missing-details-list';

/* ============ TRANSPORTERS MODULE ============ */
import { TransporterList, IndividualTransporterList, CompanyTransporterList, TransporterVehicleList, TransporterRouteAssignmentList, TransporterDriverList, TransporterDriverAssignmentList, TransporterBenefitList, BulkCollectionAtMccList, MilkDeliveryList, LocalSalesList, VarianceList, StrayCollectionList, MonthlyCollectionList, CanMovementList, MonthlyPayDateRangeList, PayRateList, TransporterPaymentList, DeductionsRecoveryList, TransporterPayrollList, TransporterDeductionList, TransportVehicleList, MilkDeliveryReportList, TransporterPayrollSummaryList, TransporterPayrollBankSummaryList, TransporterStatementList } from './pages/transporters/transporters-lists';

/* ============ ADMIN MODULE ============ */
import { LicenceList } from './pages/admin/licence/licence-list';
import { AuditLogList } from './pages/admin/audit logs/audit-logs-list';
import { PermissionList } from './pages/admin/permissions/permissions-list';
import { RoleList } from './pages/admin/roles/roles-list';
import { UserList } from './pages/admin/users/users-list';
import { UserContactDetailList } from './pages/admin/user contact details/user-contact-details-list';
import { AssetRegisterList } from './pages/admin/asset registers/asset-registers-list';
import { AssetSoftwareList } from './pages/admin/asset softwares/asset-softwares-list';
import { FixedAssetList } from './pages/admin/fixed assets/fixed-assets-list';
import { AssetCategoryList } from './pages/admin/asset categories/asset-categories-list';
import { AssetAssignmentList } from './pages/admin/asset assignments/asset-assignments-list';
import { AssetDepreciationEntryList } from './pages/admin/asset depreciation entries/asset-depreciation-entries-list';
import { ShareDividendList as AdminShareDividendList } from './pages/admin/share dividends/share-dividends-list';
import { ShareRegistrationList } from './pages/admin/share registrations/share-registrations-list';
import { SmsList } from './pages/admin/sms/sms-list';
import { SmsErrorCodeList } from './pages/admin/sms error codes/sms-error-codes-list';
import { OrganizationDetailsList } from './pages/admin/organization/organization details/organization-details-list';
import { DocumentTypeList } from './pages/admin/organization/document types/document-types-list';
import { DirectorManagementList } from './pages/admin/organization/directors and management/directors-management-list';
import { DocumentList } from './pages/admin/organization/documents/documents-list';
import { DepartmentList } from './pages/admin/organization/departments/departments-list';
import { BankList } from './pages/admin/organization/banks/banks-list';
import { SiteList } from './pages/admin/organization/sites/sites-list';
import { PaymentTypeList } from './pages/admin/payment types/payment-types-list';
import { RelationshipList } from './pages/admin/relationships/relationships-list';
import { LocationList } from './pages/admin/locations/locations-list';

const App = () => {
  return (
    <Admin
      layout={Layout}
      dataProvider={dataProvider}
      dashboard={Dashboard}
      authProvider={authProvider}
      loginPage={LoginPage}
      logo={Logo}
    >
      {/* Members Module */}
      <Resource name="members" list={MemberList} />
      <Resource name="member-bank-accounts" list={MemberBankAccountList} />
      <Resource name="transport-rates" list={TransportRateList} />
      <Resource name="member-types" list={MemberTypeList} />
      <Resource name="routes" list={RouteList} />
      <Resource name="route-centers" list={RouteCenterList} />
      <Resource name="payment-modes" list={PaymentModeList} />
      <Resource name="trainings" list={TrainingList} />
      <Resource name="training-sessions" list={TrainingSessionList} />
      <Resource name="training-session-attendees" list={TrainingSessionAttendeesList} />
      <Resource name="exchange-visits" list={ExchangeVisitList} />
      <Resource name="exchange-visit-attendees" list={ExchangeVisitAttendeesList} />
      <Resource name="share-types" list={ShareTypeList} />
      <Resource name="share-accounts" list={MemberShareList} />
      <Resource name="share-payments" list={SharePaymentList} />
      <Resource name="share-transfers" list={ShareTransferList} />
      <Resource name="dividend-declarations" list={DividendDeclarationList} />
      <Resource name="dividends" list={MemberShareDividendList} />
      <Resource name="member-with-missing-details" list={MemberWithMissingDetailsList} />

      {/* Transporters Module */}
      <Resource name="transporters" list={TransporterList} />
      <Resource name="individual-transporters" list={IndividualTransporterList} />
      <Resource name="company-transporters" list={CompanyTransporterList} />
      <Resource name="transporter-vehicles" list={TransporterVehicleList} />
      <Resource name="transporter-route-assignments" list={TransporterRouteAssignmentList} />
      <Resource name="transporter-drivers" list={TransporterDriverList} />
      <Resource name="transporter-driver-assignments" list={TransporterDriverAssignmentList} />
      <Resource name="transporter-benefits" list={TransporterBenefitList} />
      <Resource name="bulk-collection-at-mcc" list={BulkCollectionAtMccList} />
      <Resource name="milk-deliveries" list={MilkDeliveryList} />
      <Resource name="local-sales" list={LocalSalesList} />
      <Resource name="variances" list={VarianceList} />
      <Resource name="stray-collections" list={StrayCollectionList} />
      <Resource name="monthly-collections" list={MonthlyCollectionList} />
      <Resource name="can-movement" list={CanMovementList} />
      <Resource name="monthly-pay-date-ranges" list={MonthlyPayDateRangeList} />
      <Resource name="pay-rates" list={PayRateList} />
      <Resource name="transporter-payments" list={TransporterPaymentList} />
      <Resource name="deductions-recovery" list={DeductionsRecoveryList} />
      <Resource name="transporter-payroll" list={TransporterPayrollList} />
      <Resource name="transporter-deductions" list={TransporterDeductionList} />
      <Resource name="transport-vehicles" list={TransportVehicleList} />
      <Resource name="milk-delivery-reports" list={MilkDeliveryReportList} />
      <Resource name="transporter-payroll-summary" list={TransporterPayrollSummaryList} />
      <Resource name="transporter-payroll-bank-summary" list={TransporterPayrollBankSummaryList} />
      <Resource name="transporter-statement" list={TransporterStatementList} />

      {/* Admin Module */}
      <Resource name="licence" list={LicenceList} />
      <Resource name="audit-logs" list={AuditLogList} />
      <Resource name="permissions" list={PermissionList} />
      <Resource name="roles" list={RoleList} />
      <Resource name="users" list={UserList} />
      <Resource name="user-contact-details" list={UserContactDetailList} />
      <Resource name="asset-registers" list={AssetRegisterList} />
      <Resource name="asset-softwares" list={AssetSoftwareList} />
      <Resource name="fixed-assets" list={FixedAssetList} />
      <Resource name="asset-categories" list={AssetCategoryList} />
      <Resource name="asset-assignments" list={AssetAssignmentList} />
      <Resource name="asset-depreciation-entries" list={AssetDepreciationEntryList} />
      <Resource name="share-dividends" list={AdminShareDividendList} />
      <Resource name="share-registrations" list={ShareRegistrationList} />
      <Resource name="share-transactions" list={ShareTransactionList} />
      <Resource name="sms" list={SmsList} />
      <Resource name="sms-error-codes" list={SmsErrorCodeList} />
      <Resource name="organization-details" list={OrganizationDetailsList} />
      <Resource name="document-types" list={DocumentTypeList} />
      <Resource name="directors-and-management" list={DirectorManagementList} />
      <Resource name="documents" list={DocumentList} />
      <Resource name="departments" list={DepartmentList} />
      <Resource name="banks" list={BankList} />
      <Resource name="sites" list={SiteList} />
      <Resource name="payment-types" list={PaymentTypeList} />
      <Resource name="relationships" list={RelationshipList} />
      <Resource name="locations" list={LocationList} />
    </Admin>
  );

}

export default App
