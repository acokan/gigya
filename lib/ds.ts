import Gigya from './gigya';
import BaseParams from './interfaces/base-params';
import { CoreOptions } from 'request';

export * from './interfaces/gigya-response';
export * from './interfaces/base-params';

export class DS {
    constructor(protected gigya: Gigya) {
    }

    /**
     * Deletes object data or an entire object from Gigya's Data Store.
     * 
     * @see http://developers.gigya.com/display/GD/ds.delete+REST
     */
    public delete(params: BaseParams & DSDeleteParams, options?: CoreOptions | undefined) {
        return this.gigya.request('ds.delete', params, options);
    }

    /**
     * Retrieves an object's or the specified datum from Gigya's Data Store.
     * 
     * @see http://developers.gigya.com/display/GD/ds.get+REST
     */
    public get(params: BaseParams & DSGetParams, options?: CoreOptions | undefined) {
        return this.gigya.request<DSObject>('ds.get', params, options);
    }

    /**
     * This method retrieves the schema of a specified data type in Gigya's Data Store (DS).
     * 
     * @see http://developers.gigya.com/display/GD/ds.getSchema+REST
     */
    public getSchema(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('ds.getSchema', params, options);
    }

    /**
     * Searches and retrieves data from Gigya's Data Store (DS) using an SQL-like query.
     * 
     * @see http://developers.gigya.com/display/GD/ds.search+REST
     */
    public search(params: BaseParams & DSSearchParams, options?: CoreOptions | undefined) {
        return this.gigya.request<DSSearchResponse>('ds.search', params, options);
    }

    /**
     * This method allows specifying a schema for a data type in Gigya's Data Store (DS).
     * 
     * @see http://developers.gigya.com/display/GD/ds.setSchema+REST
     */
    public setSchema(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request('ds.setSchema', params, options);
    }

    /**
     * Stores an object data in Gigya's Data Store (DS).
     * 
     * @see http://developers.gigya.com/display/GD/ds.store+REST
     */
    public store(params: BaseParams & DSStoreParams, options?: CoreOptions | undefined) {
        return this.gigya.request<DSStoreResponse>('ds.store', params, options);
    }
}

export interface DSObject {
    oid: string;
    lastUpdated: number;
    lastUpdatedTime: string;
    created: number;
    createdTime: string;
    data: any;
}

export interface DSDeleteParams extends DSGetParams {
}

export interface DSGetParams {
    oid: string;
    type: string;
    fields?: string;
    UID?: string;
}

export interface DSSearchParams {
    query: string;
    openCursor?: boolean;
    cursorId?: boolean;
    timeout?: number;
}

export interface DSSearchResponse {
    objectsCount: number;
    totalCount: number;
    results: Array<DSObject>;
    nextCursorId?: string;
}

export type DSStoreUpdateBehavior = 'arrayPush' | 'arraySet' | 'replace';
export interface DSStoreParams {
    data: any;
    type: string;
    oid: string | 'auto';
    UID?: string;
    updateBehavior: 'arrayPush' | 'arraySet' | 'replace';
}
export interface DSStoreResponse {
    oid: string;
}

export default DS;
