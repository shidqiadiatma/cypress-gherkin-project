class ResetPasswordPage {
  visit() {
    cy.fixture('urls').then((urls) => {
      cy.visit(urls.resetPassword)
    })
  }
  typeWrongPhone(phone) {
    cy.get('#inpNomorTelepon').type(phone)
  }
  typeRegisteredPhone() {
    cy.get('#inpNomorTelepon').type('089654961080')
  }
  clickSubmit() {
    cy.get('#btnMasuk').click()
  }
  checkWarning(text) {
    cy.get('.title-warning').should('contain', text)
  }
  typeWrongOTP() {
    cy.get('#OTPField1').type('1')
    cy.get('#OTPField2').type('1')
    cy.get('#OTPField3').type('1')
    cy.get('#OTPField4').type('1')
    cy.get('#OTPField5').type('1')
    cy.get('#OTPField6').type('1')
  }
  checkWarningOTP(text) {
    cy.get('#TxtRedAlert').should('contain', text)
  } 
  checkOtpPage() {
    cy.get('.muat-logo-img').should('be.visible')
    cy.get('.icon-phone-otp-img').should('be.visible')
    cy.get('.otp-title').should('contain', 'Mohon cek pesan Whatsapp di perangkat anda untuk melanjutkan pendaftaran')
    cy.get('.otp-form-top-text-container > .ff-bold-az').should('contain', 'No. Whatsapp Anda')
    cy.get('.otp-form-bot-container > .text-white').should('contain', 'Masukkan OTP')
  }
}
export default new ResetPasswordPage()