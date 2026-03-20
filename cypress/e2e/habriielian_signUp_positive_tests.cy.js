describe('Registration', () => {
  let userEmail
  const userPassword = 'Password123!'

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    })
  })

  it('should register new user', () => {
    userEmail = `test${Date.now()}@gmail.com`

    cy.contains('Sign up').click()

    cy.get('#signupName').type('Test')
    cy.get('#signupLastName').type('User')
    cy.get('#signupEmail').type(userEmail)
    cy.get('#signupPassword').type(userPassword, { sensitive: true })
    cy.get('#signupRepeatPassword').type(userPassword, { sensitive: true })

    cy.contains('Register').click()
    cy.url().should('include', 'garage')
  })

  it('should login with created user', () => {
    cy.login(userEmail, userPassword)
    cy.url().should('include', 'garage')
  })
})