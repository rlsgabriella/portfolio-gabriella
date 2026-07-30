import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 720 });
await page.goto("http://localhost:5174");
await page.waitForTimeout(1500);

await page.evaluate(() => document.getElementById("about").scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: "screenshot-about.png" });

await page.evaluate(() => document.getElementById("projects").scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: "screenshot-projects.png" });

await page.evaluate(() => document.getElementById("contact").scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: "screenshot-contact.png" });

await browser.close();
