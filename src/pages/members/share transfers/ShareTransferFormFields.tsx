import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import {
    FormDataConsumer,
    SelectInput,
    NumberInput,
    DateInput,
    minValue,
    maxValue,
    useDataProvider,
    useInput,
    useTranslate,
    Labeled,
    type Validator,
    type Identifier,
    type RaRecord,
} from 'react-admin';
import { MenuItem, TextField, FormHelperText, Box } from '@mui/material';
import Grid from '@mui/material/Grid';

const validateTransactionDate = (value: string | Date | null | undefined) => {
    if (!value) return undefined;
    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate > today) {
        return 'Transaction date cannot be in the future';
    }
    return undefined;
};

const today = new Date().toLocaleDateString('en-CA');

const fieldRequired = (message = 'Required'): Validator => (value) => {
    if (value === undefined || value === null || value === '') {
        return message;
    }
    if (typeof value === 'string' && value.trim() === '') {
        return message;
    }
    return undefined;
};

const formatValidationMessage = (
    translate: (key: string, options?: { _: string }) => string,
    message?: string
) => {
    if (!message) return undefined;
    if (message.startsWith('ra.') || message.includes('@@react-admin@@')) {
        return translate(message, { _: 'Required' });
    }
    return message;
};

const getShareTypeIdFromAccount = (record: RaRecord): string | undefined => {
    const raw =
        record.share_type_id ??
        record.share_type?.id ??
        record.ShareTypeId ??
        record.ShareType?.id ??
        record.shareTypeId ??
        (typeof record.share_type === 'number' || typeof record.share_type === 'string'
            ? record.share_type
            : undefined);
    if (raw == null || raw === '') return undefined;
    return String(raw);
};

const getShareTypeLabelFromAccount = (record: RaRecord): string | undefined => {
    const raw =
        record.share_type_name ??
        record.share_type?.share_code ??
        record.share_type?.name ??
        record.ShareType?.share_code ??
        record.ShareType?.name;
    if (raw == null || raw === '') return undefined;
    return String(raw);
};

const accountMatchesShareType = (
    record: RaRecord,
    shareTypeId: Identifier,
    selectedShareType?: RaRecord
): boolean => {
    const accountTypeId = getShareTypeIdFromAccount(record);
    if (accountTypeId && accountTypeId === String(shareTypeId)) {
        return true;
    }
    if (!selectedShareType) {
        return false;
    }
    const selectedLabel = selectedShareType.share_code ?? selectedShareType.name;
    const accountLabel = getShareTypeLabelFromAccount(record);
    if (!selectedLabel || !accountLabel) {
        return false;
    }
    return String(selectedLabel).toLowerCase() === String(accountLabel).toLowerCase();
};

const filterShareAccountsByType = (
    accounts: RaRecord[],
    shareTypeId: Identifier | undefined,
    selectedShareType?: RaRecord
) => {
    if (shareTypeId == null || shareTypeId === '') return [];
    return accounts.filter((account) => accountMatchesShareType(account, shareTypeId, selectedShareType));
};

const parseShareUnits = (record: RaRecord | undefined): number | undefined => {
    if (!record) return undefined;
    const raw = record.share_units ?? record.share_unit ?? record.units;
    if (raw == null || raw === '') return undefined;
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : undefined;
};

const formatShareAccountChoice = (record: RaRecord, emphasizeUnits = false) => {
    const name = `${record.first_name ?? ''} ${record.last_name ?? ''}`.trim();
    const memberNo = record.member_no ? ` (${record.member_no})` : '';
    const units = parseShareUnits(record);

    if (emphasizeUnits && units != null) {
        const label = `${name}${memberNo}`.trim();
        return label ? `${label} — ${units} units available` : `${units} units available`;
    }

    if (units != null) {
        const label = `${name}${memberNo}`.trim();
        return label ? `${label} — ${units} units` : `${units} units`;
    }

    return `${name}${memberNo}`.trim() || String(record.id ?? '');
};

