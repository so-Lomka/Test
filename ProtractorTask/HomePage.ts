import {browser, element, by, ElementFinder, ElementArrayFinder, Key} from "protractor";
import moment = require("moment");

class HomePageClass {
    async getBaseUrl() {
        let config = await browser.getProcessedConfig();
        const baseUrl = config.baseUrl;
        return browser.get(baseUrl);
    }
    cityField: ElementFinder;
    calendars: ElementArrayFinder;
    todayDate: ElementFinder;
    dayIn1Week: string;
    // xpath .//span[@class="c2-day-inner" and text()="16"]
    inOneWeek: ElementArrayFinder;
    searchButton: ElementFinder;

    constructor() {
        this.cityField = element(by.id("ss"));
        this.calendars = element.all(by.css(".sb-date-field__display"));
        this.todayDate = element(by.css(".c2-day.c2-day-s-today"));
        this.dayIn1Week = moment().add(7, "d").date().toString();
        // xpath .//span[@class="c2-day-inner" and text()="16"]
        this.inOneWeek = element.all(by.xpath(`.//span[@class="c2-day-inner" and text()="${this.dayIn1Week}"]/ancestor::td`));
        this.searchButton = element(by.css(".sb-searchbox__button"));
    }



    fillInLocatino() {
        this.cityField.clear();
        this.cityField.sendKeys("New York");
        this.cityField.sendKeys(Key.TAB);
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
    resultsHeader: ElementFinder;
    arrayOfLinks: ElementArrayFinder;

    constructor() {
        this.resultsHeader = element(by.css(".sr_hh_heading"));
        this.arrayOfLinks = element.all(by.className("jq_tooltip district_link visited_link"));
    }
}

export const HomePage = new HomePageClass();
export const SearchResult = new SearchResultClass();

