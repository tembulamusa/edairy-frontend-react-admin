import {
    initialMemberCreateDraft,
    memberWizardStepTitles,
    type MemberCreateDraft,
    type MemberCreateErrors,
} from '../../../../members/members/create wizard/member-create-wizard.types';

export type OrganizationLeadershipCreateDraft = MemberCreateDraft & {
    position: string;
    submitted: string;
    liveness_passed: string;
    link_status: string;
    phone: string;
};

export type OrganizationLeadershipCreateErrors = Partial<
    Record<keyof OrganizationLeadershipCreateDraft, string>
>;

export const initialOrganizationLeadershipCreateDraft: OrganizationLeadershipCreateDraft = {
    ...initialMemberCreateDraft,
    position: '',
    submitted: '',
    liveness_passed: '',
    link_status: '',
    phone: '',
};

export const leadershipWizardStepTitles = [
    memberWizardStepTitles[0],
    'Role & Organization',
    memberWizardStepTitles[2],
    memberWizardStepTitles[3],
    memberWizardStepTitles[4],
    memberWizardStepTitles[5],
] as const;
