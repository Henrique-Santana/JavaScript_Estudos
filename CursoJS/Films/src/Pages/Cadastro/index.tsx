import React, {useState} from 'react';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/Index';
import '../../assets/style/global.css'; 
import Input from '../../Components/input';
import './style.css'
import Button from '../../Components/Button';



function Cadastro(){
    const [cont,setCont] = useState(0);
    return(
        <div>
            <Header description="Faça o cadastro aqui"/>
            <div className="sla">
                <div className="sla2">
                    <h1>Cadastro</h1>
                    <Input type="name" label="Nome" name="nome" />
                    <Input type="email" label="E-mail" name="email"/>
                    <Input type="boll" label="Permissão" name="permisao"/>
                    <Input type="password" label="Senha" name="senha"/>
                    <Button onClick={() => setCont(cont + 1)} value="Enviar"/>
                        <p>Você clicou {cont}</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Cadastro;