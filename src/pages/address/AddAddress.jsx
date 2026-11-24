import '../address/address.css';

const AddAddress = () => {
    return (
        <main class="form-page">
            <div class="main-container">
                <section class="form-header">
                    <div class="title">Добавление адреса</div>
                    <div class="subtitle">
                        Обращаем ваше внимание на то, что данные об адресе доставки и получателе не редактируются. но вы всегда сможете добавить другой адрес
                    </div>
                </section>
                <section class="form-section">
                    <form class="login-form">
                        <div class="form-group">
                            <label>ФИО получателя</label>
                            <input type="text" placeholder="Имя Фамилия Отчество" />
                        </div>
                        <div class="form-group">
                            <label>Телефон получателя</label>
                            <input type="tel" />
                        </div>
                        <div class="form-group">
                            <label>Способ доставки</label>
                            <select>
                                <option value="СДЭК">СДЭК</option>
                            </select>
                        </div>
                        <div class="form-map">
                            <img src="/assets/images/ui/map.png" />
                        </div>
                        <div class="form-group">
                            <label>Адрес доставки</label>
                            <input type="text" value="г. Москва, ул. Таганская 34 к. 5" />
                        </div>
                        <button class="btn-primary w-100">Сохранить</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default AddAddress;