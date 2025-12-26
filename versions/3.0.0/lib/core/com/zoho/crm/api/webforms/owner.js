import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Owner{

	name;
	id;
	systemMail;
	emailTemplate;
	keyModified = new Map();
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
	 * The method to get the id
	 * @returns {String} A String representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {String} id A String representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the systemMail
	 * @returns {Boolean} A Boolean representing the systemMail
	 */
	getSystemMail()	{
		return this.systemMail;

	}

	/**
	 * The method to set the value to systemMail
	 * @param {Boolean} systemMail A Boolean representing the systemMail
	 */
	setSystemMail(systemMail)	{
		if((systemMail != null) && (!(Object.prototype.toString.call(systemMail) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: systemMail EXPECTED TYPE: Boolean", null, null);
		}
		this.systemMail = systemMail;
		this.keyModified.set("system_mail", 1);

	}

	/**
	 * The method to get the emailTemplate
	 * @returns {Map} A Map representing the emailTemplate
	 */
	getEmailTemplate()	{
		return this.emailTemplate;

	}

	/**
	 * The method to set the value to emailTemplate
	 * @param {Map} emailTemplate A Map representing the emailTemplate
	 */
	setEmailTemplate(emailTemplate)	{
		if((emailTemplate != null) && (!(Object.prototype.toString.call(emailTemplate) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailTemplate EXPECTED TYPE: Map", null, null);
		}
		this.emailTemplate = emailTemplate;
		this.keyModified.set("email_template", 1);

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
	Owner as MasterModel,
	Owner as Owner
}
