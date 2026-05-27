export const transporterCreateMainSx = {
    '& .RaCreate-main': { display: 'flex', justifyContent: 'center', padding: 2 },
    '& .RaEdit-main': { display: 'flex', justifyContent: 'center', padding: 2 },
} as const;

export const transporterCreateWrapperSx = {
    width: '100%',
    maxWidth: 1100,
} as const;

export const transporterSimpleFormSx = {
    '& .RaSimpleForm-toolbar': { mt: 3, px: 0, backgroundColor: 'transparent' },
    '& .MuiInputBase-root': { borderRadius: 2 },
    width: '100%',
} as const;

export const listCreateButtonSx = {
    backgroundColor: 'primary.main',
    color: 'white',
    '&:hover': { backgroundColor: 'primary.dark' },
} as const;
