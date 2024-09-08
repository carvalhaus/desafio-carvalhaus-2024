class RecintosExistentes {
  constructor(numero, bioma, tamanhoTotal) {
    this.numero = numero;
    this.bioma = bioma;
    this.tamanhoTotal = tamanhoTotal;
    this.espacosOcupados = 0;
    this.animaisNoRecinto = [];
  }

  set ocuparEspacos(quantidade) {
    this.espacosOcupados += quantidade;
  }

  set registrarAnimaisNoRecinto(animal) {
    this.animaisNoRecinto.push(animal);
  }

  get espacosLivres() {
    return this.tamanhoTotal - this.espacosOcupados;
  }

  get animaisRegistrados() {
    return this.animaisNoRecinto;
  }

  get informacaoRecinto() {
    return (
      "Recinto " +
      this.numero +
      " (espaço livre: " +
      this.espacosLivres +
      " total: " +
      this.tamanhoTotal +
      ")"
    );
  }
}

export { RecintosExistentes };
