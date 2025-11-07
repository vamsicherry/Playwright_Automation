import { test as BaseTest } from './pom-fixture';
import { Commonutils } from '../utils/common-utils';



type CommonFixture={
      commonUtils:Commonutils;
}

export const test=BaseTest.extend<CommonFixture>({

         commonUtils:async ({},use)=>{

           await use(new Commonutils());
         }
})

