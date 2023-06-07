const array = [1, 2, 3];

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (const value of array) {
  console.log(value);
}

array.forEach(function (i) {
  console.log(i);
});
