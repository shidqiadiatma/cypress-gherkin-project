# Dokumentasi Cara Menjalankan Cypress

## Prasyarat
- Node.js dan npm sudah terinstall
- Chrome browser sudah terinstall

## Instalasi
1. Buka terminal di folder project.
2. Jalankan:
   ```sh
   npm install
   ```

## Menjalankan Semua Test `.feature` (Headed Chrome)
```sh
npx cypress run --browser chrome --headed
```

## Menjalankan Test Secara Interaktif
```sh
npx cypress open
```

## Menjalankan Test Spesifik `.feature`
Ganti `nama-file.feature` dengan nama file yang ingin dijalankan:
```sh
npx cypress run --browser chrome --headed --spec "cypress/e2e/nama-file.feature"
```
Contoh:
```sh
npx cypress run --browser chrome --headed --spec "cypress/e2e/reset-password.feature"
```

## Generate Report
Setelah test selesai, report otomatis akan dibuat di folder:
```
cypress/reports/
```
Buka file HTML di folder tersebut untuk melihat hasil report.

## Menyimpan Data Rahasia
- Simpan data rahasia seperti password di file `cypress/fixtures/credentials.json`
- Tambahkan file tersebut ke `.gitignore` agar tidak ter-push ke repository

## Struktur Folder
- `cypress/e2e/` : Berisi file feature dan test case
- `cypress/support/pages/` : Page Object untuk tiap halaman
- `cypress/support/step_definitions/` : Step definitions untuk