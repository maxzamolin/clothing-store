import '../address/address.css';
import NavbarAccount from '../../components/navbarAccount/NavbarAccount';
import { Link } from 'react-router-dom';

const Address = () => {
    return (
        <main class="account-page">
            <div class="main-container">
                <div class="account-menu">
                    <NavbarAccount />
                </div>
                <div class="address-list">
                    <div class="address-card">
                        <div class="address-info">
                            <div class="address">ул. Ленина, 9</div>
                            <div class="contacts">
                                Кирилл Сумин, +7-960-678-62-94
                            </div>
                        </div>
                        <div class="address-action">
                            <button class="btn-default">
                                Основной
                            </button>
                            
                        </div>
                        <div class="delivery">
                            <img src="../../assets/images/ui/sdek.svg" alt="" />
                        </div>
                    </div>
                    <div class="address-card">
                        <div class="address-info">
                            <div class="address">ул. Ленина, 9</div>
                            <div class="contacts">
                                Кирилл Сумин, +7-960-678-62-94
                            </div>
                        </div>
                        <div class="address-action">
                            <button class="btn-primary">
                                Сделать основным
                            </button>
                            <button class="address-remove">
                                <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_1_4005" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9"></rect>
                                    </mask>
                                    <g mask="url(#mask0_1_4005)">
                                    <path d="M8.75873 16.3048C8.46506 16.5985 7.98891 16.5985 7.69523 16.3048C7.40156 16.0111 7.40156 15.535 7.69523 15.2413L10.9365 12L7.69789 8.7829C7.40303 8.49 7.40224 8.01328 7.69612 7.7194C7.98931 7.42621 8.46466 7.42621 8.75785 7.7194L12 10.9615L15.218 7.72205C15.5104 7.42769 15.9863 7.4269 16.2797 7.72029C16.5731 8.01368 16.5723 8.4896 16.278 8.78202L13.0385 12L16.2806 15.2422C16.5738 15.5354 16.5738 16.0107 16.2806 16.3039C15.9867 16.5978 15.51 16.597 15.2171 16.3021L12 13.0635L8.75873 16.3048Z" fill="#272420"></path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div class="delivery">
                            <img src="../../assets/images/ui/sdek.svg" alt="" />
                        </div>
                    </div>
                    <div class="address-list-action">
                        <Link to="/account/address/add" class="btn-gray">Добавить адрес</Link>
                    </div>
                </div>            
            </div>
        </main>
    )
}

export default Address;