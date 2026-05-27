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
import { EmployeeCreate } from '../pages/human resource/employees/employees/EmployeeCreate';
import { EmployeeEdit } from '../pages/human resource/employees/employees/EmployeeEdit';
import { EmployeeShow } from '../pages/human resource/employees/employees/EmployeeShow';
import { EmployeeDetailCreate } from '../pages/human resource/employees/employees-details/EmployeeDetailCreate';
import { EmployeeDetailEdit } from '../pages/human resource/employees/employees-details/EmployeeDetailEdit';
import { EmployeeDetailShow } from '../pages/human resource/employees/employees-details/EmployeeDetailShow';
import { EmployeeBankAccountCreate } from '../pages/human resource/employees/employee-bank-accounts/EmployeeBankAccountCreate';
import { EmployeeBankAccountEdit } from '../pages/human resource/employees/employee-bank-accounts/EmployeeBankAccountEdit';
import { EmployeeBankAccountShow } from '../pages/human resource/employees/employee-bank-accounts/EmployeeBankAccountShow';
import { EmployeeContractDetailCreate } from '../pages/human resource/employees/employee-contract-details/EmployeeContractDetailCreate';
import { EmployeeContractDetailEdit } from '../pages/human resource/employees/employee-contract-details/EmployeeContractDetailEdit';
import { EmployeeContractDetailShow } from '../pages/human resource/employees/employee-contract-details/EmployeeContractDetailShow';
import { EmployeeDependantCreate } from '../pages/human resource/employees/employee-dependants/EmployeeDependantCreate';
import { EmployeeDependantEdit } from '../pages/human resource/employees/employee-dependants/EmployeeDependantEdit';
import { EmployeeDependantShow } from '../pages/human resource/employees/employee-dependants/EmployeeDependantShow';
import { EmployeeDocumentCreate } from '../pages/human resource/employees/employee-documents/EmployeeDocumentCreate';
import { EmployeeDocumentEdit } from '../pages/human resource/employees/employee-documents/EmployeeDocumentEdit';
import { EmployeeDocumentShow } from '../pages/human resource/employees/employee-documents/EmployeeDocumentShow';
import { EmployeeExitDetailCreate } from '../pages/human resource/employees/employee-exit-details/EmployeeExitDetailCreate';
import { EmployeeExitDetailEdit } from '../pages/human resource/employees/employee-exit-details/EmployeeExitDetailEdit';
import { EmployeeExitDetailShow } from '../pages/human resource/employees/employee-exit-details/EmployeeExitDetailShow';
import { EmployeeQualificationCreate } from '../pages/human resource/employees/employee-qualifications/EmployeeQualificationCreate';
import { EmployeeQualificationEdit } from '../pages/human resource/employees/employee-qualifications/EmployeeQualificationEdit';
import { EmployeeQualificationShow } from '../pages/human resource/employees/employee-qualifications/EmployeeQualificationShow';
import { EmployeeDeductionTypeCreate } from '../pages/human resource/setup/EmployeeDeductionTypeCreate';
import { EmployeeDeductionTypeEdit } from '../pages/human resource/setup/EmployeeDeductionTypeEdit';
import { EmployeeDeductionTypeShow } from '../pages/human resource/setup/EmployeeDeductionTypeShow';
import { EmployeeLeaveTypeCreate } from '../pages/human resource/setup/EmployeeLeaveTypeCreate';
import { EmployeeLeaveTypeEdit } from '../pages/human resource/setup/EmployeeLeaveTypeEdit';
import { EmployeeLeaveTypeShow } from '../pages/human resource/setup/EmployeeLeaveTypeShow';
import { EmployeeTerminationCategoryCreate } from '../pages/human resource/setup/EmployeeTerminationCategoryCreate';
import { EmployeeTerminationCategoryEdit } from '../pages/human resource/setup/EmployeeTerminationCategoryEdit';
import { EmployeeTerminationCategoryShow } from '../pages/human resource/setup/EmployeeTerminationCategoryShow';
import { EmployeeLeaveApplicationCreate } from '../pages/human resource/leave management/EmployeeLeaveApplicationCreate';
import { EmployeeLeaveApplicationEdit } from '../pages/human resource/leave management/EmployeeLeaveApplicationEdit';
import { EmployeeLeaveApplicationShow } from '../pages/human resource/leave management/EmployeeLeaveApplicationShow';
import { EmployeeLeaveAssignmentCreate } from '../pages/human resource/leave management/EmployeeLeaveAssignmentCreate';
import { EmployeeLeaveAssignmentEdit } from '../pages/human resource/leave management/EmployeeLeaveAssignmentEdit';
import { EmployeeLeaveAssignmentShow } from '../pages/human resource/leave management/EmployeeLeaveAssignmentShow';
import { EmployeeLeaveDetailCreate } from '../pages/human resource/leave management/EmployeeLeaveDetailCreate';
import { EmployeeLeaveDetailEdit } from '../pages/human resource/leave management/EmployeeLeaveDetailEdit';
import { EmployeeLeaveDetailShow } from '../pages/human resource/leave management/EmployeeLeaveDetailShow';
import { EmployeeBenefitCreate } from '../pages/human resource/payroll/EmployeeBenefitCreate';
import { EmployeeBenefitEdit } from '../pages/human resource/payroll/EmployeeBenefitEdit';
import { EmployeeBenefitShow } from '../pages/human resource/payroll/EmployeeBenefitShow';
import { EmployeePayrollBenefitCreate } from '../pages/human resource/payroll/EmployeePayrollBenefitCreate';
import { EmployeePayrollBenefitEdit } from '../pages/human resource/payroll/EmployeePayrollBenefitEdit';
import { EmployeePayrollBenefitShow } from '../pages/human resource/payroll/EmployeePayrollBenefitShow';
import { EmployeePayrollDeductionCreate } from '../pages/human resource/payroll/EmployeePayrollDeductionCreate';
import { EmployeePayrollDeductionEdit } from '../pages/human resource/payroll/EmployeePayrollDeductionEdit';
import { EmployeePayrollDeductionShow } from '../pages/human resource/payroll/EmployeePayrollDeductionShow';
import { EmployeePayrollReliefCreate } from '../pages/human resource/payroll/EmployeePayrollReliefCreate';
import { EmployeePayrollReliefEdit } from '../pages/human resource/payroll/EmployeePayrollReliefEdit';
import { EmployeePayrollReliefShow } from '../pages/human resource/payroll/EmployeePayrollReliefShow';
import { EmployeePayrollCreate } from '../pages/human resource/payroll/EmployeePayrollCreate';
import { EmployeePayrollEdit } from '../pages/human resource/payroll/EmployeePayrollEdit';
import { EmployeePayrollShow } from '../pages/human resource/payroll/EmployeePayrollShow';
import { EmployeePayslipCreate } from '../pages/human resource/payroll/EmployeePayslipCreate';
import { EmployeePayslipEdit } from '../pages/human resource/payroll/EmployeePayslipEdit';
import { EmployeePayslipShow } from '../pages/human resource/payroll/EmployeePayslipShow';
import { EmployeeReliefCreate } from '../pages/human resource/payroll/EmployeeReliefCreate';
import { EmployeeReliefEdit } from '../pages/human resource/payroll/EmployeeReliefEdit';
import { EmployeeReliefShow } from '../pages/human resource/payroll/EmployeeReliefShow';
import { EmployeeSalaryCreate } from '../pages/human resource/payroll/EmployeeSalaryCreate';
import { EmployeeSalaryEdit } from '../pages/human resource/payroll/EmployeeSalaryEdit';
import { EmployeeSalaryShow } from '../pages/human resource/payroll/EmployeeSalaryShow';

