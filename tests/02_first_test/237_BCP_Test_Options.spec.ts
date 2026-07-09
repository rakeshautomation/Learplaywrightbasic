test('context with HTTP auth', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
            username: 'user',
            password: 'pass',
        }
    });
    
    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    // https://the-internet.herokuapp.com/basic_auth)
    // Will auto-authenticate for HTTP Basic Auth
    
    await context.close();
});