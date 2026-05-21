import {
  Admin,
  ListGuesser,
  Resource,
} from 'react-admin';

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
import { ExchangeVisitCreate, ExchangeVisitEdit, ExchangeVisitShow } from './pages/members/exchange visits/ExchangeVisitPages';
import { ExchangeVisitAttendeesList } from './pages/members/exchange visit attendees/exchange-visit-attendees-list';
import { ExchangeVisitAttendeeCreate, ExchangeVisitAttendeeEdit, ExchangeVisitAttendeeShow } from './pages/members/exchange visit attendees/ExchangeVisitAttendeePages';
import { ShareTypeList } from './pages/members/share types/share-types-list';
import { MemberShareList } from './pages/members/member shares/member-shares-list';
import { ShareTransactionList } from './pages/members/share transactions/share-transactions-list';
import { SharePaymentList } from './pages/members/share payments/share-payments-list';
import { ShareTransferList } from './pages/members/share transfers/share-transfers-list';
import { DividendDeclarationList } from './pages/members/dividend declarations/dividend-declarations-list';
import { DividendDeclarationCreate, DividendDeclarationEdit, DividendDeclarationShow } from './pages/members/dividend declarations/DividendDeclarationPages';
import { ShareDividendList as MemberShareDividendList } from './pages/members/dividends/dividends-list';
import { ShareDividendCreate as MemberShareDividendCreate, ShareDividendEdit as MemberShareDividendEdit, ShareDividendShow as MemberShareDividendShow } from './pages/members/dividends/ShareDividendPages';
import { MemberWithMissingDetailsList } from './pages/members/reports/member-with-missing-details-list';

/* ============ TRANSPORTERS MODULE ============ */
import { TransporterList, IndividualTransporterList, CompanyTransporterList, TransporterVehicleList, TransporterRouteAssignmentList, TransporterDriverList, TransporterDriverAssignmentList, TransporterBenefitList, MonthlyPayDateRangeList, PayRateList, TransporterPaymentList, DeductionsRecoveryList, TransporterPayrollList, TransporterDeductionList, TransportVehicleList, TransporterPayrollSummaryList, TransporterPayrollBankSummaryList, TransporterStatementList } from './pages/transporters/transporters-lists';
import { TransporterCreate, TransporterEdit, TransporterShow } from './pages/transporters/TransporterPages';
import { IndividualTransporterCreate, IndividualTransporterEdit, IndividualTransporterShow } from './pages/transporters/IndividualTransporterPages';
import { CompanyTransporterCreate, CompanyTransporterEdit, CompanyTransporterShow } from './pages/transporters/CompanyTransporterPages';
import { TransporterVehicleCreate, TransporterVehicleEdit, TransporterVehicleShow } from './pages/transporters/TransporterVehiclePages';
import { TransporterRouteAssignmentCreate, TransporterRouteAssignmentEdit, TransporterRouteAssignmentShow } from './pages/transporters/TransporterRouteAssignmentPages';
import { TransporterDriverCreate, TransporterDriverEdit, TransporterDriverShow } from './pages/transporters/TransporterDriverPages';
import { TransporterDriverAssignmentCreate, TransporterDriverAssignmentEdit, TransporterDriverAssignmentShow } from './pages/transporters/TransporterDriverAssignmentPages';
import { TransporterBenefitCreate, TransporterBenefitEdit, TransporterBenefitShow } from './pages/transporters/TransporterBenefitPages';
import { MonthlyPayDateRangeCreate, MonthlyPayDateRangeEdit, MonthlyPayDateRangeShow } from './pages/transporters/MonthlyPayDateRangePages';
import { PayRateCreate, PayRateEdit, PayRateShow } from './pages/transporters/PayRatePages';
import { TransporterPaymentCreate, TransporterPaymentEdit, TransporterPaymentShow } from './pages/transporters/TransporterPaymentPages';
import { DeductionRecoveryCreate, DeductionRecoveryEdit, DeductionRecoveryShow } from './pages/transporters/DeductionRecoveryPages';
import { TransporterPayrollCreate, TransporterPayrollEdit, TransporterPayrollShow } from './pages/transporters/TransporterPayrollPages';
import { TransporterDeductionCreate, TransporterDeductionEdit, TransporterDeductionShow } from './pages/transporters/TransporterDeductionPages';
import { TransportVehicleCreate, TransportVehicleEdit, TransportVehicleShow } from './pages/transporters/TransportVehiclePages';
import { TransporterPayrollSummaryCreate, TransporterPayrollSummaryEdit, TransporterPayrollSummaryShow } from './pages/transporters/TransporterPayrollSummaryPages';
import { TransporterPayrollBankSummaryCreate, TransporterPayrollBankSummaryEdit, TransporterPayrollBankSummaryShow } from './pages/transporters/TransporterPayrollBankSummaryPages';
import { TransporterStatementCreate, TransporterStatementEdit, TransporterStatementShow } from './pages/transporters/TransporterStatementPages';

