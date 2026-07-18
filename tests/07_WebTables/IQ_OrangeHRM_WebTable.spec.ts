//table=.oxd-table-body

import { test, expect } from '@playwright/test'


test("OrangeHRM WebTable - Find the First Terminated Employee", async ({ page }) => {


    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    //Username,Password,text= Login 
    let userNameValue = "admin";
    let passwordValue = "Awesomeqa@4321";

    let userName = page.getByPlaceholder("Username");
    let passWord = page.getByPlaceholder("Password");
    let loginButton = page.getByRole("button", { name: "Login" });
    await userName.fill(userNameValue);
    await passWord.fill(passwordValue);
    await loginButton.click();
    //https://awesomeqa.com/hr/web/index.php/pim/viewEmployeeList
    await expect(page).toHaveURL(/.*viewEmployeeList$/);
    const hrmTable = page.locator('.oxd-table-body')
    const rows = page.locator('.oxd-table-body .oxd-table-row')
    //wait for the table to be visible
    await expect(hrmTable).toBeVisible();
    const rowCount = await rows.count();
    console.log("Row Count:", rowCount);
    // playwith nth index starting from 0 to rowCount - 1
    for (let i = 0; i < rowCount; i++) {
        const cellValues = await rows.nth(i).locator('.oxd-table-cell').allInnerTexts();
        if (cellValues.includes('Terminated')) {
            console.log(`First Terminated Employee Found in Row ${i + 1}:
`, cellValues);
            await page.locator('i[class="oxd-icon bi-trash"]').nth(i).hover();
            await page.locator('i[class="oxd-icon bi-trash"]').nth(i).click();
            await page.waitForTimeout(5000);
            break; // Exit the loop after finding the first terminated employee
        }
    }
});
