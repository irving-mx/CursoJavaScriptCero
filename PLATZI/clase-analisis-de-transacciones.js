// 1. Tenemos una lista de transacciones financieras 
// 2. usar método reduce para calcular y mostar el saldo total de todas las transacciones
// 3. encontrar la transaccion mas grande(Ingreso o Egreso)- usar método reduce, para moestrar la transaccion de mayor monto(ingreso o egreso), muestrala en consola
// 4 Filtrar transacciones de compra: usando método filter para obtener y mostrar en la consola solo las transacciones de compra (montos negativos)
// 5 encontrar una transaccion por descripcion: utilizar el método find para buscar y mostrar en la consola una transacción específica por su monto
// 6 . Encontrar el índice de una transacción por monto: utilizar el método finIndex para encontrar y mostrar en consola el índice de una transacción específica por su monto.
// 7. Actualizar descripcciones de trnsacciones: añade el prefijo : "Gasto" a las transacciones con montos negativos y "ingreso" a las transacciones con montos positivos
// Muestra las transacciones actualizadas en la consola

const transactions = [ 
    {id: 1, description:'Salary', amount: -50},
    {id: 2, description:'Rent', amount: 2000},
    {id: 3, description:'Food', amount: -100},
    {id: 4, description:'Shopping', amount: -30}
]

// 1. Calculate Total Balance
const totalBalance = transactions.reduce((acumulator, value)=> {
    return acumulator + value.amount
    },0)
console.log('Total Balance: ',totalBalance)

// 2. Find the largest Transaction (Income or Expense)
const largestTransaction = transactions.reduce((maxAcumulator, value)=>{
    return Math.abs(value.amount) > Math.abs(maxAcumulator.amount) ? value : maxAcumulator
},transactions[0])
console.log('Largest Transation: ',largestTransaction)

// 3. Filter Purchase Transactions
const purchaseTransactions = transactions.filter((value)=> value.amount < 0)
console.log("Transaction Negative:")
console.log(purchaseTransactions)

// 4. Find a transaction by description
function findTransactionDescription(description){
    const foundDescription = transactions.find((transaction)=>transaction.description === description )
    return foundDescription!== undefined ? foundDescription : 'No found'
} 

const valueDescription = 'Rent'
console.log('Find a transaction by description: ')
console.log(findTransactionDescription(valueDescription))

console.log("____________________________")

// 5. Find the undex of transaction by amount - use method findIndex
function findIndexByAmount(amount){
    const indexAmount = transactions.findIndex(value => value.amount === amount)
    return indexAmount !== -1 ? indexAmount : 'No found amount sorry baby'
}

const amountValue = -30
console.log('El indice es : ')
console.log(findIndexByAmount(amountValue))

// 6. Update transaction descriptions: use the method forEach

function updateTransactionDescription(){
    transactions.forEach(value => {
        if(value.amount > 0){
            value.description = `Income: ${value.description}`
        }else{
            value.description = `Expense: ${value.description}`
        } 
    })
}
console.log("____________________________")

updateTransactionDescription()
console.log(transactions)