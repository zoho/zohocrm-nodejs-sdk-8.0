import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class SharingRulesOperations{

	module;
	/**
	 * Creates an instance of SharingRulesOperations with the given parameters
	 * @param {String} module A String representing the module
	 */
	constructor(module=null){
		if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		this.module = module;

	}

	/**
	 * The method to get sharing rules
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getSharingRules(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.SharingRules.GetSharingRulesParam"), this.module).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create sharing rules
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createSharingRules(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.SharingRules.CreateSharingRulesParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to update sharing rules
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateSharingRules(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.SharingRules.UpdateSharingRulesParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get sharing rule
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getSharingRule(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.SharingRules.GetSharingRuleParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update sharing rule
	 * @param {BigInt} id A BigInt representing the id
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateSharingRule(id, request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.SharingRules.UpdateSharingRuleParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete sharing rule
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteSharingRule(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.SharingRules.DeleteSharingRuleParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to search sharing rules
	 * @param {FiltersBody} request An instance of FiltersBody
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async searchSharingRules(request, paramInstance=null)	{
		const FiltersBody = (await (import("./filters_body.js"))).MasterModel;
		if((request != null) && (!(request instanceof FiltersBody)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: FiltersBody", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/search");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.SharingRules.SearchSharingRulesParam"), this.module).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to deactivate sharing rule
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deactivateSharingRule(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/activate");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.SharingRules.DeactivateSharingRuleParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to activate sharing rule
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async activateSharingRule(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/activate");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.SharingRules.ActivateSharingRuleParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get sharing rule summary
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getSharingRuleSummary()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/actions/summary");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.SharingRules.GetSharingRuleSummaryParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let SummaryResponseHandler = require.resolve("./summary_response_handler.js");
		return handlerInstance.apiCall(SummaryResponseHandler, "application/json");

	}

	/**
	 * The method to search sharing rules summary
	 * @param {FiltersBody} request An instance of FiltersBody
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async searchSharingRulesSummary(request)	{
		const FiltersBody = (await (import("./filters_body.js"))).MasterModel;
		if((request != null) && (!(request instanceof FiltersBody)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: FiltersBody", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/actions/summary");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.SharingRules.SearchSharingRulesSummaryParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let SummaryResponseHandler = require.resolve("./summary_response_handler.js");
		return handlerInstance.apiCall(SummaryResponseHandler, "application/json");

	}

	/**
	 * The method to rerun sharing rules
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async rerunSharingRules()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/actions/run");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.SharingRules.RerunSharingRulesParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class GetSharingRulesParam{

	static PAGE = new Param("page", "com.zoho.crm.api.SharingRules.GetSharingRulesParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.SharingRules.GetSharingRulesParam");
}

class CreateSharingRulesParam{

}

class UpdateSharingRulesParam{

}

class GetSharingRuleParam{

}

class UpdateSharingRuleParam{

}

class DeleteSharingRuleParam{

}

class SearchSharingRulesParam{

	static PAGE = new Param("page", "com.zoho.crm.api.SharingRules.SearchSharingRulesParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.SharingRules.SearchSharingRulesParam");
}

class DeactivateSharingRuleParam{

}

class ActivateSharingRuleParam{

}

class GetSharingRuleSummaryParam{

}

class SearchSharingRulesSummaryParam{

}

class RerunSharingRulesParam{

}

export {
	GetSharingRulesParam as GetSharingRulesParam,
	GetSharingRuleParam as GetSharingRuleParam,
	SharingRulesOperations as MasterModel,
	SharingRulesOperations as SharingRulesOperations,
	DeactivateSharingRuleParam as DeactivateSharingRuleParam,
	UpdateSharingRuleParam as UpdateSharingRuleParam,
	SearchSharingRulesParam as SearchSharingRulesParam,
	CreateSharingRulesParam as CreateSharingRulesParam,
	SearchSharingRulesSummaryParam as SearchSharingRulesSummaryParam,
	RerunSharingRulesParam as RerunSharingRulesParam,
	ActivateSharingRuleParam as ActivateSharingRuleParam,
	GetSharingRuleSummaryParam as GetSharingRuleSummaryParam,
	UpdateSharingRulesParam as UpdateSharingRulesParam,
	DeleteSharingRuleParam as DeleteSharingRuleParam
}
