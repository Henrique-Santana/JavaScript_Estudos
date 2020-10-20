import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Cadastro from './Pages/Cadastro';
import Home from './Pages/Home/index';
import Login from './Pages/Login/index';
import Genero from './Pages/Genero/index';
import Filmes from './Pages/Filmes/index';

function Routers(){
    return(
        <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Cadastro" component={Cadastro}/>
        {/*<Route path="/Perfil" component={Perfil}/>*/}
        <Route path="/Filmes" component={Filmes}/>
        <Route path="/Genero" component={Genero}/>

        </BrowserRouter>

        
    )
}

export default Routers;