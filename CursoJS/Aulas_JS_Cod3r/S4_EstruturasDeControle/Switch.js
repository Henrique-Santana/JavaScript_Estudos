const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10: case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(5.1)
imprimirResultado(2.5)
imprimirResultado(8.5)
imprimirResultado(10)
imprimirResultado(11)

const ImprimirCilindrada = function (moto) {
    switch(moto){
        case 'Hornet': case 'XJ-6':
            console.log("600 Cilindradas")
            break
        default:
            console.log("Não entendi")
    }
}

ImprimirCilindrada('Hornet')
ImprimirCilindrada('XJ_5')
ImprimirCilindrada('XJ-6')