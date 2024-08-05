// Methods that iterate over an array
// Methods that DO NOT modify the original array (Immutability)

// El metodo find(), devuelve el primer elemento que cumpla con la funcion o la regla

const numeros = [1,2,4,6,8,10,20]
const findNum = numeros.find((num)=> num >= 8)
console.log(numeros)
console.log(findNum)

// EL método findIndex(), devuelve la posicion del primer elemento que cumple con la funcion o regla
const findIndexNum = numeros.findIndex((num)=> num >= 8)
console.log(findIndexNum)



// Exercise: Raffle Winner Verification program

// Ejercicio de ganador de una rifa
// Ingresar el 

const winningParticipants = [
    {id: 1, name: 'Jennifer', ticketNumber: 001},
    {id: 8, name: 'Michael', ticketNumber: 008},
    {id: 15, name: 'Emily', ticketNumber: 015},
    {id: 47, name: 'Charlie', ticketNumber: 047}
]

// revisar si hay un ganador por el nombre
const jugador2 = {id: 15, name:'Emily', ticketNumber: 015}

    const encontrar = winningParticipants.find((jugador,index,array)=>{
    return  jugador.name === jugador2.name
    })

    function findWinnerByName(name){
        const winner = winningParticipants.find(participants => participants.name === name)
            return winner || 'No winner found with that name.'   
    }
    console.log('El jugador encontrado es: ', encontrar)

    function findIndexWinnerByTicket(ticketNumber){
        const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
        return index !== -1 ? index : 'No winner found with that ticket number.'
    }

    function displayWinnerInformation(winner){
        if(winner !== undefined && winner != null && winner !== 'No winner found with that name.'){
            console.log('Winner information: ', winner)
        }else{
            console.log('No winner found.')
        }
    }

    const winnerByName = findWinnerByName('Emily')
    const indexWinnerByTicket = findIndexWinnerByTicket(008)

    displayWinnerInformation(winnerByName)
    console.log('Index of winner by Ticket Number: ', indexWinnerByTicket)