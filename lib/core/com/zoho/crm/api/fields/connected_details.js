import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ConnectedDetails{

	module;
	field;
	layouts;
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
	 * The method to get the field
	 * @returns {LookupField} An instance of LookupField
	 */
	getField()	{
		return this.field;

	}

	/**
	 * The method to set the value to field
	 * @param {LookupField} field An instance of LookupField
	 */
	async setField(field)	{
		const LookupField = (await (import("./lookup_field.js"))).MasterModel;
		if((field != null) && (!(field instanceof LookupField)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: LookupField", null, null);
		}
		this.field = field;
		this.keyModified.set("field", 1);

	}

	/**
	 * The method to get the layouts
	 * @returns {Array} An Array representing the layouts
	 */
	getLayouts()	{
		return this.layouts;

	}

	/**
	 * The method to set the value to layouts
	 * @param {Array} layouts An Array representing the layouts
	 */
	setLayouts(layouts)	{
		if((layouts != null) && (!(Object.prototype.toString.call(layouts) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layouts EXPECTED TYPE: Array", null, null);
		}
		this.layouts = layouts;
		this.keyModified.set("layouts", 1);

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
	ConnectedDetails as MasterModel,
	ConnectedDetails as ConnectedDetails
}
