import readlinesync = require('readline-sync');
import { Queue } from './Queue';


let opcao = 0;

const fila = new Queue<string>();

do {
    console.log("*****************************************************");
    console.log("\n           1 - Adicionar Cliente na Fila           ");
    console.log("           2 - Listar todos os Clientes              ");
    console.log("           3 - Retirar Clientes da Fila              ");
    console.log("           0 - Sair                                  ");
    console.log("\n*****************************************************");


    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");
    switch (opcao) {
        case 1:
            fila.enqueue(readlinesync.question("\nDigite o nome: "));
            console.log("\nFila: ")
            fila.printQueue();
            console.log("\nCliente Adicionado!")
            break;

        case 2:
            console.log("\nLista de Clientes na Fila: ");
            fila.printQueue();
            break;

        // Chama o proximo da fila e imprime qual cliente foi chamado
        case 3:
            if (fila.count() > 0) {
                const removido = fila.dequeue();
                console.log("\nFila:");
                fila.printQueue();
                console.log(`\nO Cliente ${removido} foi chamado!`);
            }else{
                console.log("\nA fila esta vazia!")
            }
            break;

        case 0:
            console.log("\nPrograma Finalizado!")
            break;

        default:
            console.log("Opção inválida");
    }
} while (opcao !== 0)