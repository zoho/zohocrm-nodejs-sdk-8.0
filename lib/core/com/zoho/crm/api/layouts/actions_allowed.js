import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ActionsAllowed{

	edit;
	rename;
	clone;
	downgrade;
	delete1;
	deactivate;
	setLayoutPermissions;
	addField;
	changeTabTraversal;
	reorder;
	removeField;
	changeColumnCount;
	keyModified = new Map();
	/**
	 * The method to get the edit
	 * @returns {Boolean} A Boolean representing the edit
	 */
	getEdit()	{
		return this.edit;

	}

	/**
	 * The method to set the value to edit
	 * @param {Boolean} edit A Boolean representing the edit
	 */
	setEdit(edit)	{
		if((edit != null) && (!(Object.prototype.toString.call(edit) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: edit EXPECTED TYPE: Boolean", null, null);
		}
		this.edit = edit;
		this.keyModified.set("edit", 1);

	}

	/**
	 * The method to get the rename
	 * @returns {Boolean} A Boolean representing the rename
	 */
	getRename()	{
		return this.rename;

	}

	/**
	 * The method to set the value to rename
	 * @param {Boolean} rename A Boolean representing the rename
	 */
	setRename(rename)	{
		if((rename != null) && (!(Object.prototype.toString.call(rename) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rename EXPECTED TYPE: Boolean", null, null);
		}
		this.rename = rename;
		this.keyModified.set("rename", 1);

	}

	/**
	 * The method to get the clone
	 * @returns {Boolean} A Boolean representing the clone
	 */
	getClone()	{
		return this.clone;

	}

	/**
	 * The method to set the value to clone
	 * @param {Boolean} clone A Boolean representing the clone
	 */
	setClone(clone)	{
		if((clone != null) && (!(Object.prototype.toString.call(clone) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: clone EXPECTED TYPE: Boolean", null, null);
		}
		this.clone = clone;
		this.keyModified.set("clone", 1);

	}

	/**
	 * The method to get the downgrade
	 * @returns {Boolean} A Boolean representing the downgrade
	 */
	getDowngrade()	{
		return this.downgrade;

	}

	/**
	 * The method to set the value to downgrade
	 * @param {Boolean} downgrade A Boolean representing the downgrade
	 */
	setDowngrade(downgrade)	{
		if((downgrade != null) && (!(Object.prototype.toString.call(downgrade) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: downgrade EXPECTED TYPE: Boolean", null, null);
		}
		this.downgrade = downgrade;
		this.keyModified.set("downgrade", 1);

	}

	/**
	 * The method to get the delete
	 * @returns {Boolean} A Boolean representing the delete1
	 */
	getDelete()	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param {Boolean} delete1 A Boolean representing the delete1
	 */
	setDelete(delete1)	{
		if((delete1 != null) && (!(Object.prototype.toString.call(delete1) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: Boolean", null, null);
		}
		this.delete1 = delete1;
		this.keyModified.set("delete", 1);

	}

	/**
	 * The method to get the deactivate
	 * @returns {Boolean} A Boolean representing the deactivate
	 */
	getDeactivate()	{
		return this.deactivate;

	}

	/**
	 * The method to set the value to deactivate
	 * @param {Boolean} deactivate A Boolean representing the deactivate
	 */
	setDeactivate(deactivate)	{
		if((deactivate != null) && (!(Object.prototype.toString.call(deactivate) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deactivate EXPECTED TYPE: Boolean", null, null);
		}
		this.deactivate = deactivate;
		this.keyModified.set("deactivate", 1);

	}

	/**
	 * The method to get the setLayoutPermissions
	 * @returns {Boolean} A Boolean representing the setLayoutPermissions
	 */
	getSetLayoutPermissions()	{
		return this.setLayoutPermissions;

	}

	/**
	 * The method to set the value to setLayoutPermissions
	 * @param {Boolean} setLayoutPermissions A Boolean representing the setLayoutPermissions
	 */
	setSetLayoutPermissions(setLayoutPermissions)	{
		if((setLayoutPermissions != null) && (!(Object.prototype.toString.call(setLayoutPermissions) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: setLayoutPermissions EXPECTED TYPE: Boolean", null, null);
		}
		this.setLayoutPermissions = setLayoutPermissions;
		this.keyModified.set("set_layout_permissions", 1);

	}

	/**
	 * The method to get the addField
	 * @returns {Boolean} A Boolean representing the addField
	 */
	getAddField()	{
		return this.addField;

	}

	/**
	 * The method to set the value to addField
	 * @param {Boolean} addField A Boolean representing the addField
	 */
	setAddField(addField)	{
		if((addField != null) && (!(Object.prototype.toString.call(addField) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: addField EXPECTED TYPE: Boolean", null, null);
		}
		this.addField = addField;
		this.keyModified.set("add_field", 1);

	}

	/**
	 * The method to get the changeTabTraversal
	 * @returns {Boolean} A Boolean representing the changeTabTraversal
	 */
	getChangeTabTraversal()	{
		return this.changeTabTraversal;

	}

	/**
	 * The method to set the value to changeTabTraversal
	 * @param {Boolean} changeTabTraversal A Boolean representing the changeTabTraversal
	 */
	setChangeTabTraversal(changeTabTraversal)	{
		if((changeTabTraversal != null) && (!(Object.prototype.toString.call(changeTabTraversal) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: changeTabTraversal EXPECTED TYPE: Boolean", null, null);
		}
		this.changeTabTraversal = changeTabTraversal;
		this.keyModified.set("change_tab_traversal", 1);

	}

	/**
	 * The method to get the reorder
	 * @returns {Boolean} A Boolean representing the reorder
	 */
	getReorder()	{
		return this.reorder;

	}

	/**
	 * The method to set the value to reorder
	 * @param {Boolean} reorder A Boolean representing the reorder
	 */
	setReorder(reorder)	{
		if((reorder != null) && (!(Object.prototype.toString.call(reorder) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reorder EXPECTED TYPE: Boolean", null, null);
		}
		this.reorder = reorder;
		this.keyModified.set("reorder", 1);

	}

	/**
	 * The method to get the removeField
	 * @returns {Boolean} A Boolean representing the removeField
	 */
	getRemoveField()	{
		return this.removeField;

	}

	/**
	 * The method to set the value to removeField
	 * @param {Boolean} removeField A Boolean representing the removeField
	 */
	setRemoveField(removeField)	{
		if((removeField != null) && (!(Object.prototype.toString.call(removeField) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: removeField EXPECTED TYPE: Boolean", null, null);
		}
		this.removeField = removeField;
		this.keyModified.set("remove_field", 1);

	}

	/**
	 * The method to get the changeColumnCount
	 * @returns {Boolean} A Boolean representing the changeColumnCount
	 */
	getChangeColumnCount()	{
		return this.changeColumnCount;

	}

	/**
	 * The method to set the value to changeColumnCount
	 * @param {Boolean} changeColumnCount A Boolean representing the changeColumnCount
	 */
	setChangeColumnCount(changeColumnCount)	{
		if((changeColumnCount != null) && (!(Object.prototype.toString.call(changeColumnCount) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: changeColumnCount EXPECTED TYPE: Boolean", null, null);
		}
		this.changeColumnCount = changeColumnCount;
		this.keyModified.set("change_column_count", 1);

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
	ActionsAllowed as MasterModel,
	ActionsAllowed as ActionsAllowed
}
