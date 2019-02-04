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
var objProperties = PropertiesReader('././resources/propertiesFiles/CreateNote.properties');
var CreateNote = /** @class */ (function (_super) {
    __extends(CreateNote, _super);
    function CreateNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateNote.prototype.getMapValue = function (key) {
        return objProperties.get(key);
    };
    CreateNote.prototype.selectAsset = function (assetName) {
        Logger_1.Logger.debug("Inside Method CreateNote.selectAsset ");
        if (assetName != null) {
            this.clickElement(this.getMapValue("SELECTASSET")
                .replace("VALUES", assetName));
        }
        else {
            this.clickElement(this.getMapValue("SELECTANYASSET"));
        }
    };
    CreateNote.prototype.selectNotes = function () {
        Logger_1.Logger.debug("Inside Method selectAsset.selectNotes ");
        this.clickElement(this.getMapValue("Notes"));
    };
    CreateNote.prototype.clickOnCreateNote = function () {
        Logger_1.Logger.debug("Inside Method selectNotes.clickOnCreateNote ");
        this.clickElement(this.getMapValue("btnAction"));
        this.rightClickElement(this.getMapValue("btnCreateNote"));
    };
    CreateNote.prototype.clickOnDeleteNote = function () {
        Logger_1.Logger.debug("Inside Method selectNotes.clickOnDeleteNote ");
        this.clickElement(this.getMapValue("btnAction"));
        this.rightClickElement(this.getMapValue("clickOnDeleteNote"));
    };
    CreateNote.prototype.clickOnCopyeNote = function () {
        Logger_1.Logger.debug("Inside Method selectNotes.clickOnCopyeNote ");
        // this.newMethod();
        this.clickElement(this.getMapValue("btnAction"));
        this.rightClickElement(this.getMapValue("clickOnCopyeNote"));
    };
    return CreateNote;
}(CommonUtils_1.CommonUtils));
exports.CreateNote = CreateNote;
