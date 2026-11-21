import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class LinkingDetails{

	module;
	lookupField;
	connectedLookupField;
	keyModified = new Map();
	/**
	 * The method to get the module
	 * @returns {LinkingModule} An instance of LinkingModule
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {LinkingModule} module An instance of LinkingModule
	 */
	async setModule(module)	{
		const LinkingModule = (await (import("./linking_module.js"))).MasterModel;
		if((module != null) && (!(module instanceof LinkingModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: LinkingModule", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the lookupField
	 * @returns {LookupField} An instance of LookupField
	 */
	getLookupField()	{
		return this.lookupField;

	}

	/**
	 * The method to set the value to lookupField
	 * @param {LookupField} lookupField An instance of LookupField
	 */
	async setLookupField(lookupField)	{
		const LookupField = (await (import("./lookup_field.js"))).MasterModel;
		if((lookupField != null) && (!(lookupField instanceof LookupField)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookupField EXPECTED TYPE: LookupField", null, null);
		}
		this.lookupField = lookupField;
		this.keyModified.set("lookup_field", 1);

	}

	/**
	 * The method to get the connectedLookupField
	 * @returns {LookupField} An instance of LookupField
	 */
	getConnectedLookupField()	{
		return this.connectedLookupField;

	}

	/**
	 * The method to set the value to connectedLookupField
	 * @param {LookupField} connectedLookupField An instance of LookupField
	 */
	async setConnectedLookupField(connectedLookupField)	{
		const LookupField = (await (import("./lookup_field.js"))).MasterModel;
		if((connectedLookupField != null) && (!(connectedLookupField instanceof LookupField)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: connectedLookupField EXPECTED TYPE: LookupField", null, null);
		}
		this.connectedLookupField = connectedLookupField;
		this.keyModified.set("connected_lookup_field", 1);

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
	LinkingDetails as MasterModel,
	LinkingDetails as LinkingDetails
}
