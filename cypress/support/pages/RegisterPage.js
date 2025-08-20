class RegisterPage {
  visit() {
    cy.fixture('urls').then((urls) => {
      cy.visit(urls.register)
    })
  }
  typeUsername(username) {
    cy.get('#inpUsername').type(username)
  }
  typeRegisteredPhone() {
    cy.get('#inpNomorTelepon').type('089654961080')
  }
  typeUnregisteredPhone() {
    cy.get('#inpNomorTelepon').type('081154473211')
  }
  typePassword(password) {
    cy.get('#inpPassword').type(password)
  }
  typeConfirmPassword(confirmPassword) {
    cy.get('#inpKonfirmasiPassword').type(confirmPassword)
  }
  clickRegister() {
    cy.get('#btnDaftar').click()
  }
  checkPasswordNotIdentical() {
    cy.get('#passwordNotIdentical').should('exist')
  }
  checkWarningText(text) {
    cy.get('#warningErrorText').should('contain', text)
  }
  checkWarningText1(text) {
    cy.get('#passwordNotIdentical > .d-flex > .title-warning').should('contain', text)
  }
  checkRedirectToTermsAndConditions() {
    cy.get('#lblSyaratKetentuan').should('contain', 'Syarat dan Ketentuan Pengguna')
    cy.clearCookies();
    cy.clearLocalStorage();
  }
  
}
export default new RegisterPage()