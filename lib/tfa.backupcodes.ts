import { CoreOptions } from 'request';
import Gigya from './gigya';
import { BackupCodeVerifyParams, RegisterParams } from './interfaces/tfa';

export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export * from './interfaces/tfa';

export class TFABackupCodes {
    constructor(protected gigya: Gigya) {}
    
    /**
     * This method is part of a two-factor authentication (TFA) flow and is used to generate backup codes for use in a time-based authentication flow. 
     * Note that TFA is part of Risk Based Authentication (RBA).
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413abafd70b21014bbc5a10ce4041860.html
     */
    public create(params: RegisterParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.tfa.backupcodes.create', params, options);
    }
    
    /**
     * This method is part of a two-factor authentication (TFA) flow and is used to retrieve backup codes saved for a user in a time-based authentication flow.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413ace4a70b21014bbc5a10ce4041860.html
     */
    public get(params: RegisterParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.tfa.backupcodes.get', params, options);
    }
    
    
     /**
     * This method is part of a two-factor authentication (TFA) flow and is used to retrieve backup codes saved for a user in a time-based authentication flow.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413ace4a70b21014bbc5a10ce4041860.html
     */
     public verify(params: BackupCodeVerifyParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.tfa.backupcodes.verify', params, options);
    }
}

export default TFABackupCodes;
