import { Resource } from 'react-admin';

/* ============ HUMAN RESOURCE MODULE ============ */
import { EmployeesList } from '../pages/human resource/employees/employees/employees-list';
import { EmployeesDetailsList } from '../pages/human resource/employees/employees-details/employees-details-list';
import { EmployeeBankAccountsList } from '../pages/human resource/employees/employee-bank-accounts/employee-bank-accounts-list';
import { EmployeeContractDetailsList } from '../pages/human resource/employees/employee-contract-details/employee-contract-details-list';
import { EmployeeDependantsList } from '../pages/human resource/employees/employee-dependants/employee-dependants-list';
import { EmployeeDocumentsList } from '../pages/human resource/employees/employee-documents/employee-documents-list';
import { EmployeeExitDetailsList } from '../pages/human resource/employees/employee-exit-details/employee-exit-details-list';
import { EmployeeQualificationsList } from '../pages/human resource/employees/employee-qualifications/employee-qualifications-list';

import { EmployeeDeductionTypesList } from '../pages/human resource/setup/employee-deduction-types-list';
import { EmployeeLeaveTypesList } from '../pages/human resource/setup/employee-leave-types-list';
import { EmployeeTerminationCategoryList } from '../pages/human resource/setup/employee-termination-category-list';

import { EmployeeLeaveApplicationsList } from '../pages/human resource/leave management/employee-leave-applications-list';
import { EmployeeLeaveAssignmentsList } from '../pages/human resource/leave management/employee-leave-assignments-list';
import { EmployeeLeaveDetailsList } from '../pages/human resource/leave management/employee-leave-details-list';

import { EmployeeBenefitsList } from '../pages/human resource/payroll/employee-benefits-list';
import { EmployeePayrollBenefitsList } from '../pages/human resource/payroll/employee-payroll-benefits-list';
import { EmployeePayrollDeductionsList } from '../pages/human resource/payroll/employee-payroll-deductions-list';
import { EmployeePayrollReliefsList } from '../pages/human resource/payroll/employee-payroll-reliefs-list';
import { EmployeePayrollsList } from '../pages/human resource/payroll/employee-payrolls-list';
import { EmployeePayslipsList } from '../pages/human resource/payroll/employee-payslips-list';
import { EmployeeReliefsList } from '../pages/human resource/payroll/employee-reliefs-list';
import { EmployeeSalariesList } from '../pages/human resource/payroll/employee-salaries-list';

export const humanResourceResources = [
    <Resource key="employees" name="employees" list={EmployeesList} />,
    <Resource key="employees-details" name="employees-details" list={EmployeesDetailsList} />,
    <Resource key="employee-bank-accounts" name="employee-bank-accounts" list={EmployeeBankAccountsList} />,
    <Resource key="employee-contract-details" name="employee-contract-details" list={EmployeeContractDetailsList} />,
    <Resource key="employee-dependants" name="employee-dependants" list={EmployeeDependantsList} />,
    <Resource key="employee-documents" name="employee-documents" list={EmployeeDocumentsList} />,
    <Resource key="employee-exit-details" name="employee-exit-details" list={EmployeeExitDetailsList} />,
    <Resource key="employee-qualifications" name="employee-qualifications" list={EmployeeQualificationsList} />,

    <Resource key="employee-deduction-types" name="employee-deduction-types" list={EmployeeDeductionTypesList} />,
    <Resource key="employee-leave-types" name="employee-leave-types" list={EmployeeLeaveTypesList} />,
    <Resource key="employee-termination-categories" name="employee-termination-categories" list={EmployeeTerminationCategoryList} />,

    <Resource key="employee-leave-applications" name="employee-leave-applications" list={EmployeeLeaveApplicationsList} />,
    <Resource key="employee-leave-assignments" name="employee-leave-assignments" list={EmployeeLeaveAssignmentsList} />,
    <Resource key="employee-leave-details" name="employee-leave-details" list={EmployeeLeaveDetailsList} />,

    <Resource key="employee-benefits" name="employee-benefits" list={EmployeeBenefitsList} />,
    <Resource key="employee-payroll-benefits" name="employee-payroll-benefits" list={EmployeePayrollBenefitsList} />,
    <Resource key="employee-payroll-deductions" name="employee-payroll-deductions" list={EmployeePayrollDeductionsList} />,
    <Resource key="employee-payroll-reliefs" name="employee-payroll-reliefs" list={EmployeePayrollReliefsList} />,
    <Resource key="employee-payrolls" name="employee-payrolls" list={EmployeePayrollsList} />,
    <Resource key="employee-payslips" name="employee-payslips" list={EmployeePayslipsList} />,
    <Resource key="employee-reliefs" name="employee-reliefs" list={EmployeeReliefsList} />,
    <Resource key="employee-salaries" name="employee-salaries" list={EmployeeSalariesList} />,
];