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
persona.saludar()