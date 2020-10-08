import React from 'react';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/Index';
import '../../assets/style/global.css'; 
import Input from '../../Components/input';

function Login() {
  return (
    <div >
      <Header description="Faça o login e acesse a coletanea"/>
      <div className="centro">
        <div className="login">
          <h1>Login</h1>
          <Input name="emai" label="E-mail" type="email" />
          <Input name="senha" label="Senha" type="password" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;