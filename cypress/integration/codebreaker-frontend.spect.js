describe('My first e2e testing', function(){
    
    it('codebraker Test', function() {
        cy.visit('http://localhost:3000/')
        cy.contains('Codebreaker')
        cy.get('#secret')
            .type('1234')
            .should('have.value', '1234')
        cy.get('#setSecret')
            .click()
        cy.contains('ok, let the game begins')

        //All match
        cy.get('#guessed')
            .clear() //limpiar el campo input
            .type('1234')
            .should('have.value', '1234')
        cy.get('#guess')
            .click()
            cy.get('#result').contains('XXXX')

        /* //none matches
        cy.get('#guessed')
        .clear()
        .type('5678')
        .should('have.value', '5678')
        cy.get('#result').contains(' ') */

        //one matches
        cy.get('#guessed')
            .clear() //limpiar el campo input
            .type('1567')
            .should('have.value', '1567')
        cy.get('#guess')
            .click()
            cy.get('#result').contains('X')

        //some matches P y N
        cy.get('#guessed')
            .clear() //limpiar el campo input
            .type('2167')
            .should('have.value', '2167')
        cy.get('#guess')
            .click()
            cy.get('#result').contains('__')

        //some matches P other marches N
        cy.get('#guessed')
            .clear() //limpiar el campo input
            .type('7138')
            .should('have.value', '7138')
        cy.get('#guess')
            .click()
            cy.get('#result').contains('X_')

        //some matches N
        cy.get('#guessed')
            .clear() //limpiar el campo input
            .type('4321')
            .should('have.value', '4321')
        cy.get('#guess')
            .click()
            cy.get('#result').contains('____')

        //two matches P two marches N
        cy.get('#guessed')
            .clear() //limpiar el campo input
            .type('2134')
            .should('have.value', '2134')
        cy.get('#guess')
            .click()
        cy.get('#result').contains('XX__')
    })
})
