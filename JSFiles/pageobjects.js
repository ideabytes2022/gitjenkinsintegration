"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const protractor_1 = require("protractor");
class Home {
    //Addcustomerbutton:ElementFinder;
    constructor() {
        this.btnManagerLogin = (0, protractor_1.element)(protractor_1.by.xpath('//button[@ng-click="manager()"]'));
        this.btnAddcustomer = (0, protractor_1.element)(protractor_1.by.xpath('//button[@ng-click="addCust()"]'));
        this.Firstname = (0, protractor_1.element)(protractor_1.by.xpath('//input[@ng-model="fName"]'));
        this.Lastname = (0, protractor_1.element)(protractor_1.by.xpath('//input[@ng-model="lName"]'));
        this.Postalcode = (0, protractor_1.element)(protractor_1.by.xpath('//input[@ng-model="postCd"]'));
        //this.Addcustomerbutton=element(by.xpath('//button[@class="btn btn-default"]'))
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZW9iamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9mZWF0dXJlcy9wYWdlb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBK0Q7QUFFL0QsTUFBYSxJQUFJO0lBT2Qsa0NBQWtDO0lBRXJDO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUE7UUFDekUsSUFBSSxDQUFDLGNBQWMsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUE7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUE7UUFDN0QsSUFBSSxDQUFDLFVBQVUsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUE7UUFDaEUsZ0ZBQWdGO0lBQ3BGLENBQUM7Q0FDQTtBQWpCRCxvQkFpQkMifQ==