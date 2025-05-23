import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Filters{

	comparator;
	field;
	value;
	keyModified = new Map();
	/**
	 * The method to get the comparator
	 * @returns {Choice} An instance of Choice
	 */
	getComparator()	{
		return this.comparator;

	}

	/**
	 * The method to set the value to comparator
	 * @param {Choice} comparator An instance of Choice
	 */
	setComparator(comparator)	{
		if((comparator != null) && (!(comparator instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: comparator EXPECTED TYPE: Choice", null, null);
		}
		this.comparator = comparator;
		this.keyModified.set("comparator", 1);

	}

	/**
	 * The method to get the field
	 * @returns {Field} An instance of Field
	 */
	getField()	{
		return this.field;

	}

	/**
	 * The method to set the value to field
	 * @param {Field} field An instance of Field
	 */
	async setField(field)	{
		const Field = (await (import("./field.js"))).MasterModel;
		if((field != null) && (!(field instanceof Field)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: Field", null, null);
		}
		this.field = field;
		this.keyModified.set("field", 1);

	}

	/**
	 * The method to get the value
	 * @returns {String} A String representing the value
	 */
	getValue()	{
		return this.value;

	}

	/**
	 * The method to set the value to value
	 * @param {String} value A String representing the value
	 */
	setValue(value)	{
		if((value != null) && (!(Object.prototype.toString.call(value) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: value EXPECTED TYPE: String", null, null);
		}
		this.value = value;
		this.keyModified.set("value", 1);

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
	Filters as MasterModel,
	Filters as Filters
}
