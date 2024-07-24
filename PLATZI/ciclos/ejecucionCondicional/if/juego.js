const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt("Adivina el número secreto entre el 1 al 10"));

console.log(`Este es el número con el que juegas ${numeroJugador}`)

if(numeroJugador === numeroSecreto){
    console.log("!Felicidades, adivinaste el número secreto !")
}else if(numeroJugador < numeroSecreto){
    console.log(`Tu numero es demasiado bajo  ${numeroJugador} < ${numeroSecreto5}`)
}else{
    console.log(`Perdiste, el numero secreto es: ${numeroSecreto}`)
}