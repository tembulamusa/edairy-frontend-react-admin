import { Resource } from 'react-admin';

/* ============ PRODUCE MODULE ============ */
import { MilkJournalsList } from '../pages/produce/milk journals/milk-journals-list';
import { MilkJournalEntriesList } from '../pages/produce/milk journal entries/milk-journal-entries-list';
import { MilkRejectsList } from '../pages/produce/milk rejects/milk-rejects-list';
import { MemberPayrollList } from '../pages/payroll/member payroll/member-payroll-list';
import { MemberPaymentsList } from '../pages/produce/member payments/member-payments-list';
import { MemberDeductionsList } from '../pages/produce/member deductions/member-deductions-list';
import { MilkCansList } from '../pages/produce/milk cans/milk-cans-list';
import { ProductGradesList } from '../pages/produce/product grades/product-grades-list';
import { MilkDeliveryShiftsList } from '../pages/produce/milk delivery shifts/milk-delivery-shifts-list';
import { MilkDeliveryReportList as ProduceMilkDeliveryReportList } from '../pages/produce/milk delivery reports/milk-delivery-reports-list';
import { MemberPayrollSummaryList } from '../pages/produce/member payroll summary/member-payroll-summary-list';
import { MemberStatementList } from '../pages/produce/member statement/member-statement-list';
import { CoolerMilkCollectionList } from '../pages/produce/cooler milk collection/cooler-milk-collection-list';
import { MilkDeliveryList } from '../pages/produce/milk deliveries/milk-deliveries-list';
import { MilkLocalSalesList } from '../pages/produce/milk local sales/milk-local-sales-list';
import { DailyMilkVariancesList } from '../pages/produce/daily milk variances/daily-milk-variances-list';
import { StrayMilkCollectionsList } from '../pages/produce/stray milk collections/stray-milk-collections-list';
import { MonthlyCollectionList } from '../pages/produce/monthly collections/monthly-collections-list';
import { CanMovementsList } from '../pages/produce/can movements/can-movements-list';
import { MilkJournalCreate } from '../pages/produce/milk journals/MilkJournalCreate';
import { MilkJournalEdit } from '../pages/produce/milk journals/MilkJournalEdit';
import { MilkJournalShow } from '../pages/produce/milk journals/MilkJournalShow';
import { MilkJournalEntryCreate } from '../pages/produce/milk journal entries/MilkJournalEntryCreate';
import { MilkJournalEntryEdit } from '../pages/produce/milk journal entries/MilkJournalEntryEdit';
import { MilkJournalEntryShow } from '../pages/produce/milk journal entries/MilkJournalEntryShow';
import { MilkRejectCreate } from '../pages/produce/milk rejects/MilkRejectCreate';
import { MilkRejectEdit } from '../pages/produce/milk rejects/MilkRejectEdit';
import { MilkRejectShow } from '../pages/produce/milk rejects/MilkRejectShow';
import { MemberPaymentCreate } from '../pages/produce/member payments/MemberPaymentCreate';
import { MemberPaymentEdit } from '../pages/produce/member payments/MemberPaymentEdit';
import { MemberPaymentShow } from '../pages/produce/member payments/MemberPaymentShow';
import { MemberDeductionCreate } from '../pages/produce/member deductions/MemberDeductionCreate';
import { MemberDeductionEdit } from '../pages/produce/member deductions/MemberDeductionEdit';
import { MemberDeductionShow } from '../pages/produce/member deductions/MemberDeductionShow';
import { MilkCanCreate } from '../pages/produce/milk cans/MilkCanCreate';
import { MilkCanEdit } from '../pages/produce/milk cans/MilkCanEdit';
import { MilkCanShow } from '../pages/produce/milk cans/MilkCanShow';
import { ProductGradeCreate } from '../pages/produce/product grades/ProductGradeCreate';
import { ProductGradeEdit } from '../pages/produce/product grades/ProductGradeEdit';
import { ProductGradeShow } from '../pages/produce/product grades/ProductGradeShow';
import { MilkDeliveryShiftCreate } from '../pages/produce/milk delivery shifts/MilkDeliveryShiftCreate';
import { MilkDeliveryShiftEdit } from '../pages/produce/milk delivery shifts/MilkDeliveryShiftEdit';
import { MilkDeliveryShiftShow } from '../pages/produce/milk delivery shifts/MilkDeliveryShiftShow';
import { MilkDeliveryReportCreate } from '../pages/produce/milk delivery reports/MilkDeliveryReportCreate';
import { MilkDeliveryReportEdit } from '../pages/produce/milk delivery reports/MilkDeliveryReportEdit';
import { MilkDeliveryReportShow } from '../pages/produce/milk delivery reports/MilkDeliveryReportShow';
import { MemberPayrollSummaryCreate } from '../pages/produce/member payroll summary/MemberPayrollSummaryCreate';
import { MemberPayrollSummaryEdit } from '../pages/produce/member payroll summary/MemberPayrollSummaryEdit';
import { MemberPayrollSummaryShow } from '../pages/produce/member payroll summary/MemberPayrollSummaryShow';
import { MemberStatementCreate } from '../pages/produce/member statement/MemberStatementCreate';
import { MemberStatementEdit } from '../pages/produce/member statement/MemberStatementEdit';
import { MemberStatementShow } from '../pages/produce/member statement/MemberStatementShow';
import { CoolerMilkCollectionCreate } from '../pages/produce/cooler milk collection/CoolerMilkCollectionCreate';
import { CoolerMilkCollectionEdit } from '../pages/produce/cooler milk collection/CoolerMilkCollectionEdit';
import { CoolerMilkCollectionShow } from '../pages/produce/cooler milk collection/CoolerMilkCollectionShow';
import { MilkDeliveryCreate } from '../pages/produce/milk deliveries/MilkDeliveryCreate';
import { MilkDeliveryEdit } from '../pages/produce/milk deliveries/MilkDeliveryEdit';
import { MilkDeliveryShow } from '../pages/produce/milk deliveries/MilkDeliveryShow';
import { MilkLocalSaleCreate } from '../pages/produce/milk local sales/MilkLocalSaleCreate';
import { MilkLocalSaleEdit } from '../pages/produce/milk local sales/MilkLocalSaleEdit';
import { MilkLocalSaleShow } from '../pages/produce/milk local sales/MilkLocalSaleShow';
import { DailyMilkVarianceCreate } from '../pages/produce/daily milk variances/DailyMilkVarianceCreate';
import { DailyMilkVarianceEdit } from '../pages/produce/daily milk variances/DailyMilkVarianceEdit';
import { DailyMilkVarianceShow } from '../pages/produce/daily milk variances/DailyMilkVarianceShow';
import { StrayMilkCollectionCreate } from '../pages/produce/stray milk collections/StrayMilkCollectionCreate';
import { StrayMilkCollectionEdit } from '../pages/produce/stray milk collections/StrayMilkCollectionEdit';
import { StrayMilkCollectionShow } from '../pages/produce/stray milk collections/StrayMilkCollectionShow';
import { MonthlyCollectionCreate } from '../pages/produce/monthly collections/MonthlyCollectionCreate';
import { MonthlyCollectionEdit } from '../pages/produce/monthly collections/MonthlyCollectionEdit';
import { MonthlyCollectionShow } from '../pages/produce/monthly collections/MonthlyCollectionShow';
import { CanMovementCreate } from '../pages/produce/can movements/CanMovementCreate';
import { CanMovementEdit } from '../pages/produce/can movements/CanMovementEdit';
import { CanMovementShow } from '../pages/produce/can movements/CanMovementShow';

