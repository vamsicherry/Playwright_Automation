import {Page,Locator} from '@playwright/test'

export class LoginPage
{
      private readonly page:Page;
      private readonly userNameInput:Locator;
      private readonly passwordInput:Locator;
      private readonly loginButton:Locator;


      constructor(page:Page)
      {
           this.page=page;
           this.userNameInput=page.locator("input[name='username']");
           this.passwordInput=page.locator("input[name='password']");
           this.loginButton=page.getByRole('button',{name:' Login '});
      }

      async goToOrangeHRM()
      {
          await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      }

      
      async loginToOrangeHRM(uname:string,pname:string)
      {
             await this.userNameInput.fill(uname);
             await this.passwordInput.fill(pname);
             await this.loginButton.click();
      }
}