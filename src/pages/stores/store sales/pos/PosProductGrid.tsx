import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Chip,
    CircularProgress,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import type { PosCartLine } from './store-sale-pos.types';
import type { SaleType } from './store-sale-pos.types';
import type { PosProduct } from './store-sale-pos-utils';
import { formatMoney, formatProductLabel, getAvailableQuantity, getImageUrl, getUnitPrice } from './store-sale-pos-utils';

type PosProductGridProps = {
    products: PosProduct[];
    cart: PosCartLine[];
    saleType: SaleType;
    search: string;
    loading?: boolean;
    storeSelected?: boolean;
    onSearchChange: (value: string) => void;
    onAddProduct: (product: PosProduct) => void;
};

export const PosProductGrid = ({
    products,
    cart,
    saleType,
    search,
    loading = false,
    storeSelected = false,
    onSearchChange,
    onAddProduct,
}: PosProductGridProps) => {
    const normalizedSearch = search.trim().toLowerCase();
    const filtered = products.filter((product) => {
        if (!normalizedSearch) return true;
        return (
            product.itemName.toLowerCase().includes(normalizedSearch) ||
            product.sku.toLowerCase().includes(normalizedSearch)
        );
    });

    const getCartQuantity = (itemId: number) =>
        cart.find((line) => line.itemId === itemId)?.quantity ?? 0;

    return (
        <Box>
            <TextField
                fullWidth
                size="small"
                label="Search items"
                placeholder="Search by name or SKU"
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                disabled={!storeSelected}
                sx={{ mb: 2 }}
            />

            {!storeSelected ? (
                <Box
                    sx={{
                        py: 8,
                        textAlign: 'center',
                        color: 'text.secondary',
                        border: '1px dashed',
                        borderColor: 'divider',
                        borderRadius: 2,
                    }}
                >
                    <Inventory2OutlinedIcon sx={{ fontSize: 40, mb: 1, opacity: 0.5 }} />
                    <Typography>Select a store to load items and stock balances.</Typography>
                </Box>
            ) : loading ? (
                <Box sx={{ py: 8, textAlign: 'center', color: 'text.secondary' }}>
                    <CircularProgress size={32} sx={{ mb: 2 }} />
                    <Typography>Loading store items and balances...</Typography>
                </Box>
            ) : filtered.length === 0 ? (
                <Box sx={{ py: 6, textAlign: 'center', color: 'text.secondary' }}>
                    <Typography>
                        {products.length === 0
                            ? 'No items in stock for this store.'
                            : 'No items match your search.'}
                    </Typography>
                </Box>
            ) : (
                <Grid container spacing={2}>
                    {filtered.map((product) => {
                        const cartQuantity = getCartQuantity(product.itemId);
                        const available = getAvailableQuantity(product, cartQuantity);
                        const outOfStock = product.balance <= 0;
                        const isSelected = cartQuantity > 0;
                        const cannotAddMore = available <= 0;

                        return (
                            <Grid key={product.itemId} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        height: '100%',
                                        opacity: outOfStock && !isSelected ? 0.65 : 1,
                                        borderWidth: isSelected ? 2 : 1,
                                        borderColor: isSelected ? 'primary.main' : outOfStock ? 'divider' : 'primary.light',
                                        bgcolor: isSelected ? 'action.selected' : 'background.paper',
                                        transition: 'border-color 0.15s ease, background-color 0.15s ease',
                                    }}
                                >
                                    <CardActionArea
                                        onClick={() => onAddProduct(product)}
                                        sx={{
                                            height: '100%',
                                            cursor: cannotAddMore && !isSelected ? 'not-allowed' : 'pointer',
                                        }}
                                    >
                                        <CardContent sx={{ p: 1.5 }}>
                                            <Box display="flex" gap={1.5} alignItems="flex-start">
                                                <Box
                                                    component="img"
                                                    src={getImageUrl(product.thumbnail)}
                                                    alt={product.itemName}
                                                    sx={{
                                                        width: 56,
                                                        height: 56,
                                                        objectFit: 'cover',
                                                        borderRadius: 1,
                                                        border: '1px solid',
                                                        borderColor: 'divider',
                                                        flexShrink: 0,
                                                    }}
                                                    onError={(event) => {
                                                        (event.target as HTMLImageElement).src =
                                                            getImageUrl();
                                                    }}
                                                />
                                                <Box sx={{ minWidth: 0, flex: 1 }}>
                                                    <Typography
                                                        variant="subtitle2"
                                                        fontWeight={700}
                                                        noWrap
                                                        title={formatProductLabel(product)}
                                                    >
                                                        {formatProductLabel(product)}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        SKU: {product.sku}
                                                    </Typography>
                                                    <Typography variant="body2" fontWeight={600} sx={{ mt: 0.5 }}>
                                                        {formatMoney(getUnitPrice(product, saleType))}
                                                    </Typography>
                                                    <Box sx={{ mt: 1, display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                                                        {isSelected ? (
                                                            <Chip
                                                                size="small"
                                                                icon={<ShoppingCartOutlinedIcon />}
                                                                label={`In cart: ${cartQuantity} · ${available} left`}
                                                                color="primary"
                                                            />
                                                        ) : (
                                                            <Chip
                                                                size="small"
                                                                label={`Available: ${product.balance} ${product.unit}`}
                                                                color={outOfStock ? 'default' : 'success'}
                                                                variant={outOfStock ? 'outlined' : 'filled'}
                                                            />
                                                        )}
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            )}
        </Box>
    );
};
