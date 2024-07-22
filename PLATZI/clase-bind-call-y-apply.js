const owner = 'Ingrid'
const address = 'Acapulco'
function dogGreeting(owner, address){
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address} `)
}

const newHouse = {
    dogName: 'Coco'
}

dogGreeting.call(newHouse,owner,address)
console.log("_____________ bind abajo")

const bindExample = dogGreeting.bind(newHouse,owner,address)
bindExample();

console.log("_____________ apply abajo")

dogGreeting.apply(newHouse,[owner,address])
