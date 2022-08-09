const arr = [10, 16, 25, 5, 302, 160, 88, 501, 250, 110];

console.log(arr)

for (let i = 0; i <arr.length; i++) {
    if(arr[i] % 2 == 0) {
       console.log(arr[i] + "is an even number")
    } else{
        console.log(arr[i] + "is an odd number")
    }
}
// // Arr length
// const length = arr.length;
// console.log('length', length);
// // All numbers biger than 100
// const biggerThen100 = arr.filter((arr) => arr > 100);
// console.log('biggerThen100', biggerThen100);
// // Are all bigger then 2
// const areBiggerThan2 = arr.every((arr) => arr >2);
// console.log('areBiggerThan2', areBiggerThan2);
// // Is there a number bigger than 500
// const isNumberBiggerThan500 = arr.every((arr) => arr > 500);
// console.log('isNumberBiggerThan500', isNumberBiggerThan500);
// // Multiplay every number by 10
// const multiplyedArray = arr.map(i => i*10)
// console.log('multiplyedArray', multiplyedArray);
// // Sort the array
// const sortedArray = arr.sort();
// console.log('sortedArray', sortedArray);