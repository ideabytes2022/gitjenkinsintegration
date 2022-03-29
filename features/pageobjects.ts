import { element,by,browser, ElementFinder } from "protractor";
import { isConstructorDeclaration } from "typescript";
export class Home {

    btnManagerLogin:ElementFinder;
    btnAddcustomer:ElementFinder;
    Firstname:ElementFinder;
    Lastname:ElementFinder;
   Postalcode:ElementFinder;
   //Addcustomerbutton:ElementFinder;

constructor() {
    this.btnManagerLogin=element(by.xpath('//button[@ng-click="manager()"]'))
    this.btnAddcustomer=element(by.xpath('//button[@ng-click="addCust()"]'))
    this.Firstname=element(by.xpath('//input[@ng-model="fName"]'))
    this.Lastname=element(by.xpath('//input[@ng-model="lName"]'))
    this.Postalcode=element(by.xpath('//input[@ng-model="postCd"]'))
    //this.Addcustomerbutton=element(by.xpath('//button[@class="btn btn-default"]'))
}
}