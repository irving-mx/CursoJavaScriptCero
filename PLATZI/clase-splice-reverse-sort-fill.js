// Ejemplo del método sort: ordena de menor a mayor

let numeros = [4, 9, 5, 3, 8, 1, 2, 11, 15, 18];
numeros.sort((a, b)=> a -b);
console.log("______________")
console.log("Método sort")
console.log(numeros); 

// Método fill(valor a rellenar,indice inicio,indice final ): este método recibe 3 argumentos como parametros, el primero: se rellenara el arreglo con el valor dado, en este caso es el numero 10, este valor lo pondra en la posicion 2, 3 y 4, quitanto a los valores que estaban ahí, en este caso el  4, 5 del arreglo original, el arreglo se modifica y queda 10,10
console.log("______________")
console.log("Método Fill")
// arreglo inicial: [1, 2, 3, 4, 5]
// arreglo con metodo fill(10,2,4) : [1, 2, 10, 10, 5]
let arregloFill = [1, 2, 3, 4, 5];
arregloFill.fill(10, 2, 4)
console.log(arregloFill)

// Método reverse() : invierte todo el arrelo inicial
console.log("______________")
console.log("Método reverse")
let letras = ['a','b','c','d','e']
letras.reverse()
console.log(letras)

// Método splice
console.log("______________")
console.log("Método splice")
// Eliminar elementos
let frutas = ['Manzana','Sandia','Papaya','Limon','Melon']
console.log(`El inicio del array es : ${frutas}`)
frutas.splice(1,2)
console.log(`El array modificado (Método Eliminar) : ${frutas}`)
// Añadir elementos 
// splice(indice donde empezar a añadir, numero elementos a remplazar, elemento1, elmento2, elemento3)
console.log("______________")
console.log("Método splice, añadir elementos")
console.log(`El inicio del array es : ${frutas}`)

frutas.splice(2,0,'Platano','Naranja','Toronja')
console.log(`El array modificado (Método Añadir) : ${frutas}`)

// Reemplazar elementos
// splice(indice inicio,numero elementos a remplazar(2), elementoNuevo1,elementoNuevo2)

console.log("______________")
console.log("Método splice, reemplazar elementos")
console.log(`El inicio del array es : ${frutas}`)
frutas.splice(0,2,'Jaca','Maracuya')
console.log(`El array modificado (Método Reemplzar elementos) : ${frutas}`)

console.log("______________")

// Curso platzi:

// Methods that modify the original array (Mutability)
// splice(indice inicio, elementos a eliminar, elementoNuevo1,elementoNuevo2)
const vegetables = ['carrot','brocoli','spinach','tomato']
const removeVegetables = vegetables.splice(2,1,'cucumber','onion')
console.log(vegetables)
console.log(removeVegetables)

console.log("______________")
// metodo reverse()
const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
const reverseNumbers = numbers.reverse()
console.log(reverseNumbers)

console.log("______________1")
// sort() with number
const unsortedNumbers1 = [4, 18, 1, 62, 34]
console.log(unsortedNumbers1)

const unicodeSortedNumbers= unsortedNumbers1.sort()
console.log(unicodeSortedNumbers)

console.log("______________2")

const unsortedNumbers2 = [4, 18, 1, 62, 34]
console.log(unsortedNumbers2)

const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b)
// 4 - 18 = -14 como es negativo los deja asi
// 18 - 1 = 17 como es positivo cambia la posicion 1 , 18
console.log(sortedNumbers)


console.log("______________")
// sort() with strings - UTF-16  ordena en orden alfabetico
const cities = ['New York','Paris','Tokyo','London']
console.log(cities)

const sortedCities = cities.sort()
console.log(sortedCities)

console.log("______________")

// fill()
const ages = [21, 35, 45, 50]
console.log(ages.fill('☀️',1,3))
console.log(ages.fill('🚀',1))
console.log(ages.fill('🚀'))