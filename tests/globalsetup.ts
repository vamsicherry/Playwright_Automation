
import {test}  from '../fixture/common-fixture';
import { expect } from '@playwright/test';


test('Global setup for Login',async({page,loginPage,commonUtils,dashBoardPage})=>{

      const username = commonUtils.decrypted(process.env.USER_NAME!)
      const password = commonUtils.decrypted(process.env.PASSWORD!)
      await loginPage.goToOrangeHRM();
      await loginPage.loginToOrangeHRM(username, password);
      await page.waitForURL(`${process.env.BASE_URL}/web/index.php/dashboard/index`)
      expect(await dashBoardPage.checkDashBoardTitle()).toBe('Dashboard');
      //save auth state
      await page.context().storageState({
            path:'./playwright/.auth/auth.json'
      })

      
})