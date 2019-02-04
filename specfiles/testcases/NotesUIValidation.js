"use strict";
exports.__esModule = true;
require('jasmine-spec-name-patch');
var Logger_1 = require("../utilities/Logger");
var numberOfRetry = 2;
var LoginPage_1 = require("../pages/LoginPage"); //changes needed  class name and file name
var HomePage_1 = require("../pages/HomePage"); //changes needed  class name and file name 
var testData = require("../../resources/testDataFiles/testDataNotes.json"); //changes needed  change file name
describe("NotesUIValidation_", function () {
    var TCID;
    this.retries(numberOfRetry);
    var objLoginPage = new LoginPage_1.LoginPage(); //changes needed  
    var objHomePage = new HomePage_1.HomePage();
    beforeAll(function () {
        Logger_1.Logger.initClass("LoginScenario_");
    });
    afterAll(function () {
        Logger_1.Logger.termClass("LoginScenario_");
    });
    afterEach(function () {
        Logger_1.Logger.termMethod(this.fullName.split("_")[3]);
    });
    beforeEach(function () {
        Logger_1.Logger.initMethod(this.fullName.split("_")[3]); //LoginScenario_TC_T72251636_ Check 'Add note' icon present in Asset"
        TCID = this.fullName.split("_")[2].replace("T", "");
        objLoginPage.isPageAngular(false);
        objLoginPage.navigateToApplication();
        objLoginPage.LoginTransaction(null, null);
    });
    it("TC_T72251636_ Check 'Add note' icon present in Asset", function () {
        objHomePage.navigateToTab(testData[TCID].TabName);
    });
    xit("TC_T72251636_ Check 'Add note' icon present in Projects", function () {
        objHomePage.navigateToTab(testData[TCID].TabName);
    });
});
