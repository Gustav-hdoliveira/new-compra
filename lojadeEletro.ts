var reader = require('readline-sync')

class Produto {
  idProduto: number
  nomeProduto: string
  marca: string
  valor: number
  quantVendida: number
  impostporProdut: number
  
  
  constructor(idProduto: number, nomeProduto: string, marca: string, valor: number, quantVendida: number, impostporProdut: number){
    this.idProduto = idProduto
    this.nomeProduto = nomeProduto
    this.marca = marca
    this.valor = valor
    this.quantVendida = quantVendida
    this.impostporProdut = impostporProdut
    
  }
  informarProduto(): void{
    console.log(`${this.idProduto}, nome: ${this.nomeProduto}, marca: ${this.marca}; valor: ${this.valor}R$ e vendeu ${this.quantVendida} unidades`);
    let capta = this.valor * this.quantVendida
    let imposto = this.quantVendida * this.impostporProdut
    let lucroReal = capta - imposto
    console.log(`capta rendido: ${capta}R$`);
    console.log(`lucro real: ${lucroReal}R$`);
  }

  setProduto(): void{
        let idprodUpdate = reader.questionINT("Qual a Id do produto? ")
        let nomeprodUpdate = reader.questio("Qual o nome do produto? ")
        let marcaUpdate = reader.question("Qual a marca do produto? ")
        let valorUpdate = reader.questionInt("qual o valor do produto? ")
        let quantVendidaUpdate =reader.questionInt("Quantos deste produto foram vendidos no ultimo mês? ")
        let impostoUpdate = reader.questionINT("Qual o imposto e valor de reposição de cada iten? ")
        this.idProduto = idprodUpdate
        this.nomeProduto = nomeprodUpdate
        this.marca = marcaUpdate
        this.valor = valorUpdate
        this.quantVendida = quantVendidaUpdate
        this.impostporProdut = impostoUpdate
  }
  }
class Venda {
    produto: Produto
    idVenda: number
    quantidade: number
    valorTotal: number
    data: Date

    constructor(produto: Produto, idVenda: number, quantidade: number, valorTotal: number, data: Date){
        this.produto = produto
        this.idVenda= idVenda
        this.quantidade = quantidade
        this.valorTotal = valorTotal
        this.data = data
    }

    getVenda():void{
        console.log(`Id da venda: ${this.idVenda}, Id do produto: ${this.produto.idProduto}, quantidade vendida ${this.quantidade}, valor total: ${this.valorTotal}, data da compra: ${this.data}`)
    }

    setVenda(): void{
        let idVendaUpdate = reader.questionINT("Qual o id da venda")
        let quantidadeUpdate = reader.questionINT("Quantos itens foram vendidos? ")
        let dataUpdate = reader.questionINT("Quando foi feita a compra? ")
        this.idVenda = idVendaUpdate
        this.quantidade = quantidadeUpdate
        this.data = dataUpdate
    }
    
    calcularValorTotal(): number {
        let valorFull = this.produto.valor * this.quantidade
        this.valorTotal = valorFull
    }
}