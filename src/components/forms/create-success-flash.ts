const CREATE_SUCCESS_FLASH_KEY = 'create-success-flash';

export const setCreateSuccessFlash = (message: string) => {
    sessionStorage.setItem(CREATE_SUCCESS_FLASH_KEY, message);
};

export const consumeCreateSuccessFlash = (): string | null => {
    const message = sessionStorage.getItem(CREATE_SUCCESS_FLASH_KEY);
    if (message) {
        sessionStorage.removeItem(CREATE_SUCCESS_FLASH_KEY);
    }
    return message;
};
