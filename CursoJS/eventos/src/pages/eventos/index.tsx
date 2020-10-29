import React, { useState, useEffect } from 'react';
import Header from '../../componentes/header';

function Eventos(){
    const [filme, setFilme] = useState('');
    const [filmes, setFilmes] = useState([]);
    const [idFilme, setIdFilme] = useState(0);

    const [genero, setGenero] = useState('');
    const [generos, setGeneros] = useState([]);
    
    useEffect(() => {
        listarfilmes();
        listarGeneros();
    },[])
    
    return(
        <div>
            <Header title="Registre seus eventos"/>
            <h1>Eventos</h1>
        </div>
    )
}

export default Eventos;