import { Logger } from '../utilities/Logger';
import { CommonUtils } from '../utilities/CommonUtils';

let path = require('path');

var utl = require('util');
var PropertiesReader = require('../../node_modules/properties-reader');
var appData = require("../../resources/appConfig.json");
var objProperties = PropertiesReader('././resources/propertiesFiles/LoginPage.properties');  //Change file name

export class LoginPage extends CommonUtils {   //change class name

	private getMapValue(key: string): string {
		return objProperties.get(key);
	}

	public navigateToApplication(): void {
		Logger.debug("Inside Method LoginPage.navigateToApplication ");
		let url = appData.url;
		this.openApplication(url);
	};

	public enterUsername(searchValue: string): void {
		Logger.debug("Inside Method LoginPage.enterUsername ");
		this.setElementText(this.getMapValue("Username_Email_Password")
			.replace("VALUES", "Username"), searchValue);
	};

	public clickNextButton(): any {
		Logger.debug("Inside Method LoginPage.clickNextButton ");
		return this.clickElement(this.getMapValue("Next_Sign_in")
			.replace("VALUES", "Next"));
	};

	public enteEmail(searchValue: string): void {
		Logger.debug("Inside Method LoginPage.enteEmail ");
		this.setElementText(this.getMapValue("Username_Email_Password")
			.replace("VALUES", "Email"), searchValue);
	};

	public enterPassword(searchValue: string): void {
		Logger.debug("Inside Method LoginPage.enterPassword ");
		this.setElementText(this.getMapValue("Username_Email_Password")
			.replace("VALUES", "Password"), searchValue);
	};

	public clickSinginButton(): any {
		Logger.debug("Inside Method LoginPage.clickSinginButton ");
		return this.clickElement(this.getMapValue("Next_Sign_in")
			.replace("VALUES", "Sign in"));
	};

	public LoginTransaction(userName, password) {
		Logger.debug("Inside Method LoginPage.LoginTransaction ");
		if (userName != null) {
			this.enterUsername(userName);
		} else { this.enterUsername(appData.userId); }
		this.clickNextButton();
		if (password != null) {
			this.enterPassword(password);
		}
		else {
			this.enterPassword(appData.password);
		}
		this.clickSinginButton();
	}
}