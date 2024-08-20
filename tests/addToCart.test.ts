import { test, expect } from "playwright/test";
import { HomePage } from "../pages/HomePage";
import { SearchResultsPage } from "../pages/SearchResultsPage";

test("Add an item to cart", async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResultsPage = new SearchResultsPage(page);

  await homePage.navigate();
  await homePage.searchForItem("laptop");

  await searchResultsPage.clickOnFirstResult();
  await searchResultsPage.addItemToCart();

  expect(page.url()).toContain("checkout");
});
