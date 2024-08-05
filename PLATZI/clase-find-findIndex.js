// Methods that iterate over an array
// Methods that DO NOT modify the original array (Immutability)

// El metodo find(), devuelve el primer elemento que cumpla con la funcion o la regla

const numeros = [1,2,4,6,8,10,20]
const findNum = numeros.find((num)=> num >= 8)
console.log(numeros)
console.log(findNum)

// EL método findIndex(), devuelve la posicion del primer elemento que cumple con la funcion o regla
const findIndexNum = numeros.findIndex((num)=> num >= 8)
console.log(findIndexNum)