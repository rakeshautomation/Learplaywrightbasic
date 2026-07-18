import { test, expect } from '@playwright/test';

test("Basic verify how to handle multiple elements ", async ({ page }) => {
    // Navigate to the page.
    // Find the locator which gives all the elements and text
    // loop through it and find the one which we want to click
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    //allInnerTexts - used for getting all the inner texts of the elements in an array
    //element can be div, span, a, p, etc. - any element which has inner text
    //element cant be input, button, img, etc. - any element which does not have inner text
    //for input we can use getAttribute("value") to get the value of the input field
    /*
    /**
 * ───────────────────────────────────────────────────────────────────────────────────────────────────
 *                                  PLAYWRIGHT TEXT EXTRACTION MATRIX
 * ───────────────────────────────────────────────────────────────────────────────────────────────────
 * 
 * | Method           | Targets What?              | Return Data Type | Auto-Waits? | Layout Aware? | Common Senior Use Case                                      |
 * |------------------|----------------------------|------------------|-------------|---------------|-------------------------------------------------------------|
 * | innerText()      | Single element text        | string           | Yes         | Yes           | Validating header titles, success banner text, or labels.   |
 * | allInnerTexts()  | Multiple elements text     | string[]         | ❌ No       | Yes           | Scraping column values from a table grid for assertions.    |
 * | inputValue()     | Interactive form elements  | string           | Yes         | N/A           | Verifying text dynamically typed into registration forms.   |
 * | getAttribute()   | HTML structural properties | string | null    | Yes         | N/A           | Checking redirect links (href) or verifying image assets.   |
 * 
 * ───────────────────────────────────────────────────────────────────────────────────────────────────
 */


    const rightPanelLinkTexts: string[] = await page.locator("a.list-group-item").allInnerTexts();
    console.log("Total Links" + rightPanelLinkTexts.length);
    for (const link of rightPanelLinkTexts) {
        console.log("link with for each Loop" + link);

    }
    for (let i = 0; i < rightPanelLinkTexts.length; i++) {
        console.log("link with for  Loop" + rightPanelLinkTexts[i]);

    }
    const rightPanelLinks = await page.locator("a.list-group-item").all();
    for (const links of rightPanelLinks) {
        console.log("Href of the Link " + await links.getAttribute('href'));
    }

    for (const linkText of rightPanelLinkTexts) {
        console.log(`link with for each Loop: '${linkText}'`);
        if (linkText.trim() === "Downloads") {
            console.log("Found 'Downloads' link. Clicking it...");
            await page.locator("a.list-group-item", { hasText: "Downloads" }).click();
            break;
        }

    }
    // Verify that the hash in the URL has updated to #downloads
    await expect(page).toHaveURL(/.*#downloads$/);
    console.log("Assertion passed: URL successfully updated to include #downloads!");



});