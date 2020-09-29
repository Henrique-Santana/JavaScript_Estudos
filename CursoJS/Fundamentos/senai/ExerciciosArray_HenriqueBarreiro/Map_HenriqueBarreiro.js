const motos = [
    {marca:'Honda', nome:'hornet', cilindrada:600},
    {marca:'yamaha', nome:'XJ-6', cilindrada:600},
    {marca:'Triumph', nome:'Street Triple', cilindrada:600},
    {marca:'kawasaki', nome:'Z-1000', cilindrada:1000},
    {marca:'Kawasaki', nome:'ZX-10', cilindrada:1000}
];
// não tive muitas ideias para executar o map neste meu arrei de motos, então fiz uma subtração no unico int que tem
 const cilindradaExemplo = motos.map(function(motos){
     return motos.cilindrada - 100;
 })

 console.log(cilindradaExemplo)