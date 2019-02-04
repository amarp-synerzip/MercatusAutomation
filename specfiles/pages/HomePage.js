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
var utl = require('util');
var path = require('path');
var PropertiesReader = require('../../node_modules/properties-reader');
var appData = require("../../resources/appConfig.json");
var objProperties = PropertiesReader('././resources/propertiesFiles/HomePage.properties'); //Change file name
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.getMapValue = function (key) {
        return objProperties.get(key);
    };
    HomePage.prototype.navigateToTab = function (tabName) {
        Logger_1.Logger.debug("Inside Method LoginPage.navigateToTab ");
        this.clickElement(this.getMapValue("TABNAME")
            .replace("VALUES", tabName));
    };
    ;
    return HomePage;
}(CommonUtils_1.CommonUtils));
exports.HomePage = HomePage;
