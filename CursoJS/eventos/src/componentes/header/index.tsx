import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import '../../assets/style/global.css';

interface HeadeProps {
    title: string
}

const Header: React.FC<HeadeProps> = (props) => {
    return (
        <div>
            <nav>
                <div>
                    <h3>{props.title}</h3>
                </div>
                <ul className="menu">
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/login">Login</Link></li>
                    <li><Link className="link" to="/eventos">Eventos</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;