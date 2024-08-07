const animals = ['ant','bison','camel','duck','elephant']

// Slice(indiceInicio,indiceFin)
// toma la fracción que se le indica
console.log(animals.slice(1,3))
console.log("________________________")
// Slice(IndiceInicio)
// tomara como inicio el indice, hasta el final
console.log(animals.slice(3))
console.log("________________________")

// Slice()
// sin parametros, se realiza una copia total del array original
console.log(animals.slice())
console.log("________________________")

// Slice(valorNegativo)
// En este caso se empieza a contar de derecha a izquierda
console.log(animals.slice(-3))
console.log("________________________")

// Slice(valorPositivo,valorNegativo)
// En este caso se empieza a contar de derecha a izquierda y termina en el positivo
// de dercha a izquierda
console.log(animals.slice(1,-3))
console.log("________________________")

