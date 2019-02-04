import { Logger } from '../utilities/Logger';
import { CommonUtils } from '../utilities/CommonUtils';

var utl = require('util');
let path = require('path');
var PropertiesReader = require('../../node_modules/properties-reader');
var appData = require("../../resources/appConfig.json");
var objProperties = PropertiesReader('././resources/propertiesFiles/CreateNote.properties');

export class CreateNote extends CommonUtils {

    private getMapValue(key: string): string {
        return objProperties.get(key);
    }

    public selectAsset(assetName: string): void {
        Logger.debug("Inside Method CreateNote.selectAsset ");

        if (assetName != null) {
            this.clickElement(this.getMapValue("SELECTASSET")
                .replace("VALUES", assetName));
        } else {
            this.clickElement(this.getMapValue("SELECTANYASSET"));
        }
    }
    public selectNotes() {
        Logger.debug("Inside Method selectAsset.selectNotes ");
        this.clickElement(this.getMapValue("Notes"));
    }

    public clickOnCreateNote() {
        Logger.debug("Inside Method selectNotes.clickOnCreateNote ");
        this.clickElement(this.getMapValue("btnAction"))
        this.rightClickElement(this.getMapValue("btnCreateNote"));
     }
    public clickOnDeleteNote() {
        Logger.debug("Inside Method selectNotes.clickOnDeleteNote ");
        this.clickElement(this.getMapValue("btnAction"))
        this.rightClickElement(this.getMapValue("clickOnDeleteNote"));
    }
    public clickOnCopyeNote() {
        Logger.debug("Inside Method selectNotes.clickOnCopyeNote ");
        // this.newMethod();
        this.clickElement(this.getMapValue("btnAction"))
        this.rightClickElement(this.getMapValue("clickOnCopyeNote"));
    }

    // private newMethod() {
    //     this.getNotesTable.get(1).get(2);
    // }

    // public getNotesTable(){
    //     rowSize=this.getElementCount("//div[@class='ht_master handsontable']//table[@class='htCore']//tbody//tr")
    //     var myMap = new Map(String,String);
    //     for(i=1;i<=rowSize,i++){
    //     myMap.set(i, this.getInnerMap(i));
    //     }
    // }
    // getElementCount(arg0: string): any {
    //     throw new Error("Method not implemented.");
    // }

    // public getInnerMap(i){
    //     var myMap = new Map();
    //     myMap.set(1, this.getText("//div[@class='ht_master handsontable']//table[@class='htCore']//tbody//tr[i]//td[1]"));
    //     myMap.set(2, this.getText("//div[@class='ht_master handsontable']//table[@class='htCore']//tbody//tr[i]//td[2]"));
    //     myMap.set(3, this.getText("//div[@class='ht_master handsontable']//table[@class='htCore']//tbody//tr[i]//td[3]"));
    //     myMap.set(4, this.getText("//div[@class='ht_master handsontable']//table[@class='htCore']//tbody//tr[i]//td[4]"));
    //     myMap.set(5, this.getText("//div[@class='ht_master handsontable']//table[@class='htCore']//tbody//tr[i]//td[5]]"));
    // }
    // getText(arg0: string): any {
    //     throw new Error("Method not implemented.");
    // }

        


    
}
