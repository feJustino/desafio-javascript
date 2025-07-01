class Livro {

  constructor(titulo, autoria, isbn, copiasTotais) {
    this.titulo = titulo,
    this.autoria = autoria,
    this.isbn = isbn,
    this.copiasTotais = copiasTotais
  }
  
  get disponibilidade() {
    return this.obterDisponibilidade()
  }

  obterDisponibilidade() {
    if(this.copiasTotais > 10) return 'Em estoque'
    if(this.copiasTotais <= 10 ) return 'Estoque baixo'
    if(this.copiasTotais <= 0) return 'Fora de estoque' 
  }
  
  venderLivro(quantidadeVendida = 1) {
    if(this.copiasTotais <= 0) return 'Fora de estoque' 
    this.copiasTotais -= quantidadeVendida
    return `Vendido ${quantidadeVendida} ${this.titulo} `
  }

  reporCopias(quantidadeReposta = 5) {
    const valorAnterior = this.copiasTotais
    this.copiasTotais += quantidadeReposta
    return `Hávia ${valorAnterior} agora tem ${this.copiasTotais}`
  }

}

const Cortico = new Livro('O Cortiço', 'Aluísio Azevedo', 33454, 30)

console.log(Cortico.obterDisponibilidade())

Cortico.venderLivro()
Cortico.venderLivro(20)
console.log(Cortico.obterDisponibilidade())
Cortico.reporCopias()
console.log(Cortico.obterDisponibilidade())
