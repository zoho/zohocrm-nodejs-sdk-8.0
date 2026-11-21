import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class RulesSummary{

	module;
	ruleComputationStatus;
	ruleCount;
	keyModified = new Map();
	/**
	 * The method to get the module
	 * @returns {Module} An instance of Module
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {Module} module An instance of Module
	 */
	async setModule(module)	{
		const Module = (await (import("./module.js"))).MasterModel;
		if((module != null) && (!(module instanceof Module)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Module", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the ruleComputationStatus
	 * @returns {Boolean} A Boolean representing the ruleComputationStatus
	 */
	getRuleComputationStatus()	{
		return this.ruleComputationStatus;

	}

	/**
	 * The method to set the value to ruleComputationStatus
	 * @param {Boolean} ruleComputationStatus A Boolean representing the ruleComputationStatus
	 */
	setRuleComputationStatus(ruleComputationStatus)	{
		if((ruleComputationStatus != null) && (!(Object.prototype.toString.call(ruleComputationStatus) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ruleComputationStatus EXPECTED TYPE: Boolean", null, null);
		}
		this.ruleComputationStatus = ruleComputationStatus;
		this.keyModified.set("rule_computation_status", 1);

	}

	/**
	 * The method to get the ruleCount
	 * @returns {number} A number representing the ruleCount
	 */
	getRuleCount()	{
		return this.ruleCount;

	}

	/**
	 * The method to set the value to ruleCount
	 * @param {number} ruleCount A number representing the ruleCount
	 */
	setRuleCount(ruleCount)	{
		if((ruleCount != null) && (!(Object.prototype.toString.call(ruleCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ruleCount EXPECTED TYPE: number", null, null);
		}
		this.ruleCount = ruleCount;
		this.keyModified.set("rule_count", 1);

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
	RulesSummary as MasterModel,
	RulesSummary as RulesSummary
}
