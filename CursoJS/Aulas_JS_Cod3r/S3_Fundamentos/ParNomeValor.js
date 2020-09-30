//par nome/valor
const saudacao = 'opa' //contexto lexico 1

function exec (){
    const saudacao = 'Falaa' //contexto lexico 2
    return saudacao 
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso:90,
    endereco:{
        logradouro: 'rua dos bobos',
        numero:123
    }
}
console.log(cliente)
console.log(exec())