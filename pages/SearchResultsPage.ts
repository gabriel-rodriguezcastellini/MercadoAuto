import { Page } from "playwright";

export class SearchResultsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnFirstResult() {
    await this.page.locator(".poly-card.poly-card--list").first().click();
  }

  async addItemToCart() {
    await this.page.click("button.andes-button--loud");
  }
}
