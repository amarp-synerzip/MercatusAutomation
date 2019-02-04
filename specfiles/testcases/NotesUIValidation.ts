require('jasmine-spec-name-patch');
import { Logger as logger, Logger} from '../utilities/Logger';

var numberOfRetry=2;

import {LoginPage} from '../pages/LoginPage';  //changes needed  class name and file name
import {HomePage }from '../pages/HomePage';  //changes needed  class name and file name 

var testData = require("../../resources/testDataFiles/testDataNotes.json");  //changes needed  change file name



describe("NotesUIValidation_", function(){   //change Module name in describe block
	let TCID: string;
	this.retries(numberOfRetry);

	let objLoginPage= new LoginPage();  //changes needed  
    let objHomePage = new HomePage();
	
	beforeAll(function(){
		logger.initClass("LoginScenario_");		
	}); 
	afterAll(function(){
		logger.termClass("LoginScenario_");		
	}); 

	afterEach(function(){
		logger.termMethod(this.fullName.split("_")[3]);		
	}); 
	
	beforeEach(function(){
		logger.initMethod(this.fullName.split("_")[3]);  //LoginScenario_TC_T72251636_ Check 'Add note' icon present in Asset"
		TCID=this.fullName.split("_")[2].replace("T","");			
		objLoginPage.isPageAngular(false);
		objLoginPage.navigateToApplication();
		objLoginPage.LoginTransaction(null, null);
	}); 
		
	it("TC_T72251636_ Check 'Add note' icon present in Asset", function(){		
		objHomePage.navigateToTab(testData[TCID].TabName);
		
		
	}); 


			
	xit("TC_T72251636_ Check 'Add note' icon present in Projects", function(){		
		objHomePage.navigateToTab(testData[TCID].TabName);
		
		
	}); 

	
	
}); 