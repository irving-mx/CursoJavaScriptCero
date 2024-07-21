// Social Media Profile

// 1. User information
const username = 'codingAdventurer'
const fullName = 'Jhon Doe'
const age = 25
const isStudent = true
function student(info){
    let tipo
    if(info === true){
        tipo = ' Soy estudiante'
        return tipo
    }else{
        tipo = ' No soy estudiante'
        return tipo
    }
}

// 2. Address
const address = {
    street : '123 Main Street',
    city: 'Techville',
    state: 'Codingland',
    zipCode: 54321
}

// 3. Hobbies
const hobbies = ['Coding', 'Reading', 'Gaming']

// 4. Generating personalized bio
const personalizedBio = `Mi usuario es ${username} y mi nombre completo es ${fullName}, tengo ${age} años y vivo en ${address.street} en la ciudad ${address.city} en el estado de ${address.state} mi numero postal es ${address.zipCode} mi hobbie favorito es ${hobbies[0]} pero algunas veces en mis tiempos libres yo ${hobbies[1]} y todas las tardes yo hago ${hobbies[2]} y ${student(isStudent)}`

console.log(personalizedBio)