import { Contador } from "./contador";
import { Bola } from "./bola";
import { ContaC } from "./contaC";
import { Calculadora } from "./calculadora";
import { BombaCombustivel, tipoCombustivel } from "./combustivel";
import { Carro } from "./carro";

let contador = new Contador();

contador.incrementar();
contador.incrementar();
contador.incrementar();

contador.zerar();
contador.retornar();

console.log("/////////////// BOLA ///////////\n");

let bola1 = new Bola("vermelho", 20, "plastico");

bola1.mostrarCor();

bola1.mudarCor("verde");

console.log("\n/////////////// CONTA CORRENTE ///////////\n");

let conta1 = new ContaC(Math.round(Date.now() / 1000), "Adriano Coutinho");

conta1.depositar(100);

conta1.sacar(50);

conta1.sacar(100);

conta1.alterarNome("Coutinho");

console.log("\n/////////////// CALCULADORA ///////////\n");

let calculadora1 = new Calculadora();

calculadora1.somar(20);
calculadora1.somar(20);

calculadora1.diminuir(20);

calculadora1.resetar();

calculadora1.somar(100);

calculadora1.multiplicar(2);

calculadora1.dividir(2);

calculadora1.exibirHistorico();

let bomba1 = new BombaCombustivel(tipoCombustivel.Gasolina, 5, 500);

bomba1.abastecerPorLitro(20, tipoCombustivel.Gasolina);

bomba1.abastecerPorValor(20, tipoCombustivel.Gasolina);

bomba1.alterarValor(4);

bomba1.alterarCombustivel(tipoCombustivel.Etanol);

bomba1.alterarQuantidadeCombustivel(100);

bomba1.abastecerPorLitro(101, tipoCombustivel.Etanol);

bomba1.verificarBomba();

console.log("\n/////////////// CARRO ///////////\n");

let meuFusca = new Carro(12);
meuFusca.adicionarGasolina(20);
meuFusca.andar(100);
meuFusca.obterGasolina();
