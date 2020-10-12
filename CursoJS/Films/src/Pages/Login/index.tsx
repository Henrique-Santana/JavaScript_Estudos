import React, {useState} from 'react';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/Index';
import '../../assets/style/global.css';
import Input from '../../Components/input';
import './style.css';
import Button from '../../Components/Button';

function Login() {

  const [cont,setCont] = useState(0);

  return (
    <div >
      <Header description="Faça o login e acesse a coletanea">
        <p>bora testar</p>
      </Header>
      <div className="centro">
        <div className="login">
          <h1>Login</h1>
          <Input name="emai" label="E-mail" type="email" />
          <Input name="senha" label="Senha" type="password" />

          <Button onClick={() => setCont(cont + 1)} value="Enviar"/>
          <p>Você clicou {cont}</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;