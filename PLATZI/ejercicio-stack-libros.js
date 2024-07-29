// tiene coleccion de libros
//  agregar un libro al final
// quitar un libro al fina
// mostrar la lista


// const libros= ['Matematicas','Español','Programacion']

// function mostrarLibrosActuales(){
//     return console.log(libros)
// }
// function agregarLibro(){
//     alert("Agregando libro")
//     let newLibro= prompt("Digite el nombre del nuevo libro:")
//     libros.push(newLibro)
// }
// function quitarLibro(){
//     alert("Se quitara de la lista el ultimo libro agregado")
//     libros.pop()
// }

// function mostrarLibros(){
//     let option; 
//     do{
//         option = parseInt(prompt(
//             "Elige una opción:\n" +
//             "1. Mostrar libros actuales\n" +
//             "2. Agregar libros al final\n" +
//             "3. Quitar libro al final\n" +
//             "4. Salir"
//         ), 10);

//         // alert("Elige una opcion: \n" + 
//         //     "1. Mostrar libros actuales"+
//         //     "2. Agregar libros al final"+
//         //     "3. Quitar libro al final"+
//         //     "4. Salir");
//         // option =parseInt( prompt("Digite su opción: "),10)
//         if(option == 1){
//             mostrarLibrosActuales();
//         }
//         else if(option == 2){
//             agregarLibro();
//         }else if(option == 3){
//             quitarLibro();
//         }
//     }    
//     while(option!= 4);
// }

// mostrarLibros();











// Exercise: Managing a Stack

let bookCart = []

const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

    function viewCart () {
        console.log('Current Cart of Books: ', bookCart)
    }

    function performCartActions (action, newBook) {
    switch (action) {
    case ADD_TO_CART_ACTION:
        bookCart.push(newBook)
        break;
    case REMOVE_FROM_CART_ACTION:
    if (bookCart.length === 0) {
        console.log('Cart is empty. No books to remove.')
    } else {
        const removedBook = bookCart.pop()
        console.log(`Removed book from the cart: ${removedBook}`)
    }
    break;
    case VIEW_CART_ACTION:
        viewCart()
        break;
        default:
        console.log('Invalid action. Please choose a vaid option.')
        }
    }

performCartActions(ADD_TO_CART_ACTION, 'Think like a monk')
performCartActions(VIEW_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION, 'Ego is the enemy.')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION)