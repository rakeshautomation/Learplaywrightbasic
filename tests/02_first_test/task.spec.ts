import { expect, test } from '@playwright/test';
test("Verify two context", async ({ browser }) => {
    // const context1 = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    // const context2 = await browser.newContext({ viewport: { width: 1920, height: 1080 } });

    // const ttaCartContext  = await context1.newPage();
    // const ttaCartBankContect = await context2.newPage();
    // ttaCartContext.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    // ttaCartBankContect.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    // console.log("AdminUrl:"+ttaCartContext.url());
    // console.log("GuestUrl:"+ttaCartBankContect.url());
    // ttaCartContext.close();
    // ttaCartBankContect.close();
    // context1.close();
    // context2.close();
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();

    let guestContext = await browser.newContext();
    let guestPage = await guestContext.newPage();
    await adminPage.goto("https://app.vwo.com/#login");
    await guestPage.goto("https://app.vwo.com/#dashboard/home");
    console.log("Admin URL:", adminPage.url());
    console.log("Guest URL:", guestPage.url());
    await adminContext.close();
    await guestContext.close();


}

);