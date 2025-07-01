function filme(titulo, genero, direcao, anoLancamento, avaliacao){
  this.titulo = titulo;
  this.genero = genero;
  this.direcao = direcao;
  this.anoLancamento = anoLancamento;
  this.avaliacao = avaliacao;
}

filme.prototype.obterResumo = function() {
  return `${this.titulo} é um filme de ${this.genero} dirigido por ${this.direcao} lançado em ${this.anoLancamento}. Avaliação: ${this.avaliacao}/10.`;
};

const interestelar = new filme('Interestelar', 'Ficção Científica', 'Christopher Nolan', 2014, 8.6);
const matrix = new filme('Matrix', 'Ação', 'Lana Wachowski, Lilly Wachowski', 1999, 8.7);
console.log(interestelar.obterResumo());
console.log(matrix.obterResumo());