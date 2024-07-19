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


// Caracteres de escape
// const whatDoIDo = 'I'm Software Engenieer'

// 1. Escaper alternativo
const escapeAlternativo = "I'm Software Engineer"

// 2. Barra invertida
const escapeBarraInvertida = 'I\'m Software Engineer'

// 3. Template literals 
const escapeComillaInvertida = `I'm Software Engineer`

// Escritura de Strings Largos

/*
    El exito es para los que,
    lo desean, la disiplina es,
    indespensable para alcanzar,
    los objetivos y la motivacion,
    de dia a dia, para construir tu futuro
*/ 
const poema = 'El exito es para los que,\n' +
                'lo desean, la disiplina es,\n'+
                'indespensable para alcanzar,\n'+
                'los objetivos y la motivacion,\n'+
                'de dia a dia, para construir tu futuro'
// console.log(poema)

const poema2 =  'El exito es para los que,\n\
lo desean, la disiplina es,\n\
los objetivos y la motivacion,\n\
de dia a dia, para construir tu futuro'
// console.log(poema2)

const poema3 =  `El exito es para los que,
lo desean, la disiplina es,
los objetivos y la motivacion,
de dia a dia, para construir tu futuro`
console.log(poema3)


