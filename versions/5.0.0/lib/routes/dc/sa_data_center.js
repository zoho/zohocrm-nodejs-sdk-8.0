import {DataCenter} from "./data_center.js";

class SADataCenter extends DataCenter{
    static _PRODUCTION;
    static _SANDBOX;
    static _DEVELOPER;
    static SA = new SADataCenter();

    static PRODUCTION() {
        if (this._PRODUCTION == null) {
            this._PRODUCTION = DataCenter.setEnvironment("https://www.zohoapis.sa", this.SA.getIAMUrl(), this.SA.getFileUploadUrl());
        }
        return this._PRODUCTION;
    }

    /**
     * This method represents the Zoho CRM Sandbox environment in SA domain
     * @returns {Environment} An instance of Environment
     */
    static SANDBOX() {
        if (this._SANDBOX == null) {
            this._SANDBOX = DataCenter.setEnvironment("https://sandbox.zohoapis.sa", this.SA.getIAMUrl(), this.SA.getFileUploadUrl());
        }
        return this._SANDBOX;
    }

    /**
     * This method represents the Zoho CRM Developer environment in SA domain
     * @returns {Environment} An instance of Environment
     */
    static DEVELOPER() {
        if (this._DEVELOPER == null) {
            this._DEVELOPER = DataCenter.setEnvironment("https://developer.zohoapis.sa", this.SA.getIAMUrl(), this.SA.getFileUploadUrl());
        }
        return this._DEVELOPER;
    }

    getIAMUrl() {
        return "https://accounts.zoho.sa/oauth/v2/token";
    }

    getFileUploadUrl() {
        return "https://files.zoho.sa"
    }

}
export{
    SADataCenter as SADataCenter,
    SADataCenter as MasterModel
}
