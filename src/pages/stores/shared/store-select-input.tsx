import { SelectInput, required } from 'react-admin';
import { normalizeStoreId, useStoreChoices } from './use-store-choices';

type StoreSelectInputProps = {
    source: string;
    label: string;
};

export const StoreSelectInput = ({ source, label }: StoreSelectInputProps) => {
    const { choices, isLoading } = useStoreChoices();

    return (
        <SelectInput
            source={source}
            label={label}
            choices={choices}
            optionText="name"
            optionValue="id"
            parse={normalizeStoreId}
            format={normalizeStoreId}
            validate={required()}
            disabled={isLoading}
            fullWidth
            variant="outlined"
        />
    );
};
