// Estos seran los descuentos de cada marca
const adidas= 10
const nike =20
const hp = 30
const razer = 40
const lenovo = 50
// Estos elementos seran los productos
const tenisRojos = {
    marca:"nike",
    precio:3000,
    color: "rojo"
}
const tenisVerdes = {
    marca:"adidas",
    precio:1000,
    color: "rojo"
}
// Esta es una función para calcular varios tipos de descuentos
function decuentos(marca, precio){
    let operacionDescuento
    let precioConDescuento
    if(marca === "adidas"){
        // adidas es 10%
        operacionDescuento = (adidas * precio) / 100 
        precioConDescuento = precio - operacionDescuento
        return precioConDescuento
    }else if(marca === "nike"){
        // adidas es 20%
        operacionDescuento = (nike * precio) / 100 
        precioConDescuento = precio - operacionDescuento
        return precioConDescuento
    }else if(marca === "hp"){
        // adidas es 30%
        operacionDescuento = (hp * precio) / 100 
        precioConDescuento = precio - operacionDescuento
        return precioConDescuento
    }else if(marca === "razer"){
        // adidas es 40%
        operacionDescuento = (razer * precio) / 100 
        precioConDescuento = precio - operacionDescuento
        return precioConDescuento
    }else if(marca === "lenovo"){
        // adidas es 50%
        operacionDescuento = (lenovo * precio) / 100 
        precioConDescuento = precio - operacionDescuento
        return precioConDescuento
    }else{
        console.log("Sin descuento")
    }
}

function mostarResultado(objeto){
    const precioConDescuento = decuentos(objeto.marca,objeto.precio)
    console.log(`La marca es ${objeto.marca}\n el precio original es ${objeto.precio}\n es de color ${objeto.color} \nel precio con descuento es ${precioConDescuento}`)
}
mostarResultado(tenisRojos);
