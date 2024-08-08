// 1. Copyng an Array

const originalArray = [1, 2, 3, 4, 5]
const copyArray = [...originalArray]
console.log(originalArray)
console.log(copyArray)

// 2. Combining Arrays
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1,...array2]
console.log("_________________________________")
console.log(array1)
console.log(array2)
console.log(combinedArray)

// 3. Creating Arrays with Additional Elements

const baseArray = [1, 2, 3]
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]
console.log("_________________________________")
console.log(baseArray)
console.log(arrayWithAdditionalElements)

// 4. Pass elements to functions
function sum(a, b, c){
    return a + b + c
}

const numbers = [1,2,3]
console.log(sum(...numbers))