var arr = [10, 16, 25, 5, 302, 160, 88, 501, 250, 110];

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
const multiplyedArray = arr.map( element=> element*10)
// const multiplyedArray = arr.map(function(element){
    // return element *3;
// });- with normal function 
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
arr.forEach(evenItem =>{
    if(evenItem % 2 == 0) {
        console.log(evenItem)
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

function sliceSplice(){
    const arr1 = [10, 16, 25, 5, 302, 160, 88, 501, 250, 110];
// Delete 3 items from the beginning of the array
const arrDeleteStart = arr1.slice(3)
console.log(arrDeleteStart)
// Delete 3 items starting from the end of the array
const arrDeleteEnd = arr1.slice(0,-3)
console.log(arrDeleteEnd)
// Insert one new element after the second element in the array
arr1.splice(2, 0, 999999)
console.log(arr)
// Insert two new elements after the third element in the array
arr1.splice(2, 1, 888888, 777777)
console.log(arr)
// Replace the third element with a new one
arr1.splice(2, 1, 666666)
console.log(arr1)
// Delete one element starting from the second element and insert three new elements (in one line)
// arr.splice(2, 1, 999999, 999999, 999999)
arr1.splice(2,3,'999999','999999', '999999');
console.log(arr1);

// Create two new arrays both of them containing two elements. Create third array which
//  has every element from the two newly created array (in one line)
const testArr = [1, 2]
const testArr1 = [3, 4]
console.log(combinedArr = [...testArr, ...testArr1])    

}

// map and set testing
// Also Known As playground 
// let ongyMap = new Map();
// ongyMap.set('age', 999999);
// ongyMap.set('height', 999999);
// ongyMap.set('married', false);
// // alert(ongyMap.has('age'));
// console.log(ongyMap);

// map task 
function mapPractise(){
    // Create a new Map
let person = new Map();
// Fill the Map with entries
person.set('name', 'John');
person.set('secondName', 'Georgiev');
person.set('age', 23);
person.set('height', '190cm')
person.set('job', false)
console.log(person.keys())
// Create a second Map with Object.entries() method
let obj = Object.entries({
    "name" : 'Martin',
    "secondName" : 'Marinov'
});
let random = new Map(obj)

let string1 = "boyan";
console.log(`ucha programirane s ${string1}`)
// Extract the first and second element from the first Map as key and value pair
console.log(person.get())
console.log(person.get('name'))
let arrayFromMapKeys = [...person.keys()]
let arrayFromMapValues = [...person.values()]
console.log(`${arrayFromMapKeys[0]}, ${arrayFromMapValues[0]}`)
console.log(`${arrayFromMapKeys[1]}, ${arrayFromMapValues[1]}`)
// console.log(arrayFromMap[0])
// Check if a key already exists in the first Map and:
console.log(person.has('name'))
// if it exists, update the entry's current value to a new one
if (person.has('name')) {
    person.set('name', 'anton')
}
console.log(person)
// if it does not exist, append a new entry to the end of the Map with that key and some value
if (!person.has('title')) {
    person.set('title', 'donDomat')
}
// Check what is the size of the first Map and compare if it's equal to the size of the second Map
if (person.size == random.size){
    console.log("they are equal")
} else{
    console.log("they are not equal")
}
// Try to add, update and remove entries from the first Map.
person.set('computer', true)
if (person.has('name')) {
    person.set('name', 'George')
}
person.delete('secondName')
console.log(person)
// Print all of the values of the first Map - one line (not for loop)
console.log(person.values())
// Print all of the keys of the Map - same
console.log(person.keys())
}


function setPrectise() {
    // Create a new Set with days of week
let daysOfTheWeek = new Set(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])
console.log(daysOfTheWeek)
// Convert a set into an array (two ways of doing it)
const dotwm = [...daysOfTheWeek]
console.log(dotwm)
// for(let k = 0; k<dotwm.length; k++){
//     console.log(`${dotwm}`)
// }
const anotherArray = Array.from(daysOfTheWeek)
console.log(anotherArray)
var emptyArray = []
daysOfTheWeek.forEach(day =>{
    emptyArray.push(day)
})
console.log(emptyArray)
// Create an array with duplicate elements in it. Remove the duplicates using set.
let dublicateSet = new Set()
dublicateSet.add("boomerang");
dublicateSet.add("random")
dublicateSet.add("anotherRandom")
dublicateSet.add("boomerang")
dublicateSet.add("Monday")
console.log(dublicateSet)
// Check if a value exists in a set
console.log(daysOfTheWeek.has("Monday"))
// Check the length of a set
console.log(daysOfTheWeek.size)
// Use two sets to check if an item exists in both of them
console.log(daysOfTheWeek.has("Monday"))
console.log(dublicateSet.has("Monday"))
let check = emptyArray.includes("Monday")
console.log(check)
// Remove set member
console.log(daysOfTheWeek.delete("Tuesday"))
// Loop over set (two ways of doing it)
 for (let i = 0; i < dotwm.length; i++) {
    console.log("i looped over")
 }
}
function classConstructor(){
    
class firstConstructor {
    constructor(firstName, secondMame, number) {
        this.name = firstName;
        this.anotherName = secondMame;
        this.phoneNumber = number
    }
    get firstConstructor(){
        console.log(this.name)
    }
}


let theActualPatternToLogIt = new firstConstructor("Kolio", "Georgiev", 088379127)
console.log(theActualPatternToLogIt)
console.log("Needs more work :D")
}