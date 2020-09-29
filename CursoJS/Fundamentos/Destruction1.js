const pessoa = {
    nome: 'Ana',
    idade: 20,
    endereco: {
        logradouro: 'rua dos bobos',
        numero: 123
    }
}

function Log (oq, eq){
    console.log(oq, eq)
}


console.log (pessoa)
const {nome, idade} = pessoa
//console.log (nome, idade)
Log(nome, idade)

const {nome: n , idade: i} = pessoa
Log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
Log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro,numero, cep)

console.log(pessoa)

///////////////////////////////////////////////////

// NA FUNÇÃO
function rand1({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand1(obj))
console.log(rand1({min: 955}))
console.log(rand1({}))


///////////////////////////////////////////////////

// ARRAY

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))