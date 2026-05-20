import {
  Admin
} from 'react-admin'

import { dataProvider } from "./dataProvider"
import Layout from './Layout';
import { authProvider } from './components/auth/auth-provider';
import { LoginPage } from './pages/auth/login';
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
import { TransporterList, IndividualTransporterList, CompanyTransporterList, TransporterVehicleList, TransporterRouteAssignmentList, TransporterDriverList, TransporterDriverAssignmentList, TransporterBenefitList, MonthlyPayDateRangeList, PayRateList, TransporterPaymentList, DeductionsRecoveryList, TransporterPayrollList, TransporterDeductionList, TransportVehicleList, TransporterPayrollSummaryList, TransporterPayrollBankSummaryList, TransporterStatementList } from './pages/transporters/transporters-lists';

/* ============ PRODUCE MODULE ============ */
import { MilkJournalsList } from './pages/produce/milk journals/milk-journals-list';
import { MilkJournalEntriesList } from './pages/produce/milk journal entries/milk-journal-entries-list';
import { MilkRejectsList } from './pages/produce/milk rejects/milk-rejects-list';
import { MemberPayrollList } from './pages/payroll/member payroll/member-payroll-list';
import { MemberPaymentsList } from './pages/produce/member payments/member-payments-list';
import { MemberDeductionsList } from './pages/produce/member deductions/member-deductions-list';
import { MilkCansList } from './pages/produce/milk cans/milk-cans-list';
import { ProductGradesList } from './pages/produce/product grades/product-grades-list';
import { MilkDeliveryShiftsList } from './pages/produce/milk delivery shifts/milk-delivery-shifts-list';
import { MilkDeliveryReportList as ProduceMilkDeliveryReportList } from './pages/produce/milk delivery reports/milk-delivery-reports-list';
import { MemberPayrollSummaryList } from './pages/produce/member payroll summary/member-payroll-summary-list';
import { MemberStatementList } from './pages/produce/member statement/member-statement-list';
import { CoolerMilkCollectionList } from './pages/produce/cooler milk collection/cooler-milk-collection-list';
import { MilkDeliveryList } from './pages/produce/milk deliveries/milk-deliveries-list';
import { MilkLocalSalesList } from './pages/produce/milk local sales/milk-local-sales-list';
import { DailyMilkVariancesList } from './pages/produce/daily milk variances/daily-milk-variances-list';
import { StrayMilkCollectionsList } from './pages/produce/stray milk collections/stray-milk-collections-list';
import { MonthlyCollectionList } from './pages/produce/monthly collections/monthly-collections-list';
import { CanMovementsList } from './pages/produce/can movements/can-movements-list';

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
import { OrganizationAddressesList } from './pages/admin/organization/organization addresses/organization-addresses-list';
import { OrganizationBanksList } from './pages/admin/organization/organization banks/organization-banks-list';
import { OrganizationDocumentsList } from './pages/admin/organization/organization documents/organization-documents-list';
import { OrganizationKybCommentsList } from './pages/admin/organization/organization-kyb-comments-list';
import { OrganizationLeadershipsList } from './pages/admin/organization/organization leaderships/organization-leaderships-list';
import { OrganizationWalletsList } from './pages/admin/organization/organization wallets/organization-wallets-list';
import { PaymentTypeList } from './pages/admin/payment types/payment-types-list';
import { RelationshipList } from './pages/admin/relationships/relationships-list';
import { LocationList } from './pages/admin/locations/locations-list';
import { StoreSalesList } from './pages/stores/store sales/store-sales-list';
import { SuppliesList } from './pages/stores/supplies/supplies-list';
import { SupplyRejectsList } from './pages/suppliers/supply rejects/supply-rejects-list';
import { InterstoreTransferList } from './pages/stores/interstore transfer/interstore-transfer-list';
import { StoreStocksList } from './pages/stores/store stocks/store-stocks-list';
import { StoreItemsList } from './pages/stores/store items/store-items-list';
import { ItemCategoriesList } from './pages/stores/item categories/item-categories-list';
import { StoresList } from './pages/stores/stores/stores-list';
import { StoreInventoriesList } from './pages/stores/store inventories/store-inventories-list';
import { StoreStockTakingsList } from './pages/stores/store stock takings/store-stock-takings-list';
import { StoreStockMovementsList } from './pages/stores/store stock movements/store-stock-movements-list';
import { StoreStockMovementTypesList } from './pages/stores/store stock movement types/store-stock-movement-types-list';

