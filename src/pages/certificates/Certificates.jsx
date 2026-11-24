import NavbarAccount from '../../components/navbarAccount/NavbarAccount';
import {useState} from 'react';

const Certificates = () => {
    const [openDetails, setOpenDetails] = useState(null);
    const certificates = [
        {id:123, title: '236'},
        {id:124, title: '237'},
        {id:125, title: '238'},
    ];
    return (
        <main class="account-page">
            <div class="main-container">
                <div class="account-menu">
                    <NavbarAccount />
                </div>
                <div class="grid-layout">
                    <section class="certificates">
                        <div class="cert-section">
                            <div class="section-title">Текущий баланс</div>
                            <div class="cert-empty">
                                10000.00 ₽
                            </div>
                        </div> 
                        <div class="cert-section">
                            <div class="section-title">Купленные сертификаты</div>
                            <div class="cert-empty">
                                У вас нет купленных сертификатов
                            </div>
                            <button class="btn-gray w-100">
                                Купить сертификат
                            </button>
                        </div>
                        <div class="cert-section">
                            <div class="section-title">Активированные сертификаты</div>
                            <div class="certificates-list">
                                { certificates.map(certificate => {
                                    const isOpen = openDetails === certificate.id;
                                    return (
                                        <div key={certificate.id} class={`certificate ${isOpen ? 'is-open' : ''}`}>
                                            <div class="cert-head">
                                                <div class="cert-main">
                                                    <div class="cert-title">10000.00₽</div>
                                                    <div class="cert-subtitle">{certificate.title}QWE</div>
                                                </div>
                                                <button onClick={() => setOpenDetails(isOpen ? null : certificate.id)} class="cert-toggle">
                                                    <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <mask id="mask0_139_1075" maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
                                                        <rect x="4" y="20" width="16" height="16" transform="rotate(-90 4 20)" fill="#D9D9D9"/>
                                                        </mask>
                                                        <g mask="url(#mask0_139_1075)">
                                                        <path d="M12.0011 14.1833L16.901 9.28333C17.0677 9.11667 17.2622 9.03611 17.4844 9.04167C17.7066 9.04722 17.901 9.13333 18.0677 9.3C18.2344 9.46667 18.3177 9.66111 18.3177 9.88333C18.3177 10.1056 18.2344 10.3 18.0677 10.4667L12.9511 15.6C12.8177 15.7333 12.6677 15.8333 12.5011 15.9C12.3344 15.9667 12.1677 16 12.0011 16C11.8344 16 11.6677 15.9667 11.5011 15.9C11.3344 15.8333 11.1844 15.7333 11.0511 15.6L5.91772 10.4667C5.75105 10.3 5.6705 10.1028 5.67605 9.875C5.68161 9.64722 5.76772 9.45 5.93438 9.28333C6.10105 9.11667 6.2955 9.03333 6.51772 9.03333C6.73994 9.03333 6.93438 9.11667 7.10105 9.28333L12.0011 14.1833Z" fill="#272420"/>
                                                        </g>
                                                    </svg> 
                                                </button>
                                            </div>
                                            <div class="cert-body">
                                                <div class="info-item">
                                                    <span>Получатель:</span>
                                                    <span class="text-secondary">Кирилл Сумин</span>
                                                </div>
                                                <div class="info-item">
                                                    <span>Номер телефона:</span>
                                                    <span class="text-secondary">+7-960-678-62-94</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>                    
                    </section>
                    <section class="certificate-action">
                        <form class="form-certificate">
                            <div class="form-group">
                                <label>Активация сертификата</label>
                                <input type="tel" placeholder="Введите код сертификата" />
                            </div>
                            <button class="btn-primary w-100">Активировать</button>
                        </form>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Certificates;