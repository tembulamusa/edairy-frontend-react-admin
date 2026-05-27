import type { ComponentType } from 'react';
import type { RaRecord } from 'react-admin';
import { TransporterCreatePage } from '../transporters/shared/TransporterCreatePage';
import { TransporterEditPage } from '../transporters/shared/TransporterEditPage';
import { transformMilkCan } from './transform-milk-can';
import { transformMilkJournalEntry } from './milk journal entries/transform-milk-journal-entry';
import { MilkJournalEntryFormFields } from './milk journal entries/MilkJournalEntryFormFields';
import {
    NameDescriptionFormFields,
    MilkCanFormFields,
    MilkJournalFormFields,
    MilkRejectFormFields,
    MilkDeliveryFormFields,
    MilkLocalSaleFormFields,
    DailyMilkVarianceFormFields,
    StrayMilkCollectionFormFields,
    CanMovementFormFields,
    CoolerMilkCollectionFormFields,
    MemberPaymentFormFields,
    MemberDeductionFormFields,
    MemberPayrollFormFields,
} from './produce-form-fields';

type ProduceCrudDef = {
    resource: string;
    createTitle: string;
    editTitle: string;
    subtitle: string;
    success: string;
    fields: ComponentType;
    transform?: (data: RaRecord) => RaRecord | Promise<RaRecord>;
    createSaveRedirectResource?: string;
};

const defs: ProduceCrudDef[] = [
    {
        resource: 'milk-cans',
        createTitle: 'New Milk Can',
        editTitle: 'Edit Milk Can',
        subtitle: 'Register a milk can with ID, type, size, and tare weight.',
        success: 'Milk can saved successfully',
        fields: MilkCanFormFields,
        transform: transformMilkCan,
    },
    {
        resource: 'product-grades',
        createTitle: 'New Product Grade',
        editTitle: 'Edit Product Grade',
        subtitle: 'Define a product grade for milk classification.',
        success: 'Product grade saved successfully',
        fields: NameDescriptionFormFields,
    },
    {
        resource: 'milk-delivery-shifts',
        createTitle: 'New Milk Delivery Shift',
        editTitle: 'Edit Milk Delivery Shift',
        subtitle: 'Configure a milk delivery shift.',
        success: 'Milk delivery shift saved successfully',
        fields: NameDescriptionFormFields,
    },
    {
        resource: 'milk-journal-entries',
        createTitle: 'New Milk Journal Entry',
        editTitle: 'Edit Milk Journal Entry',
        subtitle: 'Record a member entry on a milk journal batch.',
        success: 'Milk journal entry saved successfully',
        fields: MilkJournalEntryFormFields,
        transform: transformMilkJournalEntry,
    },
    {
        resource: 'milk-rejects',
        createTitle: 'New Milk Reject',
        editTitle: 'Edit Milk Reject',
        subtitle: 'Record rejected milk for a route, member, or transporter.',
        success: 'Milk reject saved successfully',
        fields: MilkRejectFormFields,
    },
    {
        resource: 'stray-milk-collections',
        createTitle: 'New Stray Milk Collection',
        editTitle: 'Edit Stray Milk Collection',
        subtitle: 'Record stray milk collected outside the normal journal.',
        success: 'Stray milk collection saved successfully',
        fields: StrayMilkCollectionFormFields,
    },
    {
        resource: 'milk-deliveries',
        createTitle: 'New Milk Delivery',
        editTitle: 'Edit Milk Delivery',
        subtitle: 'Record a milk delivery transaction.',
        success: 'Milk delivery saved successfully',
        fields: MilkDeliveryFormFields,
    },
    {
        resource: 'milk-local-sales',
        createTitle: 'New Milk Local Sale',
        editTitle: 'Edit Milk Local Sale',
        subtitle: 'Record a local milk sale.',
        success: 'Milk local sale saved successfully',
        fields: MilkLocalSaleFormFields,
    },
    {
        resource: 'daily-milk-variances',
        createTitle: 'New Daily Milk Variance',
        editTitle: 'Edit Daily Milk Variance',
        subtitle: 'Record daily milk variance totals.',
        success: 'Daily milk variance saved successfully',
        fields: DailyMilkVarianceFormFields,
    },
    {
        resource: 'can-movements',
        createTitle: 'New Can Movement',
        editTitle: 'Edit Can Movement',
        subtitle: 'Track movement of milk cans between routes and transporters.',
        success: 'Can movement saved successfully',
        fields: CanMovementFormFields,
        createSaveRedirectResource: 'milk-cans',
    },
    {
        resource: 'cooler-milk-collections',
        createTitle: 'New Cooler Milk Collection',
        editTitle: 'Edit Cooler Milk Collection',
        subtitle: 'Record milk collected at the cooler.',
        success: 'Cooler milk collection saved successfully',
        fields: CoolerMilkCollectionFormFields,
    },
    {
        resource: 'monthly-collections',
        createTitle: 'New Monthly Collection',
        editTitle: 'Edit Monthly Collection',
        subtitle: 'Manage monthly collection records.',
        success: 'Monthly collection saved successfully',
        fields: NameDescriptionFormFields,
    },
    {
        resource: 'milk-delivery-reports',
        createTitle: 'New Milk Delivery Report',
        editTitle: 'Edit Milk Delivery Report',
        subtitle: 'Manage milk delivery report records.',
        success: 'Milk delivery report saved successfully',
        fields: NameDescriptionFormFields,
    },
    {
        resource: 'member-payroll-summary',
        createTitle: 'New Member Payroll Summary',
        editTitle: 'Edit Member Payroll Summary',
        subtitle: 'Manage member payroll summary records.',
        success: 'Member payroll summary saved successfully',
        fields: NameDescriptionFormFields,
    },
    {
        resource: 'member-statement',
        createTitle: 'New Member Statement',
        editTitle: 'Edit Member Statement',
        subtitle: 'Manage member statement records.',
        success: 'Member statement saved successfully',
        fields: NameDescriptionFormFields,
    },
    {
        resource: 'member-payments',
        createTitle: 'New Member Payment',
        editTitle: 'Edit Member Payment',
        subtitle: 'Record a payment to a member.',
        success: 'Member payment saved successfully',
        fields: MemberPaymentFormFields,
    },
    {
        resource: 'member-deductions',
        createTitle: 'New Member Deduction',
        editTitle: 'Edit Member Deduction',
        subtitle: 'Record a deduction for a member.',
        success: 'Member deduction saved successfully',
        fields: MemberDeductionFormFields,
    },
    {
        resource: 'member-payroll',
        createTitle: 'New Member Payroll',
        editTitle: 'Edit Member Payroll',
        subtitle: 'Manage member payroll records.',
        success: 'Member payroll saved successfully',
        fields: MemberPayrollFormFields,
    },
];

