import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ErrorDetails{

	apiName;
	jsonPath;
	range;
	supportedValues;
	keyModified = new Map();
	/**
	 * The method to get the apiName
	 * @returns {String} A String representing the apiName
	 */
	getAPIName()	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param {String} apiName A String representing the apiName
	 */
	setAPIName(apiName)	{
		if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
		}
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the jsonPath
	 * @returns {String} A String representing the jsonPath
	 */
	getJsonPath()	{
		return this.jsonPath;

	}

	/**
	 * The method to set the value to jsonPath
	 * @param {String} jsonPath A String representing the jsonPath
	 */
	setJsonPath(jsonPath)	{
		if((jsonPath != null) && (!(Object.prototype.toString.call(jsonPath) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jsonPath EXPECTED TYPE: String", null, null);
		}
		this.jsonPath = jsonPath;
		this.keyModified.set("json_path", 1);

	}

	/**
	 * The method to get the range
	 * @returns {RangeStructure} An instance of RangeStructure
	 */
	getRange()	{
		return this.range;

	}

	/**
	 * The method to set the value to range
	 * @param {RangeStructure} range An instance of RangeStructure
	 */
	async setRange(range)	{
		const RangeStructure = (await (import("./range_structure.js"))).MasterModel;
		if((range != null) && (!(range instanceof RangeStructure)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: range EXPECTED TYPE: RangeStructure", null, null);
		}
		this.range = range;
		this.keyModified.set("range", 1);

	}

	/**
	 * The method to get the supportedValues
	 * @returns {Array} An Array representing the supportedValues
	 */
	getSupportedValues()	{
		return this.supportedValues;

	}

	/**
	 * The method to set the value to supportedValues
	 * @param {Array} supportedValues An Array representing the supportedValues
	 */
	setSupportedValues(supportedValues)	{
		if((supportedValues != null) && (!(Object.prototype.toString.call(supportedValues) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: supportedValues EXPECTED TYPE: Array", null, null);
		}
		this.supportedValues = supportedValues;
		this.keyModified.set("supported_values", 1);

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
	ErrorDetails as MasterModel,
	ErrorDetails as ErrorDetails
}
