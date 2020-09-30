const valores = [17.7, 8.9, 6.3, 9.21]
console.log(valores[0], valores[3])
console.log(valores[4])//como não declaramos nada no indice 4, ira aparecer um undefinide

valores[4] = 10 //declaramos um valor para o indice 4
console.log(valores)
console.log(valores.length) //conta quantos indices esta sendo usado

valores.push([id = 3],[nome = 'henrique'], false, null, 'teste')//add valores, tipo o git
console.log(valores)

console.log(valores.pop())//apaga o ultimo indice
console.log(valores)
delete valores[0]
console.log(valores)

console.log(typeof valores)
