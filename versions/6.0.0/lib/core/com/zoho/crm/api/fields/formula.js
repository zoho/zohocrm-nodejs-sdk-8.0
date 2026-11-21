import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Formula{

	returnType;
	assumeDefault;
	expression;
	dynamic;
	stopComputeConditionally;
	stopComputeExpression;
	keyModified = new Map();
	/**
	 * The method to get the returnType
	 * @returns {String} A String representing the returnType
	 */
	getReturnType()	{
		return this.returnType;

	}

	/**
	 * The method to set the value to returnType
	 * @param {String} returnType A String representing the returnType
	 */
	setReturnType(returnType)	{
		if((returnType != null) && (!(Object.prototype.toString.call(returnType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: returnType EXPECTED TYPE: String", null, null);
		}
		this.returnType = returnType;
		this.keyModified.set("return_type", 1);

	}

	/**
	 * The method to get the assumeDefault
	 * @returns {Boolean} A Boolean representing the assumeDefault
	 */
	getAssumeDefault()	{
		return this.assumeDefault;

	}

	/**
	 * The method to set the value to assumeDefault
	 * @param {Boolean} assumeDefault A Boolean representing the assumeDefault
	 */
	setAssumeDefault(assumeDefault)	{
		if((assumeDefault != null) && (!(Object.prototype.toString.call(assumeDefault) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assumeDefault EXPECTED TYPE: Boolean", null, null);
		}
		this.assumeDefault = assumeDefault;
		this.keyModified.set("assume_default", 1);

	}

	/**
	 * The method to get the expression
	 * @returns {String} A String representing the expression
	 */
	getExpression()	{
		return this.expression;

	}

	/**
	 * The method to set the value to expression
	 * @param {String} expression A String representing the expression
	 */
	setExpression(expression)	{
		if((expression != null) && (!(Object.prototype.toString.call(expression) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: expression EXPECTED TYPE: String", null, null);
		}
		this.expression = expression;
		this.keyModified.set("expression", 1);

	}

	/**
	 * The method to get the dynamic
	 * @returns {Boolean} A Boolean representing the dynamic
	 */
	getDynamic()	{
		return this.dynamic;

	}

	/**
	 * The method to set the value to dynamic
	 * @param {Boolean} dynamic A Boolean representing the dynamic
	 */
	setDynamic(dynamic)	{
		if((dynamic != null) && (!(Object.prototype.toString.call(dynamic) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dynamic EXPECTED TYPE: Boolean", null, null);
		}
		this.dynamic = dynamic;
		this.keyModified.set("dynamic", 1);

	}

	/**
	 * The method to get the stopComputeConditionally
	 * @returns {Boolean} A Boolean representing the stopComputeConditionally
	 */
	getStopComputeConditionally()	{
		return this.stopComputeConditionally;

	}

	/**
	 * The method to set the value to stopComputeConditionally
	 * @param {Boolean} stopComputeConditionally A Boolean representing the stopComputeConditionally
	 */
	setStopComputeConditionally(stopComputeConditionally)	{
		if((stopComputeConditionally != null) && (!(Object.prototype.toString.call(stopComputeConditionally) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: stopComputeConditionally EXPECTED TYPE: Boolean", null, null);
		}
		this.stopComputeConditionally = stopComputeConditionally;
		this.keyModified.set("stop_compute_conditionally", 1);

	}

	/**
	 * The method to get the stopComputeExpression
	 * @returns {String} A String representing the stopComputeExpression
	 */
	getStopComputeExpression()	{
		return this.stopComputeExpression;

	}

	/**
	 * The method to set the value to stopComputeExpression
	 * @param {String} stopComputeExpression A String representing the stopComputeExpression
	 */
	setStopComputeExpression(stopComputeExpression)	{
		if((stopComputeExpression != null) && (!(Object.prototype.toString.call(stopComputeExpression) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: stopComputeExpression EXPECTED TYPE: String", null, null);
		}
		this.stopComputeExpression = stopComputeExpression;
		this.keyModified.set("stop_compute_expression", 1);

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
	Formula as MasterModel,
	Formula as Formula
}
