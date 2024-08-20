import { test, expect } from "playwright/test";
import { HomePage } from "../pages/HomePage";

test("Search for an item", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();
  await homePage.searchForItem("laptop");

  expect(page.url()).toContain("laptop");
});
