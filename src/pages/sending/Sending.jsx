import {useState} from 'react';

const Sending = () => {
    const [openDetails, setOpenDetails] = useState(null);
    const orders = [
        {id:123, title: '2386'},
        {id:124, title: '2387'},
        {id:125, title: '2388'},
    ];
    return (
        <main class="account-page">
            <div class="main-container">
                <div class="page-header">
                    <div class="title">На отправку</div>
                </div>
                <div class="orders">
                    { orders.map(order => {
                        const isOpen = openDetails === order.id;
                        return (
                            <div key={order.id} className={`order ${isOpen ? 'is-open' : ''}`}>
                                <div class="order-head">
                                    <div class="order-main">
                                        <div class="order-title">Заказ #{order.title}</div>
                                        <div class="text-success">Получено</div>
                                    </div>
                                
                                    <div class="order-preview">
                                        <img src="../assets/images/products/no-image.png" alt="" />
                                        <img src="../assets/images/products/no-image.png" alt="" />
                                        <img src="../assets/images/products/no-image.png" alt="" />
                                    </div>
                                
                                    <button onClick={() => setOpenDetails(isOpen ? null : order.id)} className="btn-toggle order-toggle">
                                        <img src="../assets/icons/arrow-down.svg" className="icon" alt="Icon" />
                                    </button>
                                </div>
                                
                                <div class="order-body">
                                    <div class="order-info">
                                        <div class="info-item">
                                            <span>Статус оплаты:</span>
                                            <span class="text-secondary">Оплачен</span>
                                        </div>
                                
                                        <div class="info-item">
                                            <span>Получатель:</span>
                                            <span class="text-secondary">Кирилл Сумин</span>
                                        </div>
                                
                                        <div class="info-item">
                                            <span>Номер телефона:</span>
                                            <span class="text-secondary">+7-960-678-62-94</span>
                                        </div>
                                
                                        <div class="info-item">
                                            <span>Доставка:</span>
                                            <span class="text-secondary">ул. Ленина</span>
                                        </div>
                                
                                        <div class="info-item">
                                            <span>Код отслеживания:</span>
                                            <span class="text-secondary">
                                                10978326759
                                                <button class="copy-btn"><img src="../assets/icons/copy.svg" alt="Icon" /></button>
                                            </span>
                                        </div>
                                    </div>
                                
                                    <div class="order-products cart-items">
                                        <div class="cart-item">
                                            <div class="product-image">
                                                <img src="../assets/images/products/no-image.png" alt="Название товара" />
                                            </div>
                                            <div class="cart-item-info">
                                                <div class="product-title">Distracted flower Milk &amp; Green, <span class="size-option">XS</span></div>
                                                <div class="cart-item-price">4500 ₽</div>
                                            </div>
                                        </div>
                                        <div class="cart-item">
                                            <div class="product-image">
                                                <img src="../assets/images/products/no-image.png" alt="Название товара" />
                                            </div>
                                            <div class="cart-item-info">
                                                <div class="product-title">Distracted flower Milk &amp; Green, <span class="size-option">XS</span></div>
                                                <div class="cart-item-price">4500 ₽</div>
                                            </div>
                                        </div>
                                        <div class="cart-item">
                                            <div class="product-image">
                                                <img src="../assets/images/products/no-image.png" alt="Название товара" />
                                            </div>
                                            <div class="cart-item-info">
                                                <div class="product-title">Distracted flower Milk &amp; Green, <span class="size-option">XS</span></div>
                                                <div class="cart-item-price">4500 ₽</div>
                                            </div>
                                        </div>
                                        <div class="cart-item">
                                            <div class="product-image">
                                                <img src="../assets/images/products/no-image.png" alt="Название товара" />
                                            </div>
                                            <div class="cart-item-info">
                                                <div class="product-title">Distracted flower Milk &amp; Green, <span class="size-option">XS</span></div>
                                                <div class="cart-item-price">4500 ₽</div>
                                            </div>
                                        </div>
                                        <div class="cart-item">
                                            <div class="product-image">
                                                <img src="../assets/images/products/no-image.png" alt="Название товара" />
                                            </div>

                                            <div class="cart-item-info">
                                                <div class="product-title">Distracted flower Milk &amp; Green, <span class="size-option">XS</span></div>
                                                <div class="cart-item-price">4500 ₽</div>
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

export default Sending;