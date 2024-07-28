// How to create an Array ?

// 1. new Array() or Array()

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits)

// Esto crea un array con al longitud especificada, en este caso 12 y todos sus elementos seran undefined
const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1, 2, 3, 4, 5)
console.log(number)

// 2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArray =[]
console.log(emptyArray)

const sports = ['soccer','tennis','rugby']
console.log(sports)

const recipeIngredients =[
    'Flour',
    true,
    {
        ingredient:'Milk', quentity: '1 cup'
    },
    false
]
console.log(recipeIngredients)

// Accessing array elements
const firstFruit = fruits[0]
console.log(firstFruit)

// length property
const numberOfFruits = fruits.length
console.log(numberOfFruits)