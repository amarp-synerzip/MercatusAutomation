import { Logger } from '../utilities/Logger';
import { CommonUtils } from '../utilities/CommonUtils';

var utl = require('util');
let path = require('path');
var PropertiesReader = require('../../node_modules/properties-reader');
var appData = require("../../resources/appConfig.json");
var objProperties = PropertiesReader('././resources/propertiesFiles/HomePage.properties');  //Change file name

export class HomePage extends CommonUtils {  //change class name

private getMapValue(key: string): string {
		return objProperties.get(key);
	}

	public navigateToTab(tabName: string): void {
		Logger.debug("Inside Method LoginPage.navigateToTab ");
		this.clickElement(this.getMapValue("TABNAME")
			.replace("VALUES", tabName));
	};
}