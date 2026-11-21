import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Background{

	imageName;
	color;
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
	 * The method to get the color
	 * @returns {String} A String representing the color
	 */
	getColor()	{
		return this.color;

	}

	/**
	 * The method to set the value to color
	 * @param {String} color A String representing the color
	 */
	setColor(color)	{
		if((color != null) && (!(Object.prototype.toString.call(color) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: color EXPECTED TYPE: String", null, null);
		}
		this.color = color;
		this.keyModified.set("color", 1);

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
	Background as MasterModel,
	Background as Background
}
