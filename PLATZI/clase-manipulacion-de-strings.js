// Formas de escribir, Strings primitivos

const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo')
console.log(typeof stringPrimitivoTambien)

// Formas de escribir, Strings objetos

const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)


// Acceder a caracteres

const saludo = 'Hola, ¿Cómo estás?'

console.log(saludo[0]) // me da el caracter en la posicion 0 que es H
console.log(saludo.charAt(4))  // me da el caraacter en la posicion 4
console.log(saludo.indexOf('C')) // busca esta letra y nos da la posicion de donde se encuentra
console.log(saludo.indexOf('estás')) // no muestra desde que posicion comienza esta palabra
console.log(saludo.indexOf('perro')) // busca esata palabra en todo el texto, si da -1 indica que no existe
console.log(saludo.lastIndexOf('o')) // muestra la ultima posicion donde se encuentra la "o"
console.log(saludo.indexOf('o')) // muestra la posicion de la primera coincidencia
console.log(saludo.slice(0,8)) // metodo que recibe 2 parametros, slice(inicio,fin-1) nos muestra el texto que se encuentra entre estos indices

console.log(saludo.length) // nos muestra la longitud del texto
console.log(saludo.toUpperCase()) // convierte todo a mayuscula
console.log(saludo.toLowerCase()) // Convierte toro a minuscula

// Se divide el string saludo, cada que encuentra un espacio y se guarda en saludoDividido
const saludoDividido = saludo.split(" ")
console.log(saludoDividido)
console.log(saludoDividido[1])

// Con el metodo "trim()" quita los espacios del inicio y el final
const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

// El metodo "replace(palabaraBuscar,RemolzadoPlabraBuscada)"
const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo','👻')
console.log(nuevoSaludo)