/* ============ PRODUCE MODULE ============ */
import { MilkJournalsList } from './pages/produce/milk journals/milk-journals-list';
import { MilkJournalCreate } from './pages/produce/milk journals/MilkJournalCreate';
import { MilkJournalEdit } from './pages/produce/milk journals/MilkJournalEdit';
import { MilkJournalShow } from './pages/produce/milk journals/MilkJournalShow';
import { MilkJournalEntriesList } from './pages/produce/milk journal entries/milk-journal-entries-list';
import { MilkJournalEntryCreate } from './pages/produce/milk journal entries/MilkJournalEntryCreate';
import { MilkJournalEntryEdit } from './pages/produce/milk journal entries/MilkJournalEntryEdit';
import { MilkJournalEntryShow } from './pages/produce/milk journal entries/MilkJournalEntryShow';
import { MilkRejectsList } from './pages/produce/milk rejects/milk-rejects-list';
import { MilkRejectCreate } from './pages/produce/milk rejects/MilkRejectCreate';
import { MilkRejectEdit } from './pages/produce/milk rejects/MilkRejectEdit';
import { MilkRejectShow } from './pages/produce/milk rejects/MilkRejectShow';
import { MemberPayrollList } from './pages/payroll/member payroll/member-payroll-list';
import { MemberPaymentsList } from './pages/produce/member payments/member-payments-list';
import { MemberPaymentCreate } from './pages/produce/member payments/MemberPaymentCreate';
import { MemberPaymentEdit } from './pages/produce/member payments/MemberPaymentEdit';
import { MemberPaymentShow } from './pages/produce/member payments/MemberPaymentShow';
import { MemberDeductionsList } from './pages/produce/member deductions/member-deductions-list';
import { MemberDeductionCreate } from './pages/produce/member deductions/MemberDeductionCreate';
import { MemberDeductionEdit } from './pages/produce/member deductions/MemberDeductionEdit';
import { MemberDeductionShow } from './pages/produce/member deductions/MemberDeductionShow';
import { MilkCansList } from './pages/produce/milk cans/milk-cans-list';
import { MilkCanCreate } from './pages/produce/milk cans/MilkCanCreate';
import { MilkCanEdit } from './pages/produce/milk cans/MilkCanEdit';
import { MilkCanShow } from './pages/produce/milk cans/MilkCanShow';
import { ProductGradesList } from './pages/produce/product grades/product-grades-list';
import { ProductGradeCreate } from './pages/produce/product grades/ProductGradeCreate';
import { ProductGradeEdit } from './pages/produce/product grades/ProductGradeEdit';
import { ProductGradeShow } from './pages/produce/product grades/ProductGradeShow';
import { MilkDeliveryShiftsList } from './pages/produce/milk delivery shifts/milk-delivery-shifts-list';
import { MilkDeliveryShiftCreate } from './pages/produce/milk delivery shifts/MilkDeliveryShiftCreate';
import { MilkDeliveryShiftEdit } from './pages/produce/milk delivery shifts/MilkDeliveryShiftEdit';
import { MilkDeliveryShiftShow } from './pages/produce/milk delivery shifts/MilkDeliveryShiftShow';
import { MilkDeliveryReportList as ProduceMilkDeliveryReportList } from './pages/produce/milk delivery reports/milk-delivery-reports-list';
import { MilkDeliveryReportCreate } from './pages/produce/milk delivery reports/MilkDeliveryReportCreate';
import { MilkDeliveryReportEdit } from './pages/produce/milk delivery reports/MilkDeliveryReportEdit';
import { MilkDeliveryReportShow } from './pages/produce/milk delivery reports/MilkDeliveryReportShow';
import { MemberPayrollSummaryList } from './pages/produce/member payroll summary/member-payroll-summary-list';
import { MemberPayrollSummaryCreate } from './pages/produce/member payroll summary/MemberPayrollSummaryCreate';
import { MemberPayrollSummaryEdit } from './pages/produce/member payroll summary/MemberPayrollSummaryEdit';
import { MemberPayrollSummaryShow } from './pages/produce/member payroll summary/MemberPayrollSummaryShow';
import { MemberStatementList } from './pages/produce/member statement/member-statement-list';
import { MemberStatementCreate } from './pages/produce/member statement/MemberStatementCreate';
import { MemberStatementEdit } from './pages/produce/member statement/MemberStatementEdit';
import { MemberStatementShow } from './pages/produce/member statement/MemberStatementShow';
import { CoolerMilkCollectionList } from './pages/produce/cooler milk collection/cooler-milk-collection-list';
import { CoolerMilkCollectionCreate } from './pages/produce/cooler milk collection/CoolerMilkCollectionCreate';
import { CoolerMilkCollectionEdit } from './pages/produce/cooler milk collection/CoolerMilkCollectionEdit';
import { CoolerMilkCollectionShow } from './pages/produce/cooler milk collection/CoolerMilkCollectionShow';
import { MilkDeliveryList } from './pages/produce/milk deliveries/milk-deliveries-list';
import { MilkDeliveryCreate } from './pages/produce/milk deliveries/MilkDeliveryCreate';
import { MilkDeliveryEdit } from './pages/produce/milk deliveries/MilkDeliveryEdit';
import { MilkDeliveryShow } from './pages/produce/milk deliveries/MilkDeliveryShow';
import { MilkLocalSalesList } from './pages/produce/milk local sales/milk-local-sales-list';
import { MilkLocalSaleCreate } from './pages/produce/milk local sales/MilkLocalSaleCreate';
import { MilkLocalSaleEdit } from './pages/produce/milk local sales/MilkLocalSaleEdit';
import { MilkLocalSaleShow } from './pages/produce/milk local sales/MilkLocalSaleShow';
import { DailyMilkVariancesList } from './pages/produce/daily milk variances/daily-milk-variances-list';
import { DailyMilkVarianceCreate } from './pages/produce/daily milk variances/DailyMilkVarianceCreate';
import { DailyMilkVarianceEdit } from './pages/produce/daily milk variances/DailyMilkVarianceEdit';
import { DailyMilkVarianceShow } from './pages/produce/daily milk variances/DailyMilkVarianceShow';
import { StrayMilkCollectionsList } from './pages/produce/stray milk collections/stray-milk-collections-list';
import { StrayMilkCollectionCreate } from './pages/produce/stray milk collections/StrayMilkCollectionCreate';
import { StrayMilkCollectionEdit } from './pages/produce/stray milk collections/StrayMilkCollectionEdit';
import { StrayMilkCollectionShow } from './pages/produce/stray milk collections/StrayMilkCollectionShow';
import { MonthlyCollectionList } from './pages/produce/monthly collections/monthly-collections-list';
import { MonthlyCollectionCreate } from './pages/produce/monthly collections/MonthlyCollectionCreate';
import { MonthlyCollectionEdit } from './pages/produce/monthly collections/MonthlyCollectionEdit';
import { MonthlyCollectionShow } from './pages/produce/monthly collections/MonthlyCollectionShow';
import { CanMovementsList } from './pages/produce/can movements/can-movements-list';
import { CanMovementCreate } from './pages/produce/can movements/CanMovementCreate';
import { CanMovementEdit } from './pages/produce/can movements/CanMovementEdit';
import { CanMovementShow } from './pages/produce/can movements/CanMovementShow';

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
import { StoreSaleCreate } from './pages/stores/store sales/StoreSaleCreate';
import { StoreSaleEdit } from './pages/stores/store sales/StoreSaleEdit';
import { StoreSaleShow } from './pages/stores/store sales/StoreSaleShow';
import { SuppliesList } from './pages/stores/supplies/supplies-list';
import { SupplyCreate } from './pages/stores/supplies/SupplyCreate';
import { SupplyEdit } from './pages/stores/supplies/SupplyEdit';
import { SupplyShow } from './pages/stores/supplies/SupplyShow';
import { SupplyRejectsList } from './pages/suppliers/supply rejects/supply-rejects-list';
import { SupplyRejectCreate } from './pages/suppliers/supply rejects/SupplyRejectCreate';
import { SupplyRejectEdit } from './pages/suppliers/supply rejects/SupplyRejectEdit';
import { SupplyRejectShow } from './pages/suppliers/supply rejects/SupplyRejectShow';
import { InterstoreTransferList } from './pages/stores/interstore transfer/interstore-transfer-list';
import { InterstoreTransferCreate } from './pages/stores/interstore transfer/InterstoreTransferCreate';
import { InterstoreTransferEdit } from './pages/stores/interstore transfer/InterstoreTransferEdit';
import { InterstoreTransferShow } from './pages/stores/interstore transfer/InterstoreTransferShow';
import { StoreStocksList } from './pages/stores/store stocks/store-stocks-list';
import { StoreStockCreate } from './pages/stores/store stocks/StoreStockCreate';
import { StoreStockEdit } from './pages/stores/store stocks/StoreStockEdit';
import { StoreStockShow } from './pages/stores/store stocks/StoreStockShow';
import { StoreItemsList } from './pages/stores/store items/store-items-list';
import { ItemCategoriesList } from './pages/stores/item categories/item-categories-list';
import { StoresList } from './pages/stores/stores/stores-list';
import { StoreCreate } from './pages/stores/stores/StoreCreate';
import { StoreEdit } from './pages/stores/stores/StoreEdit';
import { StoreShow } from './pages/stores/stores/StoreShow';
import { StoreInventoriesList } from './pages/stores/store inventories/store-inventories-list';
import { StoreInventoryCreate } from './pages/stores/store inventories/StoreInventoryCreate';
import { StoreInventoryEdit } from './pages/stores/store inventories/StoreInventoryEdit';
import { StoreInventoryShow } from './pages/stores/store inventories/StoreInventoryShow';
import { StoreStockTakingsList } from './pages/stores/store stock takings/store-stock-takings-list';
import { StoreStockTakingCreate } from './pages/stores/store stock takings/StoreStockTakingCreate';
import { StoreStockTakingEdit } from './pages/stores/store stock takings/StoreStockTakingEdit';
import { StoreStockTakingShow } from './pages/stores/store stock takings/StoreStockTakingShow';
import { StoreStockMovementsList } from './pages/stores/store stock movements/store-stock-movements-list';
import { StoreStockMovementCreate } from './pages/stores/store stock movements/StoreStockMovementCreate';
import { StoreStockMovementEdit } from './pages/stores/store stock movements/StoreStockMovementEdit';
import { StoreStockMovementShow } from './pages/stores/store stock movements/StoreStockMovementShow';
import { StoreStockMovementTypesList } from './pages/stores/store stock movement types/store-stock-movement-types-list';
import { StoreStockMovementTypeCreate } from './pages/stores/store stock movement types/StoreStockMovementTypeCreate';
import { StoreStockMovementTypeEdit } from './pages/stores/store stock movement types/StoreStockMovementTypeEdit';
import { StoreStockMovementTypeShow } from './pages/stores/store stock movement types/StoreStockMovementTypeShow';
import { StoreItemCreate } from './pages/stores/store items/StoreItemCreate';
import { StoreItemEdit } from './pages/stores/store items/StoreItemEdit';
import { StoreItemShow } from './pages/stores/store items/StoreItemShow';
import { ItemCategoryCreate } from './pages/stores/item categories/ItemCategoryCreate';
import { ItemCategoryEdit } from './pages/stores/item categories/ItemCategoryEdit';
import { ItemCategoryShow } from './pages/stores/item categories/ItemCategoryShow';
import { PaymentTermsList } from './pages/stores/payment terms/payment-terms-list';
import { PaymentTermCreate } from './pages/stores/payment terms/PaymentTermCreate';
import { PaymentTermEdit } from './pages/stores/payment terms/PaymentTermEdit';
import { PaymentTermShow } from './pages/stores/payment terms/PaymentTermShow';

