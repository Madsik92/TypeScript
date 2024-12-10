import readlinesync = require('readline-sync');

const nomeCores: Array<string> = (new Array<string>());

for (let i = 0; i < 5; i++){
    nomeCores.push(readlinesync.question(`Digite a ${i + 1}a cor: `))
}



console.log("\nListas todas as cores: ");
console.log(nomeCores);

let coresOrdenado: Array<string> = Array.from(nomeCores).sort();

console.log("\nOrdenar cores: ");
console.log(coresOrdenado);


