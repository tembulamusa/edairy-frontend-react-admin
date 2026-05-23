import { useMemo } from 'react';
import { useGetList } from 'react-admin';

export type StoreChoice = {
    id: string;
    name: string;
};

export const normalizeStoreId = (value: unknown): string => {
    if (value === undefined || value === null || value === '') {
        return '';
    }
    if (typeof value === 'object' && !Array.isArray(value) && 'id' in value) {
        return String((value as { id: unknown }).id ?? '');
    }
    return String(value);
};

export const useStoreChoices = () => {
    const { data: stores = [], isLoading } = useGetList('stores', {
        pagination: { page: 1, perPage: 500 },
        sort: { field: 'name', order: 'ASC' },
    });

    const choices: StoreChoice[] = useMemo(
        () =>
            stores.map((store) => ({
                id: String(store.id),
                name: String(store.name ?? ''),
            })),
        [stores]
    );

    const nameLookup = useMemo(() => {
        const lookup = new Map<string, string>();
        choices.forEach((choice) => {
            if (choice.id && choice.name) {
                lookup.set(choice.id, choice.name);
            }
        });
        return lookup;
    }, [choices]);

    return { choices, nameLookup, isLoading };
};
