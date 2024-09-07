class Animais {
  constructor(especie, tamanho, bioma, carnivoro = false) {
    this.especie = especie;
    this.tamanho = tamanho;
    this.bioma = bioma;
    this.carnivoro = carnivoro;
  }
}

export { Animais };
