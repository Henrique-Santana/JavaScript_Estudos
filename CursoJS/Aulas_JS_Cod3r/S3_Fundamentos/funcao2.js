//Armazenando uma function em uma variavel
const imprimirsoma = function (a, b){
    console.log(a + b )
}

imprimirsoma(2, 3) 

//Armazana uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')