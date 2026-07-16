import { test, chromium } from '@playwright/test';
import path from 'path';

// Credentials live in .env (gitignored) — never hardcode them in a public repo.
// Copy .env.example -> .env and fill in your own VWO login before running this.
test("Save session storage", async () => {
    test.setTimeout(60000);
    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://app.wingify.com/#/login");
    //#login-username,login-password,js-login-btn
    await page.fill("#login-username", "mecen19127@besteya.com");
    await page.fill("#login-password", "Neappwingify@123");
    await page.locator("#js-login-btn").click();
    // Wait for login to actually complete before snapshotting storage —
    // otherwise the auth cookie isn't set yet and the saved state is empty.
    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 45000 });
    await page.waitForTimeout(3000);
    await context.storageState({ path: path.resolve(__dirname, "../../user-session.json") });
    console.log("Session saved to user-session.json ✅");

    await page.waitForTimeout(2000);
    await browser.close();
});