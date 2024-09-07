import { Animais } from "./animais";
import { RecintosExistentes } from "./recintosExistentes";

class RecintosZoo {
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
    const especies = animais.map((animal) => animal.especie);
    const validAnimal = especies.find((especie) => especie === animal);

    if (!validAnimal) {
      return { erro: "Animal inválido" };
    }

    const recinto1 = new RecintosExistentes(1, "savana", 10);
    recinto1.ocuparEspacos = macaco.tamanho * 3;

    const recinto2 = new RecintosExistentes(2, "floresta", 5);

    const recinto3 = new RecintosExistentes(3, "savana e rio", 7);
    recinto3.ocuparEspacos = gazela.tamanho;

    const recinto4 = new RecintosExistentes(4, "rio", 8);

    const recinto5 = new RecintosExistentes(5, "savana", 9);
    recinto5.ocuparEspacos = leao.tamanho;

    const recintos = [recinto1, recinto2, recinto3, recinto4, recinto5];

    const recintosViaveis = recintos.map(
      (recinto) => recinto.informacaoRecinto
    );

    return { recintosViaveis: recintosViaveis };
  }
}

export { RecintosZoo as RecintosZoo };
