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

import { CoolerMilkCollectionList } from '../pages/produce/cooler milk collection/cooler-milk-collection-list';
import { MilkDeliveryList } from '../pages/produce/milk deliveries/milk-deliveries-list';
import { MilkLocalSalesList } from '../pages/produce/milk local sales/milk-local-sales-list';
import { DailyMilkVariancesList } from '../pages/produce/daily milk variances/daily-milk-variances-list';
import { StrayMilkCollectionsList } from '../pages/produce/stray milk collections/stray-milk-collections-list';
import { MonthlyCollectionList } from '../pages/produce/monthly collections/monthly-collections-list';
import { CanMovementsList } from '../pages/produce/can movements/can-movements-list';

export const transportersResources = [
    <Resource key="transporters" name="transporters" list={TransporterList} />,
    <Resource key="individual-transporters" name="individual-transporters" list={IndividualTransporterList} />,
    <Resource key="company-transporters" name="company-transporters" list={CompanyTransporterList} />,
    <Resource key="transporter-vehicles" name="transporter-vehicles" list={TransporterVehicleList} />,
    <Resource key="transporter-route-assignments" name="transporter-route-assignments" list={TransporterRouteAssignmentList} />,
    <Resource key="transporter-drivers" name="transporter-drivers" list={TransporterDriverList} />,
    <Resource key="transporter-driver-assignments" name="transporter-driver-assignments" list={TransporterDriverAssignmentList} />,
    <Resource key="transporter-benefits" name="transporter-benefits" list={TransporterBenefitList} />,
    <Resource key="cooler-milk-collections" name="cooler-milk-collections" list={CoolerMilkCollectionList} />,
    <Resource key="milk-deliveries" name="milk-deliveries" list={MilkDeliveryList} />,
    <Resource key="milk-local-sales" name="milk-local-sales" list={MilkLocalSalesList} />,
    <Resource key="daily-milk-variances" name="daily-milk-variances" list={DailyMilkVariancesList} />,
    <Resource key="stray-milk-collections" name="stray-milk-collections" list={StrayMilkCollectionsList} />,
    <Resource key="monthly-collections" name="monthly-collections" list={MonthlyCollectionList} />,
    <Resource key="can-movements" name="can-movements" list={CanMovementsList} />,
    <Resource key="monthly-pay-date-ranges" name="monthly-pay-date-ranges" list={MonthlyPayDateRangeList} />,
    <Resource key="pay-rates" name="pay-rates" list={PayRateList} />,
    <Resource key="transporter-payments" name="transporter-payments" list={TransporterPaymentList} />,
    <Resource key="deductions-recovery" name="deductions-recovery" list={DeductionsRecoveryList} />,
    <Resource key="transporter-payroll" name="transporter-payroll" list={TransporterPayrollList} />,
    <Resource key="transporter-deductions" name="transporter-deductions" list={TransporterDeductionList} />,
    <Resource key="transport-vehicles" name="transport-vehicles" list={TransportVehicleList} />,
    <Resource key="transporter-payroll-summary" name="transporter-payroll-summary" list={TransporterPayrollSummaryList} />,
    <Resource key="transporter-payroll-bank-summary" name="transporter-payroll-bank-summary" list={TransporterPayrollBankSummaryList} />,
    <Resource key="transporter-statement" name="transporter-statement" list={TransporterStatementList} />,
];