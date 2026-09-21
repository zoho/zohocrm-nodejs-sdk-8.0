import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class HistoryTracking{

	relatedListName;
	durationConfiguration;
	followedFields;
	module;
	durationConfiguredField;
	keyModified = new Map();
	/**
	 * The method to get the relatedListName
	 * @returns {String} A String representing the relatedListName
	 */
	getRelatedListName()	{
		return this.relatedListName;

	}

	/**
	 * The method to set the value to relatedListName
	 * @param {String} relatedListName A String representing the relatedListName
	 */
	setRelatedListName(relatedListName)	{
		if((relatedListName != null) && (!(Object.prototype.toString.call(relatedListName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedListName EXPECTED TYPE: String", null, null);
		}
		this.relatedListName = relatedListName;
		this.keyModified.set("related_list_name", 1);

	}

	/**
	 * The method to get the durationConfiguration
	 * @returns {Choice} An instance of Choice
	 */
	getDurationConfiguration()	{
		return this.durationConfiguration;

	}

	/**
	 * The method to set the value to durationConfiguration
	 * @param {Choice} durationConfiguration An instance of Choice
	 */
	setDurationConfiguration(durationConfiguration)	{
		if((durationConfiguration != null) && (!(durationConfiguration instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: durationConfiguration EXPECTED TYPE: Choice", null, null);
		}
		this.durationConfiguration = durationConfiguration;
		this.keyModified.set("duration_configuration", 1);

	}

	/**
	 * The method to get the followedFields
	 * @returns {Array} An Array representing the followedFields
	 */
	getFollowedFields()	{
		return this.followedFields;

	}

	/**
	 * The method to set the value to followedFields
	 * @param {Array} followedFields An Array representing the followedFields
	 */
	setFollowedFields(followedFields)	{
		if((followedFields != null) && (!(Object.prototype.toString.call(followedFields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: followedFields EXPECTED TYPE: Array", null, null);
		}
		this.followedFields = followedFields;
		this.keyModified.set("followed_fields", 1);

	}

	/**
	 * The method to get the module
	 * @returns {HistoryTrackingModule} An instance of HistoryTrackingModule
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {HistoryTrackingModule} module An instance of HistoryTrackingModule
	 */
	async setModule(module)	{
		const HistoryTrackingModule = (await (import("./history_tracking_module.js"))).MasterModel;
		if((module != null) && (!(module instanceof HistoryTrackingModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: HistoryTrackingModule", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the durationConfiguredField
	 * @returns {MinifiedModule} An instance of MinifiedModule
	 */
	getDurationConfiguredField()	{
		return this.durationConfiguredField;

	}

	/**
	 * The method to set the value to durationConfiguredField
	 * @param {MinifiedModule} durationConfiguredField An instance of MinifiedModule
	 */
	async setDurationConfiguredField(durationConfiguredField)	{
		const MinifiedModule = (await (import("../modules/minified_module.js"))).MasterModel;
		if((durationConfiguredField != null) && (!(durationConfiguredField instanceof MinifiedModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: durationConfiguredField EXPECTED TYPE: MinifiedModule", null, null);
		}
		this.durationConfiguredField = durationConfiguredField;
		this.keyModified.set("duration_configured_field", 1);

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
	HistoryTracking as MasterModel,
	HistoryTracking as HistoryTracking
}
