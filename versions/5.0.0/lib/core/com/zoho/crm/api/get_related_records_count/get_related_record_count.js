import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class GetRelatedRecordCount{

	relatedList;
	keyModified = new Map();
	/**
	 * The method to get the relatedList
	 * @returns {RelatedList} An instance of RelatedList
	 */
	getRelatedList()	{
		return this.relatedList;

	}

	/**
	 * The method to set the value to relatedList
	 * @param {RelatedList} relatedList An instance of RelatedList
	 */
	async setRelatedList(relatedList)	{
		const RelatedList = (await (import("./related_list.js"))).MasterModel;
		if((relatedList != null) && (!(relatedList instanceof RelatedList)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedList EXPECTED TYPE: RelatedList", null, null);
		}
		this.relatedList = relatedList;
		this.keyModified.set("related_list", 1);

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
	GetRelatedRecordCount as MasterModel,
	GetRelatedRecordCount as GetRelatedRecordCount
}
