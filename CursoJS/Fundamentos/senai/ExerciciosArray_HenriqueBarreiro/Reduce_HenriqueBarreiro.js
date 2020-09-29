const motos = [
    {marca:'Honda', nome:'hornet', cilindrada:600},
    {marca:'yamaha', nome:'XJ-6', cilindrada:600},
    {marca:'Triumph', nome:'Street Triple', cilindrada:600},
    {marca:'kawasaki', nome:'Z-1000', cilindrada:1000},
    {marca:'Kawasaki', nome:'ZX-10', cilindrada:1000}
];

const mapear = motos.map(moto => moto.cilindrada)

const somaCilindrada = mapear.reduce(function(soma, atual){
    console.log(`${soma}, ${atual}`)
    return soma + atual
})

console.log(somaCilindrada)