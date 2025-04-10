// classe responsável por realizar a operação de soma
class Somador {
    public calcular = (numero1: number, numero2: number): number => {
      return numero1 + numero2;
    };
  }
  
  // classe responsável por realizar a operação de subtração
  class Subtrador {
    public calcular = (numero1: number, numero2: number): number => {
      return numero1 - numero2;
    };
  }
  
  // classe responsável por realizar a operação de multiplicação
  class Multiplicador {
    public calcular = (numero1: number, numero2: number): number => {
      return numero1 * numero2;
    };
  }
  
  // classe responsável por realizar a operação de divisão
  class Divisor {
    public calcular = (numero1: number, numero2: number): number => {
      if (numero2 === 0) {
        throw new Error("divisão por zero não é permitida.");
      }
      return numero1 / numero2;
    };
  }
  
  // exporta todas as classes do módulo
  export { Somador, Subtrador, Multiplicador, Divisor };
  