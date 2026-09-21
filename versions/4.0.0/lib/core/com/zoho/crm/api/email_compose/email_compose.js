import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class EmailCompose{

	defaultFromAddress;
	defaultReplytoAddress;
	font;
	type;
	keyModified = new Map();
	/**
	 * The method to get the defaultFromAddress
	 * @returns {DefaultFromAddress} An instance of DefaultFromAddress
	 */
	getDefaultFromAddress()	{
		return this.defaultFromAddress;

	}

	/**
	 * The method to set the value to defaultFromAddress
	 * @param {DefaultFromAddress} defaultFromAddress An instance of DefaultFromAddress
	 */
	async setDefaultFromAddress(defaultFromAddress)	{
		const DefaultFromAddress = (await (import("./default_from_address.js"))).MasterModel;
		if((defaultFromAddress != null) && (!(defaultFromAddress instanceof DefaultFromAddress)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultFromAddress EXPECTED TYPE: DefaultFromAddress", null, null);
		}
		this.defaultFromAddress = defaultFromAddress;
		this.keyModified.set("default_from_address", 1);

	}

	/**
	 * The method to get the defaultReplytoAddress
	 * @returns {DefaultReplytoAddress} An instance of DefaultReplytoAddress
	 */
	getDefaultReplytoAddress()	{
		return this.defaultReplytoAddress;

	}

	/**
	 * The method to set the value to defaultReplytoAddress
	 * @param {DefaultReplytoAddress} defaultReplytoAddress An instance of DefaultReplytoAddress
	 */
	async setDefaultReplytoAddress(defaultReplytoAddress)	{
		const DefaultReplytoAddress = (await (import("./default_replyto_address.js"))).MasterModel;
		if((defaultReplytoAddress != null) && (!(defaultReplytoAddress instanceof DefaultReplytoAddress)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultReplytoAddress EXPECTED TYPE: DefaultReplytoAddress", null, null);
		}
		this.defaultReplytoAddress = defaultReplytoAddress;
		this.keyModified.set("default_replyto_address", 1);

	}

	/**
	 * The method to get the font
	 * @returns {Font} An instance of Font
	 */
	getFont()	{
		return this.font;

	}

	/**
	 * The method to set the value to font
	 * @param {Font} font An instance of Font
	 */
	async setFont(font)	{
		const Font = (await (import("./font.js"))).MasterModel;
		if((font != null) && (!(font instanceof Font)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: font EXPECTED TYPE: Font", null, null);
		}
		this.font = font;
		this.keyModified.set("font", 1);

	}

	/**
	 * The method to get the type
	 * @returns {Choice} An instance of Choice
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {Choice} type An instance of Choice
	 */
	setType(type)	{
		if((type != null) && (!(type instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: Choice", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

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
	EmailCompose as MasterModel,
	EmailCompose as EmailCompose
}
