import Gigya from './gigya';
import { DeleteOTPParams, LoginOTPParams, SendCodeParams, UpdateParams } from './interfaces/otp';

export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export * from './interfaces/otp';

export class OTP {
    
    constructor(protected gigya: Gigya) {}

    /**
     * This API removes the phone number from the specified account.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/8f313cc471f549d49fcc8ab3a430aea9.html
     */
    public delete(params: DeleteOTPParams & any) {
        return this.gigya.request<any>('accounts.otp.delete', params);
    }
    
    /**
     * This method is used to log in users via Phone Number Login. It requires the vToken and code returned from accounts.OTP.sendCode.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137bbe870b21014bbc5a10ce4041860.html
     */
    public login(params: LoginOTPParams & any) {
        return this.gigya.request<any>('accounts.otp.login', params);
    }
    
    /**
     * This method is used to trigger a Phone Number Login flow, or is part of an email code verification flow. 
     * It accepts the user's phone number or email, returns a vToken, and sends an authentication code to the user.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137e1be70b21014bbc5a10ce4041860.html
     */
    public sendCode(params: SendCodeParams & any) {
        return this.gigya.request<any>('accounts.otp.sendCode', params);
    }
    
     
    /**
     * This method is used to update a user's phone number when using Phone Number Login, or their email in an email code verification flow. 
     * It requires the vToken and code returned from accounts.OTP.sendCode. 
     * When using this method client side, an active user session is required. 
     * When calling this method server side, it requires the UID param.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413807a270b21014bbc5a10ce4041860.html
     */
    public update(params: UpdateParams & any) {
        return this.gigya.request<any>('accounts.otp.update', params);
    }
}

export default OTP;
