import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Params{

	approved;
	converted;
	associated;
	category;
	approvalState;
	filters;
	keyModified = new Map();
	/**
	 * The method to get the approved
	 * @returns {Boolean} A Boolean representing the approved
	 */
	getApproved()	{
		return this.approved;

	}

	/**
	 * The method to set the value to approved
	 * @param {Boolean} approved A Boolean representing the approved
	 */
	setApproved(approved)	{
		if((approved != null) && (!(Object.prototype.toString.call(approved) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approved EXPECTED TYPE: Boolean", null, null);
		}
		this.approved = approved;
		this.keyModified.set("approved", 1);

	}

	/**
	 * The method to get the converted
	 * @returns {Boolean} A Boolean representing the converted
	 */
	getConverted()	{
		return this.converted;

	}

	/**
	 * The method to set the value to converted
	 * @param {Boolean} converted A Boolean representing the converted
	 */
	setConverted(converted)	{
		if((converted != null) && (!(Object.prototype.toString.call(converted) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: converted EXPECTED TYPE: Boolean", null, null);
		}
		this.converted = converted;
		this.keyModified.set("converted", 1);

	}

	/**
	 * The method to get the associated
	 * @returns {Boolean} A Boolean representing the associated
	 */
	getAssociated()	{
		return this.associated;

	}

	/**
	 * The method to set the value to associated
	 * @param {Boolean} associated A Boolean representing the associated
	 */
	setAssociated(associated)	{
		if((associated != null) && (!(Object.prototype.toString.call(associated) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: associated EXPECTED TYPE: Boolean", null, null);
		}
		this.associated = associated;
		this.keyModified.set("associated", 1);

	}

	/**
	 * The method to get the category
	 * @returns {Choice} An instance of Choice
	 */
	getCategory()	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param {Choice} category An instance of Choice
	 */
	setCategory(category)	{
		if((category != null) && (!(category instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: category EXPECTED TYPE: Choice", null, null);
		}
		this.category = category;
		this.keyModified.set("category", 1);

	}

	/**
	 * The method to get the approvalState
	 * @returns {Choice} An instance of Choice
	 */
	getApprovalState()	{
		return this.approvalState;

	}

	/**
	 * The method to set the value to approvalState
	 * @param {Choice} approvalState An instance of Choice
	 */
	setApprovalState(approvalState)	{
		if((approvalState != null) && (!(approvalState instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approvalState EXPECTED TYPE: Choice", null, null);
		}
		this.approvalState = approvalState;
		this.keyModified.set("approval_state", 1);

	}

	/**
	 * The method to get the filters
	 * @returns {Filters} An instance of Filters
	 */
	getFilters()	{
		return this.filters;

	}

	/**
	 * The method to set the value to filters
	 * @param {Filters} filters An instance of Filters
	 */
	async setFilters(filters)	{
		const Filters = (await (import("./filters.js"))).MasterModel;
		if((filters != null) && (!(filters instanceof Filters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filters EXPECTED TYPE: Filters", null, null);
		}
		this.filters = filters;
		this.keyModified.set("filters", 1);

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
	Params as MasterModel,
	Params as Params
}
