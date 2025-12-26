import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class SpamControl{

	status;
	excludeScore;
	spamPossibilityThreshold;
	keyModified = new Map();
	/**
	 * The method to get the status
	 * @returns {String} A String representing the status
	 */
	getStatus()	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param {String} status A String representing the status
	 */
	setStatus(status)	{
		if((status != null) && (!(Object.prototype.toString.call(status) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: String", null, null);
		}
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the excludeScore
	 * @returns {String} A String representing the excludeScore
	 */
	getExcludeScore()	{
		return this.excludeScore;

	}

	/**
	 * The method to set the value to excludeScore
	 * @param {String} excludeScore A String representing the excludeScore
	 */
	setExcludeScore(excludeScore)	{
		if((excludeScore != null) && (!(Object.prototype.toString.call(excludeScore) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeScore EXPECTED TYPE: String", null, null);
		}
		this.excludeScore = excludeScore;
		this.keyModified.set("exclude_score", 1);

	}

	/**
	 * The method to get the spamPossibilityThreshold
	 * @returns {number} A number representing the spamPossibilityThreshold
	 */
	getSpamPossibilityThreshold()	{
		return this.spamPossibilityThreshold;

	}

	/**
	 * The method to set the value to spamPossibilityThreshold
	 * @param {number} spamPossibilityThreshold A number representing the spamPossibilityThreshold
	 */
	setSpamPossibilityThreshold(spamPossibilityThreshold)	{
		if((spamPossibilityThreshold != null) && (!(Object.prototype.toString.call(spamPossibilityThreshold) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: spamPossibilityThreshold EXPECTED TYPE: number", null, null);
		}
		this.spamPossibilityThreshold = spamPossibilityThreshold;
		this.keyModified.set("spam_possibility_threshold", 1);

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
	SpamControl as MasterModel,
	SpamControl as SpamControl
}
