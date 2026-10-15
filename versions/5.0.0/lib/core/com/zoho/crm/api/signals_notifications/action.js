import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Action{

	type;
	openIn;
	displayName;
	url;
	keyModified = new Map();
	/**
	 * The method to get the type
	 * @returns {String} A String representing the type
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {String} type A String representing the type
	 */
	setType(type)	{
		if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the openIn
	 * @returns {String} A String representing the openIn
	 */
	getOpenIn()	{
		return this.openIn;

	}

	/**
	 * The method to set the value to openIn
	 * @param {String} openIn A String representing the openIn
	 */
	setOpenIn(openIn)	{
		if((openIn != null) && (!(Object.prototype.toString.call(openIn) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: openIn EXPECTED TYPE: String", null, null);
		}
		this.openIn = openIn;
		this.keyModified.set("open_in", 1);

	}

	/**
	 * The method to get the displayName
	 * @returns {String} A String representing the displayName
	 */
	getDisplayName()	{
		return this.displayName;

	}

	/**
	 * The method to set the value to displayName
	 * @param {String} displayName A String representing the displayName
	 */
	setDisplayName(displayName)	{
		if((displayName != null) && (!(Object.prototype.toString.call(displayName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayName EXPECTED TYPE: String", null, null);
		}
		this.displayName = displayName;
		this.keyModified.set("display_name", 1);

	}

	/**
	 * The method to get the url
	 * @returns {String} A String representing the url
	 */
	getUrl()	{
		return this.url;

	}

	/**
	 * The method to set the value to url
	 * @param {String} url A String representing the url
	 */
	setUrl(url)	{
		if((url != null) && (!(Object.prototype.toString.call(url) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: url EXPECTED TYPE: String", null, null);
		}
		this.url = url;
		this.keyModified.set("url", 1);

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
	Action as MasterModel,
	Action as Action
}
