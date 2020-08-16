/// <reference types="cypress" />
describe('Active Workout', () => {
  beforeEach(() => {
    cy.visit('https://davidthomason.com/GainsTrack/')
    
    cy.get('a.button')
      .contains('Circuit')
      .click()
    
    cy.get('.navbar .title-large')
      .contains('Circuit')
      .should('be.visible')
  })
  it('should start Circuit workout', () => {
    cy.get('.button')
      .contains('Start Workout')
      .click()
    
    cy.get('.navbar .title-large')
      .contains('Circuit')
      .should('be.visible')
  })
})