const findShareAccount = (choices: RaRecord[], accountId: number | undefined) =>
    choices.find((record) => parseUnsignedInteger(record.id) === accountId);

/** Non-negative integer (share account id stored in from_member_id / to_member_id) */
const parseUnsignedInteger = (value: unknown): number | undefined => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    if (typeof value === 'object' && !Array.isArray(value)) {
        return parseUnsignedInteger((value as RaRecord).id);
    }
    const parsed = typeof value === 'number' ? value : Number.parseInt(String(value), 10);
    if (!Number.isInteger(parsed) || parsed < 0) {
        return undefined;
    }
    return parsed;
};

const validateUnsignedIntegerId: Validator = (value) => {
    const required = fieldRequired()(value);
    if (required) {
        return required;
    }
    if (parseUnsignedInteger(value) === undefined) {
        return 'Must be a valid share account';
    }
    return undefined;
};

/** Scalar id from SelectInput / ReferenceInput form values */
const normalizeFormIdentifier = (value: unknown): Identifier | undefined => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    if (typeof value === 'object' && !Array.isArray(value)) {
        const id = (value as RaRecord).id;
        if (id === undefined || id === null || id === '') {
            return undefined;
        }
        return id as Identifier;
    }
    return value as Identifier;
};

const isShareTypeSelected = (shareTypeId: Identifier | undefined): boolean =>
    shareTypeId !== undefined && shareTypeId !== null && shareTypeId !== '';

type ShareAccountSelectProps = {
    source: string;
    label: string;
    choices: RaRecord[];
    loading?: boolean;
    disabled?: boolean;
    excludeAccountId?: number;
    validate?: Validator | Validator[];
    emptyText?: string;
    emphasizeUnits?: boolean;
    hint?: string;
};

const ShareAccountSelect = ({
    source,
    label,
    choices,
    loading,
    disabled,
    excludeAccountId,
    validate,
    emptyText = 'Select a share account',
    emphasizeUnits = false,
    hint,
}: ShareAccountSelectProps) => {
    const translate = useTranslate();
    const { field, fieldState, isRequired } = useInput({ source, validate });

    const helperMessage =
        formatValidationMessage(translate, fieldState.error?.message) ?? hint;

    return (
        <Labeled label={label} isRequired={isRequired} fullWidth>
            <Box>
                <TextField
                    select
                    fullWidth
                    variant="outlined"
                    value={field.value != null && field.value !== '' ? String(field.value) : ''}
                    onChange={(event) => {
                        const next = event.target.value;
                        if (next === '') {
                            field.onChange(undefined);
                            return;
                        }
                        const parsed = parseUnsignedInteger(next);
                        if (parsed !== undefined) {
                            field.onChange(parsed);
                        }
                    }}
                    onBlur={field.onBlur}
                    name={field.name}
                    disabled={disabled}
                    error={Boolean(fieldState.error)}
                    SelectProps={{ displayEmpty: true }}
                >
                    <MenuItem value="" disabled>
                        <em>{loading ? 'Loading share accounts...' : emptyText}</em>
                    </MenuItem>
                    {choices.map((record) => (
                        <MenuItem
                            key={record.id}
                            value={String(record.id)}
                            disabled={
                                excludeAccountId !== undefined &&
                                parseUnsignedInteger(record.id) === excludeAccountId
                            }
                        >
                            {formatShareAccountChoice(record, emphasizeUnits)}
                        </MenuItem>
                    ))}
                </TextField>
                {helperMessage ? (
                    <FormHelperText error={Boolean(fieldState.error)}>{helperMessage}</FormHelperText>
                ) : null}
            </Box>
        </Labeled>
    );
};

type ShareTransferLookupData = {
    allShareAccounts: RaRecord[];
    shareTypes: RaRecord[];
    loading: boolean;
};

