class Animal{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido(){
        console.log("El animal emite un sonido")
    }
}

class Perro extends Animal{
    constructor(nombre, tipo, raza){
        super(nombre,tipo);
        this.raza=raza;
    }
    emitirSonido(){
        console.log("El perro ladra")
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`)
    }
}

const perro1 = new Perro("Bobby","Perro","Pug");
console.log(perro1)
console.log("_________________")

perro1.correr();
console.log("_________________")

perro1.emitirSonido();

perro1.nuevoMetodo = function(){
    console.log("Este es un método")
}
console.log("_________________")

perro1.nuevoMetodo()
console.log("_________________")

console.log(perro1)

Perro.prototype.segundoMetodo = function(){
    console.log("Es otro nuevo metodo")
}

console.log(Perro)

let currentPrototype = Object.getPrototypeOf(bast);
for (;currentPrototype !== null; currentPrototype = Object.getPrototypeOf(currentPrototype)) {
    console.log(currentPrototype);
}

