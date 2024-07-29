// Methods that modify the original array (Mutability)

const arrayThings = ['Internet','JavaScript','Futbol','Comida']
console.log("Array inicial:")
console.log(arrayThings)
console.log("___________")
// Metodo Shift
// Elimina al primer elemento de la lista
console.log("Metodo shift: Quita al primer elemento de la lista")
const methodShift = arrayThings.shift();
console.log(methodShift)
console.log(arrayThings)

console.log("_________________________")
// Metodo unshift
// Agrega mas elementos al inicio del array

const methodUnshift = arrayThings.unshift('Mexico','Iguala')
console.log("Metodo unshift: agrega al inicio del array lo que se establezca en el metodo")
console.log(methodUnshift)
console.log(arrayThings)


// Exercise: Managing a Playlist

function managePlaylist(playlist, newSong){

    // El método shift elimina el primer elemento de la lista
    playlist.shift();

    // El método unshift agrega lementos al inicio de la lista
    playlist.unshift(newSong);
    return playlist
}
const initialPlaylist= (['Himno', 'Pacas de billetes', 'Chona'])
const newMusic = 'Diabla'
console.log('Initial playlist: ', initialPlaylist)

const updatePlaylist = managePlaylist(initialPlaylist, newMusic)

console.log('New music to add: ', newMusic)
console.log('Update list: ',updatePlaylist)