import { test, expect } from '@playwright/test';
test("Student Login URL having Details", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    //email,password,login-btn
    let emailField = page.locator("#email");
    let passwField = page.locator("#password");
    let loginButton = page.getByTestId("login-button");

    let emailValue = "r@testing.com";
    let passwordValue = "123456";

    // fill the email and password fields and click on login button
    await emailField.fill(emailValue);
    await passwField.fill(passwordValue);
    await loginButton.click();


    // fill the email and password fields and click on login button
    await emailField.fill(emailValue);
    await passwField.fill(passwordValue);
    await loginButton.click();

    // to encode the email value and then check the URL
    const encodedEmail = encodeURIComponent(emailValue);
    console.log(encodedEmail);
    // to encode the email value and then check the URL
    const encodepass = encodeURIComponent(passwordValue);
    console.log(encodepass);

    //Exact URL (String)
    await expect(page).toHaveURL(`https://app.thetestingacademy.com/playwright/multiple_element_filter?email=${encodedEmail}&password=${encodepass}#login-success`);

    //Regular Expression
    await expect(page).toHaveURL(new RegExp(`.*email=${encodedEmail}&password=${encodepass}`));

});