/* ============ CUSTOMERS MODULE ============ */
import { CustomerBillingList } from './pages/customers/customer billings/customer-billings-list';
import { CustomerInvoiceList } from './pages/customers/customer invoices/customer-invoices-list';
import { CustomerPaymentList } from './pages/customers/customer payments/customer-payments-list';
import { CustomerTypeList } from './pages/customers/customer types/customer-types-list';
import { CustomerList } from './pages/customers/customers/customers-list';
import { CustomerMilkRateList } from './pages/customers/customer milk rates/customer-milk-rates-list';

/* ============ Loans MODULE ============ */
import { LoanMembersList } from './pages/loans/loan members/loan-members-list';
import { LoansList } from './pages/loans/member loans/member-loans-list';
/* ============ HUMAN RESOURCE MODULE ============ */
import { EmployeesList } from './pages/human resource/employees/employees/employees-list';
import { EmployeesDetailsList } from './pages/human resource/employees/employees-details/employees-details-list';
import { EmployeeBankAccountsList } from './pages/human resource/employees/employee-bank-accounts/employee-bank-accounts-list';
import { EmployeeContractDetailsList } from './pages/human resource/employees/employee-contract-details/employee-contract-details-list';
import { EmployeeDependantsList } from './pages/human resource/employees/employee-dependants/employee-dependants-list';
import { EmployeeDocumentsList } from './pages/human resource/employees/employee-documents/employee-documents-list';
import { EmployeeExitDetailsList } from './pages/human resource/employees/employee-exit-details/employee-exit-details-list';
import { EmployeeQualificationsList } from './pages/human resource/employees/employee-qualifications/employee-qualifications-list';
import { EmployeeDeductionTypesList } from './pages/human resource/setup/employee-deduction-types-list';
import { EmployeeLeaveTypesList } from './pages/human resource/setup/employee-leave-types-list';
import { EmployeeTerminationCategoryList } from './pages/human resource/setup/employee-termination-category-list';
import { EmployeeLeaveApplicationsList } from './pages/human resource/leave management/employee-leave-applications-list';
import { EmployeeLeaveAssignmentsList } from './pages/human resource/leave management/employee-leave-assignments-list';
import { EmployeeLeaveDetailsList } from './pages/human resource/leave management/employee-leave-details-list';
import { EmployeeBenefitsList } from './pages/human resource/payroll/employee-benefits-list';
import { EmployeePayrollBenefitsList } from './pages/human resource/payroll/employee-payroll-benefits-list';
import { EmployeePayrollDeductionsList } from './pages/human resource/payroll/employee-payroll-deductions-list';
import { EmployeePayrollReliefsList } from './pages/human resource/payroll/employee-payroll-reliefs-list';
import { EmployeePayrollsList } from './pages/human resource/payroll/employee-payrolls-list';
import { EmployeePayslipsList } from './pages/human resource/payroll/employee-payslips-list';
import { EmployeeReliefsList } from './pages/human resource/payroll/employee-reliefs-list';
import { EmployeeSalariesList } from './pages/human resource/payroll/employee-salaries-list';
/* ============ SUPPLIERS MODULE ============ */
import { SupplierCategoryList } from './pages/suppliers/supplier categories/supplier-categories-list';
import { SuppliersList } from './pages/suppliers/suppliers/suppliers-list';
import { SupplierBankAccountList } from './pages/suppliers/supplier bank accounts/supplier-bank-accounts-list';
import { SupplierContactList } from './pages/suppliers/supplier contacts/supplier-contacts-list';
import { SupplierDocumentList } from './pages/suppliers/supplier documents/supplier-documents-list';
import { SupplierQuoteList } from './pages/suppliers/supplier quotes/supplier-quotes-list';
import { PurchaseOrdersList } from './pages/suppliers/purchase orders/purchase-orders-list';
import { PurchaseRequisitionList } from './pages/suppliers/purchase requisitions/purchase-requisitions-list';

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
      <Resource name="cooler-milk-collections" list={CoolerMilkCollectionList} />
      <Resource name="milk-deliveries" list={MilkDeliveryList} />
      <Resource name="milk-local-sales" list={MilkLocalSalesList} />
      <Resource name="daily-milk-variances" list={DailyMilkVariancesList} />
      <Resource name="stray-milk-collections" list={StrayMilkCollectionsList} />
      <Resource name="monthly-collections" list={MonthlyCollectionList} />
      <Resource name="can-movements" list={CanMovementsList} />
      <Resource name="monthly-pay-date-ranges" list={MonthlyPayDateRangeList} />
      <Resource name="pay-rates" list={PayRateList} />
      <Resource name="transporter-payments" list={TransporterPaymentList} />
      <Resource name="deductions-recovery" list={DeductionsRecoveryList} />
      <Resource name="transporter-payroll" list={TransporterPayrollList} />
      <Resource name="transporter-deductions" list={TransporterDeductionList} />
      <Resource name="transport-vehicles" list={TransportVehicleList} />
      <Resource name="transporter-payroll-summary" list={TransporterPayrollSummaryList} />
      <Resource name="transporter-payroll-bank-summary" list={TransporterPayrollBankSummaryList} />
      <Resource name="transporter-statement" list={TransporterStatementList} />

      {/* Produce Module */}
      <Resource name="milk-deliveries" list={MilkDeliveryList} />
      <Resource name="milk-local-sales" list={MilkLocalSalesList} />
      <Resource name="daily-milk-variances" list={DailyMilkVariancesList} />
      <Resource name="stray-milk-collections" list={StrayMilkCollectionsList} />
      <Resource name="monthly-collections" list={MonthlyCollectionList} />
      <Resource name="can-movements" list={CanMovementsList} />
      <Resource name="milk-journals" list={MilkJournalsList} />
      <Resource name="milk-journal-entries" list={MilkJournalEntriesList} />
      <Resource name="milk-rejects" list={MilkRejectsList} />
      <Resource name="member-payroll" list={MemberPayrollList} />
      <Resource name="member-payments" list={MemberPaymentsList} />
      <Resource name="member-deductions" list={MemberDeductionsList} />
      <Resource name="milk-cans" list={MilkCansList} />
      <Resource name="product-grades" list={ProductGradesList} />
      <Resource name="milk-delivery-shifts" list={MilkDeliveryShiftsList} />
      <Resource name="milk-delivery-reports" list={ProduceMilkDeliveryReportList} />
      <Resource name="member-payroll-summary" list={MemberPayrollSummaryList} />
      <Resource name="member-statement" list={MemberStatementList} />
      <Resource name="store-sales" list={StoreSalesList} />
      <Resource name="supplies" list={SuppliesList} />
      <Resource name="supply-rejects" list={SupplyRejectsList} />
      <Resource name="inter-store-transfers" list={InterstoreTransferList} />
      <Resource name="store-stocks" list={StoreStocksList} />
      <Resource name="store-items" list={StoreItemsList} />
      <Resource name="item-categories" list={ItemCategoriesList} />
      <Resource name="stores" list={StoresList} />
      <Resource name="store-inventories" list={StoreInventoriesList} />
      <Resource name="store-stock-takings" list={StoreStockTakingsList} />
      <Resource name="store-stock-movements" list={StoreStockMovementsList} />
      <Resource name="store-stock-movement-types" list={StoreStockMovementTypesList} />

      {/* Customers Module */}
      <Resource name="customer-billings" list={CustomerBillingList} />
      <Resource name="customer-invoices" list={CustomerInvoiceList} />
      <Resource name="customer-payments" list={CustomerPaymentList} />
      <Resource name="customer-types" list={CustomerTypeList} />
      <Resource name="customers" list={CustomerList} />
      <Resource name="customer-milk-rates" list={CustomerMilkRateList} />

      {/* Loans Module */}
      <Resource name="loan-accounts" list={LoanMembersList} />
      <Resource name="loans" list={LoansList} />
      <Resource name="loan-report" list={OrganizationDetailsList} />
      <Resource name="loan-portfolio-report" list={OrganizationDetailsList} />

      {/* Human Resource Module */}
      <Resource name="employees" list={EmployeesList} />
      <Resource name="employees-details" list={EmployeesDetailsList} />
      <Resource name="employee-bank-accounts" list={EmployeeBankAccountsList} />
      <Resource name="employee-contract-details" list={EmployeeContractDetailsList} />
      <Resource name="employee-dependants" list={EmployeeDependantsList} />
      <Resource name="employee-documents" list={EmployeeDocumentsList} />
      <Resource name="employee-exit-details" list={EmployeeExitDetailsList} />
      <Resource name="employee-qualifications" list={EmployeeQualificationsList} />
      <Resource name="employee-deduction-types" list={EmployeeDeductionTypesList} />
      <Resource name="employee-leave-types" list={EmployeeLeaveTypesList} />
      <Resource name="employee-termination-categories" list={EmployeeTerminationCategoryList} />
      <Resource name="employee-leave-applications" list={EmployeeLeaveApplicationsList} />
      <Resource name="employee-leave-assignments" list={EmployeeLeaveAssignmentsList} />
      <Resource name="employee-leave-details" list={EmployeeLeaveDetailsList} />
      <Resource name="employee-benefits" list={EmployeeBenefitsList} />
      <Resource name="employee-payroll-benefits" list={EmployeePayrollBenefitsList} />
      <Resource name="employee-payroll-deductions" list={EmployeePayrollDeductionsList} />
      <Resource name="employee-payroll-reliefs" list={EmployeePayrollReliefsList} />
      <Resource name="employee-payrolls" list={EmployeePayrollsList} />
      <Resource name="employee-payslips" list={EmployeePayslipsList} />
      <Resource name="employee-reliefs" list={EmployeeReliefsList} />
      <Resource name="employee-salaries" list={EmployeeSalariesList} />

      {/* Suppliers Module */}
      <Resource name="supplier-categories" list={SupplierCategoryList} />
      <Resource name="suppliers" list={SuppliersList} />
      <Resource name="supplier-bank-accounts" list={SupplierBankAccountList} />
      <Resource name="supplier-contacts" list={SupplierContactList} />
      <Resource name="supplier-documents" list={SupplierDocumentList} />
      <Resource name="supplier-quotes" list={SupplierQuoteList} />
      <Resource name="purchase-orders" list={PurchaseOrdersList} />
      <Resource name="purchase-requisitions" list={PurchaseRequisitionList} />

      {/* Admin Module */}
      <Resource name="licence" list={LicenceList} />
      <Resource name="activity-logs" list={ListGuesser} />
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
      <Resource name="organization-addresses" list={OrganizationAddressesList} />
      <Resource name="organization-banks" list={OrganizationBanksList} />
      <Resource name="organization-documents" list={OrganizationDocumentsList} />
      <Resource name="organization-kyb-comments" list={OrganizationKybCommentsList} />
      <Resource name="organization-leaderships" list={OrganizationLeadershipsList} />
      <Resource name="organization-wallets" list={OrganizationWalletsList} />
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
