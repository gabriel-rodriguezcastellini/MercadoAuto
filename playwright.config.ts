import { defineConfig, devices } from "playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  retries: 2,
  reporter: [["html", { open: "never" }]],

  use: {
    baseURL: "https://www.mercadolibre.com",
    trace: "on-first-retry",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
