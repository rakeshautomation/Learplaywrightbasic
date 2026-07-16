import { test, expect } from "@playwright/test";
test("TC#1 - Login using Xpath functionality", async ({ page }) => {
    ////a[id='btn-make-appointment']},facility-combo_facility,checkbox -chk_hospotal_readmission,Radio
    // button,txt_visit_date,txt_comment,btn-book-appointment,txt-password,btn-login,demo_username_label,demo_password_label
    // Navigate to the Katalon demo site
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    // Click on the "Make Appointment" button
    await page.locator("//a[@id='btn-make-appointment']").click();
    // Locators for the login form using Xpath,    // Fill in the login form and submit
    await page.locator("//input[@id='txt-username']").fill("John Doe");
    await page.locator('//input[@id="txt-password"]').fill("ThisIsNotAPassword");
    await page.locator('//button[@id="btn-login"]').click();
    // Verify that the user is redirected to the appointment page after successful login


    // Verify that the user is redirected to the appointment page after successful login
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    let appointmentHeader = page.locator('xpath=//h2[contains(text(),"Make Appointment")]');
    await expect(appointmentHeader).toBeVisible();
    let dropDownElement = page.locator("//select[@id='combo_facility']");
    await dropDownElement.click();

    let commentBox = page.locator("//textarea[@id='txt_comment']");
    await commentBox.fill("DemoWEbSite");

    let checkBox = page.locator("//input[@id='chk_hospotal_readmission']");
    await checkBox.click();

    let radioBtn = page.locator("//input[@id='radio_program_medicaid']");
    await radioBtn.click();


})