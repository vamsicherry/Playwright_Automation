import {Locator,Page} from '@playwright/test'


export class UserPage{

      private readonly userclick:Locator;
      private readonly logoutbutton:Locator;
      private readonly page:Page;
      
      constructor(page:Page)
      {
          this.page=page
          this.userclick=page.locator('img[alt="profile picture"]').first();
          this.logoutbutton=page.getByRole('menuitem',{name:'Logout'});
      }

      async clickToUserProfile()
      {
           await this.userclick.click();
      }

      async clickLogout()
      {
           await this.logoutbutton.click();
      }
}