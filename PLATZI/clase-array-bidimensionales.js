let array1D = [1,2,3] // Unidimensional
let array2D = [[1,2,3],[4,5,6], [7,8,9]] // Bidimensional

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

matrix[1][2]= 10

console.log(matrix)
console.log("_____________________________")
let value = matrix[0][1]
console.log(value)
console.log("_____________________________")

// Operations
for(let i=0; i < matrix.length; i++){
    for(let j=0; j< matrix[i].length; j++){
        console.log(matrix[i][j])
    }
}
console.log("_____________________________")

function findElement(matrix,element){
    for(let i=0; i < matrix.length; i++){
        for(let j=0; j< matrix[i].length; j++){
            if(matrix[i][j] === element){
                return true
            }
        }
    }    
    return false
}

console.log(findElement(matrix,10))

console.log("_____________________________")

function duplicateMatrix(matrix){
    let newMatrix = []
    for(let i = 0; i< matrix.length;i++){
        newMatrix[i] = [...matrix[i]]
    }
    return newMatrix
}
console.log(duplicateMatrix(matrix))