const createPage = (def: ProduceCrudDef) => {
    const Fields = def.fields;
    return () => (
        <TransporterCreatePage
            resource={def.resource}
            title={def.createTitle}
            subtitle={def.subtitle}
            successMessage={def.success.replace(' saved', ' created')}
            transform={def.transform}
            listRedirectResource={def.createSaveRedirectResource}
        >
            <Fields />
        </TransporterCreatePage>
    );
};

const editPage = (def: ProduceCrudDef) => {
    const Fields = def.fields;
    return () => (
        <TransporterEditPage
            resource={def.resource}
            title={def.editTitle}
            subtitle={def.subtitle}
            successMessage={def.success}
            transform={def.transform}
        >
            <Fields />
        </TransporterEditPage>
    );
};

const byResource = Object.fromEntries(defs.map((d) => [d.resource, d])) as Record<string, ProduceCrudDef>;

export const MilkCanCreate = createPage(byResource['milk-cans']);
export const MilkCanEdit = editPage(byResource['milk-cans']);
export const ProductGradeCreate = createPage(byResource['product-grades']);
export const ProductGradeEdit = editPage(byResource['product-grades']);
export const MilkDeliveryShiftCreate = createPage(byResource['milk-delivery-shifts']);
export const MilkDeliveryShiftEdit = editPage(byResource['milk-delivery-shifts']);
export const MilkJournalEdit = editPage({
    resource: 'milk-journals',
    createTitle: 'New Milk Journal',
    editTitle: 'Edit Milk Journal',
    subtitle: 'Update milk journal header details.',
    success: 'Milk journal saved successfully',
    fields: MilkJournalFormFields,
});
export const MilkJournalEntryCreate = createPage(byResource['milk-journal-entries']);
export const MilkJournalEntryEdit = editPage(byResource['milk-journal-entries']);
export const MilkRejectCreate = createPage(byResource['milk-rejects']);
export const MilkRejectEdit = editPage(byResource['milk-rejects']);
export const StrayMilkCollectionEdit = editPage(byResource['stray-milk-collections']);
export const MilkDeliveryCreate = createPage(byResource['milk-deliveries']);
export const MilkDeliveryEdit = editPage(byResource['milk-deliveries']);
export const MilkLocalSaleCreate = createPage(byResource['milk-local-sales']);
export const MilkLocalSaleEdit = editPage(byResource['milk-local-sales']);
export const DailyMilkVarianceEdit = editPage(byResource['daily-milk-variances']);
export const CanMovementCreate = createPage(byResource['can-movements']);
export const CanMovementEdit = editPage(byResource['can-movements']);
export const CoolerMilkCollectionCreate = createPage(byResource['cooler-milk-collections']);
export const CoolerMilkCollectionEdit = editPage(byResource['cooler-milk-collections']);
export const MonthlyCollectionCreate = createPage(byResource['monthly-collections']);
export const MonthlyCollectionEdit = editPage(byResource['monthly-collections']);
export const MilkDeliveryReportCreate = createPage(byResource['milk-delivery-reports']);
export const MilkDeliveryReportEdit = editPage(byResource['milk-delivery-reports']);
export const MemberPayrollSummaryCreate = createPage(byResource['member-payroll-summary']);
export const MemberPayrollSummaryEdit = editPage(byResource['member-payroll-summary']);
export const MemberStatementCreate = createPage(byResource['member-statement']);
export const MemberStatementEdit = editPage(byResource['member-statement']);
export const MemberPaymentCreate = createPage(byResource['member-payments']);
export const MemberPaymentEdit = editPage(byResource['member-payments']);
export const MemberDeductionCreate = createPage(byResource['member-deductions']);
export const MemberDeductionEdit = editPage(byResource['member-deductions']);
export const MemberPayrollCreate = createPage(byResource['member-payroll']);
export const MemberPayrollEdit = editPage(byResource['member-payroll']);
