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
const HomePage_1 = require("./HomePage");
describe('Protractor Demo App', function () {
    it('should have a title', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.waitForAngularEnabled(false);
            protractor_1.browser.get('http://booking.com');
            HomePage_1.HomePage.getBaseUrl();
            HomePage_1.HomePage.fillInLocatino();
            HomePage_1.HomePage.fillInCalendars();
            HomePage_1.HomePage.searchButton.click();
            protractor_1.browser.wait(protractor_1.ExpectedConditions.textToBePresentInElement(HomePage_1.SearchResult.resultsHeader, "Recommended"));
            // first check - results should be present
            expect(HomePage_1.SearchResult.arrayOfLinks.count()).toBeGreaterThanOrEqual(1);
            const linkTexts = yield HomePage_1.SearchResult.arrayOfLinks.map(eachLink => eachLink.getText());
            // second check - check each link text
            linkTexts.forEach(eachLinkText => expect(eachLinkText).toContain("New York City"));
        });
    });
});
//# sourceMappingURL=spec.js.map