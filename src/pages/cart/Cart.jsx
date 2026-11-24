import '../cart/cart.css';
import noImage from '../../assets/images/products/no-image.png';

const Cart = () => {
    return (
        <main className="cart-page">
            <div className="main-container">
                <div className="grid-layout">
                    <section className="cart-summary">
                        <button className="btn-primary">
                            Оформить заказ
                        </button>
                        <span className="text-secondary">
                            Обращаем ваше внимание на то, что ваши товары <br />сохраняются в корзине до 15.06.2025
                        </span>
                    </section>
                    <section className="cart-items">
                        <div className="cart-item">
                                <div className="product-image">
                                <img src={noImage} alt="Название товара" />
                            </div>

                            <div className="cart-item-info">
                                <div className="product-title">Distracted flower Milk & Green, <span className="size-option">XS</span></div>
                                
                                <div className="cart-item-price">4500 ₽</div>

                                <button className="cart-item-remove">
                                    <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_1_4005" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_1_4005)">
                                        <path d="M8.75873 16.3048C8.46506 16.5985 7.98891 16.5985 7.69523 16.3048C7.40156 16.0111 7.40156 15.535 7.69523 15.2413L10.9365 12L7.69789 8.7829C7.40303 8.49 7.40224 8.01328 7.69612 7.7194C7.98931 7.42621 8.46466 7.42621 8.75785 7.7194L12 10.9615L15.218 7.72205C15.5104 7.42769 15.9863 7.4269 16.2797 7.72029C16.5731 8.01368 16.5723 8.4896 16.278 8.78202L13.0385 12L16.2806 15.2422C16.5738 15.5354 16.5738 16.0107 16.2806 16.3039C15.9867 16.5978 15.51 16.597 15.2171 16.3021L12 13.0635L8.75873 16.3048Z" fill="#272420"/>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="cart-item">
                                <div className="product-image">
                                <img src={noImage} alt="Название товара" />
                            </div>

                            <div className="cart-item-info">
                                <div className="product-title">Distracted flower Milk & Green, <span className="size-option">XS</span></div>
                                
                                <div className="cart-item-price">4500 ₽</div>

                                <button className="cart-item-remove">
                                    <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_1_4005" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_1_4005)">
                                        <path d="M8.75873 16.3048C8.46506 16.5985 7.98891 16.5985 7.69523 16.3048C7.40156 16.0111 7.40156 15.535 7.69523 15.2413L10.9365 12L7.69789 8.7829C7.40303 8.49 7.40224 8.01328 7.69612 7.7194C7.98931 7.42621 8.46466 7.42621 8.75785 7.7194L12 10.9615L15.218 7.72205C15.5104 7.42769 15.9863 7.4269 16.2797 7.72029C16.5731 8.01368 16.5723 8.4896 16.278 8.78202L13.0385 12L16.2806 15.2422C16.5738 15.5354 16.5738 16.0107 16.2806 16.3039C15.9867 16.5978 15.51 16.597 15.2171 16.3021L12 13.0635L8.75873 16.3048Z" fill="#272420"/>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </section>
                    
                    <section className="cart-checkout">
                        <form className="checkout-form">
                            <div className="form-section">
                                <div className="form-group">
                                    <label>Получатель</label>
                                    <input type="text" placeholder="Имя Фамилия" />
                                </div>
                                <div className="form-group">
                                    <label>Телефон</label>
                                    <div className="input-phone">
                                        <button className="select-country">
                                            <div className="flag">
                                                <img src="../assets/images/ui/ru.svg" alt="Иконка" />
                                            </div>
                                            <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_139_1075"  maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
                                                <rect x="4" y="20" width="16" height="16" transform="rotate(-90 4 20)" fill="#D9D9D9"/>
                                                </mask>
                                                <g mask="url(#mask0_139_1075)">
                                                <path d="M12.0011 14.1833L16.901 9.28333C17.0677 9.11667 17.2622 9.03611 17.4844 9.04167C17.7066 9.04722 17.901 9.13333 18.0677 9.3C18.2344 9.46667 18.3177 9.66111 18.3177 9.88333C18.3177 10.1056 18.2344 10.3 18.0677 10.4667L12.9511 15.6C12.8177 15.7333 12.6677 15.8333 12.5011 15.9C12.3344 15.9667 12.1677 16 12.0011 16C11.8344 16 11.6677 15.9667 11.5011 15.9C11.3344 15.8333 11.1844 15.7333 11.0511 15.6L5.91772 10.4667C5.75105 10.3 5.6705 10.1028 5.67605 9.875C5.68161 9.64722 5.76772 9.45 5.93438 9.28333C6.10105 9.11667 6.2955 9.03333 6.51772 9.03333C6.73994 9.03333 6.93438 9.11667 7.10105 9.28333L12.0011 14.1833Z" fill="#272420"/>
                                                </g>
                                            </svg>                                                
                                        </button>
                                        <input type="tel" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-section">
                                <div className="form-group">
                                    <label>Способ доставки</label>
                                    <select>
                                        <option value="СДЭК">СДЭК</option>
                                    </select>
                                </div>
                                <div className="form-map">
                                    <img src="/assets/images/ui/map.png" alt="Иконка" />
                                </div>
                                <div className="form-group">
                                    <label>Адрес доставки</label>
                                    <input type="text" value="г. Москва, ул. Таганская 34 к. 5" />
                                </div>
                                <div className="form-group">
                                    <label>Сохранённые адреса:</label>
                                    <div className="address-card">
                                        <div className="address">ул. Ленина, 9</div>
                                        <div className="contacts">
                                            Кирилл Сумин, +7-960-678-62-94
                                        </div>
                                    </div>
                                    <div className="address-card">
                                        <div className="address">ул. Ленина, 9</div>
                                        <div className="contacts">
                                            Кирилл Сумин, +7-960-678-62-94
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-section">
                                <div className="form-group">
                                    <label>Промокод</label>
                                    <input type="text" placeholder="Введите промокод (при наличии)" />
                                </div>
                            </div>
                            <div className="form-section">
                                <div className="checkout-total">
                                    <span>Итого:</span>
                                    <span>7 000 ₽</span>
                                </div>
                                <div className="total-info">
                                    <span>Стоимость товаров: 4500₽</span>
                                    <span>Доставка 299₽</span>
                                </div>
                                <button className="btn-primary">
                                    Оформить заказ
                                </button>
                            </div>
                        </form>
                    </section>

                </div>

            </div>
        </main>
    )
}

export default Cart;