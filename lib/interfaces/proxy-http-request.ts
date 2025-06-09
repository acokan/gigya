import GigyaResponse from '../interfaces/gigya-response';
import {BaseRequest} from "../RequestFactory";
import {CoreOptions} from "request";
export type ProxyHttpRequest = <R>(endpoint: string, host: string, requestParams: BaseRequest, options?: CoreOptions | undefined) => Promise<GigyaResponse & R>;

export default ProxyHttpRequest;
