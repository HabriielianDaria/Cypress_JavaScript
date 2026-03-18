// cypress/support/commands.js
Cypress.Commands.add('login', (email, password) => {
  // Відкриваємо сайт
  cy.visit('https://qauto.forstudy.space/', {
    auth: {
      username: 'guest',
      password: 'welcome2qauto'
    }
  })

  // Відкриваємо форму входу
  cy.contains('button', 'Sign In').click()

  // Вводимо email та пароль
  cy.get('#signinEmail').should('be.visible').type(email)
  cy.get('#signinPassword').type(password, { sensitive: true })

  // Натискаємо кнопку Login, щоб авторизуватись
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