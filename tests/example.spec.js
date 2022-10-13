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
  await expect(radio3).toBeVisible({})

  // search
  const text = await page.locator('//input[@id="autocomplete"]');
  await text.type('Aus');
  const suggesttext = await page.locator('//li[@class="ui-menu-item"]');
  await expect(suggesttext).toContainText(['Australia', 'Austria']);

  // dropdownlist
  const dropdown = await page.locator('#dropdown-class-example');
  await dropdown.selectOption({label:'Option2'});
  await expect(await dropdown).toHaveValue('option2');

  // alert
  const alert = await page.locator('#alertbtn');
  page.on('dialog', async dialog => {
    console.log('msg', dialog.message());
    expect(dialog.message()).toContain('Hello , share this practice page and share your knowledge');
    await dialog.accept();
  });
  await alert.click();

  // hideshow
  const displayed = await page.locator('#displayed-text');
  await expect(displayed).toBeVisible({visible: true});

  // table
  const price = await page.locator('//body[1]/div[3]/div[1]/fieldset[1]/table[1]/tbody[1]/tr/td[3]');
  const asc = await price.allTextContents();
  console.log('table: ', await price.allTextContents());
  console.log('table asc:', asc.sort(function(a,b){return a - b}));

  // total amount
  const total = await page.locator('//div[@class="totalAmount"]');
  const amount = await page.locator('//div[@class="tableFixHead"]//table[@id="product"]//tbody[1]//tr//td[4]');
  let num = (await amount.allInnerTexts()).map(i=>Number(i));
  let sum = 0;
  for (let i = 0; i < num.length;i++){
    sum += num[i];
  }
  const getamountv = await total.allInnerTexts();
  await expect(getamountv).toContain('Total Amount Collected: ' +sum);
});
