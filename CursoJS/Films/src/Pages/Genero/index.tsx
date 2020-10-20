import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/Index';
import '../../assets/style/global.css';
import './style.css'
import Button from '../../Components/Button';
import Input from '../../Components/input';
import imgTheater from '../../assets/images/theater.png';
import imgRefresh from '../../assets/images/refresh.png';
import imgTrash from '../../assets/images/trash.png';

function Genero(){
    const [genero, setGenero] = useState('');
    const [idGenero, setIdGenero] = useState(0)
    const [generos, setGeneros] = useState([])

    useEffect(() => {
        listar();
    },[]);

    const listar = () =>{
        fetch('http://localhost:5000/api/generos',{
            method:'GET',
            headers:{
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
        .then(response=>response.json())
        .then(dados =>{
            setGeneros(dados);
        })
        .catch(erro=>console.error(erro))
    }  

    

    
    const trash = (id: any) =>{

        console.log("IdGenero", id)
        fetch('http://localhost:5000/api/generos/' + id,{
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
        fetch('http://localhost:5000/api/generos/' + id,{
            method:'PUT',
            headers:{
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
            })
            .then(response => response.json())
            .then(dados => {
                setIdGenero(dados.idGenero);
                setIdGenero(dados.nome);
            })
        }

    const salvar = () =>{
        const form = {
            nome:genero
        };
        const method = (idGenero === 0 ? 'POST' : 'PUT');
        const urlRequest = (idGenero === 0 ? 'http://localhost:5000/api/generos' : 'http://localhost:5000/api/generos/' + idGenero);
        fetch( urlRequest ,{
            method:method,
            body:JSON.stringify(form),
            headers:{
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
        .then(response => response.json())
        .then(()=>{
            setIdGenero(0);
            setGenero('')
            listar()
        })
        .catch(erro=>console.error(erro))
    }



    return (
        <div className="geral">
          <Header description="Cadastre os Gêneros dos Filmes" />
     
        <main>
          <h1>Gênero</h1>
          <div className="imgTitulo">
          <img className="theater" src={imgTheater} alt=""/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Gênero</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {
                generos.map((item: any) => {
                  return (
                    <tr key={item.idGenero}>
                      <td>{item.idGenero}</td>
                      <td>{item.nome}</td>
                      <td>
                        <img className="icon" src={imgRefresh}  onClick={() => refresh(item.idGenero)} alt="" />
                        <img className="icon" src={imgTrash}  onClick={() => trash(item.idGenero)} alt="" />
                        {/* <input type="button" onClick={() => editar(item.idGenero)} /> */}
                        {/* <input type="button" onClick={() => remover(item.idGenero)} /> */}
                      </td>
                    </tr>
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
            <Input name="genero" label="Cadastrar genero" value={genero} onChange={e => setGenero(e.target.value)}/>
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


export default Genero;