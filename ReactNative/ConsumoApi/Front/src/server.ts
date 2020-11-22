import express from 'express';
//import routes from './routes' //importar as rotas para .caso tenha erro com ela, pode deixa-la comentada e depois, antes de rodar o get, venha e descomente
import cors from 'cors'; //importar o cors para nossa aplicação ser visível por outros fronts-end

const app = express(); //transformar o express() em uma variável manipulvel
app.use(cors()); //falar para express usar o cors
app.use(express.json()); //falar para express usar json
console.log("irrraaaaa")

//app.use(routes); //caso de erro n início, comente tbm //falar para express usar as rotas
app.listen(3334); //falar para express usar ouvir a porta 3333, podemos usar qualquer porta
//localhost:3333