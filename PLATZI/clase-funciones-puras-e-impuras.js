// Funciones puras

// Side Effects
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual

// ejemplo de funcion pura
function sum(a,b){
    return a + b
}

// ejemplo de funcion Impura , porque cumple con la regla 4
// 4. Imprimir mensajes en pantalla o consola

function sum(a,b){
    console.log('A', a)
    return a + b
}


// ejemplo de funcion Impura , porque cumple con la regla 1
// 1. Modificar variables globales

let total = 0

function sumWithSideEffect(a){
    total += a
    return total
}


// ejemplos de funcion Pura 
function square(x){
    return x * x
}

function addTen(y){
    return y + 10
}


const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)