export const humanResourceResources = [
    <Resource key="employees" name="employees" list={EmployeesList} create={EmployeeCreate} edit={EmployeeEdit} show={EmployeeShow} />,
    <Resource key="employees-details" name="employees-details" list={EmployeesDetailsList} create={EmployeeDetailCreate} edit={EmployeeDetailEdit} show={EmployeeDetailShow} />,
    <Resource key="employee-bank-accounts" name="employee-bank-accounts" list={EmployeeBankAccountsList} create={EmployeeBankAccountCreate} edit={EmployeeBankAccountEdit} show={EmployeeBankAccountShow} />,
    <Resource key="employee-contract-details" name="employee-contract-details" list={EmployeeContractDetailsList} create={EmployeeContractDetailCreate} edit={EmployeeContractDetailEdit} show={EmployeeContractDetailShow} />,
    <Resource key="employee-dependants" name="employee-dependants" list={EmployeeDependantsList} create={EmployeeDependantCreate} edit={EmployeeDependantEdit} show={EmployeeDependantShow} />,
    <Resource key="employee-documents" name="employee-documents" list={EmployeeDocumentsList} create={EmployeeDocumentCreate} edit={EmployeeDocumentEdit} show={EmployeeDocumentShow} />,
    <Resource key="employee-exit-details" name="employee-exit-details" list={EmployeeExitDetailsList} create={EmployeeExitDetailCreate} edit={EmployeeExitDetailEdit} show={EmployeeExitDetailShow} />,
    <Resource key="employee-qualifications" name="employee-qualifications" list={EmployeeQualificationsList} create={EmployeeQualificationCreate} edit={EmployeeQualificationEdit} show={EmployeeQualificationShow} />,

    <Resource key="employee-deduction-types" name="employee-deduction-types" list={EmployeeDeductionTypesList} create={EmployeeDeductionTypeCreate} edit={EmployeeDeductionTypeEdit} show={EmployeeDeductionTypeShow} />,
    <Resource key="employee-leave-types" name="employee-leave-types" list={EmployeeLeaveTypesList} create={EmployeeLeaveTypeCreate} edit={EmployeeLeaveTypeEdit} show={EmployeeLeaveTypeShow} />,
    <Resource key="employee-termination-categories" name="employee-termination-categories" list={EmployeeTerminationCategoryList} create={EmployeeTerminationCategoryCreate} edit={EmployeeTerminationCategoryEdit} show={EmployeeTerminationCategoryShow} />,

    <Resource key="employee-leave-applications" name="employee-leave-applications" list={EmployeeLeaveApplicationsList} create={EmployeeLeaveApplicationCreate} edit={EmployeeLeaveApplicationEdit} show={EmployeeLeaveApplicationShow} />,
    <Resource key="employee-leave-assignments" name="employee-leave-assignments" list={EmployeeLeaveAssignmentsList} create={EmployeeLeaveAssignmentCreate} edit={EmployeeLeaveAssignmentEdit} show={EmployeeLeaveAssignmentShow} />,
    <Resource key="employee-leave-details" name="employee-leave-details" list={EmployeeLeaveDetailsList} create={EmployeeLeaveDetailCreate} edit={EmployeeLeaveDetailEdit} show={EmployeeLeaveDetailShow} />,

    <Resource key="employee-benefits" name="employee-benefits" list={EmployeeBenefitsList} create={EmployeeBenefitCreate} edit={EmployeeBenefitEdit} show={EmployeeBenefitShow} />,
    <Resource key="employee-payroll-benefits" name="employee-payroll-benefits" list={EmployeePayrollBenefitsList} create={EmployeePayrollBenefitCreate} edit={EmployeePayrollBenefitEdit} show={EmployeePayrollBenefitShow} />,
    <Resource key="employee-payroll-deductions" name="employee-payroll-deductions" list={EmployeePayrollDeductionsList} create={EmployeePayrollDeductionCreate} edit={EmployeePayrollDeductionEdit} show={EmployeePayrollDeductionShow} />,
    <Resource key="employee-payroll-reliefs" name="employee-payroll-reliefs" list={EmployeePayrollReliefsList} create={EmployeePayrollReliefCreate} edit={EmployeePayrollReliefEdit} show={EmployeePayrollReliefShow} />,
    <Resource key="employee-payrolls" name="employee-payrolls" list={EmployeePayrollsList} create={EmployeePayrollCreate} edit={EmployeePayrollEdit} show={EmployeePayrollShow} />,
    <Resource key="employee-payslips" name="employee-payslips" list={EmployeePayslipsList} create={EmployeePayslipCreate} edit={EmployeePayslipEdit} show={EmployeePayslipShow} />,
    <Resource key="employee-reliefs" name="employee-reliefs" list={EmployeeReliefsList} create={EmployeeReliefCreate} edit={EmployeeReliefEdit} show={EmployeeReliefShow} />,
    <Resource key="employee-salaries" name="employee-salaries" list={EmployeeSalariesList} create={EmployeeSalaryCreate} edit={EmployeeSalaryEdit} show={EmployeeSalaryShow} />,
];