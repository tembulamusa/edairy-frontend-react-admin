export type MemberCreateDraft = {
    member_no: string;
    first_name: string;
    last_name: string;
    other_names: string;
    idnumber: string;
    gender: string;
    date_of_birth: string;
    tax_number: string;
    marital_status: string;
    primary_phone: string;
    secondary_phone: string;
    email: string;
    next_of_kin_full_name: string;
    next_of_kin_phone: string;
    date_registered: string;
    member_type_id: string;
    route_id: string;
    number_of_cows: string;
    passport_photo: string;
    id_front_photo: string;
    id_back_photo: string;
    id_date_of_issue: string;
    title: string;
    status: string;
    cashout_enrolled: boolean;
    birth_city: string;
    downloaded: string;
};

export type MemberCreateErrors = Partial<Record<keyof MemberCreateDraft, string>>;

export type MemberCreateSnapshot = {
    active_step: number;
    values: MemberCreateDraft;
};

export const initialMemberCreateDraft: MemberCreateDraft = {
    member_no: "",
    first_name: "",
    last_name: "",
    other_names: "",
    idnumber: "",
    gender: "",
    date_of_birth: "",
    tax_number: "",
    marital_status: "",
    primary_phone: "",
    secondary_phone: "",
    email: "",
    next_of_kin_full_name: "",
    next_of_kin_phone: "",
    date_registered: "",
    member_type_id: "",
    route_id: "",
    number_of_cows: "",
    passport_photo: "",
    id_front_photo: "",
    id_back_photo: "",
    id_date_of_issue: "",
    title: "",
    status: "1",
    cashout_enrolled: false,
    birth_city: "",
    downloaded: "",
};

export const memberWizardStepTitles = [
    "Personal Info",
    "Dairy Info",
    "Contacts",
    "Documents",
    "Other Details",
    "Confirm",
] as const;

export const memberWizardStorageKey = "member-create-wizard-draft";
