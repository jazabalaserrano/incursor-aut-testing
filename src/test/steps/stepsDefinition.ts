import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
setDefaultTimeout(60 * 1000 * 2)
import { InitialPage } from "../pages/InitialPage";
import { creditSegmentationQuestions } from "../pages/creditSegmentationQuestionsPage";
import { introTypeLoan } from "../pages/introTypeLoanPage";
import { pageFixture } from "../hooks/pageFixture";


Given(
  "That the user tries get credit offer with the alliance: {string}, {string}",
  async function(environment, allienceCode) {
    await pageFixture.page.goto(InitialPage.getDinamicUrl(environment, allienceCode));
    await pageFixture.page.waitForTimeout(4000);
    InitialPage.clickButtonNextInitialPage(pageFixture.page);
    InitialPage.clickButtonIWantMyCredit(pageFixture.page);
  }
);

When(
  "The user answers the questions: {string}, {string}, {string}, {string},  {string}",
  async function(
    answerFirstQuestion,
    answerSecondQuestion,
    answerThirdQuestion,
    answerFourthQuestion,
    answerFifthQuestion
  ) {
    creditSegmentationQuestions.answerUserSegmentationQuestions(
      pageFixture.page,
      answerFirstQuestion,
      answerSecondQuestion,
      answerThirdQuestion,
      answerFourthQuestion,
      answerFifthQuestion
    );
  }
);

When(
  "The user answers the PEP questions: {string}, {string}, {string}, {string}, {string}",
  async function(
    answerFirstPepQuestion,
    answerSecondPepQuestion,
    answerThirdPepQuestion,
    answerFourthPepQuestion,
    answerFifthPepQuestion
  ) {
    await pageFixture.page.waitForTimeout(4000);
    await creditSegmentationQuestions.answerUserFirstPepQuestion(
      pageFixture.page,
      answerFirstPepQuestion
    );
    await pageFixture.page.waitForTimeout(4000);
    await creditSegmentationQuestions.answerUserThirdPepQuestion(
      pageFixture.page,
      answerThirdPepQuestion
    );
    await pageFixture.page.waitForTimeout(4000);
    creditSegmentationQuestions.answerUserSecondPepQuestion(
      pageFixture.page,
      answerSecondPepQuestion
    );
    await pageFixture.page.waitForTimeout(4000);
    creditSegmentationQuestions.clickNextPageOfQuestions(pageFixture.page);
    await pageFixture.page.waitForTimeout(4000);
    creditSegmentationQuestions.answerUserFourthPepQuestion(
      pageFixture.page,
      answerFourthPepQuestion
    );
    await pageFixture.page.waitForTimeout(4000);
    await pageFixture.page.waitForTimeout(4000);
    creditSegmentationQuestions.answerUserFifthPepQuestion(
      pageFixture.page,
      answerFifthPepQuestion
    );
    await pageFixture.page.waitForTimeout(4000);
    return "success";
  }
);

When(
  "The user enter his assets and the incomes: {string}, {string}",
  async function(assets, incomes) {
    await pageFixture.page.waitForTimeout(4000);
    console.log(assets);
    await introTypeLoan.typeAssetAndIncomes(pageFixture.page, assets, incomes);
  }
);

When(
  "The user enter the his data: {string}, {string}, {string}, {string},  {string}",
  async function(string, string2, string3, string4, string5) {
    // Write code here that turns the phrase above into concrete actions
    return "success";
  }
);

When("I verify the OTP on the final screen", async function() {
  // Write code here that turns the phrase above into concrete actions
  return "success";
});

Then("I should see a confirmation message", async function() {
  // Write code here that turns the phrase above into concrete actions
  return "success";
});
