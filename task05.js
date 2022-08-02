// Buatlah fungsi sebagai berikut :
// int : 4, maka outputnya adalah : empat
// int : 20, maka outputnya adalah : dua puluh
// int : 39, maka outputnya adalah : tiga puluh sembilan
// silahkan masukkan bilangan 1-100

const number = (num) => {
  const a = [
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
    "sepuluh ",
    "sebelas ",
    "dua belas",
    "tiga belas ",
    "empat belas ",
    "lima belas",
    "enam belas",
    "tujuh belas ",
    "delapan belas",
    "sembilan belas",
  ];
  const b = [
    "dua puluh",
    "tiga puluh",
    "empat puluh",
    "lima puluh",
    "enam puluh",
    "tujuh puluh",
    "delapan puluh",
    "sembilan puluh",
  ];
  let c = 0;
  let d;

  for (let i = 1; i <= num; i++) {
    if (i < 20) {
      console.log(`int:${i} adalah ${a[i - 1]}`);
    } else if (i < 100) {
      if (i % 10 === 0) {
        console.log(`int:${i} adalah ${b[c]}`);
        c++;
      } else {
        d = i.toString().split("");
        console.log(`int:${i} adalah ${a[d[0] - 1]} puluh ${a[d[1] - 1]}`);
      }
    } else {
      console.log(`int:${i} adalah seratus`);
    }
  }
};

number(100);
