import { Animais } from "./animais.js";
import { RecintosExistentes } from "./recintosExistentes.js";

class RecintosZoo {
  constructor() {
    this.recintos = [
      new RecintosExistentes(1, "savana", 10),
      new RecintosExistentes(2, "floresta", 5),
      new RecintosExistentes(3, "savana e rio", 7),
      new RecintosExistentes(4, "rio", 8),
      new RecintosExistentes(5, "savana", 9),
    ];

    this.animais = [
      new Animais("MACACO", 1, "savana ou floresta"),
      new Animais("LEAO", 3, "savana", true),
      new Animais("LEOPARDO", 2, "savana", true),
      new Animais("CROCODILO", 3, "rio", true),
      new Animais("GAZELA", 2, "savana"),
      new Animais("HIPOPOTAMO", 4, "savana ou rio"),
    ];

    this.configurarRecintos();
  }

  configurarRecintos() {
    this.recintos[0].ocuparEspacos = this.animais[0].tamanho * 3;
    for (let i = 0; i < 3; i++) {
      this.recintos[0].registrarAnimaisNoRecinto = this.animais[0];
    }

    this.recintos[2].ocuparEspacos = this.animais[4].tamanho;
    this.recintos[2].registrarAnimaisNoRecinto = this.animais[4];

    this.recintos[4].ocuparEspacos = this.animais[1].tamanho;
    this.recintos[4].registrarAnimaisNoRecinto = this.animais[1];
  }

  filtrarRecintos(animalValido) {
    return this.recintos.filter((recinto) => {
      const biomasRecinto = recinto.bioma.split(" e ");
      const biomasAnimal = animalValido.bioma.split(" ou ");
      return biomasRecinto.some((biomaRecinto) =>
        biomasAnimal.includes(biomaRecinto)
      );
    });
  }

  analisaRecintos(animal, quantidade) {
    if (quantidade <= 0) {
      return { erro: "Quantidade inválida" };
    }

    const animalValido = this.animais.find((a) => a.especie === animal);

    if (!animalValido) {
      return { erro: "Animal inválido" };
    }

    const recintosFiltrados = this.filtrarRecintos(animalValido);

    const recintosViaveis = recintosFiltrados.filter((recinto) => {
      const animaisNoRecinto = recinto.animaisRegistrados;

      const savanaRio = recinto.bioma.includes("savana e rio");

      const carnivoroNoRecinto = animaisNoRecinto.find((a) => a.carnivoro);

      const recintoVazio = animaisNoRecinto.length === 0;

      if (!animalValido.carnivoro && carnivoroNoRecinto) {
        return false;
      }

      const especieDiferente = animaisNoRecinto.some(
        (animalNoRecinto) => animalNoRecinto.especie !== animalValido.especie
      );

      if (especieDiferente) {
        recinto.ocuparEspacos = 1;
      }

      const espacosSuficientes =
        recinto.espacosLivres >= animalValido.tamanho * quantidade;

      const precisaDeCompanhia =
        animalValido.especie === "MACACO" && quantidade === 1;

      const podeAdicionarAnimalCarnivoro =
        !animalValido.carnivoro ||
        (carnivoroNoRecinto &&
          carnivoroNoRecinto.especie === animalValido.especie);

      if (
        animalValido.especie === "HIPOPOTAMO" &&
        !recintoVazio &&
        !savanaRio
      ) {
        return false;
      }

      const espacoViavel =
        espacosSuficientes &&
        !precisaDeCompanhia &&
        (recintoVazio || podeAdicionarAnimalCarnivoro);

      return espacoViavel;
    });

    if (recintosViaveis.length === 0) {
      return { erro: "Não há recinto viável" };
    }

    const informacoesRecintosViaveis = recintosViaveis.map((recinto) => {
      recinto.ocuparEspacos = animalValido.tamanho * quantidade;
      return recinto.informacaoRecinto;
    });

    return { recintosViaveis: informacoesRecintosViaveis };
  }
}

export { RecintosZoo as RecintosZoo };
