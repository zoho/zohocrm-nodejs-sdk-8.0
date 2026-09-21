import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class DataSharing{

	shareType;
	publicInPortals;
	module;
	ruleComputationRunning;
	keyModified = new Map();
	/**
	 * The method to get the shareType
	 * @returns {Choice} An instance of Choice
	 */
	getShareType()	{
		return this.shareType;

	}

	/**
	 * The method to set the value to shareType
	 * @param {Choice} shareType An instance of Choice
	 */
	setShareType(shareType)	{
		if((shareType != null) && (!(shareType instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shareType EXPECTED TYPE: Choice", null, null);
		}
		this.shareType = shareType;
		this.keyModified.set("share_type", 1);

	}

	/**
	 * The method to get the publicInPortals
	 * @returns {Boolean} A Boolean representing the publicInPortals
	 */
	getPublicInPortals()	{
		return this.publicInPortals;

	}

	/**
	 * The method to set the value to publicInPortals
	 * @param {Boolean} publicInPortals A Boolean representing the publicInPortals
	 */
	setPublicInPortals(publicInPortals)	{
		if((publicInPortals != null) && (!(Object.prototype.toString.call(publicInPortals) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: publicInPortals EXPECTED TYPE: Boolean", null, null);
		}
		this.publicInPortals = publicInPortals;
		this.keyModified.set("public_in_portals", 1);

	}

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
	 * The method to get the ruleComputationRunning
	 * @returns {Boolean} A Boolean representing the ruleComputationRunning
	 */
	getRuleComputationRunning()	{
		return this.ruleComputationRunning;

	}

	/**
	 * The method to set the value to ruleComputationRunning
	 * @param {Boolean} ruleComputationRunning A Boolean representing the ruleComputationRunning
	 */
	setRuleComputationRunning(ruleComputationRunning)	{
		if((ruleComputationRunning != null) && (!(Object.prototype.toString.call(ruleComputationRunning) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ruleComputationRunning EXPECTED TYPE: Boolean", null, null);
		}
		this.ruleComputationRunning = ruleComputationRunning;
		this.keyModified.set("rule_computation_running", 1);

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
	DataSharing as MasterModel,
	DataSharing as DataSharing
}
