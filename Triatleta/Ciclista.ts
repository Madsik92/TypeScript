import { Atleta } from "./Atletas";

export interface Ciclista extends Atleta{
    pedalar(): void;
}