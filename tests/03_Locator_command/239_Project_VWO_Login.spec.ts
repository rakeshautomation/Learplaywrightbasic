// https://app.vwo.com/#/login

import { test, expect } from '@playwright/test';
test("verify Login error message", async ({ page }) => {
    await page.goto("https://app.vwo.com/#/login");
    //login-username,login-password,js-login-btn,js-notification-box-msg
    await page.locator('#login-username').fill("abcd");
    await page.locator('#login-password').fill("password");
    await page.locator('#js-login-btn').click();
    await page.locator('#js-notification-box-msg').waitFor({ state: "visible" });
    let errormessage = page.locator('#js-notification-box-msg');
    await expect(errormessage).toContainText("Your email, password, IP address or location did not match");

});