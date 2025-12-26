import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class VisitorTracking{

	portalName;
	trackingCode;
	keyModified = new Map();
	/**
	 * The method to get the portalName
	 * @returns {String} A String representing the portalName
	 */
	getPortalName()	{
		return this.portalName;

	}

	/**
	 * The method to set the value to portalName
	 * @param {String} portalName A String representing the portalName
	 */
	setPortalName(portalName)	{
		if((portalName != null) && (!(Object.prototype.toString.call(portalName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: portalName EXPECTED TYPE: String", null, null);
		}
		this.portalName = portalName;
		this.keyModified.set("portal_name", 1);

	}

	/**
	 * The method to get the trackingCode
	 * @returns {String} A String representing the trackingCode
	 */
	getTrackingCode()	{
		return this.trackingCode;

	}

	/**
	 * The method to set the value to trackingCode
	 * @param {String} trackingCode A String representing the trackingCode
	 */
	setTrackingCode(trackingCode)	{
		if((trackingCode != null) && (!(Object.prototype.toString.call(trackingCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: trackingCode EXPECTED TYPE: String", null, null);
		}
		this.trackingCode = trackingCode;
		this.keyModified.set("tracking_code", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String representing the key
	 * @returns {number} A number representing the modification
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String representing the key
	 * @param {number} modification A number representing the modification
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: number", null, null);
		}
		this.keyModified.set(key, modification);

	}

}
export {
	VisitorTracking as MasterModel,
	VisitorTracking as VisitorTracking
}
