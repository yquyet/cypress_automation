export class AddCustomerPage {
    clickAddCustomerSideMenu = () => {
        cy.contains('a', 'New Customer')
            .click()
        cy.url().should('include', 'addcustomerpage.php') // verify là đã tới trang add chưa
        cy.get('.heading3')
            .should('contain.text', 'Add New Customer')
    }

    addNewCustomer = (customerInformation) => {
        cy.get('input[name="name"]').type(customerInformation.name)
        cy.get('input[value="f"]')
            .should('be.visible').click()
        cy.get('input[id="dob"]').type(customerInformation.dob)
        cy.get('textarea[name="addr"]').type(customerInformation.address)
        cy.get('input[name="city"]').type(customerInformation.city)
        cy.get('input[name="state"]').type(customerInformation.nation)
        cy.get('input[name="pinno"]').type(customerInformation.postCode)
        cy.get('input[name="telephoneno"]').type(customerInformation.phone)
        cy.get('input[name="emailid"]').type(customerInformation.email)
        cy.get('input[name="password"]').type(customerInformation.password)
    } 

    clickAddNewCustomer = () => {
        cy.get('input[type="submit"]')
         .should('be.visible').click()
    }

    verifyAddNewCustomerSuccess = (customer) => {
        cy.contains('p', 'Customer Registered Successfully!!!')
            .should('be.visible')
        cy.xpath('//tbody//tbody/tr[contains(.,"Customer Name")]/td[2]')
            .should('contain.text', customer.name);
        cy.xpath('//tbody//tbody/tr[contains(.,"Email")]/td[2]')
            .should('contain.text', customer.email);
    }
}