let waitTime =60000;

exports.config = {
    sync: true,
    
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        maxInstances: 1,        
        shardTestFiles: true,
    },
    
    
    chromeDriver: ".//..//resources//driverfiles//chromedriver.exe",

    //directConnect: true,
    seleniumServerJar:".//..//resources//seleniumServerJarFiles//selenium-server-standalone-3.141.59.jar", 

    jasmineTimeout: waitTime,
    jasminNodeOpts: {
        defaultTimeoutInterval: waitTime 
    },

    specs: [
 
        '../specfiles/testcases/NotesUIValidation.js'
    ],

    // suites: {
    //     full: '../specfiles/testcases/WeatherMap_*.js'
    // },


    onPrepare: (function () {
        // let globals = require('protractor');
        // let browser = globals.browser;
        // browser.manage().window().maximize();
        
        // browser.manage().timeouts().pageLoadTimeout(waitTime);
        // browser.manage().timeouts().implicitlyWait(waitTime) ;
        
      
        // var AllureReporter = require('jasmine-allure-reporter');
        // jasmine.getEnv().addReporter(new AllureReporter({
        //     allureReport: {
        //         resultDir: 'allure-results'
        //     }
        // })); /* AllureReporter */

        // jasmine.getEnv().afterEach(function (done) {
        //     browser.takeScreenshot().then(function (png) {
        //         allure.createAttachment('Screenshot', function () {
        //             return new Buffer(png, 'base64');
        //         }, 'image/png')();
        //         done();
        //     });
        // });/*jasmine.getEnv().afterEach*/

        // jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        //     savepath: '/jasmineReport/',
        //     fileNamePrefix: "Regression",
        //     fileName: "TestAutomation",
        //     fileNameDateSuffix: true,
        //     fileNameSeparator: '_',
        //     cleanDestination: true,
        //     takeScreenshots: true,
        //     takeScreenshotsOnlyOnFailures: true,
        //     fixedScreenShotName: true,
        //     screenShotFolder: '/jasmineReport/ScreenShot'
        // }));/*Jasmine2HtmlReporter*/
    }),

};
