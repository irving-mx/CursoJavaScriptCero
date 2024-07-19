//  Tipo de dato primitivo - Inmutable
let numero=23
numero = numero + 10
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// Tipo de dato Complejo - Mutable

let usuario = { nombre: 'Pepito', edad: 15}
usuario.edad = 20
console.log(usuario)

let frutas = ['manzana','pera']
frutas[0]= 'Sandia'
console.log(frutas)

function cambiarNombre(objeto){
    objeto.nombre= 'Nuevo nombre'
}

let persona = { nombre: 'Antonio'}
console.log(persona)

cambiarNombre(persona)
console.log(persona)