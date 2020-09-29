//motos

const motos = [
    {marca:'Honda', nome:'hornet', cilindrada:600},
    {marca:'yamaha', nome:'XJ-6', cilindrada:600},
    {marca:'Triumph', nome:'Street Triple', cilindrada:600},
    {marca:'kawasaki', nome:'Z-1000', cilindrada:1000},
    {marca:'Kawasaki', nome:'ZX-10', cilindrada:1000}
];

motos.forEach(function(motos){
    console.log( ` Marca: ${motos.marca} , Nome: ${motos.nome}, Cilindrada: ${motos.cilindrada}`)
})
