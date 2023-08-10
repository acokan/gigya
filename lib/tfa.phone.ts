import Gigya from './gigya';
import { BaseTFAParams, PhoneCompleteVerificationParams, PhoneVerificationCodeParams, RegisterParams, RemovePhoneParams } from './interfaces/tfa';

export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export * from './interfaces/tfa';

export class TFAPhone {
    constructor(protected gigya: Gigya) {}

   /**
     * This method verifies that the provided verification code matches the code in the token, and adds the phone number in the phvToken to the user's verified phones list.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413bb9ee70b21014bbc5a10ce4041860.html
     */
    public completeVerification(params: PhoneCompleteVerificationParams & any) {
        return this.gigya.request<any>('accounts.tfa.phone.completeVerification', params);
    }
    
    /**
     * This method retrieves Gigya's PEM-encoded X.509 certificate containing an RSA public key, which can be used to verify the signature on the JWT tokens Gigya issues.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413bcd4070b21014bbc5a10ce4041860.html
     */
    public getCertificate(params: BaseTFAParams & any) {
        return this.gigya.request<any>('accounts.tfa.phone.getCertificate', params);
    }
    
    
     /**
     * This method returns the list of phone numbers that are verified for the user. 
     * For security reasons, full phone numbers are not returned, instead, an obfuscated number (last 3 digits) and a unique ID are returned for each phone.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413be06570b21014bbc5a10ce4041860.html
     */
    public getRegisteredPhoneNumbers(params: RegisterParams & any) {
        return this.gigya.request<any>('accounts.tfa.phone.getRegisteredPhoneNumbers', params);
    }
    
     /**
     * This method removes the given phone ID from the user's list of verified phone numbers.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413bf36d70b21014bbc5a10ce4041860.html
     */
    public removePhone(params: RemovePhoneParams & any) {
        return this.gigya.request<any>('accounts.tfa.phone.removePhone', params);
    }
      // removePhone RegisterParams and phoneId: string
    
    /**
     * This method sends a crypto-random 6-digit verification code to the specified number.
     *  
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c069e70b21014bbc5a10ce4041860.html
     */
    public sendVerificationCode(params: PhoneVerificationCodeParams & any) {
        return this.gigya.request<any>('accounts.tfa.phone.sendVerificationCode', params);
    }
    // sendVerificationCode  RegisterParams and phoneID: string; phone: number; method: string; ( "sms" or "voice".) lang: string
}

export default TFAPhone;
