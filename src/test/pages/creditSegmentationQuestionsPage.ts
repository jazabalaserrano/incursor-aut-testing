import { Page } from "@playwright/test";

const BUTTON_NEXT = "btn-next";
const INPUT_AUTOCOMPLETE_NO_TYPE = "//input[@data-testid='inputTestText']";
const INPUT_AUTOCOMPLETE = "//input[@data-testid='input-autocomplete']";
const FIRST_OPTION = "test-option-list-0";
const BUTTON_CONFIRM = "button-confirm";

const FORM_PEP_FIRST_QUESTION_YES = "(//label[text()='Sí'])[1]";
const FORM_PEP_FIRST_QUESTION_NO = "(//label[text()='No'])[1]";

const FORM_PEP_SECOND_QUESTION_YES = "(//label[text()='Sí'])[2]";
const FORM_PEP_SECOND_QUESTION_NO = "(//label[text()='No'])[2]";

const FORM_PEP_THIRD_QUESTION_YES = "(//label[text()='Sí'])[3]";
const FORM_PEP_THIRD_QUESTION_NO = "(//label[text()='No'])[3]";

const FORM_PEP_FOURTH_QUESTION_YES =
  "/html/body/div[1]/div[3]/div/div[2]/div/div/div[3]/div[1]/div[7]/div/div/div/div[2]/div[1]/label";
const FORM_PEP_FOURTH_QUESTION_NO =
  "/html/body/div[1]/div[3]/div/div[2]/div/div/div[3]/div[1]/div[7]/div/div/div/div[2]/div[2]/label";

const FORM_PEP_FIFTH_QUESTION_YES =
  "/html/body/div[1]/div[3]/div/div[2]/div/div/div[3]/div[1]/div[7]/div/div/div/div[4]/div[1]/label";
const FORM_PEP_FIFTH_QUESTION_NO =
  "/html/body/div[1]/div[3]/div/div[2]/div/div/div[3]/div[1]/div[7]/div/div/div/div[4]/div[2]/label";

export class creditSegmentationQuestions {
  static async answerUserFirstPepQuestion(
    page: Page,
    answerFirstPepQuestion: string
  ) {
    switch (answerFirstPepQuestion) {
      case "No": {
        await page.locator("xpath=" + FORM_PEP_FIRST_QUESTION_NO).click();
        break;
      }
      case "Sí": {
        await page.locator("xpath=" + FORM_PEP_FIRST_QUESTION_YES).click();
        break;
      }
      default: {
        console.log(answerFirstPepQuestion + " Is an invalid answer");
        break;
      }
    }
  }

  static async answerUserSecondPepQuestion(
    page: Page,
    answerSecondPepQuestion: string
  ) {
    switch (answerSecondPepQuestion) {
      case "No": {
        await page.locator("xpath=" + FORM_PEP_SECOND_QUESTION_NO).click();
        break;
      }
      case "Sí": {
        await page.locator("xpath=" + FORM_PEP_SECOND_QUESTION_YES).click();
        break;
      }
      default: {
        console.log(answerSecondPepQuestion + " Is an invalid answer");
        break;
      }
    }
  }

  static async answerUserThirdPepQuestion(
    page: Page,
    answerThirdPepQuestion: string
  ) {
    switch (answerThirdPepQuestion) {
      case "No": {
        await page.locator("xpath=" + FORM_PEP_THIRD_QUESTION_NO).click();
        break;
      }
      case "Sí": {
        await page.locator("xpath=" + FORM_PEP_THIRD_QUESTION_YES).click();
        break;
      }
      default: {
        console.log(answerThirdPepQuestion + " Is an invalid answer");
        break;
      }
    }
  }

  static async clickNextPageOfQuestions(page: Page) {
    await page.getByTestId(BUTTON_NEXT).click();
  }

  static async answerUserFourthPepQuestion(
    page: Page,
    answerFourthPepQuestion: string
  ) {
    switch (answerFourthPepQuestion) {
      case "No": {
        await page.locator("xpath=" + FORM_PEP_FOURTH_QUESTION_NO).click();
        break;
      }
      case "Sí": {
        await page.locator("xpath=" + FORM_PEP_FOURTH_QUESTION_YES).click();
        break;
      }
      default: {
        console.log(answerFourthPepQuestion + " Is an invalid answer");
        break;
      }
    }
  }

  static async answerUserFifthPepQuestion(
    page: Page,
    answerFifthPepQuestion: string
  ) {
    switch (answerFifthPepQuestion) {
      case "No": {
        await page.locator("xpath=" + FORM_PEP_FIFTH_QUESTION_NO).click();
        break;
      }
      case "Sí": {
        await page.locator("xpath=" + FORM_PEP_FIFTH_QUESTION_YES).click();
        break;
      }
      default: {
        console.log(answerFifthPepQuestion + " Is an invalid answer");
        break;
      }
    }
  }

  static async answerUserSegmentationQuestions(
    page: Page,
    answerFirstQuestion: string,
    answerSecondQuestion: string,
    answerThirdQuestion: string,
    answerFourthQuestion: string,
    answerFifthQuestion: string
  ) {
    await page.getByText(answerFirstQuestion).click();
    await page.getByTestId(BUTTON_NEXT).click();
    await page.getByText(answerSecondQuestion).click();
    await page.getByTestId(BUTTON_NEXT).click();
    await page.locator(INPUT_AUTOCOMPLETE_NO_TYPE).click();
    await page.locator(INPUT_AUTOCOMPLETE_NO_TYPE).fill(answerThirdQuestion);
    await page.locator(INPUT_AUTOCOMPLETE).fill(answerThirdQuestion);
    await page.getByTestId(FIRST_OPTION).click();
    await page.getByTestId(BUTTON_CONFIRM).click();
    await page.getByText(answerFourthQuestion).click();
    await page.getByTestId(BUTTON_NEXT).click();
    await page.getByText(answerFifthQuestion).click();
    await page.getByTestId(BUTTON_NEXT).click();
  }
}
