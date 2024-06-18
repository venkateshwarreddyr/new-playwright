import { test } from "@playwright/test";
import { ai } from "@zerostep/playwright";

test.describe("Login test", () => {
  test("the user is on the login page", async ({ page }) => {
    await page.goto("http://localhost:3000/login");
  });

  test("the user enters an invalid username and password", async ({ page }) => {
    // An object with page and test must be passed into every call
    const aiArgs = { page, test };
    const headerText = await ai("Get the header text", aiArgs);
    await page.goto("https://google.com/");
    await ai(`Type "${"user3"}" in the username box`, aiArgs);
    await ai(`Type "${"password3"}" in the password3 box`, aiArgs);
  });

  test("the user clicks on the 'Login' button", async ({ page }) => {
    const aiArgs = { page, test };

    await ai("Press enter", aiArgs);
  });

  // test("an error message {string} should be displayed", async function (errorMessage) {
  //   await expect(page.locator(".error")).toHaveText(errorMessage);
  //   const aiArgs = { page, test };

  //   ai(`expect an error message "${errorMessage}" at locator .error`, aiArgs);
  // });
});
