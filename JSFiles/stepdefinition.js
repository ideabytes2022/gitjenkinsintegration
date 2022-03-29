"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const pageobjects_1 = require("./pageobjects");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
var EC = protractor_1.browser.ExpectedConditions;
var expectedWaitMaxTime = 60000;
var objHome = new pageobjects_1.Home();
(0, cucumber_1.Given)('User shoud open the bank using valid url', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://www.way2automation.com/angularjs-protractor/banking/#/login');
        yield protractor_1.browser.manage().window().maximize();
        return console.log("valid url");
        // Write code here that turns the phrase above into concrete actions
    });
});
(0, cucumber_1.Then)('User should validate the application', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.xpath('//strong[@class="mainHeading"]'))), expectedWaitMaxTime);
        yield (0, protractor_1.element)(protractor_1.by.xpath('//strong[@class="mainHeading"]')).getText().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(2000);
                expect(text).to.equal("XYZ Bank");
                return console.log("Text", text);
            });
        });
        // Write code here that turns the phrase above into concrete actions
    });
});
(0, cucumber_1.When)('user should click on the Bank Manager Login', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield objHome.btnManagerLogin.click();
        yield protractor_1.browser.sleep(2000);
        // Write code here that turns the phrase above into concrete actions
        return console.log("Bank manager login click sucessfull");
    });
});
(0, cucumber_1.Then)('user should click on Add customer', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield objHome.btnAddcustomer.click();
        yield protractor_1.browser.sleep(4000);
        // Write code here that turns the phrase above into concrete actions
        return console.log("Add customer click sucessfull");
        // Write code here that turns the phrase above into concrete actions
    });
});
(0, cucumber_1.Then)('Enter the userfname {string}', function (Firstname) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield objHome.Firstname.sendKeys(Firstname);
        yield protractor_1.browser.sleep(2000);
        // Write code here that turns the phrase above into concrete actions
        return console.log("first name is enterd");
        // Write code here that turns the phrase above into concrete actions
    });
});
(0, cucumber_1.Then)('Enter the userlastname {string}', function (Lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield objHome.Lastname.sendKeys(Lastname);
        yield protractor_1.browser.sleep(3000);
        return console.log("last name is enterd");
    });
});
(0, cucumber_1.Then)('Enter the userpostcode {string}', function (Postalcode) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield objHome.Postalcode.sendKeys(Postalcode);
        yield protractor_1.browser.sleep(3000);
        // Write code here that turns the phrase above into concrete actions
        return console.log(" postal code is enterd");
    });
});
(0, cucumber_1.Then)('user should  click on Add customer Button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield protractor_1.browser.waitForAngularEnabled(false);
        //await objHome.Addcustomerbutton.click();
        //await element(by.model("postCd")).sendKeys(protractor.Key.ENTER);
        yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
        yield protractor_1.browser.sleep(3000);
        var myAlert = yield protractor_1.browser.switchTo().alert();
        yield myAlert.accept();
        // browser.actions().mouseMove(element(by.xpath('//button[@ng-click="openAccount()"]'))).perform();
        yield protractor_1.browser.actions().click((0, protractor_1.element)(protractor_1.by.xpath('//button[@ng-click="openAccount()"]'))).perform();
        yield protractor_1.browser.sleep(3000);
        // Write code her that turns the phrase above into concrete actions
        return console.log(" Add customer is succesfull");
    });
});
(0, cucumber_1.Then)('user shoud go to Home', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield (0, protractor_1.element)(protractor_1.by.xpath('//button[@class="btn home"]')).click();
        yield protractor_1.browser.sleep(3000);
        // Write code here that turns the phrase above into concrete actions
        return console.log("home is back");
    });
});
(0, cucumber_1.When)('user should click on customer login', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield (0, protractor_1.element)(protractor_1.by.xpath('//button[@ng-click="customer()"]')).click();
        yield protractor_1.browser.sleep(4000);
        // Write code here that turns the phrase above into concrete actions
        return console.log("customer login successfull");
    });
});
(0, cucumber_1.When)('user should click on yourname', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        // Write code here that turns the phrase above into concrete actions
        yield protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath('//label["Your Name"]'))), 5000);
        yield (0, protractor_1.element)(protractor_1.by.xpath('//select[@name="userSelect"]')).click();
        yield protractor_1.browser.sleep(2000);
        return console.log("Text");
    });
});
(0, cucumber_1.Then)('user shoud select the name', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        try {
            yield protractor_1.browser.waitForAngularEnabled(false);
            yield (0, protractor_1.element)(protractor_1.by.xpath('//option[@value="2"]')).click();
            yield protractor_1.browser.sleep(2000);
            // Write code here that turns the phrase above into concrete actions
            console.log("name is selected");
        }
        catch (error) {
            console.log("error");
        }
    });
});
(0, cucumber_1.Then)('user should login successfull', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield (0, protractor_1.element)(protractor_1.by.xpath('//button[@type="submit"]')).click();
        // Write code here that turns the phrase above into concrete actions
        return console.log("login is success");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcGRlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9mZWF0dXJlcy9zdGVwZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFzRDtBQUN0RCwyQ0FBNEQ7QUFDNUQsK0NBQXFDO0FBQ3JDLGdEQUF5QjtBQUN6QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFBO0FBQ3hCLElBQUksRUFBRSxHQUFHLG9CQUFPLENBQUMsa0JBQWtCLENBQUM7QUFDcEMsSUFBSSxtQkFBbUIsR0FBRSxLQUFLLENBQUM7QUFDL0IsSUFBSSxPQUFPLEdBQUUsSUFBSSxrQkFBSSxFQUFFLENBQUM7QUFFeEIsSUFBQSxnQkFBSyxFQUFDLDBDQUEwQyxFQUFFOztRQUM5QyxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO1FBQ3pGLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsb0VBQW9FO0lBQ3RFLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxJQUFBLGVBQUksRUFBQyxzQ0FBc0MsRUFBRTs7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUMsRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzdHLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0NBQWdD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