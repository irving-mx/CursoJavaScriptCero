const personalizedMessage = () => 'Holaaaaaa fin'

function Rocket(name,ownMessage){
    this.name = name
    this.launchMessage = ownMessage
}

const falcon9Rocket = new Rocket("Irving", personalizedMessage)
const falcon10Rocket = new Rocket("Picho", personalizedMessage)
const falcon11Rocket = new Rocket("Ingrid",personalizedMessage)

const RocketWithArrowFunction = (name,ownMessage) =>({
    name: name,
    launchMessage: ownMessage 
})

const personalizedMessageForArrowFunction = () => 'Nueva funcion flecha'
const falconRocket100 = RocketWithArrowFunction('Irving',personalizedMessageForArrowFunction)
// console.log(falconRocket100.name)
// console.log(falconRocket100.launchMessage())
// console.log("______________________________________")

// console.log(falcon9Rocket.name)
// console.log(falcon9Rocket.launchMessage())

// console.log("______________________________________")
// console.log(falcon10Rocket.name)
// console.log(falcon10Rocket.launchMessage())

// console.log("______________________________________")
// console.log(falcon11Rocket.name)
// console.log(falcon11Rocket.launchMessage())


function Estudiante(nombre,carrera,pais,hobbie){
    this.nombre=nombre
    this.carrera=carrera
    this.pais=pais
    this.hobbie= ()=>`Mi hobbie favorito es ${hobbie}`
}

const estudianteUAM = new Estudiante('Irving','Ing en Computación','Mexico','Futbol')
const estudianteCBTIS = new Estudiante('Diego','Ing en Alimentos','Mexico','Padel')

console.log(estudianteUAM.nombre)
console.log(estudianteUAM.carrera)
console.log(estudianteUAM.pais)
console.log(estudianteUAM.hobbie())

console.log("____________________________")

console.log(estudianteCBTIS.nombre)
console.log(estudianteCBTIS.carrera)
console.log(estudianteCBTIS.pais)
console.log(estudianteCBTIS.hobbie())