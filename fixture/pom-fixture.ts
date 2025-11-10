import {test as BaseTest} from '@playwright/test' 

import { LoginPage }  from '../pages/LoginPage';
import { Commonutils } from '../utils/common-utils';
import {DashBoardPage } from '../pages/DashBoardPage';
import { PIMPage } from '../pages/PIMPage';
import { UserPage }   from '../pages/UserPage';
type POMFixtureLogin={
     loginPage:LoginPage;
     dashBoardPage:DashBoardPage;
     userPage:UserPage;
     leftsideNavigation:PIMPage;
     
}

export const test=BaseTest.extend<POMFixtureLogin>({

       loginPage: async({page},use)=>{
             await use(new LoginPage(page));
       },

       dashBoardPage:async({page},use)=>{
             await use(new DashBoardPage(page));
       },
       userPage: async ({page},use)=>
       {
            await use(new UserPage(page));
       },
       leftsideNavigation:async ({page},use)=>
       {
            await use(new PIMPage(page));
       }

})
