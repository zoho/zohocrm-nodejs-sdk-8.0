import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Sections{

	displayLabel;
	sequenceNumber;
	actionsAllowed;
	issubformsection;
	tabTraversal;
	apiName;
	columnCount;
	name;
	generatedType;
	id;
	type;
	fields;
	properties;
	delete1;
	keyModified = new Map();
	/**
	 * The method to get the displayLabel
	 * @returns {String} A String representing the displayLabel
	 */
	getDisplayLabel()	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param {String} displayLabel A String representing the displayLabel
	 */
	setDisplayLabel(displayLabel)	{
		if((displayLabel != null) && (!(Object.prototype.toString.call(displayLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayLabel EXPECTED TYPE: String", null, null);
		}
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the sequenceNumber
	 * @returns {number} A number representing the sequenceNumber
	 */
	getSequenceNumber()	{
		return this.sequenceNumber;

	}

	/**
	 * The method to set the value to sequenceNumber
	 * @param {number} sequenceNumber A number representing the sequenceNumber
	 */
	setSequenceNumber(sequenceNumber)	{
		if((sequenceNumber != null) && (!(Object.prototype.toString.call(sequenceNumber) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequenceNumber EXPECTED TYPE: number", null, null);
		}
		this.sequenceNumber = sequenceNumber;
		this.keyModified.set("sequence_number", 1);

	}

	/**
	 * The method to get the actionsAllowed
	 * @returns {ActionsAllowed} An instance of ActionsAllowed
	 */
	getActionsAllowed()	{
		return this.actionsAllowed;

	}

	/**
	 * The method to set the value to actionsAllowed
	 * @param {ActionsAllowed} actionsAllowed An instance of ActionsAllowed
	 */
	async setActionsAllowed(actionsAllowed)	{
		const ActionsAllowed = (await (import("./actions_allowed.js"))).MasterModel;
		if((actionsAllowed != null) && (!(actionsAllowed instanceof ActionsAllowed)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actionsAllowed EXPECTED TYPE: ActionsAllowed", null, null);
		}
		this.actionsAllowed = actionsAllowed;
		this.keyModified.set("actions_allowed", 1);

	}

	/**
	 * The method to get the issubformsection
	 * @returns {Boolean} A Boolean representing the issubformsection
	 */
	getIssubformsection()	{
		return this.issubformsection;

	}

	/**
	 * The method to set the value to issubformsection
	 * @param {Boolean} issubformsection A Boolean representing the issubformsection
	 */
	setIssubformsection(issubformsection)	{
		if((issubformsection != null) && (!(Object.prototype.toString.call(issubformsection) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: issubformsection EXPECTED TYPE: Boolean", null, null);
		}
		this.issubformsection = issubformsection;
		this.keyModified.set("isSubformSection", 1);

	}

	/**
	 * The method to get the tabTraversal
	 * @returns {String} A String representing the tabTraversal
	 */
	getTabTraversal()	{
		return this.tabTraversal;

	}

	/**
	 * The method to set the value to tabTraversal
	 * @param {String} tabTraversal A String representing the tabTraversal
	 */
	setTabTraversal(tabTraversal)	{
		if((tabTraversal != null) && (!(Object.prototype.toString.call(tabTraversal) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tabTraversal EXPECTED TYPE: String", null, null);
		}
		this.tabTraversal = tabTraversal;
		this.keyModified.set("tab_traversal", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns {String} A String representing the apiName
	 */
	getAPIName()	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param {String} apiName A String representing the apiName
	 */
	setAPIName(apiName)	{
		if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
		}
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the columnCount
	 * @returns {number} A number representing the columnCount
	 */
	getColumnCount()	{
		return this.columnCount;

	}

	/**
	 * The method to set the value to columnCount
	 * @param {number} columnCount A number representing the columnCount
	 */
	setColumnCount(columnCount)	{
		if((columnCount != null) && (!(Object.prototype.toString.call(columnCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: columnCount EXPECTED TYPE: number", null, null);
		}
		this.columnCount = columnCount;
		this.keyModified.set("column_count", 1);

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
	 * The method to get the generatedType
	 * @returns {String} A String representing the generatedType
	 */
	getGeneratedType()	{
		return this.generatedType;

	}

	/**
	 * The method to set the value to generatedType
	 * @param {String} generatedType A String representing the generatedType
	 */
	setGeneratedType(generatedType)	{
		if((generatedType != null) && (!(Object.prototype.toString.call(generatedType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: generatedType EXPECTED TYPE: String", null, null);
		}
		this.generatedType = generatedType;
		this.keyModified.set("generated_type", 1);

	}

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
	 * The method to get the type
	 * @returns {String} A String representing the type
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {String} type A String representing the type
	 */
	setType(type)	{
		if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the fields
	 * @returns {Array} An Array representing the fields
	 */
	getFields()	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param {Array} fields An Array representing the fields
	 */
	setFields(fields)	{
		if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Array", null, null);
		}
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the properties
	 * @returns {Properties} An instance of Properties
	 */
	getProperties()	{
		return this.properties;

	}

	/**
	 * The method to set the value to properties
	 * @param {Properties} properties An instance of Properties
	 */
	async setProperties(properties)	{
		const Properties = (await (import("./properties.js"))).MasterModel;
		if((properties != null) && (!(properties instanceof Properties)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: properties EXPECTED TYPE: Properties", null, null);
		}
		this.properties = properties;
		this.keyModified.set("properties", 1);

	}

	/**
	 * The method to get the delete
	 * @returns {Delete1} An instance of Delete1
	 */
	getDelete()	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param {Delete1} delete1 An instance of Delete1
	 */
	async setDelete(delete1)	{
		const Delete1 = (await (import("./delete1.js"))).MasterModel;
		if((delete1 != null) && (!(delete1 instanceof Delete1)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: Delete1", null, null);
		}
		this.delete1 = delete1;
		this.keyModified.set("_delete", 1);

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
	Sections as MasterModel,
	Sections as Sections
}
