export class Transportes{
    private _capacidade: number;

	constructor(capacidade: number) {
		this._capacidade = capacidade;
	}

	public get capacidade(): number {
		return this._capacidade;
	}

	public set capacidade(value: number) {
		this._capacidade = value;
	}


    public visualizar(){
        console.log("============================");
        console.log("Dados do Transporte         ");
        console.log("----------------------------");
        console.log(`Capacidade do meio de transporte: ${this._capacidade}`);
    }
}