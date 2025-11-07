import {Page,Locator} from '@playwright/test'

export class LoginPage
{
      private readonly page:Page;
      readonly userNameInput:Locator;
      private readonly passwordInput:Locator;
      private readonly loginButton:Locator;
      private readonly invalidCredentials:Locator;


      constructor(page:Page)
      {
           this.page=page;
           this.userNameInput=page.locator("input[name='username']");
           this.passwordInput=page.locator("input[name='password']");
           this.loginButton=page.getByRole('button',{name:' Login '});
           this.invalidCredentials=page.getByText('Invalid credentials');
      }

      async goToOrangeHRM()
      {
          await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
      }

      
      async loginToOrangeHRM(uname:string,pname:string)
      {
             await this.userNameInput.fill(uname);
             await this.passwordInput.fill(pname);
             await this.loginButton.click();
      }

      async viewInvalidCredientils():Promise<string>
      {
            return await this.invalidCredentials.innerText() ?? '';
      }
}