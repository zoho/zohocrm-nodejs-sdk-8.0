import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Multiselectlookup{

	linkingDetails;
	connectedDetails;
	relatedList;
	recordAccess;
	keyModified = new Map();
	/**
	 * The method to get the linkingDetails
	 * @returns {LinkingDetails} An instance of LinkingDetails
	 */
	getLinkingDetails()	{
		return this.linkingDetails;

	}

	/**
	 * The method to set the value to linkingDetails
	 * @param {LinkingDetails} linkingDetails An instance of LinkingDetails
	 */
	async setLinkingDetails(linkingDetails)	{
		const LinkingDetails = (await (import("./linking_details.js"))).MasterModel;
		if((linkingDetails != null) && (!(linkingDetails instanceof LinkingDetails)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkingDetails EXPECTED TYPE: LinkingDetails", null, null);
		}
		this.linkingDetails = linkingDetails;
		this.keyModified.set("linking_details", 1);

	}

	/**
	 * The method to get the connectedDetails
	 * @returns {ConnectedDetails} An instance of ConnectedDetails
	 */
	getConnectedDetails()	{
		return this.connectedDetails;

	}

	/**
	 * The method to set the value to connectedDetails
	 * @param {ConnectedDetails} connectedDetails An instance of ConnectedDetails
	 */
	async setConnectedDetails(connectedDetails)	{
		const ConnectedDetails = (await (import("./connected_details.js"))).MasterModel;
		if((connectedDetails != null) && (!(connectedDetails instanceof ConnectedDetails)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: connectedDetails EXPECTED TYPE: ConnectedDetails", null, null);
		}
		this.connectedDetails = connectedDetails;
		this.keyModified.set("connected_details", 1);

	}

	/**
	 * The method to get the relatedList
	 * @returns {LookupRelatedList} An instance of LookupRelatedList
	 */
	getRelatedList()	{
		return this.relatedList;

	}

	/**
	 * The method to set the value to relatedList
	 * @param {LookupRelatedList} relatedList An instance of LookupRelatedList
	 */
	async setRelatedList(relatedList)	{
		const LookupRelatedList = (await (import("./lookup_related_list.js"))).MasterModel;
		if((relatedList != null) && (!(relatedList instanceof LookupRelatedList)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedList EXPECTED TYPE: LookupRelatedList", null, null);
		}
		this.relatedList = relatedList;
		this.keyModified.set("related_list", 1);

	}

	/**
	 * The method to get the recordAccess
	 * @returns {Boolean} A Boolean representing the recordAccess
	 */
	getRecordAccess()	{
		return this.recordAccess;

	}

	/**
	 * The method to set the value to recordAccess
	 * @param {Boolean} recordAccess A Boolean representing the recordAccess
	 */
	setRecordAccess(recordAccess)	{
		if((recordAccess != null) && (!(Object.prototype.toString.call(recordAccess) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordAccess EXPECTED TYPE: Boolean", null, null);
		}
		this.recordAccess = recordAccess;
		this.keyModified.set("record_access", 1);

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
	Multiselectlookup as MasterModel,
	Multiselectlookup as Multiselectlookup
}
