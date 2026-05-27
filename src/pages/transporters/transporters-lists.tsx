/* eslint-disable react-refresh/only-export-components */
import { List, DataTable, TextInput } from 'react-admin';
import { CreateButton } from '../../components/forms/FormUtils';

/** Report / read-only style resources — unchanged modal create */
const createSimpleList = (title: string, resource: string) => () => (
    <List
        title={title}
        actions={
            <CreateButton resource={resource} title={title}>
                <TextInput source="name" fullWidth />
                <TextInput source="description" fullWidth multiline />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="name" label="Name" />
        </DataTable>
    </List>
);

export {
    TransporterTypeList,
    TransporterList,
    IndividualTransporterList,
    CompanyTransporterList,
    TransporterVehicleList,
    TransporterRouteAssignmentList,
    TransporterDriverList,
    TransporterDriverAssignmentList,
    TransporterBenefitList,
} from './transporter-list-pages';

export const MonthlyPayDateRangeList = createSimpleList('Monthly Pay Date Ranges', 'monthly-pay-date-ranges');
export const PayRateList = createSimpleList('Pay Rates', 'pay-rates');
export const TransporterPaymentList = createSimpleList('Transporter Payments', 'transporter-payments');
export const DeductionsRecoveryList = createSimpleList('Deductions Recovery', 'deductions-recovery');
export const TransporterPayrollList = createSimpleList('Transporter Payroll', 'transporter-payroll');
export const TransporterDeductionList = createSimpleList('Transporter Deductions', 'transporter-deductions');
export const TransportVehicleList = createSimpleList('Transport Vehicles', 'transport-vehicles');
export const TransporterPayrollSummaryList = createSimpleList(
    'Transporter Payroll Summary',
    'transporter-payroll-summary'
);
export const TransporterPayrollBankSummaryList = createSimpleList(
    'Transporter Payroll Bank Summary',
    'transporter-payroll-bank-summary'
);
export const TransporterStatementList = createSimpleList('Transporter Statement', 'transporter-statement');
