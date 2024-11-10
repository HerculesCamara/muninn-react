import { Link } from 'react-router-dom';
import logo from '../../assets/munnin.png';

const Header: React.FC = () => {
    return (
        <header className="header">
            <Link to="/" className="Munnin logo">
                <img src={logo} alt="Muninn" />
            </Link>
            <nav className="nav">
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;