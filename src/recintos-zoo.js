import { Animais } from "./animais";
import { RecintosExistentes } from "./recintosExistentes";

class RecintosZoo {
  constructor() {
    this.recintos = [
      new RecintosExistentes(1, "savana", 10),
      new RecintosExistentes(2, "floresta", 5),
      new RecintosExistentes(3, "savana e rio", 7),
      new RecintosExistentes(4, "rio", 8),
      new RecintosExistentes(5, "savana", 9),
    ];
  }

  analisaRecintos(animal, quantidade) {
    if (quantidade <= 0) {
      return { erro: "Quantidade inválida" };
    }

    const macaco = new Animais("MACACO", 1, "savana ou floresta");
    const leao = new Animais("LEAO", 3, "savana", true);
    const leopardo = new Animais("LEOPARDO", 2, "savana", true);
    const crocodilo = new Animais("CROCODILO", 3, "rio", true);
    const gazela = new Animais("GAZELA", 2, "savana");
    const hipopotamo = new Animais("HIPOPOTAMO", 4, "savana ou rio");

    const animais = [macaco, leao, leopardo, crocodilo, gazela, hipopotamo];
    const animalValido = animais.find((a) => a.especie === animal);

    if (!animalValido) {
      return { erro: "Animal inválido" };
    }

    this.recintos[0].ocuparEspacos = macaco.tamanho * 3;
    this.recintos[2].ocuparEspacos = gazela.tamanho;
    this.recintos[4].ocuparEspacos = leao.tamanho;

    const recintoViavel = this.recintos.find(
      (recinto) => recinto.espacosLivres >= animalValido.tamanho * quantidade
    );

    if (!recintoViavel) {
      return { erro: "Não há recinto viável" };
    }

    const recintosViaveis = this.recintos.map(
      (recinto) => recinto.informacaoRecinto
    );

    return { recintosViaveis: recintosViaveis };
  }
}

export { RecintosZoo as RecintosZoo };
