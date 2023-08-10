import Gigya from './gigya';
import { OptinPushParams, PushVerifyParams, RegisterParams } from './interfaces/tfa';

export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export * from './interfaces/tfa';

export class TFAPush {
    constructor(protected gigya: Gigya) {}
     
    /**
     * This method is called every 3 seconds by the Web SDK to poll the SAP Customer Data Cloud service, 
     * as part of a push TFA second factor authentication flow. It is called following the sending of a push notification to a 3rd party app, 
     * to poll the service and check if the user has verified the push notification, and is thereby authenticated. When the user is verified, 
     * the response includes a providerAssertion. It is followed by accounts.tfa.finalizeTFAThe result is a push notification that appears on the user's phone.
     * This method is used after a user is opted in to a device, i.e. as part of a "verify" flow and not an "optin" flow.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c199b70b21014bbc5a10ce4041860.html
     */
    public isVerified(params: RegisterParams & any) {
        return this.gigya.request<any>('accounts.tfa.push.isVerified', params);
    }
    
    /**
     * This method is called by an app as part of a push TFA second factor authentication opt-in flow. 
     * It is not part of a push verification flow. The result is a push notification displayed on the user's phone. 
     * This method requires an active user session.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c2c9870b21014bbc5a10ce4041860.html
     */
    public optin(params: OptinPushParams & any) {
        return this.gigya.request<any>('accounts.tfa.push.optin', params);
    }
    
    /**
     * This method is called by the Web SDK to a third party app, as part of a push TFA second factor authentication flow. 
     * The result is a push notification that appears on the user's phone.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c3f9d70b21014bbc5a10ce4041860.html
     */
    public sendVerification(params: RegisterParams & any) {
        return this.gigya.request<any>('accounts.tfa.push.sendVerification', params);
    }
    
    /**
     * This method is part of a push TFA second factor authentication flow. 
     * It is a request sent from the application to SAP Customer Data Cloud (Gigya) after a user has approved a push notification on their device, 
     * to authorize the user's session. It may only be used when the user has an active session on the app that sent the request. 
     * When part of the first opt-in flow, it is followed by accounts.tfa.finalizeTFA
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c529a70b21014bbc5a10ce4041860.html
     */
    public verify(params: PushVerifyParams & any) {
        return this.gigya.request<any>('accounts.tfa.push.verify', params);
    }
}

export default TFAPush;
