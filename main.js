const arr = [10, 16, 25, 5, 302, 160, 88, 501, 250, 110];

console.log(arr)
function firstTask(){
    // Arr length
const length = arr.length;
console.log('length', length);
// All numbers biger than 100
const biggerThen100 = arr.filter((arr) => arr > 100);
console.log('biggerThen100', biggerThen100);
// Are all bigger then 2
const areBiggerThan2 = arr.every((arr) => arr >2);
console.log('areBiggerThan2', areBiggerThan2);
// Is there a number bigger than 500
const isNumberBiggerThan500 = arr.every((arr) => arr > 500);
console.log('isNumberBiggerThan500', isNumberBiggerThan500);
// Multiplay every number by 10
const multiplyedArray = arr.map(i => i*10)
console.log('multiplyedArray', multiplyedArray);
// Sort the array
const sortedArray = arr.sort();
console.log('sortedArray', sortedArray);
}

function forLoops(){
    // Print all even numbers in array
console.log("Print all even numbers")
for (let i = 0; i <arr.length; i++) {
        if(arr[i] % 2 == 0) {
           console.log(arr[i])
        }
    }
// Add 2 to every element in the array and print it
console.log("Add 2 to every element in the array and print it")
for (let i = 0; i<arr.length; i++){
    console.log(arr[i]+2)
}
// Check every element if it's odd or even and print a message
console.log("Check every element if it's odd or even and print a mesage")
for (let i = 0; i <arr.length; i++) {
    if(arr[i] % 2 == 0) {
       console.log(arr[i] + "is an even number")
    } else{
        console.log(arr[i] + "is an odd number")
    }
}
}

function forEach(){
    // Print all even numbers in array
arr.forEach(even =>{
    if(even % 2 == 0) {
        console.log(even)
     }
})
// Add 2 to every element in the array and print it
arr.forEach(element => {
    console.log(element + 2)
});
// Check every element if it's odd or even and print a message
arr.forEach(oddOrEven =>{
    if(oddOrEven % 2 ==0) {
        console.log(oddOrEven + "is even")
    } else {
        console.log(oddOrEven + "is odd")
    }
})
}