import {Param} from "../../../../../../routes/param.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class FromAddressesOperations{

	userId;
	/**
	 * Creates an instance of FromAddressesOperations with the given parameters
	 * @param {String} userId A String representing the userId
	 */
	constructor(userId=null){
		if((userId != null) && (!(Object.prototype.toString.call(userId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userId EXPECTED TYPE: String", null, null);
		}
		this.userId = userId;

	}

	/**
	 * The method to get from addresses
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getFromAddresses()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v8/settings/emails/actions/from_addresses");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("user_id", "com.zoho.crm.api.FromAddresses.GetFromAddressesParam"), this.userId).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetFromAddressesParam{

}

export {
	GetFromAddressesParam as GetFromAddressesParam,
	FromAddressesOperations as MasterModel,
	FromAddressesOperations as FromAddressesOperations
}