/* ============ CUSTOMERS MODULE ============ */
import { CustomerBillingList } from './pages/customers/customer billings/customer-billings-list';
import { CustomerBillingCreate } from './pages/customers/customer billings/CustomerBillingCreate';
import { CustomerBillingEdit } from './pages/customers/customer billings/CustomerBillingEdit';
import { CustomerBillingShow } from './pages/customers/customer billings/CustomerBillingShow';
import { CustomerInvoiceList } from './pages/customers/customer invoices/customer-invoices-list';
import { CustomerInvoiceCreate } from './pages/customers/customer invoices/CustomerInvoiceCreate';
import { CustomerInvoiceEdit } from './pages/customers/customer invoices/CustomerInvoiceEdit';
import { CustomerInvoiceShow } from './pages/customers/customer invoices/CustomerInvoiceShow';
import { CustomerPaymentList } from './pages/customers/customer payments/customer-payments-list';
import { CustomerPaymentCreate } from './pages/customers/customer payments/CustomerPaymentCreate';
import { CustomerPaymentEdit } from './pages/customers/customer payments/CustomerPaymentEdit';
import { CustomerPaymentShow } from './pages/customers/customer payments/CustomerPaymentShow';
import { CustomerTypeList } from './pages/customers/customer types/customer-types-list';
import { CustomerTypeCreate } from './pages/customers/customer types/CustomerTypeCreate';
import { CustomerTypeEdit } from './pages/customers/customer types/CustomerTypeEdit';
import { CustomerTypeShow } from './pages/customers/customer types/CustomerTypeShow';
import { CustomerList } from './pages/customers/customers/customers-list';
import { CustomerCreate } from './pages/customers/customers/CustomerCreate';
import { CustomerEdit } from './pages/customers/customers/CustomerEdit';
import { CustomerShow } from './pages/customers/customers/CustomerShow';
import { CustomerMilkRateList } from './pages/customers/customer milk rates/customer-milk-rates-list';
import { CustomerMilkRateCreate } from './pages/customers/customer milk rates/CustomerMilkRateCreate';
import { CustomerMilkRateEdit } from './pages/customers/customer milk rates/CustomerMilkRateEdit';
import { CustomerMilkRateShow } from './pages/customers/customer milk rates/CustomerMilkRateShow';

/* ============ Loans MODULE ============ */
import { LoanMembersList } from './pages/loans/loan members/loan-members-list';
import { LoansList } from './pages/loans/member loans/member-loans-list';

