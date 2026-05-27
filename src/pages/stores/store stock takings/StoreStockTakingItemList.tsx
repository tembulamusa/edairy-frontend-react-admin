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
import type { StockTakingErrors, StockTakingLineState } from './store-stock-taking.types';

type StoreStockTakingItemListProps = {
    lines: StockTakingLineState[];
    errors: StockTakingErrors;
    loading?: boolean;
    storeSelected?: boolean;
    onToggle: (itemId: number, selected: boolean) => void;
    onPhysicalQuantityChange: (itemId: number, quantity: string) => void;
};

export const StoreStockTakingItemList = ({
    lines,
    errors,
    loading = false,
    storeSelected = false,
    onToggle,
    onPhysicalQuantityChange,
}: StoreStockTakingItemListProps) => {
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

    const selectedCount = lines.filter((line) => line.selected).length;

    return (
        <Box>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
                Stock items
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Check items to count and enter the physical quantity for each selected item.
            </Typography>

            {!storeSelected ? (
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
                    <Typography>Select a store to load stock items.</Typography>
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
                            <Typography>No stock items found for this store.</Typography>
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
                                            System Qty
                                        </TableCell>
                                        <TableCell align="right" sx={{ width: 140 }}>
                                            Physical Qty
                                        </TableCell>
                                        <TableCell align="right" sx={{ width: 100 }}>
                                            Variance
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filtered.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                                                <Typography color="text.secondary">
                                                    No items match your search.
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        filtered.map((line) => {
                                            const physicalError = errors[`line_${line.itemId}_physical`];
                                            const physical = Number(line.physicalQuantity);
                                            const hasPhysical =
                                                line.selected && line.physicalQuantity.trim() !== '';
                                            const variance =
                                                hasPhysical && Number.isFinite(physical)
                                                    ? physical - line.systemQuantity
                                                    : null;

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
                                                                onToggle(line.itemId, event.target.checked)
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
                                                            SKU: {line.sku || '—'} · Unit: {line.unit || '—'}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell align="right">{line.systemQuantity}</TableCell>
                                                    <TableCell align="right">
                                                        <TextField
                                                            size="small"
                                                            type="number"
                                                            value={line.physicalQuantity}
                                                            disabled={!line.selected}
                                                            onChange={(event) =>
                                                                onPhysicalQuantityChange(
                                                                    line.itemId,
                                                                    event.target.value
                                                                )
                                                            }
                                                            error={Boolean(physicalError)}
                                                            helperText={physicalError}
                                                            inputProps={{ min: 0, step: '1' }}
                                                            sx={{ width: 120 }}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {variance == null ? (
                                                            '—'
                                                        ) : (
                                                            <Typography
                                                                variant="body2"
                                                                color={
                                                                    variance === 0
                                                                        ? 'text.secondary'
                                                                        : variance > 0
                                                                          ? 'success.main'
                                                                          : 'error.main'
                                                                }
                                                            >
                                                                {variance > 0 ? `+${variance}` : variance}
                                                            </Typography>
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })
                                    )}
                                </TableBody>
                            </Table>
                        </Box>
                    )}

                    {storeSelected && !loading && lines.length > 0 ? (
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ mt: 1, display: 'block' }}
                        >
                            {selectedCount} item{selectedCount === 1 ? '' : 's'} selected for counting
                        </Typography>
                    ) : null}
                </>
            )}
        </Box>
    );
};
