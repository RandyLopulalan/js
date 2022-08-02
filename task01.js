// Buatlah fungsi sebagai berikut :
// Apabila terdapat int = 4, maka outputnya 24 (prosesnya : 4*3*2*1)
// Apabila terdapat int = 8, maka outputnya 40320 (prosesnya : 8*7*6*5*4*3*2*1)

const factorialRecursive = (value) => {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
};

console.log(factorialRecursive(4));
console.log(factorialRecursive(8));
