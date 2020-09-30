let valor //não inicializada
console.log(valor)

valor = null //Ausência de valor
console.log(valor)
//console.log(valor.toString()) //Error!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.74
console.log(produto)

produto.preco = undefined //Evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem valor
console.log(!!produto.preco)
console.log(produto)
