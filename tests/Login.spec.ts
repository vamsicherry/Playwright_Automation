
import {test,expect}     from  '../fixture/common-fixture';

test('Login page', async ({ page, loginPage,commonUtils }) => {


   
      const username = commonUtils.decrypted(process.env.USER_NAME!)
      const password = commonUtils.decrypted(process.env.PASSWORD!)
      await loginPage.goToOrangeHRM();
      await loginPage.loginToOrangeHRM(username, password);

      
})