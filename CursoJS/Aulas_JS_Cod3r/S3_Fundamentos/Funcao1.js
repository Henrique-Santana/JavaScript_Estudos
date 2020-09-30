//funcao sen retorno
function imprimirsoma(a, b){
    console.log(a + b)
}

imprimirsoma(5, 5)
imprimirsoma(5)
imprimirsoma(5, 5, 6 ,6 ,6 ,6 )
imprimirsoma()

// Funcao som retorno
function soma(a = 1, b = 2){
    return a + b
}

console.log(soma())
console.log(soma(5, 5))
console.log(soma(2))