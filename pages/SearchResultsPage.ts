import { Page } from "playwright";

export class SearchResultsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnFirstResult() {
    await this.page
      .locator(
        "#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords > section > ol > li:nth-child(1)"
      )
      .locator("> div > div")
      .click();
  }

  async addItemToCart() {
    await this.page.click("button.andes-button--loud");
  }
}
