// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> callback

function a(){}
function b (a){}

// b(a)

// Retornar Funciones
function a(){
    function b (){
        return b
    }
}

// Asignar funciones a variables -> Expresión de función

// const a = function(){}

// Tener propiedades y métodos

function a(){}

const objeto = {}
// a.call(objeto)

// Anidar funciones -> Nested Functions

function a(){
    function b (){
        function C (){
        }
        C()
    }
    b()
}
// a()

// Es posible almacenar funciones en objetos ?

const rocket = {
    name: 'Falcon 9',
    launchMessage : function launchMessage(){
        console.log('🚀🛸')
    } 
}

rocket.launchMessage()