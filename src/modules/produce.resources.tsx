import type { ComponentType } from 'react';
import { Resource, ShowGuesser } from 'react-admin';

/* ============ PRODUCE MODULE ============ */
import { MilkJournalsList } from '../pages/produce/milk journals/milk-journals-list';
import { MilkJournalCreate } from '../pages/produce/milk journals/MilkJournalCreate';
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
import {
    MilkCanCreate,
    MilkCanEdit,
    ProductGradeCreate,
    ProductGradeEdit,
    MilkDeliveryShiftCreate,
    MilkDeliveryShiftEdit,
    MilkJournalEdit,
    MilkJournalEntryCreate,
    MilkJournalEntryEdit,
    MilkRejectCreate,
    MilkRejectEdit,
    StrayMilkCollectionEdit,
    MilkDeliveryCreate,
    MilkDeliveryEdit,
    MilkLocalSaleCreate,
    MilkLocalSaleEdit,
    CanMovementCreate,
    CanMovementEdit,
    CoolerMilkCollectionCreate,
    CoolerMilkCollectionEdit,
    MonthlyCollectionCreate,
    MonthlyCollectionEdit,
    MilkDeliveryReportCreate,
    MilkDeliveryReportEdit,
    MemberPayrollSummaryCreate,
    MemberPayrollSummaryEdit,
    MemberStatementCreate,
    MemberStatementEdit,
    MemberPaymentCreate,
    MemberPaymentEdit,
    MemberDeductionCreate,
    MemberDeductionEdit,
    MemberPayrollCreate,
    MemberPayrollEdit,
} from '../pages/produce/produce-create-edit-pages';

const produceCrud = (list: ComponentType, create: ComponentType, edit: ComponentType) => ({
    list,
    create,
    edit,
    show: ShowGuesser,
});

export const produceResources = [
    <Resource
        key="milk-deliveries"
        name="milk-deliveries"
        {...produceCrud(MilkDeliveryList, MilkDeliveryCreate, MilkDeliveryEdit)}
    />,
    <Resource
        key="milk-local-sales"
        name="milk-local-sales"
        {...produceCrud(MilkLocalSalesList, MilkLocalSaleCreate, MilkLocalSaleEdit)}
    />,
    <Resource
        key="daily-milk-variances"
        name="daily-milk-variances"
        list={DailyMilkVariancesList}
        show={ShowGuesser}
    />,
    <Resource
        key="stray-milk-collections"
        name="stray-milk-collections"
        list={StrayMilkCollectionsList}
        edit={StrayMilkCollectionEdit}
        show={ShowGuesser}
    />,
    <Resource
        key="monthly-collections"
        name="monthly-collections"
        {...produceCrud(MonthlyCollectionList, MonthlyCollectionCreate, MonthlyCollectionEdit)}
    />,
    <Resource
        key="can-movements"
        name="can-movements"
        {...produceCrud(CanMovementsList, CanMovementCreate, CanMovementEdit)}
    />,
    <Resource
        key="milk-journals"
        name="milk-journals"
        {...produceCrud(MilkJournalsList, MilkJournalCreate, MilkJournalEdit)}
    />,
    <Resource
        key="milk-journal-entries"
        name="milk-journal-entries"
        {...produceCrud(MilkJournalEntriesList, MilkJournalEntryCreate, MilkJournalEntryEdit)}
    />,
    <Resource
        key="milk-rejects"
        name="milk-rejects"
        {...produceCrud(MilkRejectsList, MilkRejectCreate, MilkRejectEdit)}
    />,
    <Resource
        key="member-payroll"
        name="member-payroll"
        {...produceCrud(MemberPayrollList, MemberPayrollCreate, MemberPayrollEdit)}
    />,
    <Resource
        key="member-payments"
        name="member-payments"
        {...produceCrud(MemberPaymentsList, MemberPaymentCreate, MemberPaymentEdit)}
    />,
    <Resource
        key="member-deductions"
        name="member-deductions"
        {...produceCrud(MemberDeductionsList, MemberDeductionCreate, MemberDeductionEdit)}
    />,
    <Resource
        key="milk-cans"
        name="milk-cans"
        {...produceCrud(MilkCansList, MilkCanCreate, MilkCanEdit)}
    />,
    <Resource
        key="product-grades"
        name="product-grades"
        {...produceCrud(ProductGradesList, ProductGradeCreate, ProductGradeEdit)}
    />,
    <Resource
        key="milk-delivery-shifts"
        name="milk-delivery-shifts"
        {...produceCrud(MilkDeliveryShiftsList, MilkDeliveryShiftCreate, MilkDeliveryShiftEdit)}
    />,
    <Resource
        key="milk-delivery-reports"
        name="milk-delivery-reports"
        {...produceCrud(ProduceMilkDeliveryReportList, MilkDeliveryReportCreate, MilkDeliveryReportEdit)}
    />,
    <Resource
        key="member-payroll-summary"
        name="member-payroll-summary"
        {...produceCrud(MemberPayrollSummaryList, MemberPayrollSummaryCreate, MemberPayrollSummaryEdit)}
    />,
    <Resource
        key="member-statement"
        name="member-statement"
        {...produceCrud(MemberStatementList, MemberStatementCreate, MemberStatementEdit)}
    />,
    <Resource
        key="cooler-milk-collections"
        name="cooler-milk-collections"
        {...produceCrud(CoolerMilkCollectionList, CoolerMilkCollectionCreate, CoolerMilkCollectionEdit)}
    />,
];
