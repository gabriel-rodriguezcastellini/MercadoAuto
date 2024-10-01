import { test, expect } from "@playwright/test";

test.describe("Ultimate QA Automation Practice", () => {
  test("Navigate to Automation Practice page", async ({ page }) => {
    await page.goto("https://ultimateqa.com/automation");

    await expect(page).toHaveTitle(/Automation Practice/);

    const link = page.locator("text=Fill out forms");
    await link.click();

    await expect(page).toHaveURL(/filling-out-forms/);

    await page.fill('input[name="et_pb_contact_name_0"]', "John Doe");
    await page.fill(
      'textarea[name="et_pb_contact_message_0"]',
      "This is a test message."
    );

    await page.click('button[name="et_builder_submit_button"]');

    const successMessage = page.locator(
      "#et_pb_contact_form_0 .et-pb-contact-message"
    );
    await successMessage.waitFor({ state: "visible" });

    await expect(successMessage).toHaveText(/Thanks for contacting us/);
  });
});
