/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña
ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sitema debe mostrar un mensaje
de bienvenida y mostrar el timeline del usuario,
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje
de error y no mostrar ningun timeline.

*/ 

const usersDatabase = [
    {
        username: "andres",
        password: "123",
    },
    {
        username: "caro",
        password: "456",
    },
    {
        username: "mariana",
        password: "789",
    }
]

const userTimeline = [
    {
        username: "Estefany",
        timeline: "Me encanta Javascript!",
    },
    {
        username: "Oscar",
        timeline: "Bebeloper es lo mejor!",
    },
    {
        username: "Mariana",
        timeline: "A mi me gusta mas el cafe que el te",
    },
    {
        username: "Andres",
        timeline: "Yo hoy no quiero trabajar",
    }
]

const username = prompt("Ingrese su nombre de usuario: ");
const password = prompt("Ingrese su contraseña: ");

function validarUsuario(usersDatabase,username, password){
    for(let i=0; i< usersDatabase.length; i++){
        if(username.toLowerCase() === usersDatabase[i].username.toLowerCase() && (password === usersDatabase[i].password)){
                console.log(usersDatabase[i])
                console.log(mensajeTimeline(userTimeline,usersDatabase[i].username,usersDatabase[i].password))       
                return;
            }
        }
        console.log("Contraseña incorrecta")
        alert("Contraseña incorrecta")
    }


function mensajeTimeline(userTimeline,username,password){
    let resultado = "No se ha encontrado nada"
    for(let i=0;i<userTimeline.length;i++){
        if(username.toLowerCase() === userTimeline[i].username.toLowerCase()){
            //console.log(userTimeline[i].timeline)
            return resultado = userTimeline[i].timeline
        }
    }
    return resultado
}

validarUsuario(usersDatabase, username, password)

