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

export const produceResources = [
    <Resource key="milk-deliveries" name="milk-deliveries" list={MilkDeliveryList} />,
    <Resource key="milk-local-sales" name="milk-local-sales" list={MilkLocalSalesList} />,
    <Resource key="daily-milk-variances" name="daily-milk-variances" list={DailyMilkVariancesList} />,
    <Resource key="stray-milk-collections" name="stray-milk-collections" list={StrayMilkCollectionsList} />,
    <Resource key="monthly-collections" name="monthly-collections" list={MonthlyCollectionList} />,
    <Resource key="can-movements" name="can-movements" list={CanMovementsList} />,
    <Resource key="milk-journals" name="milk-journals" list={MilkJournalsList} />,
    <Resource key="milk-journal-entries" name="milk-journal-entries" list={MilkJournalEntriesList} />,
    <Resource key="milk-rejects" name="milk-rejects" list={MilkRejectsList} />,
    <Resource key="member-payroll" name="member-payroll" list={MemberPayrollList} />,
    <Resource key="member-payments" name="member-payments" list={MemberPaymentsList} />,
    <Resource key="member-deductions" name="member-deductions" list={MemberDeductionsList} />,
    <Resource key="milk-cans" name="milk-cans" list={MilkCansList} />,
    <Resource key="product-grades" name="product-grades" list={ProductGradesList} />,
    <Resource key="milk-delivery-shifts" name="milk-delivery-shifts" list={MilkDeliveryShiftsList} />,
    <Resource key="milk-delivery-reports" name="milk-delivery-reports" list={ProduceMilkDeliveryReportList} />,
    <Resource key="member-payroll-summary" name="member-payroll-summary" list={MemberPayrollSummaryList} />,
    <Resource key="member-statement" name="member-statement" list={MemberStatementList} />,

];