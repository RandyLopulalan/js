// Ketik kode untuk swap 2 integer variables tanpa VARIABLE TAMBAHAN
// Contoh : let a = 3, let b = 7 => hasilnya a = 7, b = 3

const intVariable = () => {
  let a = 3;
  let b = 7;
  [a, b] = [b, a];
  return { a, b };
};

console.log(intVariable());
