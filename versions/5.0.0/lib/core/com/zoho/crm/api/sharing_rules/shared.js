import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Shared{

	resource;
	subordinates;
	type;
	keyModified = new Map();
	/**
	 * The method to get the resource
	 * @returns {Resource} An instance of Resource
	 */
	getResource()	{
		return this.resource;

	}

	/**
	 * The method to set the value to resource
	 * @param {Resource} resource An instance of Resource
	 */
	async setResource(resource)	{
		const Resource = (await (import("./resource.js"))).MasterModel;
		if((resource != null) && (!(resource instanceof Resource)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resource EXPECTED TYPE: Resource", null, null);
		}
		this.resource = resource;
		this.keyModified.set("resource", 1);

	}

	/**
	 * The method to get the subordinates
	 * @returns {Boolean} A Boolean representing the subordinates
	 */
	getSubordinates()	{
		return this.subordinates;

	}

	/**
	 * The method to set the value to subordinates
	 * @param {Boolean} subordinates A Boolean representing the subordinates
	 */
	setSubordinates(subordinates)	{
		if((subordinates != null) && (!(Object.prototype.toString.call(subordinates) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subordinates EXPECTED TYPE: Boolean", null, null);
		}
		this.subordinates = subordinates;
		this.keyModified.set("subordinates", 1);

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
	Shared as MasterModel,
	Shared as Shared
}
