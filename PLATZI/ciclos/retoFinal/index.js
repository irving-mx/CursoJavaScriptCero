/*
Jugemos a adivinar la palabra.

El usuario tiene 3 intentos para adivinar la palabra oculta

Requerimientos:

- El juego debe tener una palabra oculta.
- El juego puede dar 1 pista de la palabra.
- El usuario debe ingresar un suposición.
- El juego debe verificar si la suposición del usuario es correcta.
- El juego debe tener un número limitado de intentos.
- El juego debe terminar cuando el usuario adivina la palabra o se queda sin intentos.

*/  


// const palabraOculta = 'cactus'
// const pistaPalabra = 'Es una planta que tolera el sol'
// let suposicionUsr;
// let intentos= 3;
// while(intentos > 0){
//     console.log(`Usted tiene ${intentos} intentos`)
//     suposicionUsr = prompt("Inserte cual es su supocision")
//     if(suposicionUsr.toLowerCase() === palabraOculta){
//         console.log(`¡Felicidades! Adivinaste la palabra : ${palabraOculta}`)
//         break;
//     }else{
//         console.log("Esa no es la palabra, sigue intentantolo")
//         intentos--
//     }
// }


    let palabraOculta="javascript";
    let intentos=3;

    function verificarSuposicion(suposicion,palabraOculta){
        if(suposicion.toLowerCase()===palabraOculta){
            return true;}
            return false;
        }

    function jugarAdivinaLaPalabra(){
        alert("Bienvenido a jugar adivina la palabra oculta");
        alert("Tienes 3 intentos para adivinar la palabra");
        alert("-pista- la palabra oculta es un lenguaje de programaciÃ³n");
            while(intentos>0){
                let suposicion=prompt("Adivina la palabra: ");
                if(verificarSuposicion(suposicion,palabraOculta)){
                    alert("Â¡Correcto! Has adivinado la palabra.");
                    break;}
                else{
                    intentos--;
                    if(intentos>0){
                        alert(`Incorrecto, Aun tienes ${intentos} intento restantes`);
                    }
                    else{alert(`Agotaste tus intentos, la palabra oculta era ${palabraOculta}`);
                            }
                        }
                    }
                }
    jugarAdivinaLaPalabra();