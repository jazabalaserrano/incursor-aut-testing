const report = require("multiple-cucumber-html-reporter");
let dateTime = new Date();

report.generate({
  jsonDir: "test-results",
  reportPath: "./test-results/",
  reportName: "Playwright Automation Report",
  pageTilte: "Automation Inc-front-end",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "126.0.6478.185",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Playwright project" },
      { label: "Release", value: "0.1" },
      { label: "Execution Start Time", value: dateTime },
      { label: "Execution End Time", value: dateTime },
    ],
  },
});


