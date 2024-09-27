import { test, expect } from "playwright/test";

interface Transaction {
  status: string;
  date: string;
  description: string;
  category: string;
  amount: string;
}

test("Save and filter transactions", async ({ page }) => {
  await page.goto("https://demo.applitools.com/app.html");

  const rows = await page.$$("table tbody tr");

  const transactions: Transaction[] = [];
  for (const row of rows) {
    const cells = await row.$$("td");
    const status = (await cells[0].textContent())?.trim() || "";
    const date = (await cells[1].textContent())?.trim() || "";
    const description = (await cells[2].textContent())?.trim() || "";
    const category = (await cells[3].textContent())?.trim() || "";
    const amount = (await cells[4].textContent())?.trim() || "";

    transactions.push({ status, date, description, category, amount });
  }

  const completedTransactions = transactions.filter(
    (transaction) => transaction.status === "Complete"
  );

  console.log("Completed Transactions:");
  completedTransactions.forEach((transaction) => {
    console.log(
      `Status: ${transaction.status}, Date: ${transaction.date}, Description: ${transaction.description}, Category: ${transaction.category}, Amount: ${transaction.amount}`
    );
  });

  expect(completedTransactions.length).toBeGreaterThan(0);
});
