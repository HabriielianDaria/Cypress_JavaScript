Cypress.Commands.add('login', () => {
  cy.visit('/', {
    auth: {
      username: 'guest',
      password: 'welcome2qauto'
    }
  })

  cy.contains('button', 'Sign In').click()

  cy.get('#signinEmail').type(Cypress.env('email'))
  cy.get('#signinPassword').type(Cypress.env('password'), { sensitive: true })

  cy.contains('button', 'Login').click()
})

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    options.log = false

    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})