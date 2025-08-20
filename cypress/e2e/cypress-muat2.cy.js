import 'cypress-wait-until'
import RegisterPage from '../support/pages/RegisterPage'
import LoginPage from '../support/pages/LoginPage'
import ResetPasswordPage from '../support/pages/ResetPasswordPage'

describe('Registrasi akun baru', () => {
  beforeEach(() => {
    RegisterPage.visit()
  })

  it('TC001 - Konfirmasi password tidak sama', () => {
    RegisterPage.typeUsername('Shidqi Adiatma')
    RegisterPage.typePhone('0843274623434')
    RegisterPage.typePassword('QW2137128642')
    RegisterPage.typeConfirmPassword('Az6547357')
    RegisterPage.clickRegister()
    RegisterPage.checkPasswordNotIdentical()
    RegisterPage.checkWarningText1('Password tidak sama')
  })

  it('TC002 - Tidak memasukkan Nama Lengkap dan No. Telp', () => {
    RegisterPage.typePassword('QW2137128642')
    RegisterPage.typeConfirmPassword('Qw2137128642')
    RegisterPage.clickRegister()
    cy.wait(1000)
    RegisterPage.clickRegister()
    RegisterPage.checkPasswordNotIdentical()
    RegisterPage.checkWarningText('Ada field yang belum terisi')
  })

  it('TC003 - No. Telp sudah terdaftar', () => {
    RegisterPage.typeUsername('Shidqi Adiatma')
    RegisterPage.typePhone('089654961080')
    RegisterPage.typePassword('Qw12345678')
    RegisterPage.typeConfirmPassword('Qw12345678')
    RegisterPage.clickRegister()
    RegisterPage.checkPasswordNotIdentical()
    RegisterPage.checkWarningText('No. Whatsapp telah terdaftar!')
  })

  it('TC004 - Nama lengkap menggunakan angka', () => {
    RegisterPage.typeUsername('Shidqi Adiatma123')
    RegisterPage.typePhone('089654961080')
    RegisterPage.typePassword('Qw12345678')
    RegisterPage.typeConfirmPassword('Qw12345678')
    RegisterPage.clickRegister()
    RegisterPage.checkPasswordNotIdentical()
    RegisterPage.checkWarningText('Nama lengkap tidak valid!')
  })

  it('TC005 - Password tidak sesuai kriteria', () => {
    RegisterPage.typeUsername('Shidqi Adiatma')
    RegisterPage.typePhone('089654961081')
    RegisterPage.typePassword('QA12345678')
    RegisterPage.typeConfirmPassword('QA12345678')
    RegisterPage.clickRegister()
    RegisterPage.checkPasswordNotIdentical()
    RegisterPage.checkWarningText('Password harus terdapat huruf kapital, huruf kecil, dan angka. Minimal terdapat 8 karakter!')
  })
})

describe('Login ke beranda', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('TC006 - Salah No. Whatsapp/Email/password', () => {
    LoginPage.typeEmail('089654961080')
    LoginPage.typePassword('Az28476328735')
    LoginPage.clickLogin()
    LoginPage.checkWarningText('Email/Password yang Anda masukan salah, Silakan coba lagi!')
  })

  it('TC007 - Password kosong', () => {
    LoginPage.typeEmail('089654961080')
    LoginPage.clickLogin()
    LoginPage.checkWarningText('Password belum terisi')
  })

  it('TC008 - Email kosong', () => {
    LoginPage.typePassword('Az28476328735')
    LoginPage.clickLogin()
    LoginPage.checkWarningText('Email belum terisi')
  })

  it('TC009 - Berhasil login', () => {
    LoginPage.typeEmail('089654961080')
    LoginPage.typePassword('Az12345678')
    LoginPage.clickLogin()
    LoginPage.waitForBannerAndClose()
    LoginPage.checkProfile('We CS QCF Sepuluh')
  })
})

describe('Reset Password', () => {
  beforeEach(() => {
    ResetPasswordPage.visit()
  })

  it('TC010 - Nomor telepon kosong', () => {
    ResetPasswordPage.clickSubmit()
    ResetPasswordPage.checkWarning('Ada field yang belum terisi!')
  })

  it('TC011 - Nomor telepon belum terdaftar', () => {
    ResetPasswordPage.typePhone('0846374652432')
    ResetPasswordPage.clickSubmit()
    ResetPasswordPage.checkWarning('Akun tidak ditemukan. Coba lagi dengan No. Whatsapp lain')
  })

  it('TC012 - Nomor telepon kurang dari 8 digit', () => {
    ResetPasswordPage.typePhone('08463')
    ResetPasswordPage.clickSubmit()
    ResetPasswordPage.checkWarning('No. Whatsapp minimal 8 digit!')
  })

  it('TC013 - Berhasil ke halaman OTP', () => {
    ResetPasswordPage.typePhone('089654961080')
    ResetPasswordPage.clickSubmit()
    ResetPasswordPage.checkOtpPage()
  })
})