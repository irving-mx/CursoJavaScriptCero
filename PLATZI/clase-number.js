// 1. Tipo Entero y decimal

const entero = 42
const decimal = 3.14
console.log(typeof entero)
console.log(typeof decimal)

// 2. Notación cientifica
const cientifico = 5e3

// 3. Infinitos y NaN (no es un numero)
const infinito = Infinity
const noEsUnNumero = NaN

// Operaciones aritméticas

// 1. Suma, Resta, Multiplicación y División
const suma = 1 + 3
const resta = 5 - 3
const multiplicacion = 5 * 3
const division = 6 / 2
console.log(suma, resta,multiplicacion,division)

// 2. Modulo y Exponenciación
const modulo = 15 % 8
const exponenciacion = 2 **3
console.log(modulo, exponenciacion)

// 3. Precisión
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(2))
// el metodo toFixed(numero), muestra el "numero" de decimales despues del 
console.log(resultado === 0.3)

// Operaciones Avanzadas
const raizCuadrda = Math.sqrt(16)
const valorAbsoluto = Math.abs(-8)
const aleatorio = Math.random()
console.log(raizCuadrda)
console.log(valorAbsoluto)
console.log(aleatorio)