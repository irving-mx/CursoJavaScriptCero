/* 

for in ---> objetos

propiedades = valor

array, string

item 

for (variable in objeto){
    código a ejecutar
}
*/

const listaDeCompras={
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}
for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}
console.log("____________________")
// esto de abajo sale error, porque eso se aplica a listas
for(fruta of listaDeCompras){
    console.log(fruta)
}