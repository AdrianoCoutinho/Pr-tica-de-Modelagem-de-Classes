export class Carro {
  consumo: number;
  tanqueComb!: number;

  constructor(consumo: number) {
    this.consumo = consumo;
    this.tanqueComb = 0;
  }

  andar(distancia: number) {
    let litrosConsumido = distancia / this.consumo;
    if (litrosConsumido > this.tanqueComb) {
      return console.log("\nVocê não tem combustível suficiente!\n");
    }
    console.log(
      `Você andou ${distancia}km e gastou aproximadamente ${litrosConsumido.toFixed(
        2
      )} litros de gasolina.`
    );
    console.log(
      `Seu carro fez uma média de ${distancia / litrosConsumido}km/L.`
    );

    this.tanqueComb -= litrosConsumido;
  }
  obterGasolina() {
    return console.log(
      `Nível atual aproximado de gasolina: ${this.tanqueComb.toFixed(
        1
      )} Litros.`
    );
  }
  adicionarGasolina(addGasolina: number) {
    this.tanqueComb += addGasolina;
  }
}
