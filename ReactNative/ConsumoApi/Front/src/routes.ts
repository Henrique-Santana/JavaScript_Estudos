import express from 'express';
import db from './database/connection';

const routes = express.Router();//transformando em uma variável manipulável
routes.get('/clientes', async (request, response) => { //trasformamos nossa função em async
    const dataBase = await db;//pq a requicição para o db precisa ser await, para nossa aplicação poder esperar acontecer, e jogamos em uma variável tbm
    dataBase.serialize(() => {
        dataBase.each('SELECT * FROM clientes', function (err: { message: any; }, row: any) {
            //aqui que estamos fazendo a busca no db e mostrando, no console
            if (err) {//tratativa de erros
                console.error(err.message);
            }
            console.log(row)//vai retornar tudo que temos no banco de dados
        });
        return response.send(200) //mostrar uma mensagem de ‘ok’
    });
});

routes.post('/novocliente', async (request, response) => {
    //uma nova rota
    const dataBase = await db;
    dataBase.run(`INSERT INTO clientes (name, telefone, cep, n_casa) VALUES(?,?,?,?)`,
        [`${request.body.name}`, `${request.body.telefone}`, `${request.body.cep}`, `${request.body.n_casa}`],
        function (err: { message: any; }, row: any) {
            if (err) {
                console.error(err.message);
            }
            console.log(row);
            return response.send(200)
        });
});

export default routes