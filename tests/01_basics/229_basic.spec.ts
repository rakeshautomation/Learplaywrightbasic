import {test,expect} from '@playwright/test';
test("Verify two context",async({page})=>{
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");
})
