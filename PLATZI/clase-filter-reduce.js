// Método reduce
// Este método reduce un array a un solo 

const valores = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const resultado = valores.reduce((acumulador, valor) => acumulador + valor)
console.log(resultado)


console.log("___________________")
// Método filter
// Se utiliza para crear un nuevo array con todos los elementos que cumplan con lo que indica la función

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const isPar = number.filter((num)=> num % 2 === 0 )
console.log(`Numeros pares: ${isPar}`)

console.log("___________________")

// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability)

// filter()
console.log("Método filter")
const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(numbers)
console.log(evenNumbers)

console.log("___________________")
console.log("Método reduce")
// reduce() case 1
const numberReduce = [ 1, 2, 3, 4, 5]
const sum = numberReduce.reduce((acumulador, number)=> acumulador += number, 0)
console.log(numberReduce)
console.log(sum)

// reduce() case 2 Ejemplo para contar las repeticiones de una palabra
const words = ['name','hello','cactus','lluvia','sol','comida','cactus','cactus']
const repeticionPalabra = words.reduce((acumulador, word)=>{
    acumulador[word] = (acumulador[word] || 0) + 1;
    return acumulador
}, {});
console.log(repeticionPalabra)
// Este ejemplo al inicio el acumulador es un objeto vacio { }
// cuando inicia en este ejemplo tendra { name : 1}
// porque al inicio acumulador[name] = undefined, y con el "or"
// es undefined o 0, pero se pone el 0, ahora se agrega un 1 por default
// que indica que aparecio por lo menos 1 vez la palabra

// en el caso de "cactus", en su segunda aparicion { cactus: 1}
// y ahora se le suma 1 y eso hace 1+ 1 = 2


// Ejemplo del curso:
const words2=['apple','banana','hello','bye','banana','bye','bye']
const wordFrecuency=words2.reduce((accumulator,currentValue)=>{
    if(accumulator[currentValue]){
        accumulator[currentValue]++}
        else{
            accumulator[currentValue]=1}
return accumulator},{})
console.log(wordFrecuency)
