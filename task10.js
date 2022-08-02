// Buatlah fungsi untuk mengecek tahun kabisat
// input : 2021
// output : 2021 bukan tahun kabisat

// input : 2024
// output : 2024 adalah tahun kabisat

//Wikipedia :
// Tahun kabisat (bahasa Inggris: Leap year) merupakan tahun yang mengalami penambahan satu hari dengan tujuan untuk menyesuaikan penanggalan dengan tahun astronomi.
// Dalam satu tahun tidak secara persis terdiri dari 365 hari, tetapi 365 hari 5 jam 48 menit 45,1814 detik. Jika hal ini tidak dihiraukan, 
// maka setiap empat tahun akan kekurangan hampir 1 hari (tepatnya 23 jam 15 menit 0,7256 detik).
// Maka untuk mengkompensasi hal ini, setiap 4 tahun sekali (tahun yang bisa dibagi 4), diberi 1 hari ekstra: 29 Februari.
// Tetapi karena 5 jam 48 menit 45,1814 detik kurang dari 6 jam, maka tahun-tahun yang bisa dibagi 100 (seperti tahun 1900), bukan tahun kabisat, 
// kecuali bisa dibagi dengan 400 (seperti tahun 2000).

const tahunKabisat = (year) => {
  if (year % 400 !== 0 && year % 100 !== 0 && year % 4 === 0) {
    return `${year} adalah tahun kabisat`;
  } else if (year % 400 !== 0 && year % 100 !== 0 && year % 4 !== 0) {
    return `${year} bukan tahun kabisat`;
  } else if (year % 400 !== 0 && year % 100 === 0) {
    return `${year} bukan tahun kabisat`;
  } else if (year % 400 === 0) {
    return `${year} adalah tahun kabisat`;
  }
};

console.log(tahunKabisat(2021));
console.log(tahunKabisat(2024));
console.log(tahunKabisat(1900));
console.log(tahunKabisat(2000));
