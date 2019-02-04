///npm cache clean --force
//declare var require: any;
import { protractor, by, By, $, $$, browser, element } from 'protractor';
import { Logger } from './Logger';
//var Q= require('q');


export class CommonUtils {

	public isPageAngular(flag: boolean): void {
		Logger.debug("Inside Method CommonUtils.isPageAngular");
		try {
			browser.ignoreSynchronisation = !flag;
			browser.waitForAngularEnabled(flag);
		} catch (Exception) {
			Logger.error("Exception Inside Method CommonUtils.isPageAngular \n " + Exception.getMessage);
		}
	};

	protected openApplication(url: string): void {
		Logger.debug("Inside Method CommonUtils.openApplication, with url '" + url + "'");
		browser.driver.get(url);
		browser.driver.manage().window().maximize();
	};

	protected closeApplication(): void {
		Logger.debug("Inside Method CommonUtils.closeApplication ");
		if (browser.driver != null) {
			browser.driver.close();
		} else {
			Logger.error("Exception Inside Method CommonUtils.closeApplication \n ");
		}
	};


	protected browserWaitAngular() {
		browser.wait(function () {
			return browser.executeScript(' return || window.angular');
		}, 3000000);
	};

	///ak  

	private getLocatorString(locator: string): any {
		Logger.debug("Inside Method CommonUtils.getLocatorString");
		let by: any;
		let arrString = locator.split("~");
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

	protected clickElement(locator: string): any {
		Logger.debug("Inside Method CommonUtils.clickElement");
		let by = this.getLocatorString(locator);
		browser.driver.findElement(by).click();
	};


	protected doubleClickElement(locator: string): any {
		Logger.debug("Inside Method CommonUtils.doubleClickElement");
		let by = this.getLocatorString(locator);
		browser.driver.findElement(by).doubleClick()
	};

	protected getElementAttributeValue(locator: string, attributeValue): any {
		Logger.debug("Inside Method WebElementOperation.getElementAttributeValue");
		let by = this.getLocatorString(locator);
		browser.driver.findElement(by).getAttribute(attributeValue);
	};

	protected getCSSAttributeValue(locator: string, cssAttributeValue): any {
		Logger.debug("Inside Method WebElementOperation.getCSSAttributeValue");
		let by = this.getLocatorString(locator);
		browser.driver.findElement(by).getCSSProperty(cssAttributeValue);
	};


	protected setElementText(locator: string, textValue: string): any {
		Logger.debug("Inside Method CommonUtils.setElementText");
		let by = this.getLocatorString(locator);
		browser.driver.findElement(by).setValue(textValue);
	};

	protected getElementText(locator: string): any {
		Logger.debug("Inside Method CommonUtils.getElementText");
		let by = this.getLocatorString(locator);
		return browser.driver.findElement(by).getValue();
	};

	////av

	protected rightClickElement(locator: string): any {
		Logger.debug("Inside Method CommonUtils.rightClickElement");
		let by = this.getLocatorString(locator);
		let ele = element(by);
		let loc = ele.getLocation().then(function (location) {
			browser.actions().mouseMove(location).perform();
			browser.actions().click(protractor.Button.RIGHT).perform();
		});
	};



	protected getAllOptions(locator: string): any {
		Logger.debug("Inside Method WebElementOperation.getAllOptions");
		let by = this.getLocatorString(locator);

		//browser.driver.findElements(by).
		return element.all(by).map(function (elem) {
			//return browser.driver.findElements(by).map(function(elem){
			return elem.getText();
		});
	};
	protected selectByAttribute(locator: string): any {
		Logger.debug("Inside Method WebElementOperation.selectByAttribute")
		let by = this.getLocatorString(locator);
		browser.driver.findElement(by).getValue();

	};
	protected selectByIndex(locator: string): any {
		Logger.debug("Inside Method WebElementOperation.selectByIndex")
		let by = this.getLocatorString(locator);
		browser.driver.findElement(by).getValue();

	};

}
