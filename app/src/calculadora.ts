export class Calculadora {
  historico: object[];
  contaAtual: number;

  constructor() {
    this.historico = [];
    this.contaAtual = 0;
  }

  somar(numero: number) {
    const newCont = {
      num1: this.contaAtual,
      num2: numero,
      tipo: "soma",
      resultado: this.contaAtual + numero,
    };
    this.historico.push(newCont);
    console.log(
      `Você somou ${numero} à ${this.contaAtual}. Resultado ${
        this.contaAtual + numero
      }`
    );
    this.contaAtual += numero;
  }

  diminuir(numero: number) {
    const newCont = {
      num1: this.contaAtual,
      num2: numero,
      tipo: "subtração",
      resultado: this.contaAtual - numero,
    };
    this.historico.push(newCont);
    console.log(
      `Você subtraiu ${numero} à ${this.contaAtual}. Resultado ${
        this.contaAtual - numero
      }`
    );
    this.contaAtual -= numero;
  }

  multiplicar(numero: number) {
    const newCont = {
      num1: this.contaAtual,
      num2: numero,
      tipo: "multiplicação",
      resultado: this.contaAtual * numero,
    };
    this.historico.push(newCont);
    console.log(
      `Você multiplicou ${this.contaAtual} à ${numero}. Resultado ${
        this.contaAtual * numero
      }`
    );
    this.contaAtual *= numero;
  }

  dividir(numero: number) {
    const newCont = {
      num1: this.contaAtual,
      num2: numero,
      tipo: "divisão",
      resultado: this.contaAtual / numero,
    };
    this.historico.push(newCont);
    console.log(
      `Você dividiu ${this.contaAtual} à ${numero}. Resultado ${
        this.contaAtual / numero
      }`
    );
    this.contaAtual /= numero;
  }

  resetar() {
    this.contaAtual = 0;
    console.log(`Você resetou a conta atual para ${this.contaAtual}`);
  }

  exibirHistorico() {
    this.historico.forEach((element) => console.log(element));
  }
}
