// flat
const array = [1,1,2,3,4, [1,5,6,7, [1,8,9,0]]];

console.log(array.flat(3));

// Flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2]));