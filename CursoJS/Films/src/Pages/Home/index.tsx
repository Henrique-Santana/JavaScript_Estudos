import React from 'react';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/Index';
import imgCinema from '../../assets/images/cinema.png';
import imgCategoria from '../../assets/images/theater.png';
import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  return (
    <div >
      <Header description="Conheça nosssa coletanea"/>
      <div className="centro">
        <div className="home">
          <div className="first"> 
            <h2>Monte sua coletânea de filmes...</h2>
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. </p>
          </div>
          <div className="secunds">
          <div className="secund1"> 
          <Link to="/" > <img src={imgCinema} alt='imagen do cinema'/> </Link>
            <h3>Filmes</h3>
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. </p>
          </div>
          <div className="secund2"> 
            <Link to="/" > <img src={imgCategoria} alt='imagen de categoria'/> </Link>
            <h3>Categoria</h3>
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. </p>
          </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;