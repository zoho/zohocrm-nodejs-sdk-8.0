import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BodyWrapper{

	getRelatedRecordsCount;
	keyModified = new Map();
	/**
	 * The method to get the getRelatedRecordsCount
	 * @returns {Array} An Array representing the getRelatedRecordsCount
	 */
	getGetRelatedRecordsCount()	{
		return this.getRelatedRecordsCount;

	}

	/**
	 * The method to set the value to getRelatedRecordsCount
	 * @param {Array} getRelatedRecordsCount An Array representing the getRelatedRecordsCount
	 */
	setGetRelatedRecordsCount(getRelatedRecordsCount)	{
		if((getRelatedRecordsCount != null) && (!(Object.prototype.toString.call(getRelatedRecordsCount) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: getRelatedRecordsCount EXPECTED TYPE: Array", null, null);
		}
		this.getRelatedRecordsCount = getRelatedRecordsCount;
		this.keyModified.set("get_related_records_count", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
