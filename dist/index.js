// importa as classes do módulo de operações matemáticas
import { Somador, Subtrador, Multiplicador, Divisor } from './operacoes.js';
// cria instâncias de cada classe
const somador = new Somador();
const subtrador = new Subtrador();
const multiplicador = new Multiplicador();
const divisor = new Divisor();
// define os números usados nos testes
const a = 20;
const b = 4;
// executa as operações e exibe os resultados
console.log(`soma de ${a} + ${b} =`, somador.calcular(a, b));
console.log(`subtração de ${a} - ${b} =`, subtrador.calcular(a, b));
console.log(`multiplicação de ${a} * ${b} =`, multiplicador.calcular(a, b));
console.log(`divisão de ${a} / ${b} =`, divisor.calcular(a, b));
