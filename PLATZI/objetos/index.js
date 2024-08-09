/*
Un objeto es una "estructura de datos", de la forma:
key / value

objeeto{
propiedad: valor,
propiedad: valor,
propiedad: valor
Métodos
}

*/

const persona = {
    nombre: 'Jhon',
    edad: 30,
    direccion: {
        calle: "Av Insurgentes 187",
        ciudad: "CDMX"
    },
    saludar(){
        console.log(`Hola, mi nombre es: ${this.nombre}`)
    }
}

console.log(persona.nombre)
// persona.saludar()

persona.telefono = "555-555-5555";
console.log(persona.telefono)
console.log(persona)


persona.despedir= ()=>{
    console.log("Adios baby")
}

persona.despedir()
console.log(persona.direccion.calle)
delete persona.telefono
console.log(persona)

delete persona.despedir
console.log(persona)
