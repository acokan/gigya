import { CoreOptions } from 'request';
import Gigya from './gigya';
import { BaseTFAParams, FinalizeTFAParams, ImportTFAParams, InitTFAParams, ProvidersTFAParams, ResetTFAParams, UnregisterDeviceParams } from './interfaces/tfa';
import TFABackupCodes from './tfa.backupcodes';
import TFAEmail from './tfa.email';
import TFAPhone from './tfa.phone';
import TFAPush from './tfa.push';
import TFATotp from './tfa.totp';

export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export * from './interfaces/tfa';

export class TFA {
    public readonly email: TFAEmail;
    public readonly phone: TFAPhone;
    public readonly push: TFAPush;
    public readonly totp: TFATotp;
    public readonly backupcodes: TFABackupCodes;
    
    constructor(protected gigya: Gigya) {
        this.email = new TFAEmail(gigya);
        this.phone = new TFAPhone(gigya);
        this.push = new TFAPush(gigya);
        this.totp = new TFATotp(gigya);
        this.backupcodes = new TFABackupCodes(gigya);
    }

    /**
     * This method initializes two-factor authentication (TFA) by returning a JWT token that can be used to register with a new provider, 
     * or to verify the user using an existing provider, or to edit an existing provider.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413ba6e870b21014bbc5a10ce4041860.html
     */
    public initTFA(params: InitTFAParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.tfa.initTFA', params, options);
    }

    /**
     * This method finalizes the two-factor authentication (TFA) flow that started with accounts.tfa.initTFA..
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b44d170b21014bbc5a10ce4041860.html
     */
    public finalizeTFA(params: FinalizeTFAParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.tfa.finalizeTFA', params, options);
    }

    /**
     * This method retrieves Gigya's PEM-encoded X.509 certificate containing an RSA public key, 
     * which can be used to verify the signature on the JWT tokens Gigya issues
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b57d970b21014bbc5a10ce4041860.html
     */
    public getCertificate(params: BaseTFAParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.tfa.getCertificate', params, options);
    }
    
    /**
     * This method retrieves the two-factor authentication (TFA) providers for a site and user.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b6ced70b21014bbc5a10ce4041860.html
     */
    public getProviders(params: ProvidersTFAParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.tfa.getProviders', params, options);
    }
    
    /**
     * This method takes specified phones and adds them to a specified user's verified phone numbers. 
     * If this is the first phone added to this user it will also enable the provider.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b800070b21014bbc5a10ce4041860.html
     */
       public importTFA(params: ImportTFAParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.tfa.importTFA', params, options);
    }
    
    
    /**
     * This method resets the means of identification (e.g., SMS or authenticating app) used as the second step of authentication in a TFA flow 
     * for a specified user. The user will be prompted to enter a new verification method on their next login.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c65da70b21014bbc5a10ce4041860.html
     */
    public resetTFA(params: ResetTFAParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.tfa.resetTFA', params, options);
    }
    
    /**
     * This method deactivates a provider for the user across all devices. 
     * This method may only be called when the user is fully logged in (not in any "pending state").
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413af46770b21014bbc5a10ce4041860.html
     */
    public deactivateProvider(params: ResetTFAParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.tfa.deactivateProvider', params, options);
    }

    /**
     * This method unregisters devices from the list of verified devices for the user, used in Risk-Based Authentication flows. 
     * A verified device is a device (phone or web browser) that has already been verified with an SMS, TOTP, or email verification code. 
     * The method may unregister all devices, or those with an active session.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413cc8e070b21014bbc5a10ce4041860.html
     */
     public unregisterDevice(params: UnregisterDeviceParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.tfa.unregisterDevice', params, options);
    }
}

export default TFA;
