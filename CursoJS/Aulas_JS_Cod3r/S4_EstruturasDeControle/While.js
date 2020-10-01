function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max -min) + min //vai gerar um numero aleatorio entre os dois valores inceridos
    return Math.floor(valor) //arredondara para baixo
}

let opcao = -1

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Até a proxima!')

