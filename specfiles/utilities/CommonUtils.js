"use strict";
exports.__esModule = true;
///npm cache clean --force
//declare var require: any;
var Logger_1 = require("./Logger");
//var Q= require('q');
var CommonUtils = /** @class */ (function () {
    function CommonUtils() {
    }
    CommonUtils.prototype.isPageAngular = function (flag) {
        Logger_1.Logger.debug("Inside Method CommonUtils.isPageAngular");
        try {
            browser.ignoreSynchronisation = !flag;
            browser.waitForAngularEnabled(flag);
        }
        catch (Exception) {
            Logger_1.Logger.error("Exception Inside Method CommonUtils.isPageAngular \n " + Exception.getMessage);
        }
    };
    ;
    CommonUtils.prototype.openApplication = function (url) {
        Logger_1.Logger.debug("Inside Method CommonUtils.openApplication, with url '" + url + "'");
        browser.driver.get(url);
        browser.driver.manage().window().maximize();
    };
    ;
    CommonUtils.prototype.closeApplication = function () {
        Logger_1.Logger.debug("Inside Method CommonUtils.closeApplication ");
        if (browser.driver != null) {
            browser.driver.close();
        }
        else {
            Logger_1.Logger.error("Exception Inside Method CommonUtils.closeApplication \n ");
        }
    };
    ;
    CommonUtils.prototype.browserWaitAngular = function () {
        browser.wait(function () {
            return browser.executeScript(' return || window.angular');
        }, 3000000);
    };
    ;
    ///ak  
    CommonUtils.prototype.getLocatorString = function (locator) {
        Logger_1.Logger.debug("Inside Method CommonUtils.getLocatorString");
        var by;
        var arrString = locator.split("~");
        switch (arrString[0]) {
            case "xpath":
                by = By.xpath(arrString[1]);
                break;
            case "css":
                by = By.css(arrString[1]);
                break;
            case "default":
                break;
        }
        return by;
    };
    ;
    CommonUtils.prototype.clickElement = function (locator) {
        Logger_1.Logger.debug("Inside Method CommonUtils.clickElement");
        var by = this.getLocatorString(locator);
        browser.driver.findElement(by).click();
    };
    ;
    CommonUtils.prototype.doubleClickElement = function (locator) {
        Logger_1.Logger.debug("Inside Method CommonUtils.doubleClickElement");
        var by = this.getLocatorString(locator);
        browser.driver.findElement(by).doubleClick();
    };
    ;
    CommonUtils.prototype.getElementAttributeValue = function (locator, attributeValue) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.getElementAttributeValue");
        var by = this.getLocatorString(locator);
        browser.driver.findElement(by).getAttribute(attributeValue);
    };
    ;
    CommonUtils.prototype.getCSSAttributeValue = function (locator, cssAttributeValue) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.getCSSAttributeValue");
        var by = this.getLocatorString(locator);
        browser.driver.findElement(by).getCSSProperty(cssAttributeValue);
    };
    ;
    CommonUtils.prototype.setElementText = function (locator, textValue) {
        Logger_1.Logger.debug("Inside Method CommonUtils.setElementText");
        var by = this.getLocatorString(locator);
        browser.driver.findElement(by).setValue(textValue);
    };
    ;
    CommonUtils.prototype.getElementText = function (locator) {
        Logger_1.Logger.debug("Inside Method CommonUtils.getElementText");
        var by = this.getLocatorString(locator);
        return browser.driver.findElement(by).getValue();
    };
    ;
    ////av
    CommonUtils.prototype.rightClickElement = function (locator) {
        Logger_1.Logger.debug("Inside Method CommonUtils.rightClickElement");
        var by = this.getLocatorString(locator);
        var ele = element(by);
        var loc = ele.getLocation().then(function (location) {
            browser.actions().mouseMove(location).perform();
            browser.actions().click(protractor.Button.RIGHT).perform();
        });
    };
    ;
    CommonUtils.prototype.getAllOptions = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.getAllOptions");
        var by = this.getLocatorString(locator);
        //browser.driver.findElements(by).
        return element.all(by).map(function (elem) {
            //return browser.driver.findElements(by).map(function(elem){
            return elem.getText();
        });
    };
    ;
    CommonUtils.prototype.selectByAttribute = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.selectByAttribute");
        var by = this.getLocatorString(locator);
        browser.driver.findElement(by).getValue();
    };
    ;
    CommonUtils.prototype.selectByIndex = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.selectByIndex");
        var by = this.getLocatorString(locator);
        browser.driver.findElement(by).getValue();
    };
    ;
    return CommonUtils;
}());
exports.CommonUtils = CommonUtils;
