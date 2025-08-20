Cypress.on('uncaught:exception', (err, runnable) => {
  // return false agar Cypress tidak gagal jika ada error JS dari aplikasi
  return false;
});