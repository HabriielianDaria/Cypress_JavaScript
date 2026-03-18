describe('Registration', () => {

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    })

    cy.contains('button', 'Sign up').click()
  })

  it('should validate Name field', () => {

    cy.get('#signupName').focus().blur()
    cy.contains('Name required').should('be.visible')

    cy.get('#signupName').type('123')
    cy.contains('Name is invalid').should('be.visible')

    cy.get('#signupName').clear().type('A')
    cy.contains('Name has to be from 2 to 20 characters long')
      .should('be.visible')

    cy.get('#signupName').clear().type('A'.repeat(21))
    cy.contains('Name has to be from 2 to 20 characters long')
      .should('be.visible')
  })

  it('should validate Last Name field', () => {

    cy.get('#signupLastName').focus().blur()
    cy.contains('Last name required').should('be.visible')

    cy.get('#signupLastName').type('123')
    cy.contains('Last name is invalid').should('be.visible')

    cy.get('#signupLastName').clear().type('A')
    cy.contains('Last name has to be from 2 to 20 characters long')
      .should('be.visible')

    cy.get('#signupLastName').clear().type('A'.repeat(21))
    cy.contains('Last name has to be from 2 to 20 characters long')
      .should('be.visible')
  })

  it('should validate Email field', () => {

    cy.get('#signupEmail').focus().blur()
    cy.contains('Email required').should('be.visible')

    cy.get('#signupEmail').type('wrongEmail')
    cy.contains('Email is incorrect').should('be.visible')
  })

  it('should validate Password field', () => {

    cy.get('#signupPassword').focus().blur()
    cy.contains('Password required').should('be.visible')

    cy.get('#signupPassword').type('Pass1', { sensitive: true })
    cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .should('be.visible')

    cy.get('#signupPassword').clear().type('password123', { sensitive: true })
    cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .should('be.visible')

    cy.get('#signupPassword').clear().type('Password', { sensitive: true })
    cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .should('be.visible')
  })

  it('should validate Repeat Password field', () => {

    cy.get('#signupRepeatPassword').focus().blur()
    cy.contains('Re-enter password required').should('be.visible')

    cy.get('#signupPassword').type('Password123', { sensitive: true })
    cy.get('#signupRepeatPassword').type('Password321', { sensitive: true })

    cy.contains('Passwords do not match').should('be.visible')
  })

})