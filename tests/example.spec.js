// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // create a locator
  const text = await page.locator('//input[@id="autocomplete"]');

  // Click the get started link.
  await text.type('Aus',);
  
  let data = await page.locator('//div[@class="ui-menu-item-wrapper"]').allTextContents()
  console.log(data)
  // Expects the URL to contain intro.
  // await expect(page.locator('div[class="ui-menu-item-wrappe"]')).toHaveValue('Austria');
});
