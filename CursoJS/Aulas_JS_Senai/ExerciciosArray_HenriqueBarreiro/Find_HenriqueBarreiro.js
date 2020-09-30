const motos = [
    {marca:'Honda', nome:'hornet', cilindrada:600},
    {marca:'yamaha', nome:'XJ-6', cilindrada:600},
    {marca:'kawasaki', nome:'Z-1000', cilindrada:1000},
    {marca:'Triumph', nome:'Street Triple', cilindrada:600},
    {marca:'kawasaki', nome:'ZX-10', cilindrada:1000}
];

const cond = moto => moto.marca == 'kawasaki'

const firtMarca = motos.find(cond)

console.log(firtMarca)