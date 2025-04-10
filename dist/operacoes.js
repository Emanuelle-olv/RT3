// classe responsável por realizar a operação de soma
class Somador {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 + numero2;
        };
    }
}
// classe responsável por realizar a operação de subtração
class Subtrador {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 - numero2;
        };
    }
}
// classe responsável por realizar a operação de multiplicação
class Multiplicador {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 * numero2;
        };
    }
}
// classe responsável por realizar a operação de divisão
class Divisor {
    constructor() {
        this.calcular = (numero1, numero2) => {
            if (numero2 === 0) {
                throw new Error("divisão por zero não é permitida.");
            }
            return numero1 / numero2;
        };
    }
}
// exporta todas as classes do módulo
export { Somador, Subtrador, Multiplicador, Divisor };
