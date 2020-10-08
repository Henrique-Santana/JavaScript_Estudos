import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Pages/Home/index';
import Login from './Pages/Login/index';

function Routers(){
    return(
        <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/Login" component={Login}/>
        </BrowserRouter>
    )
}

export default Routers;