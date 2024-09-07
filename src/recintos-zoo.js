class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    if (quantidade <= 0) {
      return { erro: "Quantidade inválida" };
    }

    return {
      recintosViaveis: [],
    };
  }
}

export { RecintosZoo as RecintosZoo };
