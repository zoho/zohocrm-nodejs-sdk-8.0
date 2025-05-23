import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Criteria{

	groupOperator;
	group;
	comparator;
	field;
	value;
	type;
	keyModified = new Map();
	/**
	 * The method to get the groupOperator
	 * @returns {String} A String representing the groupOperator
	 */
	getGroupOperator()	{
		return this.groupOperator;

	}

	/**
	 * The method to set the value to groupOperator
	 * @param {String} groupOperator A String representing the groupOperator
	 */
	setGroupOperator(groupOperator)	{
		if((groupOperator != null) && (!(Object.prototype.toString.call(groupOperator) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: groupOperator EXPECTED TYPE: String", null, null);
		}
		this.groupOperator = groupOperator;
		this.keyModified.set("group_operator", 1);

	}

	/**
	 * The method to get the group
	 * @returns {Array} An Array representing the group
	 */
	getGroup()	{
		return this.group;

	}

	/**
	 * The method to set the value to group
	 * @param {Array} group An Array representing the group
	 */
	setGroup(group)	{
		if((group != null) && (!(Object.prototype.toString.call(group) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: group EXPECTED TYPE: Array", null, null);
		}
		this.group = group;
		this.keyModified.set("group", 1);

	}

	/**
	 * The method to get the comparator
	 * @returns {String} A String representing the comparator
	 */
	getComparator()	{
		return this.comparator;

	}

	/**
	 * The method to set the value to comparator
	 * @param {String} comparator A String representing the comparator
	 */
	setComparator(comparator)	{
		if((comparator != null) && (!(Object.prototype.toString.call(comparator) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: comparator EXPECTED TYPE: String", null, null);
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
	 * @returns {Object} An Object representing the value
	 */
	getValue()	{
		return this.value;

	}

	/**
	 * The method to set the value to value
	 * @param {Object} value An Object representing the value
	 */
	setValue(value)	{
		this.value = value;
		this.keyModified.set("value", 1);

	}

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
	Criteria as MasterModel,
	Criteria as Criteria
}
