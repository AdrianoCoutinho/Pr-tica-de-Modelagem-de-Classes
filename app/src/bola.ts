export class Bola {
  cor: string;
  circunferencia: number;
  material: string;

  constructor(cor: string, circunferencia: number, material: string) {
    this.cor = cor;
    this.circunferencia = circunferencia;
    this.material = material;
  }

  mudarCor(cor: string) {
    this.cor = cor;
    console.log(`Você mudou a cor da bola para: ${this.cor}`);
  }

  mostrarCor() {
    console.log(`A cor atual da bola é: ${this.cor}`);
  }
}
