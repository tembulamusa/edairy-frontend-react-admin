/** Shared layout tokens for organization create pages */
export const ORGANIZATION_CREATE_MAX_WIDTH = 1400;

export const organizationCreateMainSx = {
    '& .RaCreate-main': {
        padding: 2,
        width: '100%',
    },
};

export const organizationCreateWrapperSx = {
    width: '100%',
    maxWidth: ORGANIZATION_CREATE_MAX_WIDTH,
    mx: 'auto',
};

export const organizationSimpleFormSx = {
    width: '100%',
    maxWidth: '100%',
    '& .RaSimpleForm-root': { width: '100%' },
    '& .RaSimpleForm-content': { width: '100%', maxWidth: '100%' },
    '& .MuiFormControl-root': { width: '100%', maxWidth: '100%' },
    '& .MuiInputBase-root': { borderRadius: 2, width: '100%' },
    '& .RaSimpleForm-toolbar': { mt: 3, px: 0, backgroundColor: 'transparent' },
};

export const organizationFormGridSx = { width: '100%', m: 0 };
