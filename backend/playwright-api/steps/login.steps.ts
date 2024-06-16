const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { chromium } = require("playwright");

let browser;
let page;

Given("the user is on the login page", async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto("http://localhost:3000/login");
});

When("the user enters an invalid username and password", async function () {
  await page.fill('input[name="username"]', "user3");
  await page.fill('input[name="password"]', "password3");
});

When('the user clicks on the "Login" button', async function () {
  await page.click('button[type="submit"]');
});

Then(
  "an error message {string} should be displayed",
  async function (errorMessage) {
    await expect(page.locator(".error")).toHaveText(errorMessage);
  }
);

Then("the user should remain on the login page", async function () {
  await expect(page).toHaveURL("http://localhost:3000/login");
});

// Optionally, check if the login fields are cleared or retain the entered data
// Uncomment the following lines based on your application's design

// Then('the login fields should be cleared', async function () {
//   await expect(page.locator('input[name="username"]')).toBeEmpty();
//   await expect(page.locator('input[name="password"]')).toBeEmpty();
// });

Then("the login fields should retain the entered data", async function () {
  await expect(page.locator('input[name="username"]')).toHaveValue(
    "invalidUser"
  );
  await expect(page.locator('input[name="password"]')).toHaveValue(
    "invalidPass"
  );
});

// more here
