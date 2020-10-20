import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/Index';
import imgCinema from '../../assets/images/cinema.png';
import imgTrash from '../../assets/images/trash.png';
import imgRefresh from '../../assets/images/refresh.png';
import Button from '../../Components/Button';
import Input from '../../Components/input';
import './style.css';

function Filme(){
const [filme, setFilme] = useState('');
const [idFilme, setIdFilme] = useState(0)
const [filmes, setFilmes] = useState([])

useEffect(() => {
    listar();
},[]);



const listar = () =>{
    fetch('http://localhost:5000/api/filmes',{
        method:'GET',
        headers:{
            authorization: 'Bearer ' + localStorage.getItem('token-filmes')
        }
    })
    .then(response=>response.json())
    .then(dados =>{
        setFilmes(dados);
    })
    .catch(erro=>console.error(erro))
}  

const trash = (id: any) =>{

    fetch('http://localhost:5000/api/filmes/' + id,{
        method:'DELETE',
        headers:{
            authorization: 'Bearer ' + localStorage.getItem('token-filmes'),
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(() => {
        listar()
    })
    .catch(erro=>console.error(erro));

}

const refresh = (id:any) => {
    fetch('http://localhost:5000/api/filmes/' + id,{
        method:'PUT',
        headers:{
            authorization: 'Bearer ' + localStorage.getItem('token-filmes')
        }
        })
        .then(response => response.json())
        .then(dados => {
            setIdFilme(dados.idFilme);
            setIdFilme(dados.nome);
        })
    }

const salvar = () =>{
    const form = {
        nome:filme
    };
    const method = (idFilme === 0 ? 'POST' : 'PUT');
    const urlRequest = (idFilme === 0 ? 'http://localhost:5000/api/filmes' : 'http://localhost:5000/api/filmes/' + idFilme);
    fetch( urlRequest ,{
        method:method,
        body:JSON.stringify(form),
        headers:{
            authorization: 'Bearer ' + localStorage.getItem('token-filmes')
        }
    })
    .then(response => response.json())
    .then(()=>{
        setIdFilme(0);
        setFilme('')
        listar()
    })
    .catch(erro=>console.error(erro))
}


    return (
        <div className="geral">
          <Header description="Filmes" />
     
        <main>
          <h1>Filmes</h1>
          <div className="theaterimg">
          <img className="theater" src={imgCinema} alt=""/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Filme</th>
                <th>Gênero</th>
              </tr>
            </thead>
            <tbody>
              {
                filmes.map((item: any) => {
                  return (
                    <div className='divListar'>
                      <tr key={item.idFilme}>
                        <td>{item.titulo}</td>
                        <td>{item.idGeneroNavigation.nome}</td>
                          <td>
                            <img className="icon1" src={imgRefresh}  onClick={() => refresh(item.idGenero)} alt="" />
                          </td>
                          <td>
                            <img className="icon2" src={imgTrash}  onClick={() => trash(item.idGenero)} alt="" />
                          </td>
                      </tr>
                    </div>
                  )
                })
              }
            </tbody>
          </table>
     
          <form onSubmit={event => {
            event.preventDefault();
            salvar();
          }}>
            <div className="form">
            <Input name="genero" label="Cadastrar genero" value={filme} onChange={e => setFilme(e.target.value)}/>
            <div className="btn">
              <Button value="Salvar" />
            </div>
            </div>
          </form>
          </main>
          <Footer/>
          
        </div>  
      );
}

export default Filme;