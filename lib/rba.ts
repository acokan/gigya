import Gigya from './gigya';
import BaseParams from './interfaces/base-params';
import { CoreOptions } from 'request';

export * from './interfaces/gigya-response';
export * from './interfaces/base-params';

export class RBA {
    constructor(protected gigya: Gigya) {
    }

    /**
     * This API gets the RBA (Risk-Based Authentication) policy for a site or master site of a group.
     * 
     * @see http://developers.gigya.com/display/GD/accounts.rba.getPolicy
     */
    public getPolicy(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.rba.getPolicy', params, options);
    }

    /**
     * This API sets the RBA (Risk-Based Authentication) policy for a site or master site of a group.
     * 
     * @see http://developers.gigya.com/display/GD/accounts.rba.setPolicy
     */
    public setPolicy(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.rba.setPolicy', params, options);
    }

    /**
     * This API unlocks either the specified user's account or the specified IP, depending upon which parameters are passed.
     * 
     * @see http://developers.gigya.com/display/GD/accounts.rba.unlock
     */
    public unlock(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('accounts.rba.unlock', params, options);
    }
}

export default RBA;