type ShareTransferFormSlice = {
    share_type_id?: unknown;
    from_member_id?: unknown;
    to_member_id?: unknown;
};

const ShareTransferDependentFields = ({
    allShareAccounts,
    shareTypes,
    loading,
}: ShareTransferLookupData) => {
    const { setValue } = useFormContext();

    return (
        <FormDataConsumer<ShareTransferFormSlice>>
            {({ formData }) => {
                const shareTypeId = normalizeFormIdentifier(formData.share_type_id);
                const fromAccountId = parseUnsignedInteger(formData.from_member_id);
                const toAccountId = parseUnsignedInteger(formData.to_member_id);
                const shareTypeSelected = isShareTypeSelected(shareTypeId);

                const selectedShareType = shareTypes.find(
                    (type) => String(type.id) === String(shareTypeId)
                );

                const shareAccountsForType = filterShareAccountsByType(
                    allShareAccounts,
                    shareTypeId,
                    selectedShareType
                );

                return (
                    <ShareTransferDependentFieldsBody
                        shareTypeId={shareTypeId}
                        shareTypeSelected={shareTypeSelected}
                        fromAccountId={fromAccountId}
                        toAccountId={toAccountId}
                        shareAccountsForType={shareAccountsForType}
                        loading={loading}
                        setValue={setValue}
                    />
                );
            }}
        </FormDataConsumer>
    );
};

type ShareTransferDependentFieldsBodyProps = {
    shareTypeId: Identifier | undefined;
    shareTypeSelected: boolean;
    fromAccountId: number | undefined;
    toAccountId: number | undefined;
    shareAccountsForType: RaRecord[];
    loading: boolean;
    setValue: ReturnType<typeof useFormContext>['setValue'];
};

const ShareTransferDependentFieldsBody = ({
    shareTypeId,
    shareTypeSelected,
    fromAccountId,
    toAccountId,
    shareAccountsForType,
    loading,
    setValue,
}: ShareTransferDependentFieldsBodyProps) => {
    const prevShareTypeIdRef = useRef<string | undefined>(undefined);

    const resetShareAccountFields = useCallback(() => {
        setValue('from_member_id', undefined);
        setValue('to_member_id', undefined);
        setValue('share_units', undefined);
    }, [setValue]);

    useEffect(() => {
        const nextKey = shareTypeId == null || shareTypeId === '' ? undefined : String(shareTypeId);
        if (prevShareTypeIdRef.current === nextKey) {
            return;
        }
        prevShareTypeIdRef.current = nextKey;
        resetShareAccountFields();
    }, [shareTypeId, resetShareAccountFields]);

    useEffect(() => {
        setValue('share_units', undefined);
        if (toAccountId !== undefined && toAccountId === fromAccountId) {
            setValue('to_member_id', undefined);
        }
    }, [fromAccountId, toAccountId, setValue]);

    const selectedFromAccount = useMemo(
        () => findShareAccount(shareAccountsForType, fromAccountId),
        [shareAccountsForType, fromAccountId]
    );

    const maxShareUnits = useMemo(
        () => parseShareUnits(selectedFromAccount),
        [selectedFromAccount]
    );

    const shareUnitsValidate = useMemo(() => {
        const rules: Validator[] = [fieldRequired(), minValue(1, 'Units cannot be less than 1')];
        if (maxShareUnits != null) {
            rules.push(
                maxValue(
                    maxShareUnits,
                    `Cannot exceed ${maxShareUnits} units available on the selected from account`
                )
            );
        }
        return rules;
    }, [maxShareUnits]);

    const fromAccountHint = useMemo(() => {
        if (!shareTypeSelected) return undefined;
        if (loading) return 'Loading share accounts...';
        if (selectedFromAccount && maxShareUnits != null) {
            return `This account has ${maxShareUnits} units available to transfer.`;
        }
        if (selectedFromAccount) {
            return 'Share units for this account are not available.';
        }
        if (shareAccountsForType.length === 0) {
            return 'No share accounts found for the selected share type.';
        }
        return 'Only share accounts matching the selected share type are listed.';
    }, [shareTypeSelected, loading, selectedFromAccount, maxShareUnits, shareAccountsForType.length]);

    const accountSelectEmptyText = loading
        ? 'Loading share accounts...'
        : !shareTypeSelected
          ? 'Select a share type first'
          : shareAccountsForType.length === 0
            ? 'No share accounts for this share type'
            : 'Select a share account';

    const fromAccountSelected = fromAccountId !== undefined;

    return (
        <>
            <Grid size={{ xs: 12, md: 6 }}>
                <ShareAccountSelect
                    source="from_member_id"
                    label="From Share Account"
                    choices={shareAccountsForType}
                    loading={loading}
                    validate={validateUnsignedIntegerId}
                    emphasizeUnits
                    hint={fromAccountHint}
                    emptyText={accountSelectEmptyText}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <ShareAccountSelect
                    source="to_member_id"
                    label="To Share Account"
                    choices={shareAccountsForType}
                    loading={loading}
                    excludeAccountId={fromAccountId}
                    validate={validateUnsignedIntegerId}
                    emptyText={accountSelectEmptyText}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <NumberInput
                    source="share_units"
                    label="Share Units"
                    validate={shareUnitsValidate}
                    min={1}
                    max={maxShareUnits}
                    fullWidth
                    variant="outlined"
                    disabled={!fromAccountSelected}
                    helperText={
                        maxShareUnits != null
                            ? `Enter up to ${maxShareUnits} units (available on the from account)`
                            : fromAccountSelected
                              ? undefined
                              : 'Select a from share account first'
                    }
                />
            </Grid>
        </>
    );
};

