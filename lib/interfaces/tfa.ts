import { AccountClientContext } from "../accounts";

export type TFAProvider = 'gigyaPhone' | 'gigyaTotp' | 'gigyaPush';
export type PhoneMethod = 'sms' | 'voice';

export interface TFAPhone {
    phone: string;
    method: string;
}

export interface BaseTFAParams {
    format?: string;
    callback?: string;
    httpStatusCodes?: boolean
}
export interface InitTFAParams extends BaseTFAParams {
    provider: string;
    mode: string;
    regToken: string;
    clientContext?: AccountClientContext;
}

export interface FinalizeTFAParams extends BaseTFAParams {
    gigyaAssertion: string;
    providerAssertion: string;
    regToken: string;
    tempDevice?: boolean;
}

export interface RegisterParams extends BaseTFAParams {
    gigyaAssertion: string;
}

export interface CompleteVerificationParams extends BaseTFAParams {
    gigyaAssertion: string;
    phvToken: string;
    code: string;
}

export interface VerificationCodeParams extends BaseTFAParams {
    gigyaAssertion: string;
    emailID: string;
}

/* You are required to pass only one of the parameters either UID or regToken. */
export interface ProvidersTFAParams extends BaseTFAParams {
    UID?: string;
    regToken?: string;
}

export interface ImportTFAParams extends BaseTFAParams {
    UID?: string;
    provider?: string;
    phones?: Array<TFAPhone>;
}

export interface ResetTFAParams extends BaseTFAParams {
    UID: string;
    provider?: TFAProvider;
}

export interface VerityToTFParams extends BaseTFAParams {
    gigyaAssertion: string;
    code: string;
    sctToken?: string;
}

export interface UnregisterDeviceParams extends BaseTFAParams {
    UID: string;
    allDevices?: boolean;
    context?: string;
    ignoreInterruptions?: boolean;
}

export interface BackupCodeVerifyParams extends BaseTFAParams {
    gigyaAssertion: string;
    code: string;
}

export interface PhoneCompleteVerificationParams extends BaseTFAParams {
    gigyaAssertion: string;
    code: string;
    phvToken: string;
}

export interface RemovePhoneParams extends RegisterParams {
    phoneId?: string;
}

export interface PhoneVerificationCodeParams extends RegisterParams {
    phoneID: string;
    phone: number;
    method: PhoneMethod;
    lang: string;
}

export interface DeviceInfoParams {
    platform: string;
    man: string;
    pushToken: string;
    os: string;   
}

export interface OptinPushParams extends RegisterParams {
    gigyaAssertion: string;
    deviceInfo: DeviceInfoParams;
}

export interface PushVerifyParams extends RegisterParams {
    verificationToken: string;    
}