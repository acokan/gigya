import Gigya from './gigya';
import FidmSamlIdp from './fidm.saml.idp';
import GigyaResponse from './interfaces/gigya-response';
import BaseParams from './interfaces/base-params';
import SamlConfig from './interfaces/saml-config';
import ExternalIdP from './interfaces/external-idp';
import { CoreOptions } from 'request';

export * from './fidm.saml.idp';
export * from './interfaces/gigya-response';
export * from './interfaces/base-params';
export * from './interfaces/saml-config';
export * from './interfaces/external-idp';

export class FidmSaml {
    public readonly idp: FidmSamlIdp;

    constructor(protected gigya: Gigya) {
        this.idp = new FidmSamlIdp(gigya);
    }

    /**
     * This API deletes a SAML Identity Provider (IdP).
     * 
     * @see http://developers.gigya.com/display/GD/fidm.saml.delIdP+REST
     */
    public delIdP(params: BaseParams & FidmSamlDelIdPParams, options?: CoreOptions | undefined) {
        return this.gigya.request('fidm.saml.delIdP', params, options);
    }

    /**
     * This API retrieves the Gigya site configuration for SAML. 
     * 
     * @see http://developers.gigya.com/display/GD/fidm.saml.getConfig+REST
     */
    public getConfig(params: BaseParams & FidmSamlGetConfigParams, options?: CoreOptions | undefined) {
        return this.gigya.request<FidmSamlGetConfigResponse>('fidm.saml.getConfig', params, options);
    }

    /**
     * This API retrieves all the SAML IdP configuration objects that are defined for the site.
     * 
     * @see http://developers.gigya.com/display/GD/fidm.saml.getRegisteredIdPs+REST
     */
    public getRegisteredIdPs(params?: BaseParams, options?: CoreOptions | undefined) {
        return this.gigya.request<FidmSamlGetRegisteredIdPsResponse>('fidm.saml.getRegisteredIdPs', params, options);
    }

    /**
     * This API imports a SAML Identity Provider (IdP) configuration from a SAML metadata XML.
     * 
     * @see http://developers.gigya.com/display/GD/fidm.saml.importIdPMetadata+REST
     */
    public importIdPMetadata(params: BaseParams & FidmSamlImportIdPMetadataParams, options?: CoreOptions | undefined) {
        return this.gigya.request<FidmSamlImportIdPMetadataResponse>('fidm.saml.importIdPMetadata', params, options);
    }

    /**
     * This API updates or registers a SAML configuration for a specific Identity Provider (IdP).
     * 
     * @see http://developers.gigya.com/display/GD/fidm.saml.registerIdP+REST
     */
    public registerIdP(params: BaseParams & FidmSamlRegisterIdPParams, options?: CoreOptions | undefined) {
        return this.gigya.request('fidm.saml.registerIdP', params, options);
    }

    /**
     * This API updates the Gigya SAML site configuration.
     * 
     * @see http://developers.gigya.com/display/GD/fidm.saml.setConfig+REST
     */
    public setConfig(params: BaseParams & FidmSamlSetConfigParams, options?: CoreOptions | undefined) {
        return this.gigya.request('fidm.saml.setConfig', params, options);
    }
}

export default FidmSaml;

export interface FidmSamlDelIdPParams {
    name: string;
}

export interface FidmSamlGetConfigParams {
    idpName?: string;
}
export interface FidmSamlGetConfigResponse {
    config: SamlConfig;
}

export interface FidmSamlGetRegisteredIdPsResponse {
    configs: Array<ExternalIdP>;
}

export interface FidmSamlImportIdPMetadataParams {
    metadata?: string;
    url?: string;
    saveConfiguration?: boolean;
    name?: string;
}
export interface FidmSamlImportIdPMetadataResponse {
    config: ExternalIdP;
}

export interface FidmSamlRegisterIdPParams {
    config: ExternalIdP;
}

export interface FidmSamlSetConfigParams {
    config: SamlConfig;
}