export const ShareTransferFormFields = () => {
    const dataProvider = useDataProvider();

    const [allShareAccounts, setAllShareAccounts] = useState<RaRecord[]>([]);
    const [shareTypes, setShareTypes] = useState<RaRecord[]>([]);
    const [lookupLoading, setLookupLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        setLookupLoading(true);

        Promise.all([
            dataProvider.getList('share-accounts', {
                pagination: { page: 1, perPage: 500 },
                sort: { field: 'member_no', order: 'ASC' },
            }),
            dataProvider.getList('share-types', {
                pagination: { page: 1, perPage: 200 },
                sort: { field: 'share_code', order: 'ASC' },
            }),
        ])
            .then(([accountsRes, typesRes]) => {
                if (!cancelled) {
                    setAllShareAccounts(accountsRes.data);
                    setShareTypes(typesRes.data);
                }
            })
            .catch(() => {
                if (!cancelled) {
                    setAllShareAccounts([]);
                    setShareTypes([]);
                }
            })
            .finally(() => {
                if (!cancelled) {
                    setLookupLoading(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [dataProvider]);

    return (
        <Grid container spacing={2} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6 }}>
                <SelectInput
                    source="share_type_id"
                    label="Share Type"
                    choices={shareTypes}
                    optionText="share_code"
                    optionValue="id"
                    fullWidth
                    variant="outlined"
                    validate={fieldRequired()}
                    disabled={lookupLoading}
                    emptyText={
                        lookupLoading ? 'Loading share types...' : 'No share types available'
                    }
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <DateInput
                    source="transaction_date"
                    label="Transaction Date"
                    validate={[fieldRequired(), validateTransactionDate]}
                    max={today}
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <ShareTransferDependentFields
                allShareAccounts={allShareAccounts}
                shareTypes={shareTypes}
                loading={lookupLoading}
            />
        </Grid>
    );
};

/** Ensure account ids are sent as unsigned integers on create */
export const transformShareTransfer = (data: RaRecord): RaRecord => ({
    ...data,
    from_member_id: parseUnsignedInteger(data.from_member_id),
    to_member_id: parseUnsignedInteger(data.to_member_id),
});
