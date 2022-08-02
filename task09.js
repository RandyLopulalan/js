// Buatlah fungsi untuk menentukan bilangan terkecil dan terbesar dari sebuah array
// Contoh : array [4,2,6,88,3,11]
// Maka outputnya adalah low : 2, high : 88
// dilarang menggunakan built in function

const lowHigh = (arr) => {
  let low = arr[0];
  let high = arr[0];

  for (let data of arr) {
    if (data > high) {
      high = data;
    } else if (data < low) low = data;
  }

  return { low, high };
};

console.log(lowHigh([4, 2, 6, 88, 3, 11]));
console.log(lowHigh([4, 1, 6, 20, 3, 11]));