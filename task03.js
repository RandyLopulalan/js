// Buatlah fungsi untuk menampilkan jumlah digit angka tergantung dimana posisi atau tempat dari angka dalam sebuah string “9.86-A5.321”!
// Contoh: printDigitValue(‘9.86-A5.321’);
// Hasil :
// 9865321
// 9000000
// 800000
// 60000
// 5000
// 300
// 20
// 1

const digitAngka = (str) => {
  const newDigit = str.replace(/([.-]|[a-z])/gi, "");
  const arr = newDigit.split("");
  if (arr.length === 1) {
    return console.log('1');;
  } else {
    let digit = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      digit = digit + "0";
    }
    
    const newArr = digit.split("").join("");
    arr.shift()
    const a = arr.join("")

    return console.log(newArr), digitAngka(a)
  }
};

digitAngka("9.86-A5.321")
