import {Locator, Page, expect} from '@playwright/test';

export class TransferfundsPage{
    readonly page: Page;
    readonly ammount: Locator;
    readonly toAccount: Locator;
    readonly transferButton: Locator; 
    readonly transferError: Locator;
    readonly transferAmount: Locator;      

    constructor(page:Page){
        this.page = page;
        this.ammount = page.locator('#amount');
        this.toAccount = page.locator('#toAccountId > option:nth-child(2)');
        this.transferButton = page.getByRole('button', {name: 'Transfer'});
        this.transferError = page.locator('#showError');
        this.transferAmount = page.locator('#amountResult');
    }
    async goTo(){
        await this.page.goto('https://parabank.parasoft.com/parabank/transfer.htm');
    }
    
    
    async transferFunds(){
        await this.ammount.fill('100');
        await this.transferButton.click();
    }

    async isErrorVisible(){
        return await this.transferError.isVisible();
    }
    async verifyTransfer(){
        const transferResults = await this.page.locator('#showResult').textContent();
        const transferSuccesful = await this.page.getByRole('heading', {name: 'Transfer Complete!'});
        
        if(transferResults && transferSuccesful){
            await expect(transferSuccesful).toBeVisible();
            console.log(this.transferAmount);
            await expect(this.transferAmount).toHaveText('$100.00');

        }
        

    }
}