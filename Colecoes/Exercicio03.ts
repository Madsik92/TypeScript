import readlinesync = require('readline-sync');

const colecao: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++){
    colecao.add(readlinesync.questionInt(`Digite o ${i + 1}o numero: `))
}


// let numerosOrdenado: Array.from(colecao).sort((a, b) => a - b);

const numerosOrdenados: number[] = Array.from(colecao).sort((a,b) => a - b);

console.log("\nListas dados do Set: ");
console.log(numerosOrdenados)



