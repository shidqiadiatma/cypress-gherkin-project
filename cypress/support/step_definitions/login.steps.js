import LoginPage from "../pages/LoginPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user membuka halaman login", () => {
  LoginPage.visit();
});

When("user mengisi nomor whatsapp yang sudah terdaftar", () => {
  LoginPage.typeCorrectWhatsapp();
});

When("user mengisi password yang salah", () => {
  LoginPage.typeWrongPassword();
});

When("user mengisi password yang benar", () => {
  LoginPage.typeCorrectPassword();
});

When("user klik tombol Masuk", () => {
  LoginPage.clickLogin();
});

Then("muncul peringatan {string}", (text) => {
  LoginPage.checkWarningText(text);
});

Then("user berhasil login dan diarahkan ke halaman utama", () => {
  LoginPage.waitForBannerAndClose();
  LoginPage.checkProfile();
});