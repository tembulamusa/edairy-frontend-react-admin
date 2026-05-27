import { Resource, ShowGuesser } from 'react-admin';

/* ============ LOANS MODULE ============ */
import { LoanMembersList } from '../pages/loans/loan members/loan-members-list';
import { LoansList } from '../pages/loans/member loans/member-loans-list';
import { OrganizationDetailsList } from '../pages/admin/organization/organization details/organization-details-list';

export const loansResources = [
    <Resource key="loan-accounts" name="loan-accounts" list={LoanMembersList} show={ShowGuesser} />,
    <Resource key="loans" name="loans" list={LoansList} show={ShowGuesser} />,
    <Resource key="loan-report" name="loan-report" list={OrganizationDetailsList} show={ShowGuesser} />,
    <Resource key="loan-portfolio-report" name="loan-portfolio-report" list={OrganizationDetailsList} show={ShowGuesser} />,
];