import { useMemo, useState } from 'react';
import { Create, useDataProvider, useGetList, useNotify, useRedirect, useRefresh } from 'react-admin';
import {
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
    CircularProgress,
    Divider,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import {
    transporterCreateMainSx,
    transporterCreateWrapperSx,
} from '../../transporters/shared/transporter-page-layout';
import { formatCustomerPayDateRangeLabel } from '../shared/customer-pay-date-range-label';
import { createCustomerBillingsForPayDateRanges } from './customer-billing-create-submit';

export const CustomerBillingCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const refresh = useRefresh();
    const dataProvider = useDataProvider();
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [generating, setGenerating] = useState(false);

    const { data: payDateRanges = [], isLoading } = useGetList('customer-pay-date-ranges', {
        pagination: { page: 1, perPage: 500 },
        sort: { field: 'id', order: 'DESC' },
    });

    const allIds = useMemo(
        () =>
            payDateRanges
                .map((range) => Number(range.id))
                .filter((id) => Number.isFinite(id) && id > 0),
        [payDateRanges]
    );

    const allSelected = allIds.length > 0 && selectedIds.length === allIds.length;

    const toggleOne = (id: number) => {
        setSelectedIds((current) =>
            current.includes(id) ? current.filter((value) => value !== id) : [...current, id]
        );
    };

    const toggleAll = () => {
        setSelectedIds(allSelected ? [] : allIds);
    };

    const handleGenerate = async () => {
        if (selectedIds.length === 0) {
            notify('Select at least one pay date range', { type: 'warning' });
            return;
        }

        setGenerating(true);
        try {
            await createCustomerBillingsForPayDateRanges(dataProvider, selectedIds);
            notify(
                selectedIds.length === 1
                    ? 'Customer billing generated successfully'
                    : `${selectedIds.length} customer billings generated successfully`,
                { type: 'success' }
            );
            refresh();
            redirect('list', 'customer-billings');
        } catch (error) {
            notify(
                error instanceof Error ? error.message : 'Failed to generate customer billings',
                { type: 'error' }
            );
        } finally {
            setGenerating(false);
        }
    };

    return (
        <Create resource="customer-billings" title={false} sx={transporterCreateMainSx} redirect={false}>
            <Box sx={transporterCreateWrapperSx}>
                <ListBreadcrumbs />
                <Card elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', width: '100%' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h5" fontWeight="bold">
                            Generate Customer Billings
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Select pay date ranges to generate billing records for each period.
                        </Typography>
                        <Divider sx={{ mb: 3 }} />

                        {isLoading ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
                                <CircularProgress />
                            </Box>
                        ) : payDateRanges.length === 0 ? (
                            <Typography color="text.secondary">
                                No pay date ranges found. Create pay date ranges under Customers → Setup first.
                            </Typography>
                        ) : (
                            <Table size="small">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={allSelected}
                                                indeterminate={selectedIds.length > 0 && !allSelected}
                                                onChange={toggleAll}
                                            />
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Pay Date Range</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Start Date</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>End Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {payDateRanges.map((range) => {
                                        const id = Number(range.id);
                                        const checked = selectedIds.includes(id);

                                        return (
                                            <TableRow
                                                key={id}
                                                hover
                                                selected={checked}
                                                sx={{ cursor: 'pointer' }}
                                                onClick={() => toggleOne(id)}
                                            >
                                                <TableCell padding="checkbox" onClick={(event) => event.stopPropagation()}>
                                                    <Checkbox checked={checked} onChange={() => toggleOne(id)} />
                                                </TableCell>
                                                <TableCell>{formatCustomerPayDateRangeLabel(range)}</TableCell>
                                                <TableCell>
                                                    {range.start_date
                                                        ? String(range.start_date).slice(0, 10)
                                                        : '—'}
                                                </TableCell>
                                                <TableCell>
                                                    {range.end_date ? String(range.end_date).slice(0, 10) : '—'}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        )}

                        <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: 'grey.500',
                                    color: 'white',
                                    '&:hover': { backgroundColor: 'grey.700' },
                                }}
                                onClick={() => redirect('list', 'customer-billings')}
                                disabled={generating}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleGenerate}
                                disabled={generating || isLoading || payDateRanges.length === 0}
                            >
                                {generating ? 'Generating...' : 'Generate'}
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Create>
    );
};
