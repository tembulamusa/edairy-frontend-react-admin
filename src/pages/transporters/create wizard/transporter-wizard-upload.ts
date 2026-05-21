import { useEffect, useState } from 'react';
import type { UploadedPhotoValue } from '../shared/PhotoUploadInput';

export const fileToDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(file);
    });

export const getFileFromUpload = (value: unknown): File | undefined => {
    if (value instanceof File) {
        return value;
    }
    if (!value || typeof value !== 'object') {
        return undefined;
    }
    const upload = (Array.isArray(value) ? value[0] : value) as UploadedPhotoValue;
    return upload?.rawFile instanceof File ? upload.rawFile : undefined;
};

export const resolveUpload = async (value: unknown): Promise<string | undefined> => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    if (typeof value === 'string') {
        return value;
    }
    const file = getFileFromUpload(value);
    if (file) {
        return fileToDataUrl(file);
    }
    const upload = value as UploadedPhotoValue;
    if (typeof upload?.src === 'string' && upload.src) {
        return upload.src;
    }
    return undefined;
};

export const hasUpload = (value: unknown): boolean => {
    if (value instanceof File) {
        return true;
    }
    if (typeof value === 'string' && value.trim() !== '') {
        return true;
    }
    if (value && typeof value === 'object') {
        const upload = value as UploadedPhotoValue;
        return Boolean(
            upload.rawFile || (typeof upload.src === 'string' && upload.src.trim() !== '')
        );
    }
    return false;
};

export const useUploadPreviewUrl = (value?: UploadedPhotoValue | File | null): string => {
    const [previewUrl, setPreviewUrl] = useState('');

    useEffect(() => {
        if (value instanceof File) {
            const url = URL.createObjectURL(value);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        }

        if (value?.rawFile instanceof File) {
            const url = URL.createObjectURL(value.rawFile);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        }

        if (typeof value?.src === 'string' && value.src) {
            setPreviewUrl(value.src);
            return undefined;
        }

        setPreviewUrl('');
        return undefined;
    }, [value?.rawFile, value?.src, value?.title]);

    return previewUrl;
};

export const isImagePreviewUrl = (url: string, upload?: UploadedPhotoValue | File | null) => {
    if (url.startsWith('data:image/')) {
        return true;
    }
    const file =
        upload instanceof File
            ? upload
            : upload && typeof upload === 'object' && 'rawFile' in upload
              ? upload.rawFile
              : undefined;
    return file?.type?.startsWith('image/') ?? /\.(png|jpe?g|gif|webp)$/i.test(url);
};
