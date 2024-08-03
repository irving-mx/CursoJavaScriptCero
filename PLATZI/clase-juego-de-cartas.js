// // tienes un array que son tus cartas
// // barajear las cartas aleatoriamente
// // repartir las cartas, dependiendo la cantidad de cartas y 
// // debes de usar el metodo splice

// let cartas = ['pikachu', 'charmander', 'squirtle', 'articuno'];

// function reordenarCartas(cartas) {
//     if (cartas.length !== 0) {
//         for (let i = cartas.length - 1; i > 0; i--) {
//             let j = Math.floor(Math.random() * (i + 1));
//             [cartas[i], cartas[j]] = [cartas[j], cartas[i]]; // Intercambia elementos
//         }
//     } else {
//         console.log('Array de cartas vacío');
//     }
// }

// reordenarCartas(cartas);
// console.log(cartas);


// Exercise: Card Game Implementation
// 15 cartas
const deck = ['♠','♤','♥','♡','♣','♠','♤','♥','♡','♣','♠','♤','♥','♡','♣']

// funcion barajear las cartas, utilizando el algoritmo de Fisher - Yates
function shuffleDeck() {
    for(let i = deck.length - 1; i > 0 ; i --){
        // [0, i+1]
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]] 
    }
}

// Funcion repartir cartas(extrae un numero de cartas)
function dealCards(numCard){
    const dealCards = deck.splice(0, numCard)
    return dealCards
}

shuffleDeck()
const player1Hand= dealCards(3)
const player2Hand= dealCards(3)
const player3Hand= dealCards(3)

console.log(`Player 1 Hand: ${player1Hand}`)
console.log(`Player 2 Hand: ${player2Hand}`)
console.log(`Player 3 Hand: ${player3Hand}`)
