import {Page,Locator} from '@playwright/test'


export class DashBoardPage
{
      private  readonly page:Page;
      private readonly dashboardtitle:Locator;

      constructor(page:Page)
      {
           this.page=page;
           this.dashboardtitle=page.getByRole('heading',{name:'Dashboard'});
      }


      async checkDashBoardTitle():Promise<string>
      {
             return await this.dashboardtitle.innerText() ?? '';
      }

}