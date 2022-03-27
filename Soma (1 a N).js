
const input = require('prompt-sync')()

//Entrada

const number = Number(input('Digite um número: '))


// Processamento
const sum_each_pair = number + 1
const number_pairs = number / 2 
const result = sum_each_pair * number_pairs


// Saída
console.log (`A soma dos número entre 1 e ${number} é ${result}`)