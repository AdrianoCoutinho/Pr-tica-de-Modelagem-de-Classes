export enum tipoCombustivel {
  Gasolina = "Gasolina",
  Etanol = "Etanol",
  Diesel = "Diesel",
}

export class BombaCombustivel {
  tipoCombustivel: tipoCombustivel;
  valorLitro: number;
  quantidadeCombustivel: number;

  constructor(
    combustivel: tipoCombustivel,
    valorLitro: number,
    quantidadeCombustivel: number
  ) {
    this.tipoCombustivel = combustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = quantidadeCombustivel;
  }

  abastecerPorLitro(reqLitros: number, reqTipoCombustivel: tipoCombustivel) {
    if (this.quantidadeCombustivel < reqLitros) {
      return console.log(
        `ERRO: Não há combustivel suficiente na boma. (TOTAL de ${this.quantidadeCombustivel})`
      );
    }
    if (reqTipoCombustivel != this.tipoCombustivel) {
      return console.log(
        `ERRO: esta bomba não tem este tipo de combustivel (${this.tipoCombustivel})`
      );
    }
    console.log(
      `Você abasteceu ${reqLitros} litros de ${this.tipoCombustivel} por R$${
        reqLitros * this.valorLitro
      }`
    );
    this.quantidadeCombustivel -= reqLitros;
  }

  abastecerPorValor(reqValor: number, reqTipoCombustivel: tipoCombustivel) {
    const qtdlitro = reqValor / this.valorLitro;
    if (this.quantidadeCombustivel < qtdlitro) {
      return console.log(
        `ERRO: Não há combustivel suficiente na boma. (TOTAL de ${this.quantidadeCombustivel})`
      );
    }
    if (reqTipoCombustivel != this.tipoCombustivel) {
      return console.log(
        `ERRO: esta bomba não tem este tipo de combustivel (${this.tipoCombustivel})`
      );
    }
    console.log(
      `Você abasteceu ${qtdlitro} litros de ${this.tipoCombustivel} por R$${reqValor}`
    );
    this.quantidadeCombustivel -= qtdlitro;
  }

  alterarValor(reqValor: number) {
    console.log(
      `Você alterou o valor do litro do combustivel ${this.tipoCombustivel} de R$${this.valorLitro} para R$${reqValor}`
    );
    this.valorLitro = reqValor;
  }

  alterarCombustivel(reqTipoCombustivel: tipoCombustivel) {
    console.log(
      `Você alterou o tipo de combustivel de ${this.tipoCombustivel} para ${reqTipoCombustivel}`
    );
    this.tipoCombustivel = reqTipoCombustivel;
  }

  alterarQuantidadeCombustivel(reqQuantiadeCombustivel: number) {
    console.log(
      `Você alterou a quantidade de combustivel de ${this.quantidadeCombustivel} para ${reqQuantiadeCombustivel}`
    );
    this.quantidadeCombustivel = reqQuantiadeCombustivel;
  }

  verificarBomba() {
    console.log(`Há ${this.quantidadeCombustivel} litros no bomba.`);
  }
}
