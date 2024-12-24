import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class CallPreferences{

	showFromNumber;
	showToNumber;
	keyModified = new Map();
	/**
	 * The method to get the showFromNumber
	 * @returns {Boolean} A Boolean representing the showFromNumber
	 */
	getShowFromNumber()	{
		return this.showFromNumber;

	}

	/**
	 * The method to set the value to showFromNumber
	 * @param {Boolean} showFromNumber A Boolean representing the showFromNumber
	 */
	setShowFromNumber(showFromNumber)	{
		if((showFromNumber != null) && (!(Object.prototype.toString.call(showFromNumber) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showFromNumber EXPECTED TYPE: Boolean", null, null);
		}
		this.showFromNumber = showFromNumber;
		this.keyModified.set("show_from_number", 1);

	}

	/**
	 * The method to get the showToNumber
	 * @returns {Boolean} A Boolean representing the showToNumber
	 */
	getShowToNumber()	{
		return this.showToNumber;

	}

	/**
	 * The method to set the value to showToNumber
	 * @param {Boolean} showToNumber A Boolean representing the showToNumber
	 */
	setShowToNumber(showToNumber)	{
		if((showToNumber != null) && (!(Object.prototype.toString.call(showToNumber) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showToNumber EXPECTED TYPE: Boolean", null, null);
		}
		this.showToNumber = showToNumber;
		this.keyModified.set("show_to_number", 1);

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
	CallPreferences as MasterModel,
	CallPreferences as CallPreferences
}
