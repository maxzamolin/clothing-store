import { NavLink } from 'react-router-dom';

const NavbarAccount = () => {
    return (
        <ul class="nav">
            <li class="menu-item">
                <NavLink className="link" to="/account/orders">Мои заказы</NavLink>
            </li>
            <li class="menu-item">
                <NavLink className="link" to="/account/address">Мои адреса</NavLink>
            </li>
            <li class="menu-item">
                <NavLink className="link" to="/account/certificates">Мои сертификаты</NavLink>
            </li>
            <li class="menu-item">
                <NavLink className="link" to="/account/password">Пароль</NavLink>
            </li>
            <li class="menu-item">
                <NavLink className="link" end to="/account">О себе</NavLink>
            </li>
        </ul>
    )
}

export default NavbarAccount;