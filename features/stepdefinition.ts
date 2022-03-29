import { Given, When, Then} from "@cucumber/cucumber";
import { element,by,browser, protractor } from "protractor";
import { Home } from "./pageobjects";
import chai  from "chai";
var expect = chai.expect
var EC = browser.ExpectedConditions;
var expectedWaitMaxTime= 60000;
var objHome= new Home();

Given('User shoud open the bank using valid url', async function () {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://www.way2automation.com/angularjs-protractor/banking/#/login');
    await browser.manage().window().maximize();
    return console.log("valid url");
    // Write code here that turns the phrase above into concrete actions
  });
  Then('User should validate the application', async function () {
    await browser.waitForAngularEnabled(false); 
    await browser.wait(EC.visibilityOf(element(by.xpath('//strong[@class="mainHeading"]'))),expectedWaitMaxTime);
    await element(by.xpath('//strong[@class="mainHeading"]')).getText().then(async function(text){
    await browser.sleep(2000);
    expect(text).to.equal("XYZ Bank")
    return console.log("Text",text);
    })
    // Write code here that turns the phrase above into concrete actions
  });
  
  When('user should click on the Bank Manager Login', async function () {
    await browser.waitForAngularEnabled(false);
    await objHome.btnManagerLogin.click();
    await browser.sleep(2000);
    // Write code here that turns the phrase above into concrete actions
    return console.log("Bank manager login click sucessfull");
  });
  Then('user should click on Add customer', async function () {
    await browser.waitForAngularEnabled(false);
    await objHome.btnAddcustomer.click();
    await browser.sleep(4000);
    // Write code here that turns the phrase above into concrete actions
    return console.log("Add customer click sucessfull");
    // Write code here that turns the phrase above into concrete actions

  });
  
  Then('Enter the userfname {string}', async function (Firstname) {
    await browser.waitForAngularEnabled(false);
    await objHome.Firstname.sendKeys(Firstname);
    await browser.sleep(2000);
  // Write code here that turns the phrase above into concrete actions
   return console.log("first name is enterd");
    // Write code here that turns the phrase above into concrete actions
  });
  Then('Enter the userlastname {string}', async function (Lastname) {
    // Write code here that turns the phrase above into concrete actions
    await browser.waitForAngularEnabled(false);
    await objHome.Lastname.sendKeys(Lastname);
    await browser.sleep(3000);
    return console.log("last name is enterd");
  });
  Then('Enter the userpostcode {string}', async function (Postalcode) {
    // Write code here that turns the phrase above into concrete actions
    await browser.waitForAngularEnabled(false);
    await objHome.Postalcode.sendKeys(Postalcode);
    await browser.sleep(3000);
  // Write code here that turns the phrase above into concrete actions
   return console.log(" postal code is enterd");

  });
  Then('user should  click on Add customer Button', async function () {
    // Write code here that turns the phrase above into concrete actions
    await browser.waitForAngularEnabled(false);
      //await objHome.Addcustomerbutton.click();
      //await element(by.model("postCd")).sendKeys(protractor.Key.ENTER);
      await browser.actions().sendKeys(protractor.Key.ENTER).perform();
      await browser.sleep(3000);
      var myAlert = await browser.switchTo().alert();
      await myAlert.accept(); 
      
      // browser.actions().mouseMove(element(by.xpath('//button[@ng-click="openAccount()"]'))).perform();
      await browser.actions().click(element(by.xpath('//button[@ng-click="openAccount()"]'))).perform();
      await browser.sleep(3000);
    // Write code her that turns the phrase above into concrete actions
      return console.log(" Add customer is succesfull");
  });
  Then('user shoud go to Home', async  function () {
    // Write code here that turns the phrase above into concrete actions
      await browser.waitForAngularEnabled(false);
      await element(by.xpath('//button[@class="btn home"]')).click();
      await browser.sleep(3000);
      // Write code here that turns the phrase above into concrete actions
      return console.log("home is back");
  });
  When('user should click on customer login', async function () {
    // Write code here that turns the phrase above into concrete actions
    await browser.waitForAngularEnabled(false);
    await element(by.xpath('//button[@ng-click="customer()"]')).click();
    await browser.sleep(4000);
    // Write code here that turns the phrase above into concrete actions
    return console.log("customer login successfull");
  });
  When('user should click on yourname', async function () {
    await browser.waitForAngularEnabled(false);
    // Write code here that turns the phrase above into concrete actions
    await browser.wait(EC.presenceOf(element(by.xpath('//label["Your Name"]'))),5000);
    await element(by.xpath('//select[@name="userSelect"]')).click();
    await browser.sleep(2000);
    return console.log("Text");
  });
  Then('user shoud select the name', async function () {

    // Write code here that turns the phrase above into concrete actions
    try {
        await browser.waitForAngularEnabled(false);
        await element(by.xpath('//option[@value="2"]')).click();
        await browser.sleep(2000);
        // Write code here that turns the phrase above into concrete actions
       console.log("name is selected");
        }
        catch (error){
          console.log("error");
        }
      });
  
  Then('user should login successfull', async function () {
    // Write code here that turns the phrase above into concrete actions
    await browser.waitForAngularEnabled(false);
    await element(by.xpath('//button[@type="submit"]')).click();
    // Write code here that turns the phrase above into concrete actions
    return console.log ("login is success");
  });
  