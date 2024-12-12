import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transportes } from "./Transportes";


function main(){

    const t1 = new Transportes(5);
    t1.visualizar();

    const tr1 = new Terrestre(5, 4, 100);
    tr1.visualizar();

    const a1 = new Automovel(5, 4, 100, "Verde", 5, "FLA-1895", 5)
    a1.visualizar();
}

main();