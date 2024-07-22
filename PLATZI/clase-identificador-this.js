// el uso de this es llamado como "Enlace implicito" o "Implicit binding"
const house = {
    dogName: 'Fido',
    dooGreeting: function(){
        console.log(`Hi, I'm ${this.dogName}`)
    }
}

house.dooGreeting();




// Enlace Explicito  "Explicit binding"

function dooGreeting(){
        console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse = {
    dogName: 'Coco'
}
dooGreeting.call(newHouse)


function newDooGreeting(owner, address){
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}
const owner= 'Picho'
const address= 'Mexico #24'

newDooGreeting.call(newHouse, owner, address)


