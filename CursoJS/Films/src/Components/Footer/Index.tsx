import React from 'react';
import logonegativo from '../../assets/images/logonegativo.png';
import './style.css';
import '../../assets/style/global.css';

function Footer(){
    return(
        <div className='div'>
            <img src={logonegativo} alt='Logotipo de Filmes Collection'/>
            <hr/>
            <div>
            <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
            <br/>
            <p>Call us now toll free: (800)2345-6789</p>
            <br/>
            <p>Customer support: support@demolink.org</p>
            <br/>
            <p>Skype: sample-username</p>
            </div>
        </div>
    );
}
export default Footer;