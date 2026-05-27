export type MilkJournalEntryDraft = {
    id: string;
    member_id: string;
    quantity: string;
    route_center_id: string;
    can_id: string;
    batch_no: string;
    route_id: string;
    transporter_id: string;
    milk_delivery_shift_id: string;
    journal_date: string;
};

export type MilkJournalBatchDraft = {
    id: string;
    batch_no: string;
    entries: MilkJournalEntryDraft[];
};

export type MilkJournalCreateDraft = {
    journal: string;
    route_id: string;
    transporter_id: string;
    journal_date: string;
    milk_delivery_shift_id: string;
    user_id: string;
    batches: MilkJournalBatchDraft[];
};

export type MilkJournalCreateErrors = Partial<
    Record<
        | keyof MilkJournalCreateDraft
        | 'batches'
        | `batch_${string}_batch_no`
        | `batch_${string}_entries`
        | `entry_${string}_member_id`
        | `entry_${string}_quantity`,
        string
    >
>;

export const milkJournalWizardStepTitles = ['Journal Details', 'Batches & Entries'] as const;
