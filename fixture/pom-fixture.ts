import {test as BaseTest} from '@playwright/test' 

import { LoginPage }  from '../pages/LoginPage';
import { Commonutils } from '../utils/common-utils';

type POMFixtureLogin={
     loginPage:LoginPage;
     commonutils:Commonutils;
     
}

export const test=BaseTest.extend<POMFixtureLogin>({

       loginPage: async({page},use)=>{
             await use(new LoginPage(page));
       },

       commonutils:async({},use)=>{
             await use(new Commonutils());
       }

})