/* ============ HUMAN RESOURCE MODULE ============ */
import { EmployeesList } from './pages/human resource/employees/employees/employees-list';
import { EmployeeCreate } from './pages/human resource/employees/employees/EmployeeCreate';
import { EmployeeEdit } from './pages/human resource/employees/employees/EmployeeEdit';
import { EmployeeShow } from './pages/human resource/employees/employees/EmployeeShow';
import { EmployeesDetailsList } from './pages/human resource/employees/employees-details/employees-details-list';
import { EmployeeDetailCreate } from './pages/human resource/employees/employees-details/EmployeeDetailCreate';
import { EmployeeDetailEdit } from './pages/human resource/employees/employees-details/EmployeeDetailEdit';
import { EmployeeDetailShow } from './pages/human resource/employees/employees-details/EmployeeDetailShow';
import { EmployeeBankAccountsList } from './pages/human resource/employees/employee-bank-accounts/employee-bank-accounts-list';
import { EmployeeBankAccountCreate } from './pages/human resource/employees/employee-bank-accounts/EmployeeBankAccountCreate';
import { EmployeeBankAccountEdit } from './pages/human resource/employees/employee-bank-accounts/EmployeeBankAccountEdit';
import { EmployeeBankAccountShow } from './pages/human resource/employees/employee-bank-accounts/EmployeeBankAccountShow';
import { EmployeeContractDetailsList } from './pages/human resource/employees/employee-contract-details/employee-contract-details-list';
import { EmployeeContractDetailCreate } from './pages/human resource/employees/employee-contract-details/EmployeeContractDetailCreate';
import { EmployeeContractDetailEdit } from './pages/human resource/employees/employee-contract-details/EmployeeContractDetailEdit';
import { EmployeeContractDetailShow } from './pages/human resource/employees/employee-contract-details/EmployeeContractDetailShow';
import { EmployeeDependantsList } from './pages/human resource/employees/employee-dependants/employee-dependants-list';
import { EmployeeDependantCreate } from './pages/human resource/employees/employee-dependants/EmployeeDependantCreate';
import { EmployeeDependantEdit } from './pages/human resource/employees/employee-dependants/EmployeeDependantEdit';
import { EmployeeDependantShow } from './pages/human resource/employees/employee-dependants/EmployeeDependantShow';
import { EmployeeDocumentsList } from './pages/human resource/employees/employee-documents/employee-documents-list';
import { EmployeeDocumentCreate } from './pages/human resource/employees/employee-documents/EmployeeDocumentCreate';
import { EmployeeDocumentEdit } from './pages/human resource/employees/employee-documents/EmployeeDocumentEdit';
import { EmployeeDocumentShow } from './pages/human resource/employees/employee-documents/EmployeeDocumentShow';
import { EmployeeExitDetailsList } from './pages/human resource/employees/employee-exit-details/employee-exit-details-list';
import { EmployeeExitDetailCreate } from './pages/human resource/employees/employee-exit-details/EmployeeExitDetailCreate';
import { EmployeeExitDetailEdit } from './pages/human resource/employees/employee-exit-details/EmployeeExitDetailEdit';
import { EmployeeExitDetailShow } from './pages/human resource/employees/employee-exit-details/EmployeeExitDetailShow';
import { EmployeeQualificationsList } from './pages/human resource/employees/employee-qualifications/employee-qualifications-list';
import { EmployeeQualificationCreate } from './pages/human resource/employees/employee-qualifications/EmployeeQualificationCreate';
import { EmployeeQualificationEdit } from './pages/human resource/employees/employee-qualifications/EmployeeQualificationEdit';
import { EmployeeQualificationShow } from './pages/human resource/employees/employee-qualifications/EmployeeQualificationShow';
import { EmployeeDeductionTypesList } from './pages/human resource/setup/employee-deduction-types-list';
import { EmployeeDeductionTypeCreate } from './pages/human resource/setup/EmployeeDeductionTypeCreate';
import { EmployeeDeductionTypeEdit } from './pages/human resource/setup/EmployeeDeductionTypeEdit';
import { EmployeeDeductionTypeShow } from './pages/human resource/setup/EmployeeDeductionTypeShow';
import { EmployeeLeaveTypesList } from './pages/human resource/setup/employee-leave-types-list';
import { EmployeeLeaveTypeCreate } from './pages/human resource/setup/EmployeeLeaveTypeCreate';
import { EmployeeLeaveTypeEdit } from './pages/human resource/setup/EmployeeLeaveTypeEdit';
import { EmployeeLeaveTypeShow } from './pages/human resource/setup/EmployeeLeaveTypeShow';
import { EmployeeTerminationCategoryList } from './pages/human resource/setup/employee-termination-category-list';
import { EmployeeTerminationCategoryCreate } from './pages/human resource/setup/EmployeeTerminationCategoryCreate';
import { EmployeeTerminationCategoryEdit } from './pages/human resource/setup/EmployeeTerminationCategoryEdit';
import { EmployeeTerminationCategoryShow } from './pages/human resource/setup/EmployeeTerminationCategoryShow';
import { EmployeeLeaveApplicationsList } from './pages/human resource/leave management/employee-leave-applications-list';
import { EmployeeLeaveApplicationCreate } from './pages/human resource/leave management/EmployeeLeaveApplicationCreate';
import { EmployeeLeaveApplicationEdit } from './pages/human resource/leave management/EmployeeLeaveApplicationEdit';
import { EmployeeLeaveApplicationShow } from './pages/human resource/leave management/EmployeeLeaveApplicationShow';
import { EmployeeLeaveAssignmentsList } from './pages/human resource/leave management/employee-leave-assignments-list';
import { EmployeeLeaveAssignmentCreate } from './pages/human resource/leave management/EmployeeLeaveAssignmentCreate';
import { EmployeeLeaveAssignmentEdit } from './pages/human resource/leave management/EmployeeLeaveAssignmentEdit';
import { EmployeeLeaveAssignmentShow } from './pages/human resource/leave management/EmployeeLeaveAssignmentShow';
import { EmployeeLeaveDetailsList } from './pages/human resource/leave management/employee-leave-details-list';
import { EmployeeLeaveDetailCreate } from './pages/human resource/leave management/EmployeeLeaveDetailCreate';
import { EmployeeLeaveDetailEdit } from './pages/human resource/leave management/EmployeeLeaveDetailEdit';
import { EmployeeLeaveDetailShow } from './pages/human resource/leave management/EmployeeLeaveDetailShow';
import { EmployeeBenefitsList } from './pages/human resource/payroll/employee-benefits-list';
import { EmployeeBenefitCreate } from './pages/human resource/payroll/EmployeeBenefitCreate';
import { EmployeeBenefitEdit } from './pages/human resource/payroll/EmployeeBenefitEdit';
import { EmployeeBenefitShow } from './pages/human resource/payroll/EmployeeBenefitShow';
import { EmployeePayrollBenefitsList } from './pages/human resource/payroll/employee-payroll-benefits-list';
import { EmployeePayrollBenefitCreate } from './pages/human resource/payroll/EmployeePayrollBenefitCreate';
import { EmployeePayrollBenefitEdit } from './pages/human resource/payroll/EmployeePayrollBenefitEdit';
import { EmployeePayrollBenefitShow } from './pages/human resource/payroll/EmployeePayrollBenefitShow';
import { EmployeePayrollDeductionsList } from './pages/human resource/payroll/employee-payroll-deductions-list';
import { EmployeePayrollDeductionCreate } from './pages/human resource/payroll/EmployeePayrollDeductionCreate';
import { EmployeePayrollDeductionEdit } from './pages/human resource/payroll/EmployeePayrollDeductionEdit';
import { EmployeePayrollDeductionShow } from './pages/human resource/payroll/EmployeePayrollDeductionShow';
import { EmployeePayrollReliefsList } from './pages/human resource/payroll/employee-payroll-reliefs-list';
import { EmployeePayrollReliefCreate } from './pages/human resource/payroll/EmployeePayrollReliefCreate';
import { EmployeePayrollReliefEdit } from './pages/human resource/payroll/EmployeePayrollReliefEdit';
import { EmployeePayrollReliefShow } from './pages/human resource/payroll/EmployeePayrollReliefShow';
import { EmployeePayrollsList } from './pages/human resource/payroll/employee-payrolls-list';
import { EmployeePayrollCreate } from './pages/human resource/payroll/EmployeePayrollCreate';
import { EmployeePayrollEdit } from './pages/human resource/payroll/EmployeePayrollEdit';
import { EmployeePayrollShow } from './pages/human resource/payroll/EmployeePayrollShow';
import { EmployeePayslipsList } from './pages/human resource/payroll/employee-payslips-list';
import { EmployeePayslipCreate } from './pages/human resource/payroll/EmployeePayslipCreate';
import { EmployeePayslipEdit } from './pages/human resource/payroll/EmployeePayslipEdit';
import { EmployeePayslipShow } from './pages/human resource/payroll/EmployeePayslipShow';
import { EmployeeReliefsList } from './pages/human resource/payroll/employee-reliefs-list';
import { EmployeeReliefCreate } from './pages/human resource/payroll/EmployeeReliefCreate';
import { EmployeeReliefEdit } from './pages/human resource/payroll/EmployeeReliefEdit';
import { EmployeeReliefShow } from './pages/human resource/payroll/EmployeeReliefShow';
import { EmployeeSalariesList } from './pages/human resource/payroll/employee-salaries-list';
import { EmployeeSalaryCreate } from './pages/human resource/payroll/EmployeeSalaryCreate';
import { EmployeeSalaryEdit } from './pages/human resource/payroll/EmployeeSalaryEdit';
import { EmployeeSalaryShow } from './pages/human resource/payroll/EmployeeSalaryShow';
/* ============ SUPPLIERS MODULE ============ */
import { SupplierCategoryList } from './pages/suppliers/supplier categories/supplier-categories-list';
import { SupplierCategoryCreate } from './pages/suppliers/supplier categories/SupplierCategoryCreate';
import { SupplierCategoryEdit } from './pages/suppliers/supplier categories/SupplierCategoryEdit';
import { SupplierCategoryShow } from './pages/suppliers/supplier categories/SupplierCategoryShow';
import { SuppliersList } from './pages/suppliers/suppliers/suppliers-list';
import { SupplierCreate } from './pages/suppliers/suppliers/SupplierCreate';
import { SupplierEdit } from './pages/suppliers/suppliers/SupplierEdit';
import { SupplierShow } from './pages/suppliers/suppliers/SupplierShow';
import { SupplierBankAccountList } from './pages/suppliers/supplier bank accounts/supplier-bank-accounts-list';
import { SupplierContactList } from './pages/suppliers/supplier contacts/supplier-contacts-list';
import { SupplierContactCreate } from './pages/suppliers/supplier contacts/SupplierContactCreate';
import { SupplierContactEdit } from './pages/suppliers/supplier contacts/SupplierContactEdit';
import { SupplierContactShow } from './pages/suppliers/supplier contacts/SupplierContactShow';
import { SupplierDocumentList } from './pages/suppliers/supplier documents/supplier-documents-list';
import { SupplierDocumentCreate } from './pages/suppliers/supplier documents/SupplierDocumentCreate';
import { SupplierDocumentEdit } from './pages/suppliers/supplier documents/SupplierDocumentEdit';
import { SupplierDocumentShow } from './pages/suppliers/supplier documents/SupplierDocumentShow';
import { SupplierQuoteList } from './pages/suppliers/supplier quotes/supplier-quotes-list';
import { SupplierQuoteCreate } from './pages/suppliers/supplier quotes/SupplierQuoteCreate';
import { SupplierQuoteEdit } from './pages/suppliers/supplier quotes/SupplierQuoteEdit';
import { SupplierQuoteShow } from './pages/suppliers/supplier quotes/SupplierQuoteShow';
import { PurchaseOrdersList } from './pages/suppliers/purchase orders/purchase-orders-list';
import { PurchaseOrderCreate } from './pages/suppliers/purchase orders/PurchaseOrderCreate';
import { PurchaseOrderEdit } from './pages/suppliers/purchase orders/PurchaseOrderEdit';
import { PurchaseOrderShow } from './pages/suppliers/purchase orders/PurchaseOrderShow';
import { PurchaseRequisitionList } from './pages/suppliers/purchase requisitions/purchase-requisitions-list';
import { PurchaseRequisitionCreate } from './pages/suppliers/purchase requisitions/PurchaseRequisitionCreate';
import { PurchaseRequisitionEdit } from './pages/suppliers/purchase requisitions/PurchaseRequisitionEdit';
import { PurchaseRequisitionShow } from './pages/suppliers/purchase requisitions/PurchaseRequisitionShow';


