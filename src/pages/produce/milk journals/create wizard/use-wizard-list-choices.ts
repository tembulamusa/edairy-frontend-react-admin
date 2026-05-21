import { useGetList } from 'react-admin';

export type WizardChoice = { id: string; label: string };

type UseWizardListChoicesOptions = {
    filter?: Record<string, unknown>;
};

export const useWizardListChoices = (
    resource: string,
    optionText: (record: Record<string, unknown>) => string,
    options?: UseWizardListChoicesOptions
) => {
    const { data = [], isLoading } = useGetList(resource, {
        pagination: { page: 1, perPage: 500 },
        sort: { field: 'id', order: 'ASC' },
        filter: options?.filter ?? {},
    });

    const choices: WizardChoice[] = data.map((record) => ({
        id: String(record.id),
        label: optionText(record as Record<string, unknown>),
    }));

    return { choices, isLoading };
};
