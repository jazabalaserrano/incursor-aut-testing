import { Page } from "@playwright/test";

const BUTTON_I_WANT_MY_CREDIT = "//button[text()='Quiero mi crédito']";
const ASSETS_POP_UP = "low-amount-btn";
const ASSETS_INPUT = "activeAmount";
const INCOMES_INPUT = "monthlyAmount";
const SUBMIT_BUTTON = "btn-submit";

export class introTypeLoan {
  static async typeAssetAndIncomes(
    page: Page,
    assets: string,
    incomes: string
  ) {
    await page.locator(BUTTON_I_WANT_MY_CREDIT).click();
    await page.getByTestId(ASSETS_POP_UP).click();
    await page.getByTestId(ASSETS_INPUT).click();
    await page.getByTestId(ASSETS_INPUT).fill(assets);
    await page.getByTestId(INCOMES_INPUT).click();
    await page.getByTestId(INCOMES_INPUT).fill(incomes);
    await page.getByTestId(SUBMIT_BUTTON).click();
    await page.getByTestId(SUBMIT_BUTTON).click();
  }
}
