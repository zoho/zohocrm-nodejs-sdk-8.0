import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class DoubleOptinDetails{

	emailTemplate;
	confirmPageContent;
	keyModified = new Map();
	/**
	 * The method to get the emailTemplate
	 * @returns {DoubleOptinEmailTemplate} An instance of DoubleOptinEmailTemplate
	 */
	getEmailTemplate()	{
		return this.emailTemplate;

	}

	/**
	 * The method to set the value to emailTemplate
	 * @param {DoubleOptinEmailTemplate} emailTemplate An instance of DoubleOptinEmailTemplate
	 */
	async setEmailTemplate(emailTemplate)	{
		const DoubleOptinEmailTemplate = (await (import("./double_optin_email_template.js"))).MasterModel;
		if((emailTemplate != null) && (!(emailTemplate instanceof DoubleOptinEmailTemplate)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailTemplate EXPECTED TYPE: DoubleOptinEmailTemplate", null, null);
		}
		this.emailTemplate = emailTemplate;
		this.keyModified.set("email_template", 1);

	}

	/**
	 * The method to get the confirmPageContent
	 * @returns {String} A String representing the confirmPageContent
	 */
	getConfirmPageContent()	{
		return this.confirmPageContent;

	}

	/**
	 * The method to set the value to confirmPageContent
	 * @param {String} confirmPageContent A String representing the confirmPageContent
	 */
	setConfirmPageContent(confirmPageContent)	{
		if((confirmPageContent != null) && (!(Object.prototype.toString.call(confirmPageContent) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: confirmPageContent EXPECTED TYPE: String", null, null);
		}
		this.confirmPageContent = confirmPageContent;
		this.keyModified.set("confirm_page_content", 1);

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
	DoubleOptinDetails as MasterModel,
	DoubleOptinDetails as DoubleOptinDetails
}
