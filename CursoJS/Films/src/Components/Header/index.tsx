import React from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/style/global.css';
import './style.css';

import {Link, useHistory} from 'react-router-dom';

interface HeaderProps{
  description: string;  //props obrigatoria(Ã tem o ?)
  Text?: string; //Props obrigatória(Tem o ?)
}


const Header:React.FunctionComponent<HeaderProps> =(props) => {
let history = useHistory()  
  
const logout = () => {
  localStorage.removeItem('token-filmes')
  history.push('/')
}

const menu = () => {
  const token =localStorage.getItem('token-filmes');
  if(token === undefined || token === null){
    return(
      <ul className="menu">
        <li><Link to="/" className="link">Home</Link> </li>
        <li><Link to ="/login" className="link">Login</Link> </li>
        <li><Link to="/cadastro" className="link">Cadastro</Link> </li>
      </ul>)
  } else{return(
    <ul className="menu">
      <li><Link to="/" className="link">Home</Link> </li>
      <li><Link to ="/genero" className="link">Gênero</Link> </li>
      <li><Link to ="/filmes" className="link">Filmes</Link> </li>
      <li><Link to="" onClick={event => {
        event.preventDefault();
        logout()}}>Loguout</Link></li>
    </ul>)
  }
}

  return (
    <div className="principal">
      <div className="header">
        <div className="align">
          <nav>
            <Link to="/"><img src={logo} alt='logo da coletanea'/></Link>
            {menu()}
          </nav>
          <h3>{props.description}</h3>
          {props.children}
          {props.Text && <p>{props.Text}</p>}
        </div>
      </div>
    </div>
  );
}

export default Header;