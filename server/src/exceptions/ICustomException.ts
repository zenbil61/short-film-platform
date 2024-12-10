export interface ICustomException {
    message: string | object,
    errorCode: string,
    status: number
}