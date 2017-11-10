import {browser, ExpectedConditions} from "protractor";
import {HomePage, SearchResult} from "./HomePage";

describe('Protractor Demo App', function() {

    it('should have a title', async function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://booking.com');
        HomePage.getBaseUrl();
        HomePage.fillInLocatino();
        HomePage.fillInCalendars();
        HomePage.searchButton.click();
        browser.wait(ExpectedConditions.textToBePresentInElement(SearchResult.resultsHeader, "Recommended"));
        // first check - results should be present
        expect(SearchResult.arrayOfLinks.count()).toBeGreaterThanOrEqual(1);
        const linkTexts = await SearchResult.arrayOfLinks.map(eachLink => eachLink.getText());
        // second check - check each link text
        linkTexts.forEach(eachLinkText => expect(eachLinkText).toContain("New York City"));
    });
});