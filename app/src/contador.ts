export class Contador {
  number: number;
  saveNumber: number;

  constructor() {
    this.number = 0;
    this.saveNumber = 0;
  }

  zerar() {
    this.saveNumber = this.number;
    this.number = 0;
    console.log(`Número atual: ${this.number}`);
  }

  incrementar() {
    this.number++;
    console.log(`Número atual: ${this.number}`);
  }

  retornar() {
    this.number = this.saveNumber;
    console.log(`Número atual retornado para: ${this.number}`);
  }
}
