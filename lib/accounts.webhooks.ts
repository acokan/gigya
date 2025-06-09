import Gigya from './gigya';
import BaseParams from './interfaces/base-params';
import { CoreOptions } from 'request';

export * from './interfaces/gigya-response';
export * from './interfaces/base-params';

export class Webhooks {
    constructor(protected gigya: Gigya) {
    }

    /**
     * This method is used to delete a webhook.
     * 
     * @see http://developers.gigya.com/display/GD/accounts.webhooks.delete+REST
     */
    public delete(params: BaseParams & WebhooksDeleteParams, options?: CoreOptions | undefined) {
        return this.gigya.request('accounts.webhooks.delete', params, options);
    }

    /**
     * This method is used to retrieve a list of all defined webhooks.
     * 
     * @see http://developers.gigya.com/display/GD/accounts.webhooks.getAll+REST
     */
    public getAll(params?: WebhooksGetAllParams, options?: CoreOptions | undefined) {
        return this.gigya.request<WebhooksGetAllResponse>('accounts.webhooks.getAll', params || {});
    }

    /**
     * This method is used to create a new webhook or update an existing one.
     * 
     * @see http://developers.gigya.com/display/GD/accounts.webhooks.set+REST
     */
    public set(params: BaseParams & WebhooksSetParams, options?: CoreOptions | undefined) {
        return this.gigya.request<WebhooksGetAllResponse>('accounts.webhooks.set', params, options);
    }
}

export type WebhooksEvents = Array<'accountCreated' | 'accountRegistered' | 'accountUpdated' | 'accountDeleted'>;

export interface Webhook {
    url: string;
    events: WebhooksEvents;
    name: string;
    active: boolean;
    signingUserKey?: string;
};

export interface WebhooksDeleteParams {
    name: string;
}

export interface WebhooksGetAllParams {
}

export interface WebhooksGetAllResponse {
    webhooks: Array<Webhook>;
}

export interface WebhooksSetParams extends Webhook {
}

export default Webhooks;
