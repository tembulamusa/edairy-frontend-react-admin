import {
    initialMemberCreateDraft,
    memberWizardStorageKey,
    type MemberCreateDraft,
    type MemberCreateSnapshot,
} from "./member-create-wizard.types";

export const loadMemberCreateDraft = (): MemberCreateSnapshot | null => {
    if (typeof window === "undefined") return null;

    const raw = window.localStorage.getItem(memberWizardStorageKey);
    if (!raw) return null;

    try {
        const parsed = JSON.parse(raw) as Partial<MemberCreateSnapshot>;
        return {
            active_step: typeof parsed.active_step === "number" ? parsed.active_step : 0,
            values: {
                ...initialMemberCreateDraft,
                ...(parsed.values as Partial<MemberCreateDraft> | undefined),
            },
        };
    } catch {
        return null;
    }
};

export const saveMemberCreateDraft = (snapshot: MemberCreateSnapshot) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(memberWizardStorageKey, JSON.stringify(snapshot));
};

export const clearMemberCreateDraft = () => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(memberWizardStorageKey);
};
