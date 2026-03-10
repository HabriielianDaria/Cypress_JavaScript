describe('My first test', () => {
  it('Visits example.com and checks the title', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('Kitchen Sink').should('be.visible')
  })
})

describe('Click test', () => {
  it('Clicks on Utilities link', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('Utilities').should('be.visible').click()

    cy.url().should('include', '/utilities')
  })
})