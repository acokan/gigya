import crypto = require('crypto');

/**
 * This class is a utility class with static methods for calculating and validating cryptographic signatures.
 */
export class SigUtils {
    protected secret: string;

    constructor(secret?: string) {
        this.secret = secret as string; // Fix when TypeScript properly recognizes if (!this.secret && !secret) line 17.
    }

    /**
     * This is a utility method for generating a cryptographic signature.
     */
    public calcSignature(baseString: string, secret?: string): string {
        if (!this.secret && !secret) {
            throw new Error('Cannot calculate signature, secret key not set!');
        }
        const secretBuffer = Buffer.from(secret || this.secret, 'base64');
        return crypto.createHmac('sha1', secretBuffer).update(baseString).digest('base64');
    }

    /**
     * Use this method to verify the authenticity of a socialize.getUserInfo API method response, to make sure that it is in fact originating from Gigya, and prevent fraud.
     */
    public validateUserSignature(UID: string, timestamp: number, signature: string, secret?: string): boolean {
        var baseString = `${timestamp}_${UID}`;
        var expectedSig = this.calcSignature(baseString, secret);
        return expectedSig === signature;
    }

    /**
     * Use this method to verify the authenticity of a socialize.getFriendsInfo API method response, to make sure that it is in fact originating from Gigya, and prevent fraud.
     */
    public validateFriendSignature(UID: string, timestamp: number, friendUID: string, signature: string, secret?: string): boolean {
        var baseString = `${timestamp}_${friendUID}_${UID}`;
        var expectedSig = this.calcSignature(baseString, secret);
        return expectedSig === signature;
    }

    /**
     * Use this method as part of implementing dynamic control over login session expiration, in conjunction with assigning the value '-1' to the sessionExpiration parameter.
     *
     * Write the result to cookie: 'gltexp_${apiKey}'.
     */
    public getDynamicSessionSignature(gltCookie: string, timeoutInSeconds: number, secret?: string): string {
        const loginToken = gltCookie.split('|')[0];
        const expirationTimeUnix = Math.round((Date.now() / 1000) + timeoutInSeconds);
        const unsignedExpString = loginToken + '_' + expirationTimeUnix;
        const signedExpString = this.calcSignature(unsignedExpString, secret);
        return `${expirationTimeUnix}_${signedExpString}`;
    }
}

export default SigUtils;
