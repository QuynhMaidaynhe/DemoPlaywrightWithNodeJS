// @ts-check
const { test, expect } = require('@playwright/test');

test('demo playwright', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // radiobutton
  const radio1 = await page.locator('input[value="radio1"]'); 
  const radio2 = await page.locator('input[value="radio2"]'); 
  const radio3 = await page.locator('input[value="radio3"]'); 
  expect(await radio1.isChecked()).toBeFalsy();
  expect(await radio2.isChecked()).toBeFalsy();
  expect(await radio3.isChecked()).toBeFalsy();
  await radio2.click();
  expect(await radio2.isChecked()).toBeTruthy();

  // search
  const text = await page.locator('//input[@id="autocomplete"]');
  await text.type('Aus');
  const suggesttext = await page.locator('//li[@class="ui-menu-item"]');
  await expect(suggesttext).toContainText(['Australia', 'Austria']);
  // await expect(page.locator('div[class="ui-menu-item-wrappe"]')).toHaveValue('Austria');

  // dropdownlist
  const dropdown = await page.locator('#dropdown-class-example');
  await dropdown.selectOption({label:'Option2'});
  await expect(await dropdown).toHaveValue('option2');
});
