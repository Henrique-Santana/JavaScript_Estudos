const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Se é um valor inteiro, retorna um boll
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+ peso2)

console.log(media.toFixed(2)) //controlar as casa decimais do number, ex. 1.1111 Tofixed(2) 1.11
console.log(media.toString(2)) // em binario
console.log(typeof media)
console.log(typeof Number)
console.log(typeof number)