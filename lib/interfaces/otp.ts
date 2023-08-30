export type OTPTargetEnv = 'mobile' | 'browser';

export interface BaseOTPParams {
    format?: string;
    callback?: string;
    httpStatusCodes?: boolean;
    context?: string | unknown;
    ignoreInterruptions?: boolean;
}

export interface DeleteOTPParams extends BaseOTPParams {
    apiKey: string;
    uid: string;
}

export interface LoginOTPParams extends BaseOTPParams {
    apiKey: string;
    vToken: string;
    code: string;
    CID?: string;
    include?: string;
    regSource?: string;
    sessionExpiration?: string;
    targetEnv?: OTPTargetEnv;
}

export interface SendCodeParams extends BaseOTPParams {
    apiKey: string;
    lang: string;
    phoneNumber?: string;
    email?: string;
    sendCode?: boolean;
}

export interface UpdateParams extends BaseOTPParams {
    apiKey: string;
    vToken: string;
    code: string;
    UID?: string;
    CID?: string;
}