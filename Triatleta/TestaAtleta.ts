import { Triatleta } from "./Triatleta";


function main(){

    const Atleta = new Triatleta("Simome");

    Atleta.visualizar();

    Atleta.aquecer();
    Atleta.nadar();
    Atleta.pedalar();
    Atleta.correr();
    Atleta.cansou();
}

main()