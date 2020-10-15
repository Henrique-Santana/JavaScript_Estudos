import React, {  useEffect} from 'react';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/Index';
import '../../assets/style/global.css';
import Button from '../../Components/Button';
import imgTheater from '../../assets/images/theater.png';

function Genero(){
    //const [genero, setGenero] = useState('');
    //const [idGenero, setIdGenero] = useState(0)
    //const [generos, setGeneros] = useState([])

    useEffect(() => {
        //listar();
    },[])

    
    return(
        <div>
            <Header description="cadastre os Gêneros">Gênero</Header>

            <main>
                <h1>Gênero</h1>
                <div className="imgTitulo">
                    <img className="theater" src={imgTheater} alt={"asd"} />
                    <Button value="listar"/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Genero;