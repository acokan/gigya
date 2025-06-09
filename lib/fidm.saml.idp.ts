import Gigya from './gigya';
import BaseParams from './interfaces/base-params';
import { CoreOptions } from 'request';

export * from './interfaces/gigya-response';
export * from './interfaces/base-params';

export class FidmSamlIdp {
    constructor(protected gigya: Gigya) {
    }

    /**
     * This API deletes a SAML Identity Provider (IdP).
     * 
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.delIdP+REST
     */
    public delIdP(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request('fidm.saml.idp.delIdP', params, options);
    }

    /**
     * This API retrieves the Gigya site configuration for SAML. 
     * 
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.getConfig+REST
     */
    public getConfig(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('fidm.saml.idp.getConfig', params, options);
    }

    /**
     * This API retrieves all the SAML IdP configuration objects that are defined for the site.
     * 
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.getRegisteredIdPs+REST
     */
    public getRegisteredIdPs(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('fidm.saml.idp.getRegisteredIdPs', params, options);
    }

    /**
     * This API imports a SAML Identity Provider (IdP) configuration from a SAML metadata XML.
     * 
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.importIdPMetadata+REST
     */
    public importIdPMetadata(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request<any>('fidm.saml.idp.importIdPMetadata', params, options);
    }

    /**
     * This API updates or registers a SAML configuration for a specific Identity Provider (IdP).
     * 
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.registerIdP+REST
     */
    public registerIdP(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request('fidm.saml.idp.registerIdP', params, options);
    }

    /**
     * This API updates the Gigya SAML site configuration.
     * 
     * @see http://developers.gigya.com/display/GD/fidm.saml.idp.setConfig+REST
     */
    public setConfig(params: BaseParams & any, options?: CoreOptions | undefined) {
        return this.gigya.request('fidm.saml.idp.setConfig', params, options);
    }
}

export default FidmSamlIdp;