export const produceResources = [
    <Resource key="milk-deliveries" name="milk-deliveries" list={MilkDeliveryList} create={MilkDeliveryCreate} edit={MilkDeliveryEdit} show={MilkDeliveryShow} />,
    <Resource key="milk-local-sales" name="milk-local-sales" list={MilkLocalSalesList} create={MilkLocalSaleCreate} edit={MilkLocalSaleEdit} show={MilkLocalSaleShow} />,
    <Resource key="daily-milk-variances" name="daily-milk-variances" list={DailyMilkVariancesList} create={DailyMilkVarianceCreate} edit={DailyMilkVarianceEdit} show={DailyMilkVarianceShow} />,
    <Resource key="stray-milk-collections" name="stray-milk-collections" list={StrayMilkCollectionsList} create={StrayMilkCollectionCreate} edit={StrayMilkCollectionEdit} show={StrayMilkCollectionShow} />,
    <Resource key="monthly-collections" name="monthly-collections" list={MonthlyCollectionList} create={MonthlyCollectionCreate} edit={MonthlyCollectionEdit} show={MonthlyCollectionShow} />,
    <Resource key="can-movements" name="can-movements" list={CanMovementsList} create={CanMovementCreate} edit={CanMovementEdit} show={CanMovementShow} />,
    <Resource key="milk-journals" name="milk-journals" list={MilkJournalsList} create={MilkJournalCreate} edit={MilkJournalEdit} show={MilkJournalShow} />,
    <Resource key="milk-journal-entries" name="milk-journal-entries" list={MilkJournalEntriesList} create={MilkJournalEntryCreate} edit={MilkJournalEntryEdit} show={MilkJournalEntryShow} />,
    <Resource key="milk-rejects" name="milk-rejects" list={MilkRejectsList} create={MilkRejectCreate} edit={MilkRejectEdit} show={MilkRejectShow} />,
    <Resource key="member-payroll" name="member-payroll" list={MemberPayrollList} />,
    <Resource key="member-payments" name="member-payments" list={MemberPaymentsList} create={MemberPaymentCreate} edit={MemberPaymentEdit} show={MemberPaymentShow} />,
    <Resource key="member-deductions" name="member-deductions" list={MemberDeductionsList} create={MemberDeductionCreate} edit={MemberDeductionEdit} show={MemberDeductionShow} />,
    <Resource key="milk-cans" name="milk-cans" list={MilkCansList} create={MilkCanCreate} edit={MilkCanEdit} show={MilkCanShow} />,
    <Resource key="product-grades" name="product-grades" list={ProductGradesList} create={ProductGradeCreate} edit={ProductGradeEdit} show={ProductGradeShow} />,
    <Resource key="milk-delivery-shifts" name="milk-delivery-shifts" list={MilkDeliveryShiftsList} create={MilkDeliveryShiftCreate} edit={MilkDeliveryShiftEdit} show={MilkDeliveryShiftShow} />,
    <Resource key="milk-delivery-reports" name="milk-delivery-reports" list={ProduceMilkDeliveryReportList} create={MilkDeliveryReportCreate} edit={MilkDeliveryReportEdit} show={MilkDeliveryReportShow} />,
    <Resource key="member-payroll-summary" name="member-payroll-summary" list={MemberPayrollSummaryList} create={MemberPayrollSummaryCreate} edit={MemberPayrollSummaryEdit} show={MemberPayrollSummaryShow} />,
    <Resource key="member-statement" name="member-statement" list={MemberStatementList} create={MemberStatementCreate} edit={MemberStatementEdit} show={MemberStatementShow} />,
    <Resource key="cooler-milk-collections" name="cooler-milk-collections" list={CoolerMilkCollectionList} create={CoolerMilkCollectionCreate} edit={CoolerMilkCollectionEdit} show={CoolerMilkCollectionShow} />,
];