import type { ComponentType } from 'react';
import { Resource, ShowGuesser } from 'react-admin';

/* ============ TRANSPORTERS MODULE ============ */
import {
    TransporterTypeList,
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
    TransporterStatementList,
} from '../pages/transporters/transporters-lists';

import {
    TransporterTypeCreate,
    TransporterTypeEdit,
    TransporterCreate,
    TransporterEdit,
    IndividualTransporterEdit,
    CompanyTransporterEdit,
    TransporterVehicleCreate,
    TransporterVehicleEdit,
    TransporterRouteAssignmentCreate,
    TransporterRouteAssignmentEdit,
    TransporterDriverCreate,
    TransporterDriverEdit,
    TransporterDriverAssignmentCreate,
    TransporterDriverAssignmentEdit,
    TransporterBenefitCreate,
    TransporterBenefitEdit,
} from '../pages/transporters/transporter-create-edit-pages';

const transporterCrud = (list: ComponentType, create: ComponentType, edit: ComponentType) => ({
    list,
    create,
    edit,
    show: ShowGuesser,
});

const transporterListEdit = (list: ComponentType, edit: ComponentType) => ({
    list,
    edit,
    show: ShowGuesser,
});

export const transportersResources = [
    <Resource
        key="transporter-types"
        name="transporter-types"
        {...transporterCrud(TransporterTypeList, TransporterTypeCreate, TransporterTypeEdit)}
    />,
    <Resource key="transporters" name="transporters" {...transporterCrud(TransporterList, TransporterCreate, TransporterEdit)} />,
    <Resource
        key="individual-transporters"
        name="individual-transporters"
        {...transporterListEdit(IndividualTransporterList, IndividualTransporterEdit)}
    />,
    <Resource
        key="company-transporters"
        name="company-transporters"
        {...transporterListEdit(CompanyTransporterList, CompanyTransporterEdit)}
    />,
    <Resource
        key="transporter-vehicles"
        name="transporter-vehicles"
        {...transporterCrud(TransporterVehicleList, TransporterVehicleCreate, TransporterVehicleEdit)}
    />,
    <Resource
        key="transporter-route-assignments"
        name="transporter-route-assignments"
        {...transporterCrud(
            TransporterRouteAssignmentList,
            TransporterRouteAssignmentCreate,
            TransporterRouteAssignmentEdit
        )}
    />,
    <Resource
        key="transporter-drivers"
        name="transporter-drivers"
        {...transporterCrud(TransporterDriverList, TransporterDriverCreate, TransporterDriverEdit)}
    />,
    <Resource
        key="transporter-driver-assignments"
        name="transporter-driver-assignments"
        {...transporterCrud(
            TransporterDriverAssignmentList,
            TransporterDriverAssignmentCreate,
            TransporterDriverAssignmentEdit
        )}
    />,
    <Resource
        key="transporter-benefits"
        name="transporter-benefits"
        {...transporterCrud(TransporterBenefitList, TransporterBenefitCreate, TransporterBenefitEdit)}
    />,
    <Resource key="monthly-pay-date-ranges" name="monthly-pay-date-ranges" list={MonthlyPayDateRangeList} show={ShowGuesser} />,
    <Resource key="pay-rates" name="pay-rates" list={PayRateList} show={ShowGuesser} />,
    <Resource key="transporter-payments" name="transporter-payments" list={TransporterPaymentList} show={ShowGuesser} />,
    <Resource key="deductions-recovery" name="deductions-recovery" list={DeductionsRecoveryList} show={ShowGuesser} />,
    <Resource key="transporter-payroll" name="transporter-payroll" list={TransporterPayrollList} show={ShowGuesser} />,
    <Resource key="transporter-deductions" name="transporter-deductions" list={TransporterDeductionList} show={ShowGuesser} />,
    <Resource key="transport-vehicles" name="transport-vehicles" list={TransportVehicleList} show={ShowGuesser} />,
    <Resource key="transporter-payroll-summary" name="transporter-payroll-summary" list={TransporterPayrollSummaryList} show={ShowGuesser} />,
    <Resource
        key="transporter-payroll-bank-summary"
        name="transporter-payroll-bank-summary"
        list={TransporterPayrollBankSummaryList}
        show={ShowGuesser}
    />,
    <Resource key="transporter-statement" name="transporter-statement" list={TransporterStatementList} show={ShowGuesser} />,
];
