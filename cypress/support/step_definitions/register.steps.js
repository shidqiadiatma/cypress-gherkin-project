import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegisterPage from "../pages/RegisterPage";

Given("user membuka halaman register", () => {
  RegisterPage.visit();
});

When("user mengisi nama lengkap {string}", (nama) => {
  RegisterPage.typeUsername(nama);
});

When("user mengisi nomor whatsapp untuk register yang sudah terdaftar", () => {
  RegisterPage.typeRegisteredPhone();
});

When("user mengisi nomor whatsapp untuk register yang belum terdaftar", () => {
  RegisterPage.typeUnregisteredPhone();
});

When("user mengisi password {string}", (pass) => {
  RegisterPage.typePassword(pass);
});

When("user mengisi password {string} dan konfirmasi password {string}", (pass, conf) => {
  RegisterPage.typePassword(pass);
  RegisterPage.typeConfirmPassword(conf);
});

When("user mengisi konfirmasi password {string}", (conf) => {
  RegisterPage.typeConfirmPassword(conf);
});

When("user klik tombol Daftar", () => {
  RegisterPage.clickRegister();
});

When("user klik tombol Daftarr", () => {
  RegisterPage.clickRegister();
  cy.wait(1000);
  RegisterPage.clickRegister();
});

When("user hanya mengisi password {string} dan konfirmasi password {string}", (pass, conf) => {
  RegisterPage.typePassword(pass);
  RegisterPage.typeConfirmPassword(conf);
});

// Untuk warning TC001
Then("muncul peringatan yaitu {string}", (text) => {
  RegisterPage.checkWarningText1(text);
});

// Untuk warning lain
Then("muncul peringatan registrasi {string}", (text) => {
  RegisterPage.checkWarningText(text);
});

// Untuk warning lain
Then("user berhasil diarahkan ke halaman Syarat dan Ketentuan Pengguna", () => {
  RegisterPage.checkRedirectToTermsAndConditions();
});
