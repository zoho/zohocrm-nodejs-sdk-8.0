import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Profiles{

	default1;
	name;
	id;
	defaultView;
	defaultAssignmentView;
	keyModified = new Map();
	/**
	 * The method to get the default
	 * @returns {Boolean} A Boolean representing the default1
	 */
	getDefault()	{
		return this.default1;

	}

	/**
	 * The method to set the value to default
	 * @param {Boolean} default1 A Boolean representing the default1
	 */
	setDefault(default1)	{
		if((default1 != null) && (!(Object.prototype.toString.call(default1) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: default1 EXPECTED TYPE: Boolean", null, null);
		}
		this.default1 = default1;
		this.keyModified.set("default", 1);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.name = name;
		this.keyModified.set("name", 1);

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
	 * The method to get the defaultView
	 * @returns {DefaultView} An instance of DefaultView
	 */
	getDefaultView()	{
		return this.defaultView;

	}

	/**
	 * The method to set the value to defaultView
	 * @param {DefaultView} defaultView An instance of DefaultView
	 */
	async setDefaultView(defaultView)	{
		const DefaultView = (await (import("./default_view.js"))).MasterModel;
		if((defaultView != null) && (!(defaultView instanceof DefaultView)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultView EXPECTED TYPE: DefaultView", null, null);
		}
		this.defaultView = defaultView;
		this.keyModified.set("_default_view", 1);

	}

	/**
	 * The method to get the defaultAssignmentView
	 * @returns {DefaultAssignmentView} An instance of DefaultAssignmentView
	 */
	getDefaultAssignmentView()	{
		return this.defaultAssignmentView;

	}

	/**
	 * The method to set the value to defaultAssignmentView
	 * @param {DefaultAssignmentView} defaultAssignmentView An instance of DefaultAssignmentView
	 */
	async setDefaultAssignmentView(defaultAssignmentView)	{
		const DefaultAssignmentView = (await (import("./default_assignment_view.js"))).MasterModel;
		if((defaultAssignmentView != null) && (!(defaultAssignmentView instanceof DefaultAssignmentView)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultAssignmentView EXPECTED TYPE: DefaultAssignmentView", null, null);
		}
		this.defaultAssignmentView = defaultAssignmentView;
		this.keyModified.set("_default_assignment_view", 1);

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
	Profiles as MasterModel,
	Profiles as Profiles
}
