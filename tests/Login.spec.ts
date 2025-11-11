
import {test,expect}     from  '../fixture/hooks-fixture';
import   loginmodule     from   '../testdata/login-scenario.json'
import { LoginPage } from '../pages/LoginPage';

test.use({
      storageState:{
            cookies:[],
            origins:[]
      }
})


test.describe('invalid Login tests',{tag:['@smoke','@sanity'],annotation:{type:'link',
      description:'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'}},
      
      async()=>{
      test('Login  Verify that the user cannot log in with an invalid username ',{tag:['@smoke','@sanity'],annotation:{type:'link',
      description:'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'}},async ({goToUrl,commonUtils,loginPage})=>{

        const password= commonUtils.decrypted(process.env.PASSWORD!)
        await loginPage.loginToOrangeHRM(loginmodule.invalid_username,password)
        expect(await loginPage.viewInvalidCredientils()).toBe(loginmodule.invalid_credentialsmessage);
        await expect(loginPage.userNameInput).toBeVisible();

})


test('Login  Verify that the user cannot log in with an invalid username and password ',{tag:['@smoke','@sanity'],annotation:{
      type:'link',
      description:'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',}},async ({goToUrl,commonUtils,loginPage})=>{

        
        await loginPage.loginToOrangeHRM(loginmodule.invalid_username,loginmodule.invalid_password);
        expect(await loginPage.viewInvalidCredientils()).toBe(loginmodule.invalid_credentialsmessage);
        
        await expect(loginPage.userNameInput).toBeVisible();

})

test('Login] Verify that the user cannot log in with an invalid password.',{tag:['@smoke','@sanity'],annotation:{
      type:'link of url',
      description:"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"}},async ({ goToUrl,loginPage,commonUtils }) => {

      const username=commonUtils.decrypted(process.env.USER_NAME!);
      await loginPage.loginToOrangeHRM(username,loginmodule.invalid_password);
      expect(await loginPage.viewInvalidCredientils()).toBe(loginmodule.invalid_credentialsmessage);
       await expect(loginPage.userNameInput).toBeVisible();

})
})



// test('visual testing',{tag:['@visual'],annotation:{
//       type:'url',
//       description:'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
//  }
// },async ({goToUrl,commonUtils,loginPage,leftsideNavigation})=>{
//      const username= commonUtils.decrypted(process.env.USER_NAME!);
//      const password= commonUtils.decrypted(process.env.PASSWORD!);

//      await loginPage.loginToOrangeHRM(username,password);
//     await  expect(leftsideNavigation.sidePannelPage).toHaveScreenshot('sidepannel.png');
//     await expect(leftsideNavigation.orangehrm).toHaveScreenshot('orangehrm.png')


     
// })


// test('visual testing', {
//   tag: ['@visual'],
//   annotation: {
//     type: 'url',
//     description: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
//   }
// }, async ({ page, goToUrl, commonUtils, loginPage, leftsideNavigation }) => {
//   const username = commonUtils.decrypted(process.env.USER_NAME!);
//   const password = commonUtils.decrypted(process.env.PASSWORD!);

//   // Set consistent viewport
//   await page.setViewportSize({ width: 1280, height: 720 });

//   // Disable animations and transitions
//   await page.addStyleTag({ content: '* { transition: none !important; animation: none !important; }' });

//   // Login
//   await loginPage.loginToOrangeHRM(username, password);

//   // Wait for side panel to be visible and page to stabilize
//   await expect(leftsideNavigation.sidePannelPage).toBeVisible();
//   await page.waitForLoadState('networkidle');

//   // Visual assertions with threshold
//   await expect(leftsideNavigation.sidePannelPage).toHaveScreenshot(
//   'sidepannel.png',{
//     threshold: 0.02
//   });

//   await expect(leftsideNavigation.orangehrm).toHaveScreenshot('orangehrm.png',{
//     threshold: 0.02
//   });
// });
