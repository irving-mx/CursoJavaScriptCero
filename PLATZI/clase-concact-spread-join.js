// Methods that DO NOT modify the original array (Immutability)

const morseCode1 = ['....','---'] // Codigo morse: H O
const morseCode2 = ['.-..','.-'] // Codigo morse: L A

// Combine with concat() - way 1
const morseCodeMessage = morseCode1.concat(morseCode2)
console.log("Método concat 1")
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

// Combine with concat() - way 2
const morseCodeMessage2 = [].concat(morseCode1,morseCode2)
console.log("__________________________")
console.log("Método concat 2")

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

// Combine  with Spread operator

function combineMorseMessage(morseCode1, morseCode2){
        console.log([...morseCode1,...morseCode2])
}
console.log("__________________________")
console.log("Método Spread")
combineMorseMessage(morseCode1,morseCode2)

console.log("__________________________")
console.log("Método Spread")
const numbers = [1,2,3]
const string = 'string'
combineMorseMessage(numbers,string)

console.log("__________________________")
console.log("Método Join")

const morseCodeMessageString = morseCodeMessage.join('🌵')
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessageString)
