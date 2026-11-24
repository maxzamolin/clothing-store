import '../orders/orders.css';
import noImage from '../../assets/images/products/no-image.png';
import { useState } from 'react';
import NavbarAccount from '../../components/navbarAccount/NavbarAccount';

const Orders = () => {
    const [openDetails, setOpenDetails] = useState(null);
    const orders = [
        {id:123, title: '2386'},
        {id:124, title: '2387'},
        {id:125, title: '2388'},
    ];
    return (
        <main className="account-page">
            <div className="main-container">
                <div className="account-menu">
                    <NavbarAccount />
                </div>
                <div className="orders">
                    { orders.map(order => {
                        const isOpen = openDetails === order.id;
                        return (
                    <div key={order.id} className={`order ${isOpen ? 'is-open' : ''}`}>
                        <div className="order-head">
                            <div className="order-main">
                                <div className="order-title">Заказ #{order.title}</div>
                                <div className="order-subtitle">3598₽, 10 шт.</div>
                            </div>
                        
                            <div className="order-preview">
                                <img src={noImage} alt="No image" />
                                <img src={noImage} alt="No image" />
                                <img src={noImage} alt="No image" />
                            </div>
                        
                            <button onClick={() => setOpenDetails(isOpen ? null : order.id)} className="order-toggle">
                                <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_405_1075" maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
                                    <rect x="4" y="20" width="16" height="16" transform="rotate(-90 4 20)" fill="#D9D9D9"/>
                                    </mask>
                                    <g mask="url(#mask0_405_1075)">
                                    <path d="M12.0011 14.1833L16.901 9.28333C17.0677 9.11667 17.2622 9.03611 17.4844 9.04167C17.7066 9.04722 17.901 9.13333 18.0677 9.3C18.2344 9.46667 18.3177 9.66111 18.3177 9.88333C18.3177 10.1056 18.2344 10.3 18.0677 10.4667L12.9511 15.6C12.8177 15.7333 12.6677 15.8333 12.5011 15.9C12.3344 15.9667 12.1677 16 12.0011 16C11.8344 16 11.6677 15.9667 11.5011 15.9C11.3344 15.8333 11.1844 15.7333 11.0511 15.6L5.91772 10.4667C5.75105 10.3 5.6705 10.1028 5.67605 9.875C5.68161 9.64722 5.76772 9.45 5.93438 9.28333C6.10105 9.11667 6.2955 9.03333 6.51772 9.03333C6.73994 9.03333 6.93438 9.11667 7.10105 9.28333L12.0011 14.1833Z" fill="#272420"/>
                                    </g>
                                </svg>                                    
                            </button>
                        </div>
                        
                        <div className="order-body">
                            <div className="order-info">
                                <div className="info-item">
                                    <span>Статус оплаты:</span>
                                    <span className="text-secondary">Оплачен</span>
                                </div>
                        
                                <div className="info-item">
                                    <span>Получатель:</span>
                                    <span className="text-secondary">Кирилл Сумин</span>
                                </div>
                        
                                <div className="info-item">
                                    <span>Номер телефона:</span>
                                    <span className="text-secondary">+7-960-678-62-94</span>
                                </div>
                        
                                <div className="info-item">
                                    <span>Доставка:</span>
                                    <span className="text-secondary">ул. Ленина</span>
                                </div>
                        
                                <div className="info-item">
                                    <span>Код отслеживания:</span>
                                    <span className="text-secondary">
                                        10978326759
                                        <button className="copy-btn" aria-label="Скопировать код отслеживания">
                                            <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.91667 14.1668C7.53472 14.1668 7.20775 14.0308 6.93576 13.7588C6.66377 13.4868 6.52778 13.1598 6.52778 12.7779V4.44455C6.52778 4.06261 6.66377 3.73564 6.93576 3.46365C7.20775 3.19166 7.53472 3.05566 7.91667 3.05566H14.1667C14.5486 3.05566 14.8756 3.19166 15.1476 3.46365C15.4196 3.73564 15.5556 4.06261 15.5556 4.44455V12.7779C15.5556 13.1598 15.4196 13.4868 15.1476 13.7588C14.8756 14.0308 14.5486 14.1668 14.1667 14.1668H7.91667ZM7.91667 12.7779H14.1667V4.44455H7.91667V12.7779ZM5.13889 16.9446C4.75694 16.9446 4.42998 16.8086 4.15799 16.5366C3.886 16.2646 3.75 15.9376 3.75 15.5557V6.52789C3.75 6.33113 3.81655 6.1662 3.94965 6.03309C4.08275 5.89999 4.24769 5.83344 4.44444 5.83344C4.6412 5.83344 4.80613 5.89999 4.93924 6.03309C5.07234 6.1662 5.13889 6.33113 5.13889 6.52789V15.5557H12.0833C12.2801 15.5557 12.445 15.6222 12.5781 15.7553C12.7112 15.8884 12.7778 16.0533 12.7778 16.2501C12.7778 16.4469 12.7112 16.6118 12.5781 16.7449C12.445 16.878 12.2801 16.9446 12.0833 16.9446H5.13889Z" fill="#272420"/>
                                            </svg>                                                
                                        </button>
                                    </span>
                                </div>
                            </div>
                        
                            <div className="order-products cart-items">
                                <div className="cart-item">
                                    <div className="product-image">
                                        <img src={noImage} alt="Название товара" />
                                    </div>
                                    <div className="cart-item-info">
                                        <div className="product-title">Distracted flower Milk &amp; Green, <span className="size-option">XS</span></div>
                                        <div className="cart-item-price">4500 ₽</div>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="product-image">
                                        <img src={noImage} alt="Название товара" />
                                    </div>
                                    <div className="cart-item-info">
                                        <div className="product-title">Distracted flower Milk &amp; Green, <span className="size-option">XS</span></div>
                                        <div className="cart-item-price">4500 ₽</div>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="product-image">
                                        <img src={noImage} alt="Название товара" />
                                    </div>
                                    <div className="cart-item-info">
                                        <div className="product-title">Distracted flower Milk &amp; Green, <span className="size-option">XS</span></div>
                                        <div className="cart-item-price">4500 ₽</div>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="product-image">
                                        <img src={noImage} alt="Название товара" />
                                    </div>
                                    <div className="cart-item-info">
                                        <div className="product-title">Distracted flower Milk &amp; Green, <span className="size-option">XS</span></div>
                                        <div className="cart-item-price">4500 ₽</div>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="product-image">
                                        <img src={noImage} alt="Название товара" />
                                    </div>

                                    <div className="cart-item-info">
                                        <div className="product-title">Distracted flower Milk &amp; Green, <span className="size-option">XS</span></div>
                                        <div className="cart-item-price">4500 ₽</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                    })}
                </div>              
            </div>
        </main>
    )
}

export default Orders;