
describe('Airport Labs Tests', () => {
    beforeEach(() => {
        cy.visit('https://airportlabs.com/')
        
    })

    it('Verify title attributes of a section from the landing page', () => {

        cy.get('.h2')
            .should('contain.text', 'AirportLabs in the Press')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
            .should('have.css', 'font-size', '40px')
            .should('have.css', 'font-weight', '300')
            .should('have.css', 'font-style', 'normal')
            .should('have.css', 'font-family', 'Satoshi, sans-serif')

    })

    it('Verify that the statistic from the Our Activity in Numbers section is correct', () => {

        cy.get(".h2.green")
            .should('contain.text', '17+ Years')
            .should('contain.text', '10')
            .should('contain.text', '60+')
            .should('contain.text', '300k')
            .should('have.css', 'color', 'rgb(82, 206, 147)')
            .should('have.css', 'font-size', '40px')
            .should('have.css', 'font-weight', '300')
            .should('have.css', 'font-style', 'normal')
            .should('have.css', 'font-family', 'Satoshi, sans-serif')

    })

    it('Verify that you can use the Get in Touch section', () => {

        cy.get('.button-text').contains("Get in Touch").click()
        cy.get('input[id=Your-Name]').type('Rusu Rares')    
        cy.get('input[id=Company-Name]').type('AROBS') 
        cy.get('input[id=email]').type('rusurares1983@gmail.com')
        cy.get('input[id=Contact]').type('0740684200')
        cy.get('textarea[id=Message]').type('Test')
        cy.get('span').contains("I have read and agree to the ").click()
        cy.findByText("Send Inquiry").click()
        cy.get('.form-success.w-form-done > div').contains("Thank you! Your submission has been received!").should('exist')

    })
    
    it('Verify that social media links are redirecting users to the correct pages', () => {

        cy.get('div.div-block-60 > a').eq(0)
            .should('have.attr', 'href', 'https://www.facebook.com/AirportLabs')
        
        cy.get('div.div-block-60 > a').eq(1)
            .should('have.attr', 'href', 'https://www.instagram.com/airportlabspeople/')

        cy.get('div.div-block-60 > a').eq(2)
            .should('have.attr', 'href', 'https://www.linkedin.com/company/airportlabs/')

    })

    it('Verify that an image with the AirportLabs logo exists', () => {
        cy.get('a[aria-label="home"] > img')
            .should('exist')
            .should('have.attr', 'src').should('include', 'Logo')
        cy.get('a[aria-label="home"] > img')
            .invoke('width').should('be.gte', 140)
        cy.get('a[aria-label="home"] > img')
            .invoke('height').should('be.lte', 40)

    })

})