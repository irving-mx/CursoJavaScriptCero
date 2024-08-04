// Methods that iterate over an array
// Methods that DO NOT modify the original array (Immutability)

// El metodo map toma individualmente cada elemento y lo transforma, en este caso
// genera un array con los valores transformados
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map((number) => number * 2);
console.log(doubled)

const triple = numbers.map((num)=> num * 3)
console.log(triple)

// Metodo forEach, aplica una funcion o una accion a cada elemento en tiempo real
// no devuelve nada, ni array ni nada, solo se trasnforma dicho elemento en su ejecucion

const names = ['Picho','Katya','Ingrid','Irving']
names.forEach((nombre)=>{
    console.log(`Mi nombre es ${nombre}`)
})



const temperatures = [100,90,80,70,60,50]
    function fahrenheitToCelsiusMap(fahrenheit){
        const result = fahrenheit.map((far)=> ((far-32) * (5/9)).toFixed(2))
        console.log(result)
    }
fahrenheitToCelsiusMap(temperatures)



    function fahrenheitToCelsiusforEach(number){
        number.forEach((number)=> {
            const valor = (number-32)*(5/9)
            console.log(valor)

        })
    }

    fahrenheitToCelsiusforEach(temperatures)

// Sumatoria

const sumatoria = [ 1, 2, 3, 4, 5]
    function sumatoriaTotal(arrayNumeros){
        let resultado = 0; 
        arrayNumeros.forEach((num)=>{
            resultado += num
            console.log(`La sumatoria parcial es: ${resultado}`)
        });
        console.log(`La sumatoria total es: ${resultado}`)

    }

    sumatoriaTotal(sumatoria);

    // Exercise: Sum of Elements in an Array
    const newNumbers = [1, 2, 3, 4, 5]
    let suma = 0
    newNumbers.forEach(number =>{
        suma += number
    })
    console.log('Arra of Numbers: ', newNumbers)
    console.log('Sum of Numbers: ', suma)