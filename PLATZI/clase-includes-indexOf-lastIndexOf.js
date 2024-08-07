const ages=[1,4,6,2,8,9,10]
// El método inclues(valorBuscado), si lo encuentra en el array, devuelve true
// si "NO" lo encuentra, devuelve "false"
const includeAge= ages.includes(10)
const includeAge2= ages.includes(100)

// El método includes(valorBuscado, indiceInicio), el indice se cuenta desde 0 
const includeIndexAge= ages.includes(2,3)

console.log("Método includes")
console.log(includeAge)
console.log(includeAge2)
console.log(includeIndexAge)

console.log("________________")
// Método indexOf(valorBuscar), este método nos indica en que inice se encuentra el elemento 
// si se encuentra regresa el indice
// si "NO" se encuentra, regresa -1

const prices = [49,400,18,34,67]
const indexOfPrices = prices.indexOf(34)
const indexOfPrices2 = prices.indexOf(1)
console.log('Método indexOf')
console.log('El número 49 se encuentra en la posición: ',indexOfPrices)
console.log('El número 1 (false) se encuentra en la posición: ',indexOfPrices2)

// Método lastIndexOf(valorBuscar), este método busca el ultimo de izquierda a derecha
// si hay 3 elementos iguales, nos muestra la posición del 3 elemento(de izquierda a derecha)

console.log("________________")
console.log('Método lastIndexOf')
const puntosClavados = [50,87,90,76,85,76,87,98,76]
//                     [0 , 1, 2, 3, 4, 5, 6, 7, 8]    
const lastIndexOfClavado = puntosClavados.lastIndexOf(76)
const lastIndexOfClavado2 = puntosClavados.lastIndexOf(26)

console.log(`La ultima posición de 76 es: ${lastIndexOfClavado} `)
console.log(`La ultima posición de 26(false) es: ${lastIndexOfClavado2} `)