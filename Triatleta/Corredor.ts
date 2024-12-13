import { Atleta } from "./Atletas";

export interface Corredor extends Atleta{
    correr(): void;
}