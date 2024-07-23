const greeting = function(name){
    return `Hi, ${name}`
}
// Arrow funtionc - Explicit return

const newGreeting = (name)=>{
    return `Hi, ${name}`
}

// Arrow funtionc - Implicit return
const newGreetingImplicit = name=>`Hi, ${name}`

const newGreetingImplicitWithTwoParameters = (name,name2)=>`Hi, ${name} y ${name2}`

// Lexical Binding

const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function(message){
        console.log(`Hi ${this.name} your message is: ${message}`)
    },
    messageWithArrowFunction: (message)=>{
        console.log(`Hi ${this.name} your message is: ${message}`)
    }
}


console.log(greeting("Picho"))
console.log(newGreeting("Coco"))
console.log(newGreetingImplicit("Irving"))
console.log(newGreetingImplicitWithTwoParameters("Rocky", "Ingrid"))

fictionalCharacter.messageWithTraditionalFunction("I love pizza")
fictionalCharacter.messageWithArrowFunction("I come to Mexico")