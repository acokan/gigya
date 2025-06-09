import Gigya from './gigya';
import BaseParams from './interfaces/base-params';
import { CoreOptions } from 'request';

export * from './interfaces/gigya-response';
export * from './interfaces/base-params';

export class Reports {
    constructor(protected gigya: Gigya) {
    }

    /**
     * This API retrieves Gigya's Accounts statistics.
     * 
     * @see http://developers.gigya.com/display/GD/reports.getAccountsStats+REST
     */
    public getAccountsStats(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('reports.getAccountsStats', params, options);
    }

    /**
     * This API retrieves Gigya's comments statistics.
     * 
     * @see http://developers.gigya.com/display/GD/reports.getCommentsStats+REST
     */
    public getCommentsStats(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('reports.getCommentsStats', params, options);
    }

    /**
     * This method retrieves the current total redeemable points across your user base, per challenge.
     * 
     * @see http://developers.gigya.com/display/GD/reports.getGMRedeemablePoints+REST
     */
    public getGMRedeemablePoints(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('reports.getGMRedeemablePoints', params, options);
    }

    /**
     * This API retrieves Gigya's Game Mechanics statistics.
     * 
     * @see http://developers.gigya.com/display/GD/reports.getGMStats+REST
     */
    public getGMStats(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('reports.getGMStats', params, options);
    }

    /**
     * This API retrieves the top Game Mechanics users.
     * 
     * @see http://developers.gigya.com/display/GD/reports.getGMTopUsers+REST
     */
    public getGMTopUsers(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('reports.getGMTopUsers', params, options);
    }

    /**
     * This API retrieves the Gamification challenges and the number of users who participate in each challenge.
     * 
     * @see http://developers.gigya.com/display/GD/reports.getGMUserStats+REST
     */
    public getGMUserStats(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('reports.getGMUserStats', params, options);
    }

    /**
     * This API retrieves the top influencers for the site.
     * 
     * @see http://developers.gigya.com/display/GD/reports.getIRank+REST
     */
    public getIRank(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('reports.getIRank', params, options);
    }

    /**
     * This API retrieves Gigya's reactions statistics.
     * 
     * @see http://developers.gigya.com/display/GD/reports.getReactionsStats+REST
     */
    public getReactionsStats(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('reports.getReactionsStats', params, options);
    }

    /**
     * This API retrieves Gigya's reporting data.
     * 
     * @see http://developers.gigya.com/display/GD/reports.getSocializeStats+REST
     */
    public getSocializeStats(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('reports.getSocializeStats', params, options);
    }
}

export default Reports;
