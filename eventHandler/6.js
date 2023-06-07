const array = [
  ["1-1", "1-2"],
  ["2-1", "2-2"],
  ["3-1", "3-2"],
];

for (i = 0; i < array.length; i++) {
  for (j = 0; j < array[i].length; j++) console.log(array[i][j]);
}

console.log("---------");

for (const value of array) {
  for (const no of value) {
    console.log(no);
  }
}

console.log("---------");

array.forEach(function (arr) {
  arr.forEach(function (brr) {
    console.log(brr);
  });
});
