import readlinesync = require('readline-sync')

// Criamos a colecao de array vazia
const numeros: Array<number> = new Array<number>();

// Adicionamos os valores na colecao
numeros.push(7);
numeros.push(2);
numeros.push(5);
numeros.push(10);
numeros.push(7);

// Listamos os dados que foram adicionados
for(let numero of numeros){
    console.log(numero);
}

// Adicionamos um numero utilizando a entrada de dados
numeros.push(readlinesync.questionFloat('Digite um numero: '))

// Adicionamos um ou mais elementos no inicio da fila
numeros.unshift(2, 4.5, 8, 9)

console.table(numeros)

// Verificamos se algum numero existe na colecao
console.log("\nExiste o numero 5 no array? ", numeros.includes(5))

// Verificamos qual e o indice de um elemento
console.log("\nQual e o indice numero 3 no array? ", numeros.indexOf(3))

// Removemos uum numero da Colecao
numeros.splice(numeros.indexOf(10), 1)

console.table(numeros)