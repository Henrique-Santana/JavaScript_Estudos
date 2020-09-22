const prod1 = {}
prod1.Name = 'celular mega plus'
prod1.price = 4999.90
prod1['desconto interessante'] = 0.40//evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 79.99,
    obj: {
        bla: 1,
        obj:{
            bla: 2
        }
    }
}
console.log(prod2)