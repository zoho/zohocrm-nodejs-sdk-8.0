import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ResponseWrapper{

	ziaPeopleEnrichment;
	info;
	keyModified = new Map();
	/**
	 * The method to get the ziaPeopleEnrichment
	 * @returns {Array} An Array representing the ziaPeopleEnrichment
	 */
	getZiaPeopleEnrichment()	{
		return this.ziaPeopleEnrichment;

	}

	/**
	 * The method to set the value to ziaPeopleEnrichment
	 * @param {Array} ziaPeopleEnrichment An Array representing the ziaPeopleEnrichment
	 */
	setZiaPeopleEnrichment(ziaPeopleEnrichment)	{
		if((ziaPeopleEnrichment != null) && (!(Object.prototype.toString.call(ziaPeopleEnrichment) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaPeopleEnrichment EXPECTED TYPE: Array", null, null);
		}
		this.ziaPeopleEnrichment = ziaPeopleEnrichment;
		this.keyModified.set("__zia_people_enrichment", 1);

	}

	/**
	 * The method to get the info
	 * @returns {Info} An instance of Info
	 */
	getInfo()	{
		return this.info;

	}

	/**
	 * The method to set the value to info
	 * @param {Info} info An instance of Info
	 */
	async setInfo(info)	{
		const Info = (await (import("./info.js"))).MasterModel;
		if((info != null) && (!(info instanceof Info)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: info EXPECTED TYPE: Info", null, null);
		}
		this.info = info;
		this.keyModified.set("info", 1);

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
	ResponseWrapper as MasterModel,
	ResponseWrapper as ResponseWrapper
}
