import { Atleta } from "./Atletas";

export interface Nadador extends Atleta{
    nadar(): void;
}