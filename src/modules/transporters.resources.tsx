import { Resource } from 'react-admin';

/* ============ TRANSPORTERS MODULE ============ */
import {
    TransporterList,
    IndividualTransporterList,
    CompanyTransporterList,
    TransporterVehicleList,
    TransporterRouteAssignmentList,
    TransporterDriverList,
    TransporterDriverAssignmentList,
    TransporterBenefitList,
    MonthlyPayDateRangeList,
    PayRateList,
    TransporterPaymentList,
    DeductionsRecoveryList,
    TransporterPayrollList,
    TransporterDeductionList,
    TransportVehicleList,
    TransporterPayrollSummaryList,
    TransporterPayrollBankSummaryList,
    TransporterStatementList
} from '../pages/transporters/transporters-lists';

import { TransporterCreate, TransporterEdit, TransporterShow } from '../pages/transporters/TransporterPages';
import { IndividualTransporterCreate, IndividualTransporterEdit, IndividualTransporterShow } from '../pages/transporters/IndividualTransporterPages';
import { CompanyTransporterCreate, CompanyTransporterEdit, CompanyTransporterShow } from '../pages/transporters/CompanyTransporterPages';
import { TransporterVehicleCreate, TransporterVehicleEdit, TransporterVehicleShow } from '../pages/transporters/TransporterVehiclePages';
import { TransporterRouteAssignmentCreate, TransporterRouteAssignmentEdit, TransporterRouteAssignmentShow } from '../pages/transporters/TransporterRouteAssignmentPages';
import { TransporterDriverCreate, TransporterDriverEdit, TransporterDriverShow } from '../pages/transporters/TransporterDriverPages';
import { TransporterDriverAssignmentCreate, TransporterDriverAssignmentEdit, TransporterDriverAssignmentShow } from '../pages/transporters/TransporterDriverAssignmentPages';
import { TransporterBenefitCreate, TransporterBenefitEdit, TransporterBenefitShow } from '../pages/transporters/TransporterBenefitPages';
import { MonthlyPayDateRangeCreate, MonthlyPayDateRangeEdit, MonthlyPayDateRangeShow } from '../pages/transporters/MonthlyPayDateRangePages';
import { PayRateCreate, PayRateEdit, PayRateShow } from '../pages/transporters/PayRatePages';
import { TransporterPaymentCreate, TransporterPaymentEdit, TransporterPaymentShow } from '../pages/transporters/TransporterPaymentPages';
import { DeductionRecoveryCreate, DeductionRecoveryEdit, DeductionRecoveryShow } from '../pages/transporters/DeductionRecoveryPages';
import { TransporterPayrollCreate, TransporterPayrollEdit, TransporterPayrollShow } from '../pages/transporters/TransporterPayrollPages';
import { TransporterDeductionCreate, TransporterDeductionEdit, TransporterDeductionShow } from '../pages/transporters/TransporterDeductionPages';
import { TransportVehicleCreate, TransportVehicleEdit, TransportVehicleShow } from '../pages/transporters/TransportVehiclePages';
import { TransporterPayrollSummaryCreate, TransporterPayrollSummaryEdit, TransporterPayrollSummaryShow } from '../pages/transporters/TransporterPayrollSummaryPages';
import { TransporterPayrollBankSummaryCreate, TransporterPayrollBankSummaryEdit, TransporterPayrollBankSummaryShow } from '../pages/transporters/TransporterPayrollBankSummaryPages';
import { TransporterStatementCreate, TransporterStatementEdit, TransporterStatementShow } from '../pages/transporters/TransporterStatementPages';

export const transportersResources = [
    <Resource key="transporters" name="transporters" list={TransporterList} create={TransporterCreate} edit={TransporterEdit} show={TransporterShow} />,
    <Resource key="individual-transporters" name="individual-transporters" list={IndividualTransporterList} create={IndividualTransporterCreate} edit={IndividualTransporterEdit} show={IndividualTransporterShow} />,
    <Resource key="company-transporters" name="company-transporters" list={CompanyTransporterList} create={CompanyTransporterCreate} edit={CompanyTransporterEdit} show={CompanyTransporterShow} />,
    <Resource key="transporter-vehicles" name="transporter-vehicles" list={TransporterVehicleList} create={TransporterVehicleCreate} edit={TransporterVehicleEdit} show={TransporterVehicleShow} />,
    <Resource key="transporter-route-assignments" name="transporter-route-assignments" list={TransporterRouteAssignmentList} create={TransporterRouteAssignmentCreate} edit={TransporterRouteAssignmentEdit} show={TransporterRouteAssignmentShow} />,
    <Resource key="transporter-drivers" name="transporter-drivers" list={TransporterDriverList} create={TransporterDriverCreate} edit={TransporterDriverEdit} show={TransporterDriverShow} />,
    <Resource key="transporter-driver-assignments" name="transporter-driver-assignments" list={TransporterDriverAssignmentList} create={TransporterDriverAssignmentCreate} edit={TransporterDriverAssignmentEdit} show={TransporterDriverAssignmentShow} />,
    <Resource key="transporter-benefits" name="transporter-benefits" list={TransporterBenefitList} create={TransporterBenefitCreate} edit={TransporterBenefitEdit} show={TransporterBenefitShow} />,
    <Resource key="monthly-pay-date-ranges" name="monthly-pay-date-ranges" list={MonthlyPayDateRangeList} create={MonthlyPayDateRangeCreate} edit={MonthlyPayDateRangeEdit} show={MonthlyPayDateRangeShow} />,
    <Resource key="pay-rates" name="pay-rates" list={PayRateList} create={PayRateCreate} edit={PayRateEdit} show={PayRateShow} />,
    <Resource key="transporter-payments" name="transporter-payments" list={TransporterPaymentList} create={TransporterPaymentCreate} edit={TransporterPaymentEdit} show={TransporterPaymentShow} />,
    <Resource key="deductions-recovery" name="deductions-recovery" list={DeductionsRecoveryList} create={DeductionRecoveryCreate} edit={DeductionRecoveryEdit} show={DeductionRecoveryShow} />,
    <Resource key="transporter-payroll" name="transporter-payroll" list={TransporterPayrollList} create={TransporterPayrollCreate} edit={TransporterPayrollEdit} show={TransporterPayrollShow} />,
    <Resource key="transporter-deductions" name="transporter-deductions" list={TransporterDeductionList} create={TransporterDeductionCreate} edit={TransporterDeductionEdit} show={TransporterDeductionShow} />,
    <Resource key="transport-vehicles" name="transport-vehicles" list={TransportVehicleList} create={TransportVehicleCreate} edit={TransportVehicleEdit} show={TransportVehicleShow} />,
    <Resource key="transporter-payroll-summary" name="transporter-payroll-summary" list={TransporterPayrollSummaryList} create={TransporterPayrollSummaryCreate} edit={TransporterPayrollSummaryEdit} show={TransporterPayrollSummaryShow} />,
    <Resource key="transporter-payroll-bank-summary" name="transporter-payroll-bank-summary" list={TransporterPayrollBankSummaryList} create={TransporterPayrollBankSummaryCreate} edit={TransporterPayrollBankSummaryEdit} show={TransporterPayrollBankSummaryShow} />,
    <Resource key="transporter-statement" name="transporter-statement" list={TransporterStatementList} create={TransporterStatementCreate} edit={TransporterStatementEdit} show={TransporterStatementShow} />,
];