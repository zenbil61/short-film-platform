import { v1 as uuidv1 } from 'uuid'


export const base64ToImageObject = (base64String, fileName) => {
    // Base64'ü ayıkla
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
    // MIME türünü ayıkla
    const mimeType = base64String.match(/data:(image\/\w+);base64,/)?.[1] || 'image/png';
    // Base64'ü Buffer'a dönüştür
    const buffer = Buffer.from(base64Data, 'base64');

    // File benzeri bir nesne döndür
    return {
        name: fileName,
        type: mimeType,
        size: buffer.length,
        data: buffer,
    };
}

export const createFileName = (userId: number, type: string, extension: string): string => {
    const guid = uuidv1();
    return `${userId}_${type}_${guid}.${extension}`;
}