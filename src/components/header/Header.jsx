import '../header/header.css';
import Navbar from '../navbars/Navbar';
import Actions from '../actions/Actions';
import {useState} from 'react';
import { useMatches, useNavigate } from 'react-router-dom';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const matches = useMatches();
    const navigate = useNavigate();

    const { back } = matches[matches.length - 1]?.handle ?? {};

    return (
        <header class="header">
        <div class="container">
            {back ? (
                <button className="menu-toggle" aria-label="Назад" onClick={() => navigate(back)}>
                    <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_405_2371"  maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
                        <rect x="2" y="2" width="20" height="20" fill="#D9D9D9"></rect>
                        </mask>
                        <g mask="url(#mask0_405_2371)">
                        <path d="M9.11243 13.3355L12.9576 17.1807C13.1146 17.3377 13.1898 17.5208 13.1832 17.73C13.1767 17.9393 13.095 18.1224 12.938 18.2794C12.7811 18.4232 12.598 18.4984 12.3887 18.505C12.1794 18.5115 11.9963 18.4363 11.8394 18.2794L6.66014 13.1001C6.58166 13.0216 6.52608 12.9366 6.49338 12.8451C6.46068 12.7535 6.44434 12.6554 6.44434 12.5508C6.44434 12.4462 6.46068 12.3481 6.49338 12.2565C6.52608 12.165 6.58166 12.08 6.66014 12.0015L11.8394 6.82225C11.9832 6.67838 12.1631 6.60645 12.3789 6.60645C12.5947 6.60645 12.7811 6.67838 12.938 6.82225C13.095 6.97919 13.1734 7.16557 13.1734 7.38137C13.1734 7.59717 13.095 7.78355 12.938 7.94049L9.11243 11.7661H17.8818C18.1042 11.7661 18.2905 11.8413 18.4409 11.9917C18.5914 12.1421 18.6666 12.3285 18.6666 12.5508C18.6666 12.7731 18.5914 12.9595 18.4409 13.1099C18.2905 13.2603 18.1042 13.3355 17.8818 13.3355H9.11243Z" fill="#272420"></path>
                        </g>
                    </svg>
                </button>
            ):(
            <button onClick={() => setIsOpen(!isOpen)} class="menu-toggle" aria-label={ isOpen ? 'Закрыть меню' : 'Открыть меню'}>
                {isOpen ? (
                    <svg class="icon icon-close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_1_4005"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_1_4005)">
                        <path d="M8.75873 16.3048C8.46506 16.5985 7.98891 16.5985 7.69523 16.3048C7.40156 16.0111 7.40156 15.535 7.69523 15.2413L10.9365 12L7.69789 8.7829C7.40303 8.49 7.40224 8.01328 7.69612 7.7194C7.98931 7.42621 8.46466 7.42621 8.75785 7.7194L12 10.9615L15.218 7.72205C15.5104 7.42769 15.9863 7.4269 16.2797 7.72029C16.5731 8.01368 16.5723 8.4896 16.278 8.78202L13.0385 12L16.2806 15.2422C16.5738 15.5354 16.5738 16.0107 16.2806 16.3039C15.9867 16.5978 15.51 16.597 15.2171 16.3021L12 13.0635L8.75873 16.3048Z" fill="#272420"/>
                        </g>
                    </svg>
                    
                ) : (
                    <svg class="icon icon-burger"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 8.2002C20.4418 8.2002 20.7998 8.55817 20.7998 9C20.7998 9.44183 20.4418 9.7998 20 9.7998H4C3.55817 9.7998 3.2002 9.44183 3.2002 9C3.2002 8.55817 3.55817 8.2002 4 8.2002H20Z" fill="#272420"/>
                        <path d="M20 14.2002C20.4418 14.2002 20.7998 14.5582 20.7998 15C20.7998 15.4418 20.4418 15.7998 20 15.7998H4C3.55817 15.7998 3.2002 15.4418 3.2002 15C3.2002 14.5582 3.55817 14.2002 4 14.2002H20Z" fill="#272420"/>
                    </svg>
                )}
            </button>
            )}
            <Navbar isOpen={isOpen} />
            <Actions />
        </div>
      </header>
    )
}

export default Header;