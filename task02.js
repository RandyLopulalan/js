// Buatlah fungsi untuk reverse sebuah string
// Apabila input = “abcde”, maka outputnya = “edcba”
// Dilarang menggunakan function reverse, buatlah logika sendiri

const reverseString = (str) => {
  const arr = str.split("");
  let newString = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    newString = newString + arr[i];
  }
  return newString;
};

console.log(reverseString("abcde"));
console.log(reverseString("hallo world"));
