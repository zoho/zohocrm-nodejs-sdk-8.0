import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Signals{

	displayLabel;
	namespace;
	chatEnabled;
	enabled;
	id;
	featureAvailability;
	extension;
	keyModified = new Map();
	/**
	 * The method to get the displayLabel
	 * @returns {String} A String representing the displayLabel
	 */
	getDisplayLabel()	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param {String} displayLabel A String representing the displayLabel
	 */
	setDisplayLabel(displayLabel)	{
		if((displayLabel != null) && (!(Object.prototype.toString.call(displayLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayLabel EXPECTED TYPE: String", null, null);
		}
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the namespace
	 * @returns {String} A String representing the namespace
	 */
	getNamespace()	{
		return this.namespace;

	}

	/**
	 * The method to set the value to namespace
	 * @param {String} namespace A String representing the namespace
	 */
	setNamespace(namespace)	{
		if((namespace != null) && (!(Object.prototype.toString.call(namespace) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: namespace EXPECTED TYPE: String", null, null);
		}
		this.namespace = namespace;
		this.keyModified.set("namespace", 1);

	}

	/**
	 * The method to get the chatEnabled
	 * @returns {Boolean} A Boolean representing the chatEnabled
	 */
	getChatEnabled()	{
		return this.chatEnabled;

	}

	/**
	 * The method to set the value to chatEnabled
	 * @param {Boolean} chatEnabled A Boolean representing the chatEnabled
	 */
	setChatEnabled(chatEnabled)	{
		if((chatEnabled != null) && (!(Object.prototype.toString.call(chatEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: chatEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.chatEnabled = chatEnabled;
		this.keyModified.set("chat_enabled", 1);

	}

	/**
	 * The method to get the enabled
	 * @returns {Boolean} A Boolean representing the enabled
	 */
	getEnabled()	{
		return this.enabled;

	}

	/**
	 * The method to set the value to enabled
	 * @param {Boolean} enabled A Boolean representing the enabled
	 */
	setEnabled(enabled)	{
		if((enabled != null) && (!(Object.prototype.toString.call(enabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enabled EXPECTED TYPE: Boolean", null, null);
		}
		this.enabled = enabled;
		this.keyModified.set("enabled", 1);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the featureAvailability
	 * @returns {FeatureAvailability} An instance of FeatureAvailability
	 */
	getFeatureAvailability()	{
		return this.featureAvailability;

	}

	/**
	 * The method to set the value to featureAvailability
	 * @param {FeatureAvailability} featureAvailability An instance of FeatureAvailability
	 */
	async setFeatureAvailability(featureAvailability)	{
		const FeatureAvailability = (await (import("./feature_availability.js"))).MasterModel;
		if((featureAvailability != null) && (!(featureAvailability instanceof FeatureAvailability)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: featureAvailability EXPECTED TYPE: FeatureAvailability", null, null);
		}
		this.featureAvailability = featureAvailability;
		this.keyModified.set("feature_availability", 1);

	}

	/**
	 * The method to get the extension
	 * @returns {Extension} An instance of Extension
	 */
	getExtension()	{
		return this.extension;

	}

	/**
	 * The method to set the value to extension
	 * @param {Extension} extension An instance of Extension
	 */
	async setExtension(extension)	{
		const Extension = (await (import("./extension.js"))).MasterModel;
		if((extension != null) && (!(extension instanceof Extension)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: extension EXPECTED TYPE: Extension", null, null);
		}
		this.extension = extension;
		this.keyModified.set("extension", 1);

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
	Signals as MasterModel,
	Signals as Signals
}
