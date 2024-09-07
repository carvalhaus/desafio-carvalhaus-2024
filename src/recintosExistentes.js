class RecintosExistentes {
  constructor(numero, bioma, tamanhoTotal) {
    this.numero = numero;
    this.bioma = bioma;
    this.tamanhoTotal = tamanhoTotal;
    this.espacosOcupados = 0;
  }

  set ocuparEspacos(quantidade) {
    this.espacosOcupados += quantidade;
  }

  get espacosLivres() {
    return this.tamanhoTotal - this.espacosOcupados;
  }

  get informacaoRecinto() {
    return (
      "Recinto " +
      this.numero +
      " (espaço livre: " +
      this.espacosLivres +
      " total: " +
      this.tamanhoTotal
    );
  }
}

export { RecintosExistentes };
