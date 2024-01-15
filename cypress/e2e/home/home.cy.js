
it('Should add product to Cart', () => {

  cy.visit('https://stg-fr.rajapack.xyz/')
  cy.get('#commande-btn').click()
  cy.get('#addProductRef').click().type('LM500TS', { force: true, delay: 100 })
  cy.get('#LM500TS', { timeout: 10000 }).click()
  cy.get('#open-cart-confirmation', { timeout: 10000 }).click()
  cy.get('.cart-confirmation__buttons > #open-cart-confirmation').click()
  cy.get('.header-cart__number').should('contain', 1)

});