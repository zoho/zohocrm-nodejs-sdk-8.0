import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ResponseWrapper{

	conversionOptions;
	keyModified = new Map();
	/**
	 * The method to get the conversionOptions
	 * @returns {ConversionOptions} An instance of ConversionOptions
	 */
	getConversionOptions()	{
		return this.conversionOptions;

	}

	/**
	 * The method to set the value to conversionOptions
	 * @param {ConversionOptions} conversionOptions An instance of ConversionOptions
	 */
	async setConversionOptions(conversionOptions)	{
		const ConversionOptions = (await (import("./conversion_options.js"))).MasterModel;
		if((conversionOptions != null) && (!(conversionOptions instanceof ConversionOptions)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: conversionOptions EXPECTED TYPE: ConversionOptions", null, null);
		}
		this.conversionOptions = conversionOptions;
		this.keyModified.set("__conversion_options", 1);

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