/* ============ SMS MODULE ============ */
import { SmsCampaignRecipientsList } from './pages/sms/sms-campaign-recipients/sms-campaign-recipients-list';
import { SmsCampaignRecipientCreate } from './pages/sms/sms-campaign-recipients/SmsCampaignRecipientCreate';
import { SmsCampaignRecipientEdit } from './pages/sms/sms-campaign-recipients/SmsCampaignRecipientEdit';
import { SmsCampaignRecipientShow } from './pages/sms/sms-campaign-recipients/SmsCampaignRecipientShow';
import { SmsCampaignsList } from './pages/sms/sms-campaigns/sms-campaigns-list';
import { SmsCampaignCreate } from './pages/sms/sms-campaigns/SmsCampaignCreate';
import { SmsCampaignEdit } from './pages/sms/sms-campaigns/SmsCampaignEdit';
import { SmsCampaignShow } from './pages/sms/sms-campaigns/SmsCampaignShow';
import { SmsContactsList } from './pages/sms/sms-contacts/sms-contacts-list';
import { SmsContactCreate } from './pages/sms/sms-contacts/SmsContactCreate';
import { SmsContactEdit } from './pages/sms/sms-contacts/SmsContactEdit';
import { SmsContactShow } from './pages/sms/sms-contacts/SmsContactShow';
import { SmsGroupsList } from './pages/sms/sms-groups/sms-groups-list';
import { SmsGroupCreate } from './pages/sms/sms-groups/SmsGroupCreate';
import { SmsGroupEdit } from './pages/sms/sms-groups/SmsGroupEdit';
import { SmsGroupShow } from './pages/sms/sms-groups/SmsGroupShow';
import { SmsMessagesList } from './pages/sms/sms-messages/sms-messages-list';
import { SmsMessageCreate } from './pages/sms/sms-messages/SmsMessageCreate';
import { SmsMessageEdit } from './pages/sms/sms-messages/SmsMessageEdit';
import { SmsMessageShow } from './pages/sms/sms-messages/SmsMessageShow';
import { SmsProvidersList } from './pages/sms/sms-providers/sms-providers-list';
import { SmsProviderCreate } from './pages/sms/sms-providers/SmsProviderCreate';
import { SmsProviderEdit } from './pages/sms/sms-providers/SmsProviderEdit';
import { SmsProviderShow } from './pages/sms/sms-providers/SmsProviderShow';
import { SmsQueueList } from './pages/sms/sms-queue/sms-queue-list';
import { SmsQueueCreate } from './pages/sms/sms-queue/SmsQueueCreate';
import { SmsQueueEdit } from './pages/sms/sms-queue/SmsQueueEdit';
import { SmsQueueShow } from './pages/sms/sms-queue/SmsQueueShow';
import { SmsTemplatesList } from './pages/sms/sms-templates/sms-templates-list';
import { SmsTemplateCreate } from './pages/sms/sms-templates/SmsTemplateCreate';
import { SmsTemplateEdit } from './pages/sms/sms-templates/SmsTemplateEdit';
import { SmsTemplateShow } from './pages/sms/sms-templates/SmsTemplateShow';

