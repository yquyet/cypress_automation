
const { LoginPage } = require('../../support/loginPage')
const { AddCustomerPage } = require('../../support/addCustomerPage')
const loginPage = new LoginPage();
const addCustomerPage = new AddCustomerPage();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

describe('Add Customer', () => {
    const acc = {
        uid: 'mngr338328',
        password: 'UtyjEsy'
    }

    const customer = {
        name : 'Quyet Y',
        dob : '2000-01-01',
        address : 'KonTum',
        city : 'KonTum',
        nation : 'VN',
        postCode : '550000',
        phone : '0123456789',
        email : 'yquyet12@gmail.com',
        password : 'yquyet123'
    }

    it('Add customer successfully', () => {
        loginPage.login(acc)
        addCustomerPage.clickAddCustomerSideMenu()
        addCustomerPage.addNewCustomer(customer)
        addCustomerPage.clickAddNewCustomer()
        addCustomerPage.verifyAddNewCustomerSuccess(customer)
    });
});
