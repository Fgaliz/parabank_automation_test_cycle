import { test, expect } from '@playwright/test';
import {RegisterPage} from '../pages/RegisterPage';
import {faker} from '@faker-js/faker';
import path from 'path';
import {OpenNewAccountPage} from '../pages/OpenNewAccountPage';
import { TransferfundsPage } from '../pages/TransferFunds';

let newAccountId;
let fromAccountId;

test.beforeEach(async ({ page }) => {
    
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
}
);
 test('Should open a new account and verify it', async ({ page }) => {
    const oppenAccount = new OpenNewAccountPage(page)
    await oppenAccount.goTo();
    await page.waitForLoadState('networkidle');
    await oppenAccount.openNewAccount();
    await page.waitForLoadState('networkidle');
    if(await oppenAccount.isErrorVisible()){
        console.log("Error creating account");
    }else{
        await oppenAccount.verifyAccountOpen();
        
    }
 });

 test('Should transfer funds between accounts and verify the transfer', async ({ page }) => {
    const transferFunds = new TransferfundsPage(page);
    await transferFunds.goTo();
    await page.waitForLoadState('networkidle');
    await transferFunds.transferFunds();
    await page.waitForLoadState('networkidle');
    if(await transferFunds.isErrorVisible()){
        console.log("Error transferring funds");
    }else{
        await transferFunds.verifyTransfer();
        
    }
 });