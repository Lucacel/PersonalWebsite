import test, { expect } from "@playwright/test";

// test("Switching themes", async ({ page }) => {
//     await page.goto("https://lucacel-dev.vercel.app/");
//     await page.waitForSelector("#theme-switch");
//     await page.click("#theme-switch");
//     await page.waitForTimeout(500);
//     let theme = await page.evaluate(() => localStorage.getItem("theme"));
//     expect(theme).toBe("dark");
//     await page.click("#theme-switch");
//     await page.waitForTimeout(500);
//     theme = await page.evaluate(() => localStorage.getItem("theme"));
//     expect(theme).toBe("light");
// });