import { Page } from "playwright";
import { expect } from "playwright/test";

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("/");
    expect(this.page.url()).toBe("https://www.mercadolibre.com/");
    await this.page.click("#AR");
  }

  async searchForItem(item: string) {
    await this.page.fill('input[name="as_word"]', item);
    await this.page.press('input[name="as_word"]', "Enter");
  }
}
