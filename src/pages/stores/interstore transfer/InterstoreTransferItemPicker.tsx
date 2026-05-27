import { useMemo, useState } from 'react';
import {
    Box,
    Checkbox,
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@mui/material';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import type { InterstoreTransferErrors, TransferLineState } from './interstore-transfer.types';

type InterstoreTransferItemPickerProps = {
    lines: TransferLineState[];
    errors: InterstoreTransferErrors;
    loading?: boolean;
    fromStoreSelected?: boolean;
    onToggle: (itemId: number, selected: boolean) => void;
    onQuantityChange: (itemId: number, quantity: string) => void;
};

export const InterstoreTransferItemPicker = ({
    lines,
    errors,
    loading = false,
    fromStoreSelected = false,
    onToggle,
    onQuantityChange,
}: InterstoreTransferItemPickerProps) => {
    const [search, setSearch] = useState('');
    const normalizedSearch = search.trim().toLowerCase();

    const filtered = useMemo(() => {
        if (!normalizedSearch) {
            return lines;
        }
        return lines.filter(
            (line) =>
                line.itemName.toLowerCase().includes(normalizedSearch) ||
                line.sku.toLowerCase().includes(normalizedSearch)
        );
    }, [lines, normalizedSearch]);

    const selectedCount = lines.filter(
        (line) => line.selected && Number(line.quantity) >= 1
    ).length;

    return (
        <Box>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
                Transfer items
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Select items from the source store and enter transfer quantities (minimum 1).
            </Typography>

            {!fromStoreSelected ? (
                <Box
                    sx={{
                        py: 6,
                        textAlign: 'center',
                        color: 'text.secondary',
                        border: '1px dashed',
                        borderColor: 'divider',
                        borderRadius: 2,
                    }}
                >
                    <Inventory2OutlinedIcon sx={{ fontSize: 40, mb: 1, opacity: 0.5 }} />
                    <Typography>Select a source store to load available items.</Typography>
                </Box>
            ) : (
                <>
                    <TextField
                        fullWidth
                        size="small"
                        label="Search items"
                        placeholder="Search by name or SKU"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        disabled={loading || lines.length === 0}
                        sx={{ mb: 1.5 }}
                    />

                    {errors.lines ? (
                        <Typography variant="body2" color="error" sx={{ mb: 1 }}>
                            {errors.lines}
                        </Typography>
                    ) : null}

                    {loading ? (
                        <Box sx={{ py: 4, textAlign: 'center' }}>
                            <CircularProgress size={28} />
                        </Box>
                    ) : lines.length === 0 ? (
                        <Box
                            sx={{
                                py: 4,
                                textAlign: 'center',
                                color: 'text.secondary',
                                border: '1px dashed',
                                borderColor: 'divider',
                                borderRadius: 2,
                            }}
                        >
                            <Typography>No stock available in the source store.</Typography>
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                maxHeight: 420,
                                overflowY: 'auto',
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 2,
                            }}
                        >
                            <Table size="small" stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding="checkbox" sx={{ width: 48 }} />
                                        <TableCell>Item</TableCell>
                                        <TableCell align="right" sx={{ width: 120 }}>
                                            Available
                                        </TableCell>
                                        <TableCell align="right" sx={{ width: 140 }}>
                                            Transfer Qty
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filtered.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={4} align="center" sx={{ py: 4 }}>
                                                <Typography color="text.secondary">
                                                    No items match your search.
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        filtered.map((line) => {
                                            const quantityError =
                                                errors[`line_${line.itemId}_quantity`];
                                            return (
                                                <TableRow
                                                    key={line.itemId}
                                                    hover
                                                    selected={line.selected}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            checked={line.selected}
                                                            onChange={(event) =>
                                                                onToggle(
                                                                    line.itemId,
                                                                    event.target.checked
                                                                )
                                                            }
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography variant="body2" fontWeight={600}>
                                                            {line.itemName}
                                                        </Typography>
                                                        <Typography
                                                            variant="caption"
                                                            color="text.secondary"
                                                        >
                                                            SKU: {line.sku || '—'} · Unit:{' '}
                                                            {line.unit || '—'}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {line.maxQuantity}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <TextField
                                                            size="small"
                                                            type="number"
                                                            value={line.quantity}
                                                            disabled={!line.selected}
                                                            onChange={(event) =>
                                                                onQuantityChange(
                                                                    line.itemId,
                                                                    event.target.value
                                                                )
                                                            }
                                                            error={Boolean(quantityError)}
                                                            helperText={quantityError}
                                                            inputProps={{
                                                                min: 1,
                                                                max: line.maxQuantity,
                                                                step: '1',
                                                            }}
                                                            sx={{ width: 120 }}
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })
                                    )}
                                </TableBody>
                            </Table>
                        </Box>
                    )}

                    {fromStoreSelected && !loading && lines.length > 0 ? (
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ mt: 1, display: 'block' }}
                        >
                            {selectedCount} item{selectedCount === 1 ? '' : 's'} selected for transfer
                        </Typography>
                    ) : null}
                </>
            )}
        </Box>
    );
};
