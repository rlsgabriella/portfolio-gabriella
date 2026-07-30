import { chromium } from "@playwright/test";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 720 });
await page.goto("http://localhost:5174");
await page.waitForTimeout(1500);

await page.evaluate(() => document.getElementById("about").scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: "C:/Users/ADM/portfolio-gabriella/screenshot-about.png" });

await page.evaluate(() => document.getElementById("projects").scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: "C:/Users/ADM/portfolio-gabriella/screenshot-projects.png" });

await page.evaluate(() => document.getElementById("contact").scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: "C:/Users/ADM/portfolio-gabriella/screenshot-contact.png" });

await browser.close();
console.log("done");
