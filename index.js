
describe('kumpulan test case', function () {
    it('tc-1', function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('roy')
        cy.get('#lastName').type('naldo')
        cy.get('#userEmail').type('roynaldo@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').check()
        cy.get('#userNumber').type('081199102811')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').check()
        cy.get('#currentAddress').type('Jl Angkarya no 4 ,kecamatan bojoasih')
        cy.get('#submit').click()
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})