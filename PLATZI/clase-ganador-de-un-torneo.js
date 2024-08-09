// Todos contra todos, cada equipo se enfrenta a los demas
// Solo dos equipos compiten entre si en cada enfrentamiento
// un equipo es local y el otro visitante
// solo hay 1 ganador "NO HAY EMPATES"
// Si gana = 3 puntos, si pierde = 0 puntos
//  Gana el que tiene mas puntos

// [equipoLocal, equipoVisitante]
const competitions = [
    ['JavaScript','C#'],
    ['C#','Phyton'],
    ['Phyton','JavaScript']
]

// 1 significa que gano el equipo local y 0 significa que gano el equipo visitante
const results = [0, 0, 1]
//[gano C#, gano Phyton, gano Phyton]

/*
    scores ={
    javascript: 6,
    c# : 0,
    phyton : 3
    }

*/

function tournamentWinner(competitions,results){
    const scores = {}
    let winner = ''
    for(let i=0 ; i< competitions.length; i++){
        const [home,away] = competitions[i];
        // console.log(`Home: ${home} , away: ${away}`)
        const winnigTeam = results[i] == 0 ?  away : home 
        // console.log(winnigTeam)
        scores[winnigTeam] = (scores[winnigTeam] || 0) + 3
        console.log("___________________1")
        console.log(scores)
        if( !winner|| scores[winnigTeam] > scores[winner]){
            console.log("___________________2")
            console.log("la variable Winner es : ",winner)
            console.log("la variable scores[winnigTeam] es : ",scores[winnigTeam])
            console.log("la variable scores[winner] es : ",scores[winner])
            winner = winnigTeam
        }
    }
    // console.log(scores)
    return winner
}

console.log(tournamentWinner(competitions,results))
