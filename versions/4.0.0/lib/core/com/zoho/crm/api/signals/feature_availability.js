import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class FeatureAvailability{

	scoring;
	signals;
	keyModified = new Map();
	/**
	 * The method to get the scoring
	 * @returns {Boolean} A Boolean representing the scoring
	 */
	getScoring()	{
		return this.scoring;

	}

	/**
	 * The method to set the value to scoring
	 * @param {Boolean} scoring A Boolean representing the scoring
	 */
	setScoring(scoring)	{
		if((scoring != null) && (!(Object.prototype.toString.call(scoring) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scoring EXPECTED TYPE: Boolean", null, null);
		}
		this.scoring = scoring;
		this.keyModified.set("scoring", 1);

	}

	/**
	 * The method to get the signals
	 * @returns {Boolean} A Boolean representing the signals
	 */
	getSignals()	{
		return this.signals;

	}

	/**
	 * The method to set the value to signals
	 * @param {Boolean} signals A Boolean representing the signals
	 */
	setSignals(signals)	{
		if((signals != null) && (!(Object.prototype.toString.call(signals) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signals EXPECTED TYPE: Boolean", null, null);
		}
		this.signals = signals;
		this.keyModified.set("signals", 1);

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
	FeatureAvailability as MasterModel,
	FeatureAvailability as FeatureAvailability
}
