import Gigya from './gigya';
import { CompleteVerificationParams, RegisterParams, VerificationCodeParams } from './interfaces/tfa';

export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export * from './interfaces/tfa';

export class TFAEmail {
    constructor(protected gigya: Gigya) {}

    /**
     * When implementing Risk Based Authentication, this method returns the list of verified emails for a user, to use in a second-factor authentication flow.
     * For security reasons, obfuscated emails and a unique ID are returned and not explicit email addresses.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b1e8a70b21014bbc5a10ce4041860.html
     */
    public getEmails(params: RegisterParams & any) {
        return this.gigya.request<any>('accounts.tfa.email.getEmails', params);
    }
    
    /**
     * When implementing Risk Based Authentication 2-factor authentication, this method verifies that the verification code entered by the user matches the code 
     * that was sent to their email address (saved in a token on the Gigya server). It returns a provider assertion to be passed on to 
     * accounts.tfa.finalizeTFA for completing the authentication process.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b0b7d70b21014bbc5a10ce4041860.html
     */
    public completeVerification(params: CompleteVerificationParams & any) {
        return this.gigya.request<any>('accounts.tfa.email.completeVerification', params);
    }

    /**
     * When implementing Risk Based Authentication, this method sends a crypto-random 6-digit verification code to the specified email, 
     * as part of a two-factor authentication flow.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b31d470b21014bbc5a10ce4041860.html
     */
    public sendVerificationCode(params: VerificationCodeParams & any) {
        return this.gigya.request<any>('accounts.tfa.email.sendVerificationCode', params);
    }
}

export default TFAEmail;
