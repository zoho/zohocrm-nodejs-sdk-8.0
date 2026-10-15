import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Logo{

	imageName;
	align;
	size;
	keyModified = new Map();
	/**
	 * The method to get the imageName
	 * @returns {String} A String representing the imageName
	 */
	getImageName()	{
		return this.imageName;

	}

	/**
	 * The method to set the value to imageName
	 * @param {String} imageName A String representing the imageName
	 */
	setImageName(imageName)	{
		if((imageName != null) && (!(Object.prototype.toString.call(imageName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: imageName EXPECTED TYPE: String", null, null);
		}
		this.imageName = imageName;
		this.keyModified.set("image_name", 1);

	}

	/**
	 * The method to get the align
	 * @returns {String} A String representing the align
	 */
	getAlign()	{
		return this.align;

	}

	/**
	 * The method to set the value to align
	 * @param {String} align A String representing the align
	 */
	setAlign(align)	{
		if((align != null) && (!(Object.prototype.toString.call(align) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: align EXPECTED TYPE: String", null, null);
		}
		this.align = align;
		this.keyModified.set("align", 1);

	}

	/**
	 * The method to get the size
	 * @returns {String} A String representing the size
	 */
	getSize()	{
		return this.size;

	}

	/**
	 * The method to set the value to size
	 * @param {String} size A String representing the size
	 */
	setSize(size)	{
		if((size != null) && (!(Object.prototype.toString.call(size) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: size EXPECTED TYPE: String", null, null);
		}
		this.size = size;
		this.keyModified.set("size", 1);

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
	Logo as MasterModel,
	Logo as Logo
}
