import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class DoubleOptinEmailTemplate{

	fromAddress;
	content;
	keyModified = new Map();
	/**
	 * The method to get the fromAddress
	 * @returns {FromAddress} An instance of FromAddress
	 */
	getFromAddress()	{
		return this.fromAddress;

	}

	/**
	 * The method to set the value to fromAddress
	 * @param {FromAddress} fromAddress An instance of FromAddress
	 */
	async setFromAddress(fromAddress)	{
		const FromAddress = (await (import("./from_address.js"))).MasterModel;
		if((fromAddress != null) && (!(fromAddress instanceof FromAddress)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fromAddress EXPECTED TYPE: FromAddress", null, null);
		}
		this.fromAddress = fromAddress;
		this.keyModified.set("from_address", 1);

	}

	/**
	 * The method to get the content
	 * @returns {String} A String representing the content
	 */
	getContent()	{
		return this.content;

	}

	/**
	 * The method to set the value to content
	 * @param {String} content A String representing the content
	 */
	setContent(content)	{
		if((content != null) && (!(Object.prototype.toString.call(content) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: content EXPECTED TYPE: String", null, null);
		}
		this.content = content;
		this.keyModified.set("content", 1);

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
	DoubleOptinEmailTemplate as MasterModel,
	DoubleOptinEmailTemplate as DoubleOptinEmailTemplate
}
