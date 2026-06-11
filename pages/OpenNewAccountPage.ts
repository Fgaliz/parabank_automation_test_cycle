import {Locator, Page, expect} from '@playwright/test';

export class OpenNewAccountPage{
    readonly page: Page;
    readonly accountType: Locator;
    readonly accountNumber: Locator;
    readonly openAccountButton: Locator; 
    readonly errorOpenAccount: Locator;      

    constructor(page:Page){
        this.page = page;
        this.accountType = page.locator('#type');
        this.accountNumber = page.locator('#fromAccountId');
        this.openAccountButton = page.getByRole('button', {name: 'Open New Account'});
        this.errorOpenAccount = page.locator('#openAccountError');

    }
    async goTo(){
        await this.page.goto('https://parabank.parasoft.com/parabank/openaccount.htm');
    }
    
    
    async openNewAccount(){
        await this.openAccountButton.click();
    }

    async isErrorVisible(){
        return await this.errorOpenAccount.isVisible();
    }
    async verifyAccountOpen(){
        const accountResults = await this.page.locator('#openAccountResult').textContent();
        const accountOppened = await this.page.getByRole('heading', {name: 'Account Opened!'});
        if(accountResults&& accountOppened){
            await expect(accountOppened).toBeVisible();
        }
        

    }
}