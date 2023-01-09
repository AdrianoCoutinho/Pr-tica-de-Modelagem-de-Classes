export class ContaC {
  numConta: number;
  nomeCorrentista: string;
  saldo: number;

  constructor(numConta: number, nomeCorrentista: string, saldo: number = 0) {
    this.numConta = numConta;
    this.nomeCorrentista = nomeCorrentista;
    this.saldo = saldo;
  }

  alterarNome(novoNome: string) {
    this.nomeCorrentista = novoNome;
    console.log(
      `Você alterou o nome do correntista para : ${this.nomeCorrentista}`
    );
  }

  depositar(valorDeposito: number) {
    this.saldo += valorDeposito;
    console.log(
      `Você depositou: R$${valorDeposito} e seu saldo atual é de R$${this.saldo}`
    );
  }

  sacar(valorSaque: number) {
    if (this.saldo < valorSaque) {
      console.log(
        `Saldo (R$${this.saldo}) insuficiente para sacar R$${valorSaque}`
      );
      return;
    }
    this.saldo -= valorSaque;
    console.log(
      `Você sacou: R$${valorSaque} e seu saldo atual é de R$${this.saldo}`
    );
  }
}
