
import {test,expect}     from  '../fixture/hooks-fixture';
import   loginmodule     from   '../testdata/login-scenario.json'
import { LoginPage } from '../pages/LoginPage';

test('Login] Verify that the user cannot log in with an invalid password.', async ({ goToUrl,loginPage,commonUtils }) => {

      const username=commonUtils.decrypted(process.env.USER_NAME!);
      await loginPage.loginToOrangeHRM(username,loginmodule.invalid_password);
      expect(await loginPage.viewInvalidCredientils()).toBe(loginmodule.invalid_credentialsmessage);
       await expect(loginPage.userNameInput).toBeVisible();

})

