import {Page,Locator} from '@playwright/test'

export class PIMPage
{
     private readonly pimpage:Locator;
     private readonly addEmployee:Locator;
     private readonly firstName:Locator;
     private readonly lastName:Locator;
     private readonly employeeId:Locator;
     private readonly addtoEmployee;
     private readonly page:Page;
     private readonly isEmployeeAddedOrNot;
     readonly sidePannelPage;
     readonly orangehrm;

     constructor(page:Page)
     {
        this.page=page;
        this.pimpage=page.getByRole('link',{name:'PIM'});
        this.addEmployee=page.getByRole('button',{name:'Add'});
        this.firstName=page.getByRole('textbox',{name:'First Name'});
        this.lastName=page.locator("input[name='lastName']");
        this.employeeId=page.locator("input[class='oxd-input oxd-input--active']").last()
        this.addtoEmployee=page.getByRole('button',{name:'Save'});
        this.isEmployeeAddedOrNot=page.locator(".orangehrm-edit-employee-name")
        this.sidePannelPage=page.locator('div.oxd-sidepanel-body')
        this.orangehrm=page.locator("img[alt='client brand banner']")

     }

     async clickOnPIM()
     {
           await this.pimpage.click();
     }
     async add()
     {
          await  this.addEmployee.click();
     }
     async enterPIMDetails(firstn:string,lastn:string,empid:number)
     {
          await this.firstName.fill(firstn);
          await this.lastName.fill(lastn)
          await this.employeeId.clear();
          await this.employeeId.fill(empid.toString())
     }
     async clickAddEmployee()
     {
          await this.addtoEmployee.click();
     }

     async isEmployeeADDED(): Promise<string> {
    const elt = await this.page.waitForSelector(".orangehrm-edit-employee-name", { state: 'visible' });
    const name = await elt.textContent();
    return name?.trim() ?? '';
}

}