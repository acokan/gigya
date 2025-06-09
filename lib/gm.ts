import Gigya from './gigya';
import BaseParams from './interfaces/base-params';
import { CoreOptions } from 'request';

export * from './interfaces/gigya-response';
export * from './interfaces/base-params';

export class GM {
    constructor(protected gigya: Gigya) {
    }

    /**
     * This API deletes a specified action.
     * 
     * @see http://developers.gigya.com/display/GD/gm.deleteAction+REST
     */
    public deleteAction(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request('gm.deleteAction', params, options);
    }

    /**
     * This API deletes a specified challenge and all its variants.
     * 
     * @see http://developers.gigya.com/display/GD/gm.deleteChallenge+REST
     */
    public deleteChallenge(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('gm.deleteChallenge', params, options);
    }

    /**
     * This API deletes a specified variant of a challenge.
     * 
     * @see http://developers.gigya.com/display/GD/gm.deleteChallengeVariant+REST
     */
    public deleteChallengeVariant(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request('gm.deleteChallengeVariant', params, options);
    }

    /**
     * This API retrieves the configuration of specified actions.
     * 
     * @see http://developers.gigya.com/display/GD/gm.getActionConfig+REST
     */
    public getActionConfig(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('gm.getActionConfig', params, options);
    }

    /**
     * This API retrieves a specified user's Game Mechanics (GM) actions and how many points are associated with each action.
     * 
     * @see http://developers.gigya.com/display/GD/gm.getActionsLog+REST
     */
    public getActionsLog(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('gm.getActionsLog', params, options);
    }

    /**
     * This API retrieves the configuration of specified challenges.
     * 
     * @see http://developers.gigya.com/display/GD/gm.getChallengeConfig+REST
     */
    public getChallengeConfig(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('gm.getChallengeConfig', params, options);
    }

    /**
     * This API retrieves the current status of the user in each of the specified challenges.
     * 
     * @see http://developers.gigya.com/display/GD/gm.getChallengeStatus+REST
     */
    public getChallengeStatus(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('gm.getChallengeStatus', params, options);
    }

    /**
     * This API retrieves the variants of a challenge.
     * 
     * @see http://developers.gigya.com/display/GD/gm.getChallengeVariants+REST
     */
    public getChallengeVariants(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('gm.getChallengeVariants', params, options);
    }

    /**
     * This API retrieves the Gamification global configuration, which includes a callback URL for notifying clients of new level achievements, and whether to enable client-side access.
     * 
     * @see http://developers.gigya.com/display/GD/gm.getGlobalConfig+REST
     */
    public getGlobalConfig(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('gm.getGlobalConfig', params, options);
    }

    /**
     * This API returns the top ranked users for a specified challenge.
     * 
     * @see http://developers.gigya.com/display/GD/gm.getTopUsers+REST
     */
    public getTopUsers(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('gm.getTopUsers', params, options);
    }

    /**
     * This API notifies the Game Mechanics (GM) engine about an action that a user has taken in the site.
     * 
     * @see http://developers.gigya.com/display/GD/gm.notifyAction+REST
     */
    public notifyAction(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request('gm.notifyAction', params, options);
    }

    /**
     * This API deducts a specified number of points from a specified user in a specified challenge.
     * 
     * @see http://developers.gigya.com/display/GD/gm.redeemPoints+REST
     */
    public redeemPoints(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request('gm.redeemPoints', params, options);
    }

    /**
     * This API resets the isNewLevel field value to false.
     * 
     * @see http://developers.gigya.com/display/GD/gm.resetLevelStatus+REST
     */
    public resetLevelStatus(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request('gm.resetLevelStatus', params, options);
    }

    /**
     * This API creates or updates an existing Gamification action.
     * 
     * @see http://developers.gigya.com/display/GD/gm.setActionConfig+REST
     */
    public setActionConfig(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request('gm.setActionConfig', params, options);
    }

    /**
     * This API creates or overwrites an existing Gamification challenge.
     * 
     * @see http://developers.gigya.com/display/GD/gm.setChallengeConfig+REST
     */
    public setChallengeConfig(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request('gm.setChallengeConfig', params, options);
    }

    /**
     * This API sets the Gamification global configuration, which includes a callback URL for notifying clients of new level achievements, and whether to enable client-side access.
     * 
     * @see http://developers.gigya.com/display/GD/gm.setGlobalConfig+REST
     */
    public setGlobalConfig(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request('gm.setGlobalConfig', params, options);
    }
}

export default GM;
