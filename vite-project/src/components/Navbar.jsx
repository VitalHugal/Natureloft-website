import { Link } from 'react-router-dom';
import Logo from "../assets/tent.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header>
            <div className="navbar-container">
                <nav>
                    <ul className='navbar-logo'>
                        <li>
                            <Link to="/"><img src={Logo} alt="Logo site" /></Link>
                        </li>
                    </ul>
                    <ul className="navbar-items">
                        
                        <li className='li-items'>
                            <Link to="/camping">Acampamento</Link>
                        </li>
                        
                        <li className='li-items'>
                            <Link to="/sobre-nós">Sobre nós</Link>
                        </li>  
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
