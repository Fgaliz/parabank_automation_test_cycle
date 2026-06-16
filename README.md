The repo is an automation script (Typescript) to execute 3 test on parabank site (https://parabank.parasoft.com/parabank/index.htm).
1st test is to register at parabank, this way the script will register with a new username (using faker library to generate random data accrodingly).
2nd test is to open a new account this way we can execute transfer fund trasnaction.
3rd test is to complete a funds tranfer between accounts and validate the correct ammount (100 usd)
to run this script just type npx playwight test, and the complete cycle will be executed.
Please note it is setup to work on chromium, if other browser are required uncomment the required browser on the playwright.config.ts under projects section
