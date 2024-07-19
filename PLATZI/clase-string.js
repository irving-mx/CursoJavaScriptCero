// Creación de string

const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas dobles"
const terceraOpcion = `Comillas diagonales` 

//1. Concatenación: Opción +

const direccion = 'Calle Acapulco 23'
const ciudad = 'Iguala de la independencia'
const direccionCompleta = 'Mi dirección completa es ' +direccion + ',' + ciudad

const direccionCompletaConEspacio = 'Mi dirección completa es ' +direccion + ' ' + ciudad

console.log(direccionCompleta)
console.log(direccionCompletaConEspacio)


//2. Concatenación: Template Literals uso de $

const nombre = 'Irving'
const pais = '🇲🇽';

const presentacion = `Hola, soy ${nombre} de ${pais}`

console.log(presentacion)


//3. Concatenación: join()

const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = 'Mexico'
const pensamiento = [primeraParte, segundaParte, terceraParte]
const resultado = pensamiento.join('🌮 ')
console.log(resultado)

//4. Concatenación: concat()

const var1 = 'Hola, yo soy egresado de la'
const var2 = 'poderosisima UAM👨‍🎓'
const var3 = 'y soy de Iguala,Gro☀️'
const result = 'Un poco sobre mi: '.concat(var1,', ',var2,', ',var3)
console.log(result)
