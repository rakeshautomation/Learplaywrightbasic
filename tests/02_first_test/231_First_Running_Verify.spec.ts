import { test, expect } from "@playwright/test";
test("verify our first Test", async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle("Login - Wingify");
    //ID=vow-login-logo
    const logImage = page.locator("#vow-login-logo");
    await expect(logImage).toBeVisible();
    await page.close();
});

