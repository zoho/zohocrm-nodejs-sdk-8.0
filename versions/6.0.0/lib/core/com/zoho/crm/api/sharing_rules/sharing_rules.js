import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class SharingRules{

	id;
	permissionType;
	superiorsAllowed;
	name;
	type;
	sharedFrom;
	sharedTo;
	criteria;
	module;
	status;
	matchLimitExceeded;
	keyModified = new Map();
	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the permissionType
	 * @returns {Choice} An instance of Choice
	 */
	getPermissionType()	{
		return this.permissionType;

	}

	/**
	 * The method to set the value to permissionType
	 * @param {Choice} permissionType An instance of Choice
	 */
	setPermissionType(permissionType)	{
		if((permissionType != null) && (!(permissionType instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: permissionType EXPECTED TYPE: Choice", null, null);
		}
		this.permissionType = permissionType;
		this.keyModified.set("permission_type", 1);

	}

	/**
	 * The method to get the superiorsAllowed
	 * @returns {Boolean} A Boolean representing the superiorsAllowed
	 */
	getSuperiorsAllowed()	{
		return this.superiorsAllowed;

	}

	/**
	 * The method to set the value to superiorsAllowed
	 * @param {Boolean} superiorsAllowed A Boolean representing the superiorsAllowed
	 */
	setSuperiorsAllowed(superiorsAllowed)	{
		if((superiorsAllowed != null) && (!(Object.prototype.toString.call(superiorsAllowed) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: superiorsAllowed EXPECTED TYPE: Boolean", null, null);
		}
		this.superiorsAllowed = superiorsAllowed;
		this.keyModified.set("superiors_allowed", 1);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the type
	 * @returns {Choice} An instance of Choice
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {Choice} type An instance of Choice
	 */
	setType(type)	{
		if((type != null) && (!(type instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: Choice", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the sharedFrom
	 * @returns {Shared} An instance of Shared
	 */
	getSharedFrom()	{
		return this.sharedFrom;

	}

	/**
	 * The method to set the value to sharedFrom
	 * @param {Shared} sharedFrom An instance of Shared
	 */
	async setSharedFrom(sharedFrom)	{
		const Shared = (await (import("./shared.js"))).MasterModel;
		if((sharedFrom != null) && (!(sharedFrom instanceof Shared)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharedFrom EXPECTED TYPE: Shared", null, null);
		}
		this.sharedFrom = sharedFrom;
		this.keyModified.set("shared_from", 1);

	}

	/**
	 * The method to get the sharedTo
	 * @returns {Shared} An instance of Shared
	 */
	getSharedTo()	{
		return this.sharedTo;

	}

	/**
	 * The method to set the value to sharedTo
	 * @param {Shared} sharedTo An instance of Shared
	 */
	async setSharedTo(sharedTo)	{
		const Shared = (await (import("./shared.js"))).MasterModel;
		if((sharedTo != null) && (!(sharedTo instanceof Shared)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharedTo EXPECTED TYPE: Shared", null, null);
		}
		this.sharedTo = sharedTo;
		this.keyModified.set("shared_to", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns {Criteria} An instance of Criteria
	 */
	getCriteria()	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param {Criteria} criteria An instance of Criteria
	 */
	async setCriteria(criteria)	{
		const Criteria = (await (import("./criteria.js"))).MasterModel;
		if((criteria != null) && (!(criteria instanceof Criteria)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Criteria", null, null);
		}
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

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
	 * The method to get the status
	 * @returns {Choice} An instance of Choice
	 */
	getStatus()	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param {Choice} status An instance of Choice
	 */
	setStatus(status)	{
		if((status != null) && (!(status instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Choice", null, null);
		}
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the matchLimitExceeded
	 * @returns {Boolean} A Boolean representing the matchLimitExceeded
	 */
	getMatchLimitExceeded()	{
		return this.matchLimitExceeded;

	}

	/**
	 * The method to set the value to matchLimitExceeded
	 * @param {Boolean} matchLimitExceeded A Boolean representing the matchLimitExceeded
	 */
	setMatchLimitExceeded(matchLimitExceeded)	{
		if((matchLimitExceeded != null) && (!(Object.prototype.toString.call(matchLimitExceeded) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: matchLimitExceeded EXPECTED TYPE: Boolean", null, null);
		}
		this.matchLimitExceeded = matchLimitExceeded;
		this.keyModified.set("match_limit_exceeded", 1);

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
	SharingRules as MasterModel,
	SharingRules as SharingRules
}
