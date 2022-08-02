// Dari soal nomor 6, buatlah juga untuk menghasilkan output total ada berapa angka yg termasuk dari bagian low dan high
// array data =  [1,4,7,9,12], 
// int low = 2,
// int high = 15,
// maka akan menghasilkan ouput = 4

const lowHigh = (arr) => {
    const low = 2;
    const high = 15;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > low && arr[i] < high) {
        result.push(arr[i]);
      }
    }

    return result.length
  };
  
  console.log(lowHigh([1, 4, 7, 9, 12]));
  console.log(lowHigh([1, 4, 7, 9, 12, 13]));