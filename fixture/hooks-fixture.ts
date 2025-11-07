import { log } from 'console';
import {test as BaseTest } from  './common-fixture';

type MyLogin=
{
    goToUrl:void;
    logOut:void;
}
export const test = BaseTest.extend<MyLogin>({
  goToUrl: async ({ loginPage }, use) => {
         await loginPage.goToOrangeHRM();
        await use();
  },

  logOut: async ({ userPage }, use) => {
        await use();
        await  userPage.clickToUserProfile();
        await   userPage.clickLogout();
        
  },
});
export {expect}  from '@playwright/test';