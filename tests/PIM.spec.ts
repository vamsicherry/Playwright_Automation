import { fi } from '@faker-js/faker';
import {test,expect} from '../fixture/hooks-fixture'
import {RandomDataUtil} from '../utils/randomData';
let firstnamelastname:string;
test('Login and go to PIM page and Employees and verify employee add or Not',{tag:['@regression'],annotation:{
    type:'link',
    description:'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
}
    
},async({page,goToUrl,loginPage,commonUtils,leftsideNavigation})=>{
    await leftsideNavigation.clickOnPIM();
    await leftsideNavigation.add();
    const firstname=RandomDataUtil.getFirstName();
    console.log(firstname)
    const lastName=RandomDataUtil.getlastName();
    console.log(lastName)
    const id=RandomDataUtil.getRandomNumber()
    console.log(id)

    const firstnamelastname=firstname +" "+lastName;

    await leftsideNavigation.enterPIMDetails(firstname,lastName,id);
    await leftsideNavigation.clickAddEmployee();
    await page.waitForLoadState('domcontentloaded');
    expect(await leftsideNavigation.isEmployeeADDED()).toBe(firstnamelastname);

})


test.only('INbuit code see of Login and go to PIM page and Employees and verify employee add or Not',{tag:['@regression'],annotation:{
    type:'link',
    description:'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
}
    
},async({page,goToUrl,loginPage,commonUtils,leftsideNavigation})=>{
     
    test.step('opening pim module',async()=>{

    await leftsideNavigation.clickOnPIM();
    await leftsideNavigation.add();
    })
    
    test.step('Adding employee in pim module',async()=>{
    const firstname=RandomDataUtil.getFirstName();
    console.log(firstname)
    const lastName=RandomDataUtil.getlastName();
    console.log(lastName)
    const id=RandomDataUtil.getRandomNumber()
    console.log(id)

    firstnamelastname=firstname +" "+lastName;

    await leftsideNavigation.enterPIMDetails(firstname,lastName,id);

    })
    
    await leftsideNavigation.clickAddEmployee();
    await page.waitForLoadState('domcontentloaded');
    expect(await leftsideNavigation.isEmployeeADDED()).toBe(firstnamelastname);

})