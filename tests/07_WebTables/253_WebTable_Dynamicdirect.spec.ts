import { test, expect } from '@playwright/test';
test("test_web_table_login - structured extraction", async ({ page }) => {
    test('test_web_table_login - structured extraction', async ({ page }) => {
        await page.goto('https://awesomeqa.com/webtable1.html');

        const rows = page.locator('table[summary="Sample Table"] tbody tr');
        const rowCount = await rows.count();
        console.log(rowCount);

        // playwith nth index starting from 0 to rowCount - 1
        for (let i = 0; i < rowCount; i++) {
            const rowData = await rows.nth(i).locator('td').allInnerTexts();
            console.log(`Row ${i + 1}:`, rowData);
        }

    })
});

/*
4
Row 1: [ 'UAE', 'Dubai', '829m', '2010', '1', '\n' ]
Row 2: [ 'Saudi Arabia', 'Mecca', '601m', '2012', '2', '\n' ]
Row 3: [ 'Taiwan', 'Taipei', '509m', '2004', '3', '\n' ]
Row 4: [ 'China', 'Shanghai', '492m', '2008', '4', '\n' ]
*/