import readlinesync = require('readline-sync');
import { Stack } from './Stack';

let opcao = 0;

const pilha = new Stack<string>();

do{
    console.log("*****************************************************");
    console.log("\n           1 - Adicionar Livro na Pilha             ");
    console.log("           2 - Listar todos os Livros                ");
    console.log("           3 - Retirar Livro da Pilha                ");
    console.log("           0 - Sair                                  ");
    console.log("\n*****************************************************");

    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");
    switch (opcao) {
        case 1:
            pilha.push(readlinesync.question("\nDigite o nome: "));
            console.log("\nPilha: ")
            pilha.printStack();
            console.log("\nLivro Adicionado!")
            break;

        case 2:
            console.log("\nLista de Clientes na Fila: ");
            pilha.printStack();
            break;

        case 3:
            if (pilha.count() > 0) {
                const removido = pilha.pop();
                console.log("\nFila:");
                pilha.printStack();
                console.log(`\nO Livro, ${removido}, foi retirado da pilha!`);
            }else{
                console.log("\nA Pilha esta vazia!")
            }
            break;

        case 0:
            console.log("\nPrograma Finalizado!")
            break;

        default:
            console.log("Opção inválida");
    }

}while (opcao !== 0)