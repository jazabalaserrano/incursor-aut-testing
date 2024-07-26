import {
  AfterAll,
  AfterStep,
  BeforeAll,
  Status,
} from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "playwright";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let page: Page;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  pageFixture.page = page;
});

AfterStep(async function ({ pickle,result }) {

  const img = await pageFixture.page.screenshot({ path: `./test/screenshots/${pickle.name}.png`, type: "png"});
  await this.attach(img, "image/png");

  if ( result?.status == Status.FAILED ) {
    console.log(result?.status);
  }
});

AfterAll(async function () {
  await pageFixture.page.close();
  await browser.close();
});
