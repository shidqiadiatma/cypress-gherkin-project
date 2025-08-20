import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ResetPasswordPage from "../pages/ResetPasswordPage";

Given("user membuka halaman reset password", () => {
  ResetPasswordPage.visit();
});

When("user mengisi nomor telepon untuk reset password yaitu {string}", (phone) => {
  ResetPasswordPage.typeWrongPhone(phone);
});

When("user mengisi nomor telepon yang sudah terdaftar", () => {
  ResetPasswordPage.typeRegisteredPhone();
});

When("user klik tombol Cari Akun", () => {
  ResetPasswordPage.clickSubmit();
});

When("user mengisi kode OTP yang salah", () => {
  ResetPasswordPage.typeWrongOTP();
});

Then("muncul peringatan reset password {string}", (text) => {
  ResetPasswordPage.checkWarning(text);
});

Then("muncul peringatan bahwa kode {string}", (text) => {
  ResetPasswordPage.checkWarningOTP(text);
});

Then("user berhasil diarahkan ke halaman OTP", () => {
  ResetPasswordPage.checkOtpPage();
});
