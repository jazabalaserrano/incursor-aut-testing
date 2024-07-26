import { Page } from "@playwright/test";

var url: string;
const BUTTON_NEXT_INITIAL_PAGE = "//button[text()='Siguiente']";
const BUTTON_I_WANT_MY_CREDIT = "//button[text()='Quiero mi crédito']";
const BUTTON_ACCEPT_PAGE = "(//button[text()='Acepto'])[2]";

export class InitialPage {
  static getDinamicUrl(environment: String, allienceCode: String) {
    url =
      "https://frontend." +
      environment +
      ".entreamigos.co/solicita-tu-credito?promoterCode=" +
      allienceCode;
    return url;
  }

  static async clickButtonNextInitialPage(page: Page) {
    await page.locator(BUTTON_NEXT_INITIAL_PAGE).click();
    await page.locator(BUTTON_NEXT_INITIAL_PAGE).click();
    await page.locator(BUTTON_NEXT_INITIAL_PAGE).click();
    await page.locator(BUTTON_NEXT_INITIAL_PAGE).click();
    await page.locator(BUTTON_NEXT_INITIAL_PAGE).click();
    await page.locator(BUTTON_NEXT_INITIAL_PAGE).click();
  }

  static async clickButtonIWantMyCredit(page: Page) {
    await page.locator(BUTTON_I_WANT_MY_CREDIT).click();
    await page.locator(BUTTON_ACCEPT_PAGE).click();
  }
}
