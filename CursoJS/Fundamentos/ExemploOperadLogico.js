function compras (job1, job2){
    const tomasSorvete = job1 || job2//operador binario
    const comprarTv50 = job1 && job2 //operador binario
    const comprarTv32 = job1 != job2 //operador binario
    const manterSaudavel = !tomasSorvete //operador unario 1

    return {tomasSorvete, comprarTv50, comprarTv32, manterSaudavel} 
}

console.log(compras(true, false))