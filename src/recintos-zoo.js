import { RecintosExistentes } from "./recintosExistentes";

class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    if (quantidade <= 0) {
      return { erro: "Quantidade inválida" };
    }

    const recinto1 = new RecintosExistentes(1, "savana", 10);
    const recinto2 = new RecintosExistentes(2, "floresta", 5);
    const recinto3 = new RecintosExistentes(3, "savana e rio", 7);
    const recinto4 = new RecintosExistentes(4, "rio", 8);
    const recinto5 = new RecintosExistentes(5, "savana", 9);

    const recintosViaveis = [
      recinto1.informacaoRecinto,
      recinto2.informacaoRecinto,
      recinto3.informacaoRecinto,
      recinto4.informacaoRecinto,
      recinto5.informacaoRecinto,
    ];

    return { recintosViaveis: recintosViaveis };
  }
}

export { RecintosZoo as RecintosZoo };
