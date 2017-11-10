"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const moment = require("moment");
class HomePageClass {
    getBaseUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            let config = yield protractor_1.browser.getProcessedConfig();
            const baseUrl = config.baseUrl;
            return protractor_1.browser.get(baseUrl);
        });
    }
    constructor() {
        this.cityField = protractor_1.element(protractor_1.by.id("ss"));
        this.calendars = protractor_1.element.all(protractor_1.by.css(".sb-date-field__display"));
        this.todayDate = protractor_1.element(protractor_1.by.css(".c2-day.c2-day-s-today"));
        this.dayIn1Week = moment().add(7, "d").date().toString();
        // xpath .//span[@class="c2-day-inner" and text()="16"]
        this.inOneWeek = protractor_1.element.all(protractor_1.by.xpath(`.//span[@class="c2-day-inner" and text()="${this.dayIn1Week}"]/ancestor::td`));
        this.searchButton = protractor_1.element(protractor_1.by.css(".sb-searchbox__button"));
    }
    fillInLocatino() {
        this.cityField.clear();
        this.cityField.sendKeys("New York");
        this.cityField.sendKeys(protractor_1.Key.TAB);
    }
    fillInCalendars() {
        this.calendars.first().click();
        this.todayDate.click();
        this.calendars.get(0).click();
        const visibleDate = this.inOneWeek.filter(element => element.isDisplayed());
        visibleDate.first().click();
    }
}
class SearchResultClass {
    constructor() {
        this.resultsHeader = protractor_1.element(protractor_1.by.css(".sr_hh_heading"));
        this.arrayOfLinks = protractor_1.element.all(protractor_1.by.className("jq_tooltip district_link visited_link"));
    }
}
exports.HomePage = new HomePageClass();
exports.SearchResult = new SearchResultClass();
//# sourceMappingURL=HomePage.js.map