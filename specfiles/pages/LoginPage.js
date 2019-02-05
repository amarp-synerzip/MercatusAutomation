"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Logger_1 = require("../utilities/Logger");
var CommonUtils_1 = require("../utilities/CommonUtils");
var path = require('path');
var utl = require('util');
var PropertiesReader = require('../../node_modules/properties-reader');
var appData = require("../../resources/appConfig.json");
var objProperties = PropertiesReader('././resources/propertiesFiles/LoginPage.properties'); //Change file name
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginPage.prototype.getMapValue = function (key) {
        return objProperties.get(key);
    };
    LoginPage.prototype.navigateToApplication = function () {
        Logger_1.Logger.debug("Inside Method LoginPage.navigateToApplication ");
        var url = appData.url;
        this.openApplication(url);
    };
    ;
    LoginPage.prototype.enterUsername = function (searchValue) {
        Logger_1.Logger.debug("Inside Method LoginPage.enterUsername ");
        this.setElementText(this.getMapValue("Username_Email_Password")
            .replace("VALUES", "Username"), searchValue);
    };
    ;
    LoginPage.prototype.clickNextButton = function () {
        Logger_1.Logger.debug("Inside Method LoginPage.clickNextButton ");
        return this.clickElement(this.getMapValue("Next_Sign_in")
            .replace("VALUES", "Next"));
    };
    ;
    LoginPage.prototype.enteEmail = function (searchValue) {
        Logger_1.Logger.debug("Inside Method LoginPage.enteEmail ");
        this.setElementText(this.getMapValue("Username_Email_Password")
            .replace("VALUES", "Email"), searchValue);
    };
    ;
    LoginPage.prototype.enterPassword = function (searchValue) {
        Logger_1.Logger.debug("Inside Method LoginPage.enterPassword ");
        this.setElementText(this.getMapValue("Username_Email_Password")
            .replace("VALUES", "Password"), searchValue);
    };
    ;
    LoginPage.prototype.clickSinginButton = function () {
        Logger_1.Logger.debug("Inside Method LoginPage.clickSinginButton ");
        return this.clickElement(this.getMapValue("Next_Sign_in")
            .replace("VALUES", "Sign in"));
    };
    ;
    LoginPage.prototype.LoginTransaction = function (userName, password) {
        Logger_1.Logger.debug("Inside Method LoginPage.LoginTransaction ");
        if (userName != null) {
            this.enterUsername(userName);
        }
        else {
            this.enterUsername(appData.userId);
        }
        this.clickNextButton();
        if (password != null) {
            this.enterPassword(password);
        }
        else {
            this.enterPassword(appData.password);
        }
        this.clickSinginButton();
    };
    return LoginPage;
}(CommonUtils_1.CommonUtils));
exports.LoginPage = LoginPage;
