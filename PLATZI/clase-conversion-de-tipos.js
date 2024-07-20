// Explicit Type Casting, cambiar a forma explícita

const string = '42'
const integer = parseInt(string) // convierte el string a numero (tipo Number)
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

// Implicit Type Casting, cambiar a forma implícita

const sum = '5' + 3 
console.log(sum)


const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)
console.log("________________")

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringValue + stringValue) // concatena porque hay al menos 1 string
console.log(stringValue + numberValue) // concatena porque hay al menos 1 string
console.log(stringValue + booleanValue)  // concatena porque hay al menos 1 string
console.log("________________")

console.log(numberValue + stringValue) // concatena porque hay al menos 1 string
console.log(numberValue + numberValue)  // Realiza la suma
console.log(numberValue + booleanValue) // Realiza la suma

console.log("________________")
console.log(booleanValue + stringValue) // concatena porque hay al menos 1 string
console.log(booleanValue + numberValue) // Realiza la suma
console.log(booleanValue + booleanValue) // Realiza la suma

// Nota: si es false= 0  y si es true = 1