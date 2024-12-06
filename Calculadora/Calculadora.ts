import readlinesync = require('readline-sync')

let numero1: number;
let numero2: number;

// String: Representa sequências de caracteres
// Number: Representa números, sejam eles inteiros ou de ponto flutuante
// Boolean: Representa valores true ou false
// Null e undefined: Representam valores nulos ou não definidos
// Any: Representa qualquer tipo de dado

numero1 = readlinesync.questionFloat('Digite o primeiro numero: ')

numero2 = readlinesync.questionFloat('Digite o segundo numero: ')

console.log("A Soma dos 2 numeros e igual a ", numero1 + numero2)
console.log("A Subtracao dos 2 numeros e igual a ", numero1 - numero2)
console.log("A Multiplicacao dos 2 numeros e igual a ", numero1 * numero2)
console.log("A Divisao dos 2 numeros e igual a ", numero1 / numero2)

