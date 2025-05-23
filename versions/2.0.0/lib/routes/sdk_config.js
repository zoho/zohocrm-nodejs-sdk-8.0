/**
 * The class to configure the SDK.
 */
class SDKConfig {
    autoRefreshFields;
    pickListValidation;
    _timeout;
    _updateAPIDomain;

    /**
     * Creates an instance of SDKConfig with the given parameters
     * @param {Boolean} autoRefreshFields A boolean representing autoRefreshFields
     * @param {Boolean} pickListValidation A boolean representing pickListValidation
     * @param {number} timeout A Integer representing timeout
     * @param updateAPIDomain
     */
    constructor(autoRefreshFields, pickListValidation, timeout, updateAPIDomain) {
        this.autoRefreshFields = autoRefreshFields;
        this.pickListValidation = pickListValidation;
        this._timeout = timeout;
        this._updateAPIDomain = updateAPIDomain;
    }

    /**
     * This is a getter method to get autoRefreshFields.
     * @returns {Boolean} A boolean representing autoRefreshFields
     */
    getAutoRefreshFields() {
        return this.autoRefreshFields;
    }

    /**
     *  This is a getter method to get pickListValidation.
     * @returns {Boolean} A boolean representing pickListValidation
     */
    getPickListValidation() {
        return this.pickListValidation;
    }

    /**
     *  This is a getter method to get timeout.
     * @returns {number} A Integer representing API timeout
     */
    getTimeout() {
        return this._timeout;
    }

    /**
     *  This is a getter method to get updateAPIDomain.
     * @returns {Boolean} A boolean representing updateAPIDomain
     */
    applyAPIDomainUpdate()
    {
        return this._updateAPIDomain;
    }
}

export {
    SDKConfig as SDKConfig,
    SDKConfig as MasterModel
}