// Creat PowerfullGirl Objects

function PowerpuffGirl(name, color, superpower){
    this.name=name
    this.color=color
    this.superpower=superpower
    this.isLeader = false

    this.displayInfo = function(){
        console.log(`Powerpuff Girl Information:
            Name: ${this.name}
            Color: ${this.color}
            SuperPower: ${this.superpower}
            ${this.isLeader ? 'Leader: Yes' : 'Leader:No'}
            `)
    }

    this.becomeLeader = function(){
        this.isLeader = true
        console.log(`${this.name} has become the leader of the PowerpuffGirl !`)
    }
}

const blossom = new PowerpuffGirl('Blossom','Pink','Ice Breath')
const buttercup = new PowerpuffGirl('Buttercup','Green','Super Strength')
const bubbles= new PowerpuffGirl('Bubbles','Blue','Flight')

// blossom.displayInfo()
// buttercup.displayInfo()
// bubbles.displayInfo()

// blossom.becomeLeader()


// blossom.displayInfo()
// buttercup.displayInfo()
// bubbles.displayInfo()


// Ejemplo de One Piece
function onePiecePerson(name,power,age){
    this.name = name
    this.power = power
    this.age = age
    this.captain= false

    this.displayInfo = function(){
        console.log(`Name: ${this.name}
            Power: ${this.power}
            Age: ${this.age}
            ${this.captain ? "Captain: Yes":"Captain: No"}
            `)
    }
    this.positionCaptain = function(){
        this.captain=true
        console.log(` ${this.name} is Captain`)
    }
}

const Luffy = new onePiecePerson('Luffy','Gomu Gomu','20')
const Zoro = new onePiecePerson('Zoro','Espadachin','25')
const Sanji = new onePiecePerson('Sanji','Cocinero','22')

Luffy.displayInfo()
Zoro.displayInfo()
Sanji.displayInfo()

Luffy.positionCaptain()

Luffy.displayInfo()
Zoro.displayInfo()
Sanji.displayInfo()