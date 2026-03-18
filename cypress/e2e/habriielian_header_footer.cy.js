describe('Header and Footer elements', () => {

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    })
  })

  it('Finds Sign Up button and opens modal', () => {
    cy.contains('button', 'Sign up')
      .should('be.visible')
      .click()
})

  it('Checks Sign Up modal fields', () => {
    cy.contains('button', 'Sign up')
      .should('be.visible')
      .click()

    cy.get('#signupName').should('be.visible')
    cy.get('#signupLastName').should('be.visible')
    cy.get('#signupEmail').should('be.visible')
    cy.get('#signupPassword').should('be.visible')
    cy.get('#signupRepeatPassword').should('be.visible')

    cy.contains('button', 'Register').should('be.visible')
  })

 it('Finds all contact links', () => {
  cy.get('#contactsSection').scrollIntoView().within(() => {
    cy.get('a[href="https://ithillel.ua"]').should('be.visible')
    cy.get('a[href="mailto:developer@ithillel.ua"]').should('be.visible')
    
    cy.get('a[href*="facebook"]').should('be.visible')
    cy.get('a[href*="t.me"]').should('be.visible')  
    cy.get('a[href*="youtube"]').should('be.visible')
    cy.get('a[href*="instagram"]').should('be.visible')
    cy.get('a[href*="linkedin"]').should('be.visible')
  })
})

})