// Methods that DO NOT modify the original array (Immutability)

// Método every() : Este método devuelve true si todos los elementos del array cumplen con funcion y si al menos uno falla devuelve "false"
const numeros = [1,5,2,9,10,15,4,50]
const arrayIsPositive = numeros.every((num)=> num > 0)
console.log('Método Every')
console.log(arrayIsPositive)


// Método some() : Este método devuelve "true" si al menos un elemento cumple con la funcion
const numbers = [1,4,8,10,45,34,30,30]
const numbersFound = numbers.some((number)=> number > 100)
console.log('Método Some')
console.log(numbersFound)