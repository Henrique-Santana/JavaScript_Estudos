import React, {useState} from 'react';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/Index';
import '../../assets/style/global.css';
import Input from '../../Components/input';
import './style.css';
import Button from '../../Components/Button';
import { useHistory } from 'react-router-dom';

function Login() {

  let history = useHistory();

  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');

  const login = () =>{
    const login ={
      email: email,
      senha: senha
    }
  

  fetch('http://localhost:5000/api/login', {
    method: 'POST',
    body: JSON.stringify(login),
    headers:{
      'content-type':'application/json'
    }
  })
  .then (response => response.json())
  .then (dados =>{
    if(dados.token !== undefined || dados.token !== null || dados.token !== ' '){
      localStorage.setItem('token-filmes',dados.token)
      history.push('/')
    }
    else{
      alert('Senha ou Email incorretos! Tente novamente! :(')
    }

  })
  .catch(err=>console.error(err))
}


  return (
    <div >
      <Header description="Faça o login e acesse a coletanea">
        <p>bora testar</p>
      </Header>
      <div className="centro">
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={ event=>{
            event.preventDefault();
            login();
          }}>
          <Input name="emai" label="E-mail" onChange={e=>setEmail(e.target.value)} />
          <Input type="password" name="senha" label="Senha" onChange={e=>setSenha(e.target.value)} />

          <Button value="Enviar"/>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;