import { test, expect } from '@playwright/test';
test("verify filter page", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.locator("a.list-group-item").filter({ hasText: "Forgotten Password" }).click();
    // await page.pause();
    // if we want to filter by text starting with "Order" we can use regex
    // Order" vs "Order History
    //  /^Order/
    const accountLinks = page.locator("a.list-group-item");
    const count = await accountLinks.count();
    console.log(`total links: ${count}`);
    await expect(accountLinks).toHaveCount(13);
    const privacylinks = page.locator("footer a").filter({ hasText: "Terms & Conditions" })
    await expect(privacylinks).toHaveAttribute("href", "#terms-conditions");

});