const Logo = () => (
  <svg width="100" height="30" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="20" fontFamily="Verdana" fontSize="15" fill="blue">eDairy</text>
  </svg>
);

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
      <Resource name="exchange-visits" list={ExchangeVisitList} create={ExchangeVisitCreate} edit={ExchangeVisitEdit} show={ExchangeVisitShow} />
      <Resource name="exchange-visit-attendees" list={ExchangeVisitAttendeesList} create={ExchangeVisitAttendeeCreate} edit={ExchangeVisitAttendeeEdit} show={ExchangeVisitAttendeeShow} />
      <Resource name="share-types" list={ShareTypeList} />
      <Resource name="share-accounts" list={MemberShareList} />
      <Resource name="share-payments" list={SharePaymentList} />
      <Resource name="share-transfers" list={ShareTransferList} />
      <Resource name="dividend-declarations" list={DividendDeclarationList} create={DividendDeclarationCreate} edit={DividendDeclarationEdit} show={DividendDeclarationShow} />
      <Resource name="dividends" list={MemberShareDividendList} create={MemberShareDividendCreate} edit={MemberShareDividendEdit} show={MemberShareDividendShow} />
      <Resource name="member-with-missing-details" list={MemberWithMissingDetailsList} />

      {/* Transporters Module */}
      <Resource name="transporters" list={TransporterList} create={TransporterCreate} edit={TransporterEdit} show={TransporterShow} />
      <Resource name="individual-transporters" list={IndividualTransporterList} create={IndividualTransporterCreate} edit={IndividualTransporterEdit} show={IndividualTransporterShow} />
      <Resource name="company-transporters" list={CompanyTransporterList} create={CompanyTransporterCreate} edit={CompanyTransporterEdit} show={CompanyTransporterShow} />
      <Resource name="transporter-vehicles" list={TransporterVehicleList} create={TransporterVehicleCreate} edit={TransporterVehicleEdit} show={TransporterVehicleShow} />
      <Resource name="transporter-route-assignments" list={TransporterRouteAssignmentList} create={TransporterRouteAssignmentCreate} edit={TransporterRouteAssignmentEdit} show={TransporterRouteAssignmentShow} />
      <Resource name="transporter-drivers" list={TransporterDriverList} create={TransporterDriverCreate} edit={TransporterDriverEdit} show={TransporterDriverShow} />
      <Resource name="transporter-driver-assignments" list={TransporterDriverAssignmentList} create={TransporterDriverAssignmentCreate} edit={TransporterDriverAssignmentEdit} show={TransporterDriverAssignmentShow} />
      <Resource name="transporter-benefits" list={TransporterBenefitList} create={TransporterBenefitCreate} edit={TransporterBenefitEdit} show={TransporterBenefitShow} />
      <Resource name="monthly-pay-date-ranges" list={MonthlyPayDateRangeList} create={MonthlyPayDateRangeCreate} edit={MonthlyPayDateRangeEdit} show={MonthlyPayDateRangeShow} />
      <Resource name="pay-rates" list={PayRateList} create={PayRateCreate} edit={PayRateEdit} show={PayRateShow} />
      <Resource name="transporter-payments" list={TransporterPaymentList} create={TransporterPaymentCreate} edit={TransporterPaymentEdit} show={TransporterPaymentShow} />
      <Resource name="deductions-recovery" list={DeductionsRecoveryList} create={DeductionRecoveryCreate} edit={DeductionRecoveryEdit} show={DeductionRecoveryShow} />
      <Resource name="transporter-payroll" list={TransporterPayrollList} create={TransporterPayrollCreate} edit={TransporterPayrollEdit} show={TransporterPayrollShow} />
      <Resource name="transporter-deductions" list={TransporterDeductionList} create={TransporterDeductionCreate} edit={TransporterDeductionEdit} show={TransporterDeductionShow} />
      <Resource name="transport-vehicles" list={TransportVehicleList} create={TransportVehicleCreate} edit={TransportVehicleEdit} show={TransportVehicleShow} />
      <Resource name="transporter-payroll-summary" list={TransporterPayrollSummaryList} create={TransporterPayrollSummaryCreate} edit={TransporterPayrollSummaryEdit} show={TransporterPayrollSummaryShow} />
      <Resource name="transporter-payroll-bank-summary" list={TransporterPayrollBankSummaryList} create={TransporterPayrollBankSummaryCreate} edit={TransporterPayrollBankSummaryEdit} show={TransporterPayrollBankSummaryShow} />
      <Resource name="transporter-statement" list={TransporterStatementList} create={TransporterStatementCreate} edit={TransporterStatementEdit} show={TransporterStatementShow} />

      {/* Produce Module */}
      <Resource name="cooler-milk-collections" list={CoolerMilkCollectionList} create={CoolerMilkCollectionCreate} edit={CoolerMilkCollectionEdit} show={CoolerMilkCollectionShow} />
      <Resource name="milk-deliveries" list={MilkDeliveryList} create={MilkDeliveryCreate} edit={MilkDeliveryEdit} show={MilkDeliveryShow} />
      <Resource name="milk-local-sales" list={MilkLocalSalesList} create={MilkLocalSaleCreate} edit={MilkLocalSaleEdit} show={MilkLocalSaleShow} />
      <Resource name="daily-milk-variances" list={DailyMilkVariancesList} create={DailyMilkVarianceCreate} edit={DailyMilkVarianceEdit} show={DailyMilkVarianceShow} />
      <Resource name="stray-milk-collections" list={StrayMilkCollectionsList} create={StrayMilkCollectionCreate} edit={StrayMilkCollectionEdit} show={StrayMilkCollectionShow} />
      <Resource name="monthly-collections" list={MonthlyCollectionList} create={MonthlyCollectionCreate} edit={MonthlyCollectionEdit} show={MonthlyCollectionShow} />
      <Resource name="can-movements" list={CanMovementsList} create={CanMovementCreate} edit={CanMovementEdit} show={CanMovementShow} />
      <Resource name="milk-journals" list={MilkJournalsList} create={MilkJournalCreate} edit={MilkJournalEdit} show={MilkJournalShow} />
      <Resource name="milk-journal-entries" list={MilkJournalEntriesList} create={MilkJournalEntryCreate} edit={MilkJournalEntryEdit} show={MilkJournalEntryShow} />
      <Resource name="milk-rejects" list={MilkRejectsList} create={MilkRejectCreate} edit={MilkRejectEdit} show={MilkRejectShow} />
      <Resource name="member-payroll" list={MemberPayrollList} />
      <Resource name="member-payments" list={MemberPaymentsList} create={MemberPaymentCreate} edit={MemberPaymentEdit} show={MemberPaymentShow} />
      <Resource name="member-deductions" list={MemberDeductionsList} create={MemberDeductionCreate} edit={MemberDeductionEdit} show={MemberDeductionShow} />
      <Resource name="milk-cans" list={MilkCansList} create={MilkCanCreate} edit={MilkCanEdit} show={MilkCanShow} />
      <Resource name="product-grades" list={ProductGradesList} create={ProductGradeCreate} edit={ProductGradeEdit} show={ProductGradeShow} />
      <Resource name="milk-delivery-shifts" list={MilkDeliveryShiftsList} create={MilkDeliveryShiftCreate} edit={MilkDeliveryShiftEdit} show={MilkDeliveryShiftShow} />
      <Resource name="milk-delivery-reports" list={ProduceMilkDeliveryReportList} create={MilkDeliveryReportCreate} edit={MilkDeliveryReportEdit} show={MilkDeliveryReportShow} />
      <Resource name="member-payroll-summary" list={MemberPayrollSummaryList} create={MemberPayrollSummaryCreate} edit={MemberPayrollSummaryEdit} show={MemberPayrollSummaryShow} />
      <Resource name="member-statement" list={MemberStatementList} create={MemberStatementCreate} edit={MemberStatementEdit} show={MemberStatementShow} />
      <Resource name="store-sales" list={StoreSalesList} create={StoreSaleCreate} edit={StoreSaleEdit} show={StoreSaleShow} />
      <Resource name="supplies" list={SuppliesList} create={SupplyCreate} edit={SupplyEdit} show={SupplyShow} />
      <Resource name="supply-rejects" list={SupplyRejectsList} create={SupplyRejectCreate} edit={SupplyRejectEdit} show={SupplyRejectShow} />
      <Resource name="inter-store-transfers" list={InterstoreTransferList} />
      <Resource name="store-stocks" list={StoreStocksList} create={StoreStockCreate} edit={StoreStockEdit} show={StoreStockShow} />
      <Resource name="store-items" list={StoreItemsList} />
      <Resource name="item-categories" list={ItemCategoriesList} />
      <Resource name="stores" list={StoresList} create={StoreCreate} edit={StoreEdit} show={StoreShow} />
      <Resource name="store-inventories" list={StoreInventoriesList} />
      <Resource name="store-stock-takings" list={StoreStockTakingsList} create={StoreStockTakingCreate} edit={StoreStockTakingEdit} show={StoreStockTakingShow} />
      <Resource name="store-stock-movements" list={StoreStockMovementsList} create={StoreStockMovementCreate} edit={StoreStockMovementEdit} show={StoreStockMovementShow} />
      <Resource name="store-stock-movement-types" list={StoreStockMovementTypesList} create={StoreStockMovementTypeCreate} edit={StoreStockMovementTypeEdit} show={StoreStockMovementTypeShow} />

      {/* Customers Module */}
      <Resource name="customer-billings" list={CustomerBillingList} create={CustomerBillingCreate} edit={CustomerBillingEdit} show={CustomerBillingShow} />
      <Resource name="customer-invoices" list={CustomerInvoiceList} create={CustomerInvoiceCreate} edit={CustomerInvoiceEdit} show={CustomerInvoiceShow} />
      <Resource name="customer-payments" list={CustomerPaymentList} create={CustomerPaymentCreate} edit={CustomerPaymentEdit} show={CustomerPaymentShow} />
      <Resource name="customer-types" list={CustomerTypeList} create={CustomerTypeCreate} edit={CustomerTypeEdit} show={CustomerTypeShow} />
      <Resource name="customers" list={CustomerList} create={CustomerCreate} edit={CustomerEdit} show={CustomerShow} />
      <Resource name="customer-milk-rates" list={CustomerMilkRateList} create={CustomerMilkRateCreate} edit={CustomerMilkRateEdit} show={CustomerMilkRateShow} />

      {/* Loans Module */}
      <Resource name="loan-accounts" list={LoanMembersList} />
      <Resource name="loans" list={LoansList} />
      <Resource name="loan-report" list={OrganizationDetailsList} />
      <Resource name="loan-portfolio-report" list={OrganizationDetailsList} />

      {/* Human Resource Module */}
      <Resource name="employees" list={EmployeesList} create={EmployeeCreate} edit={EmployeeEdit} show={EmployeeShow} />
      <Resource name="employees-details" list={EmployeesDetailsList} create={EmployeeDetailCreate} edit={EmployeeDetailEdit} show={EmployeeDetailShow} />
      <Resource name="employee-bank-accounts" list={EmployeeBankAccountsList} create={EmployeeBankAccountCreate} edit={EmployeeBankAccountEdit} show={EmployeeBankAccountShow} />
      <Resource name="employee-contract-details" list={EmployeeContractDetailsList} create={EmployeeContractDetailCreate} edit={EmployeeContractDetailEdit} show={EmployeeContractDetailShow} />
      <Resource name="employee-dependants" list={EmployeeDependantsList} create={EmployeeDependantCreate} edit={EmployeeDependantEdit} show={EmployeeDependantShow} />
      <Resource name="employee-documents" list={EmployeeDocumentsList} create={EmployeeDocumentCreate} edit={EmployeeDocumentEdit} show={EmployeeDocumentShow} />
      <Resource name="employee-exit-details" list={EmployeeExitDetailsList} create={EmployeeExitDetailCreate} edit={EmployeeExitDetailEdit} show={EmployeeExitDetailShow} />
      <Resource name="employee-qualifications" list={EmployeeQualificationsList} create={EmployeeQualificationCreate} edit={EmployeeQualificationEdit} show={EmployeeQualificationShow} />
      <Resource name="employee-deduction-types" list={EmployeeDeductionTypesList} create={EmployeeDeductionTypeCreate} edit={EmployeeDeductionTypeEdit} show={EmployeeDeductionTypeShow} />
      <Resource name="employee-leave-types" list={EmployeeLeaveTypesList} create={EmployeeLeaveTypeCreate} edit={EmployeeLeaveTypeEdit} show={EmployeeLeaveTypeShow} />
      <Resource name="employee-termination-categories" list={EmployeeTerminationCategoryList} create={EmployeeTerminationCategoryCreate} edit={EmployeeTerminationCategoryEdit} show={EmployeeTerminationCategoryShow} />
      <Resource name="employee-leave-applications" list={EmployeeLeaveApplicationsList} create={EmployeeLeaveApplicationCreate} edit={EmployeeLeaveApplicationEdit} show={EmployeeLeaveApplicationShow} />
      <Resource name="employee-leave-assignments" list={EmployeeLeaveAssignmentsList} create={EmployeeLeaveAssignmentCreate} edit={EmployeeLeaveAssignmentEdit} show={EmployeeLeaveAssignmentShow} />
      <Resource name="employee-leave-details" list={EmployeeLeaveDetailsList} create={EmployeeLeaveDetailCreate} edit={EmployeeLeaveDetailEdit} show={EmployeeLeaveDetailShow} />
      <Resource name="employee-benefits" list={EmployeeBenefitsList} create={EmployeeBenefitCreate} edit={EmployeeBenefitEdit} show={EmployeeBenefitShow} />
      <Resource name="employee-payroll-benefits" list={EmployeePayrollBenefitsList} create={EmployeePayrollBenefitCreate} edit={EmployeePayrollBenefitEdit} show={EmployeePayrollBenefitShow} />
      <Resource name="employee-payroll-deductions" list={EmployeePayrollDeductionsList} create={EmployeePayrollDeductionCreate} edit={EmployeePayrollDeductionEdit} show={EmployeePayrollDeductionShow} />
      <Resource name="employee-payroll-reliefs" list={EmployeePayrollReliefsList} create={EmployeePayrollReliefCreate} edit={EmployeePayrollReliefEdit} show={EmployeePayrollReliefShow} />
      <Resource name="employee-payrolls" list={EmployeePayrollsList} create={EmployeePayrollCreate} edit={EmployeePayrollEdit} show={EmployeePayrollShow} />
      <Resource name="employee-payslips" list={EmployeePayslipsList} create={EmployeePayslipCreate} edit={EmployeePayslipEdit} show={EmployeePayslipShow} />
      <Resource name="employee-reliefs" list={EmployeeReliefsList} create={EmployeeReliefCreate} edit={EmployeeReliefEdit} show={EmployeeReliefShow} />
      <Resource name="employee-salaries" list={EmployeeSalariesList} create={EmployeeSalaryCreate} edit={EmployeeSalaryEdit} show={EmployeeSalaryShow} />

      {/* Suppliers Module */}
      <Resource name="supplier-categories" list={SupplierCategoryList} create={SupplierCategoryCreate} edit={SupplierCategoryEdit} show={SupplierCategoryShow} />
      <Resource name="suppliers" list={SuppliersList} create={SupplierCreate} edit={SupplierEdit} show={SupplierShow} />
      <Resource name="supplier-contacts" list={SupplierContactList} create={SupplierContactCreate} edit={SupplierContactEdit} show={SupplierContactShow} />
      <Resource name="supplier-documents" list={SupplierDocumentList} create={SupplierDocumentCreate} edit={SupplierDocumentEdit} show={SupplierDocumentShow} />
      <Resource name="supplier-quotes" list={SupplierQuoteList} create={SupplierQuoteCreate} edit={SupplierQuoteEdit} show={SupplierQuoteShow} />
      <Resource name="purchase-orders" list={PurchaseOrdersList} create={PurchaseOrderCreate} edit={PurchaseOrderEdit} show={PurchaseOrderShow} />
      <Resource name="purchase-requisitions" list={PurchaseRequisitionList} create={PurchaseRequisitionCreate} edit={PurchaseRequisitionEdit} show={PurchaseRequisitionShow} />

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

      {/* SMS Module */}
      <Resource name="sms-campaign-recipients" list={SmsCampaignRecipientsList} create={SmsCampaignRecipientCreate} edit={SmsCampaignRecipientEdit} show={SmsCampaignRecipientShow} />
      <Resource name="sms-campaigns" list={SmsCampaignsList} create={SmsCampaignCreate} edit={SmsCampaignEdit} show={SmsCampaignShow} />
      <Resource name="sms-contacts" list={SmsContactsList} create={SmsContactCreate} edit={SmsContactEdit} show={SmsContactShow} />
      <Resource name="sms-groups" list={SmsGroupsList} create={SmsGroupCreate} edit={SmsGroupEdit} show={SmsGroupShow} />
      <Resource name="sms-messages" list={SmsMessagesList} create={SmsMessageCreate} edit={SmsMessageEdit} show={SmsMessageShow} />
      <Resource name="sms-providers" list={SmsProvidersList} create={SmsProviderCreate} edit={SmsProviderEdit} show={SmsProviderShow} />
      <Resource name="sms-queue" list={SmsQueueList} create={SmsQueueCreate} edit={SmsQueueEdit} show={SmsQueueShow} />
      <Resource name="sms-templates" list={SmsTemplatesList} create={SmsTemplateCreate} edit={SmsTemplateEdit} show={SmsTemplateShow} />

    </Admin>
  );

}

export default App
