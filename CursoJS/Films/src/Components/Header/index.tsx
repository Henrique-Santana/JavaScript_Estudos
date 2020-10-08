import React from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/style/global.css';
import './style.css';

function Header() {
  return (
    <div className="principal">
    <div className="header">
      <nav>
        <img src={logo} alt='logo da coletanea'/>
      </nav>
      </div>
    </div>
  );
}

export default Header;