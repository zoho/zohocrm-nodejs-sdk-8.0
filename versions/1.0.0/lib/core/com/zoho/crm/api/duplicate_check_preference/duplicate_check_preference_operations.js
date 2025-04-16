import {Param} from "../../../../../../routes/param.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class DuplicateCheckPreferenceOperations{

	module;
	/**
	 * Creates an instance of DuplicateCheckPreferenceOperations with the given parameters
	 * @param {String} module A String representing the module
	 */
	constructor(module=null){
		if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		this.module = module;

	}

	/**
	 * The method to get duplicate check preference
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getDuplicateCheckPreference()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/duplicate_check_preference");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.DuplicateCheckPreference.GetDuplicateCheckPreferenceParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create duplicate check preference
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createDuplicateCheckPreference(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/duplicate_check_preference");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.DuplicateCheckPreference.CreateDuplicateCheckPreferenceParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to update duplicate check preference
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateDuplicateCheckPreference(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/duplicate_check_preference");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.DuplicateCheckPreference.UpdateDuplicateCheckPreferenceParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete duplicate check preference
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteDuplicateCheckPreference()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/duplicate_check_preference");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.DuplicateCheckPreference.DeleteDuplicateCheckPreferenceParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class GetDuplicateCheckPreferenceParam{

}

class CreateDuplicateCheckPreferenceParam{

}

class UpdateDuplicateCheckPreferenceParam{

}

class DeleteDuplicateCheckPreferenceParam{

}

export {
	CreateDuplicateCheckPreferenceParam as CreateDuplicateCheckPreferenceParam,
	DeleteDuplicateCheckPreferenceParam as DeleteDuplicateCheckPreferenceParam,
	GetDuplicateCheckPreferenceParam as GetDuplicateCheckPreferenceParam,
	DuplicateCheckPreferenceOperations as MasterModel,
	DuplicateCheckPreferenceOperations as DuplicateCheckPreferenceOperations,
	UpdateDuplicateCheckPreferenceParam as UpdateDuplicateCheckPreferenceParam
}
