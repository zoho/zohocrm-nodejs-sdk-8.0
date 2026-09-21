import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class EmailConfigurationOptionsOperations{
	/**
	 * Creates an instance of EmailConfigurationOptionsOperations
	 */
	constructor(){

	}

	/**
	 * The method to get email configuration options
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getEmailConfigurationOptions()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/email/v8/settings/compose/configuration_options");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update email configuration options
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateEmailConfigurationOptions(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/email/v8/settings/compose/configuration_options");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class GetEmailConfigurationOptionsHeader{

}

class UpdateEmailConfigurationOptionsHeader{

}

export {
	GetEmailConfigurationOptionsHeader as GetEmailConfigurationOptionsHeader,
	UpdateEmailConfigurationOptionsHeader as UpdateEmailConfigurationOptionsHeader,
	EmailConfigurationOptionsOperations as MasterModel,
	EmailConfigurationOptionsOperations as EmailConfigurationOptionsOperations
}
