import 'cypress-wait-until';
class LoginPage {
  visit() {
    cy.fixture('urls').then((urls) => {
      cy.visit(urls.login)
    })
  }
  typeCorrectWhatsapp() {
    cy.get('#inpEmail').type('089654961080')
  }
  typeWrongPassword() {
    cy.get('#inpPassword').type('Az28476328735')
  }
  typeCorrectPassword() {
    cy.fixture('credentials').then((data) => {
      cy.get('#inpPassword').type(data.correctPassword)
    })
}
  clickLogin() {
    cy.get('#btnMasuk').click()
  }
  checkWarningText(text) {
    cy.get('#warningWhatsapp > .d-flex > .title-warning').should('contain', text)
  }
  waitForBannerAndClose() {
    cy.waitUntil(() =>
      cy.get('body').then($body => $body.find('#close-banner-promo').length > 0 && $body.find('#close-banner-promo').is(':visible'))
    , { timeout: 10000, interval: 500 })
    cy.get('#close-banner-promo').click()
  }
  checkProfile() {
    cy.get('.profileContainer > .line-clamp').should('contain', 'We CS QCF Sepuluh')
  }
}
export default new LoginPage()