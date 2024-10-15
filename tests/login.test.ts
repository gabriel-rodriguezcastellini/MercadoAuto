import { test, expect } from "@playwright/test";

test("login test", async ({ page }) => {
  await page.goto("http://the-internet.herokuapp.com/login");

  await page.fill("#username", "tomsmith");
  await page.fill("#password", "SuperSecretPassword!");

  await page.click('button[type="submit"]');

  await expect(page.locator("#flash")).toContainText(
    "You logged into a secure area!"
  );
});
