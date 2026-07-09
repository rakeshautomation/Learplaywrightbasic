
import { test, expect } from "@playwright/test";
test("Login test", async ({ page }) => {
    //Page is automatically created by PW
    //Pw is already launched a browser ,created context and open the page

    await page.goto("https://app.vwo.com/#/login");

    // Verify login page loaded
    await expect(page).toHaveTitle("Login - Wingify");

    // Verify form fields are interactable
    await page.fill("#login-username", "admin");
    await page.fill("#login-password", "pass123");

    // Verify login button is visible
    const loginBtn = page.locator("#js-login-btn");
    await expect(loginBtn).toBeVisible();
    await loginBtn.click();

});

test("Login another Test", async ({ page }) => {
    await page.goto("https://app.vwo.com/#/signup");
    await expect(page).toHaveTitle("Login - Wingify");
});