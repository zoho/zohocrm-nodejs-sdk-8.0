import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Signals{

	signalNamespace;
	email;
	subject;
	message;
	module;
	id;
	actions;
	keyModified = new Map();
	/**
	 * The method to get the signalNamespace
	 * @returns {String} A String representing the signalNamespace
	 */
	getSignalNamespace()	{
		return this.signalNamespace;

	}

	/**
	 * The method to set the value to signalNamespace
	 * @param {String} signalNamespace A String representing the signalNamespace
	 */
	setSignalNamespace(signalNamespace)	{
		if((signalNamespace != null) && (!(Object.prototype.toString.call(signalNamespace) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signalNamespace EXPECTED TYPE: String", null, null);
		}
		this.signalNamespace = signalNamespace;
		this.keyModified.set("signal_namespace", 1);

	}

	/**
	 * The method to get the email
	 * @returns {String} A String representing the email
	 */
	getEmail()	{
		return this.email;

	}

	/**
	 * The method to set the value to email
	 * @param {String} email A String representing the email
	 */
	setEmail(email)	{
		if((email != null) && (!(Object.prototype.toString.call(email) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: email EXPECTED TYPE: String", null, null);
		}
		this.email = email;
		this.keyModified.set("email", 1);

	}

	/**
	 * The method to get the subject
	 * @returns {String} A String representing the subject
	 */
	getSubject()	{
		return this.subject;

	}

	/**
	 * The method to set the value to subject
	 * @param {String} subject A String representing the subject
	 */
	setSubject(subject)	{
		if((subject != null) && (!(Object.prototype.toString.call(subject) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subject EXPECTED TYPE: String", null, null);
		}
		this.subject = subject;
		this.keyModified.set("subject", 1);

	}

	/**
	 * The method to get the message
	 * @returns {String} A String representing the message
	 */
	getMessage()	{
		return this.message;

	}

	/**
	 * The method to set the value to message
	 * @param {String} message A String representing the message
	 */
	setMessage(message)	{
		if((message != null) && (!(Object.prototype.toString.call(message) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: String", null, null);
		}
		this.message = message;
		this.keyModified.set("message", 1);

	}

	/**
	 * The method to get the module
	 * @returns {String} A String representing the module
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {String} module A String representing the module
	 */
	setModule(module)	{
		if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

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
	 * The method to get the actions
	 * @returns {Array} An Array representing the actions
	 */
	getActions()	{
		return this.actions;

	}

	/**
	 * The method to set the value to actions
	 * @param {Array} actions An Array representing the actions
	 */
	setActions(actions)	{
		if((actions != null) && (!(Object.prototype.toString.call(actions) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actions EXPECTED TYPE: Array", null, null);
		}
		this.actions = actions;
		this.keyModified.set("actions", 1);

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
	Signals as MasterModel,
	Signals as Signals
}
