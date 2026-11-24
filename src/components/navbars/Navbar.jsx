import '../navbars/navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({isOpen}) => {
    return (
        <nav className={isOpen ? 'nav-menu show' : 'nav-menu'}>
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/catalog">Магазин</NavLink></li>
                <li><NavLink to="/account/orders">Мои заказы</NavLink></li>
                <li><NavLink to="/account/certificates">Сертификаты</NavLink></li>
                <li><NavLink to="/sending">На отправку</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;