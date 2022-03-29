
import { AfterStep,Status } from "@cucumber/cucumber";
import { browser, element, by } from "protractor"

AfterStep(async function(Scenario) {

    if (Scenario.result.status === Status.FAILED) {

        const screenshot = await browser.takeScreenshot();

        this.attach(screenshot,"image/png");

    }

    else

    if (Scenario.result.status===Status.PASSED) {

         console.log("all testcases are passed")

 

    }

    })