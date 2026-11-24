import '../contacts/contacts.css'
import { Link } from 'react-router-dom';

const Contacts = () => {
    return (
        <main className="contacts-page">
            <div className="main-container">
                <section className="page-header">
                    Контакты
                </section>
                <section className="contacts-section">
                    <div className="info-item">
                        <span className="text-secondary">По всем вопросам пишите нам на почту</span>
                        <Link className="text-decoration" to="mailto:onlylovewear@gmail.com">onlylovewear@gmail.com</Link>
                    </div>
                    <div className="info-item">
                        <span className="text-secondary">Telegram поддержка</span>
                        <Link className="text-decoration" to="https://t.me/@onlylovesupport">@onlylovesupport</Link>
                    </div>
                </section>
                <section className="contacts-section">
                    <Link className="text-secondary" to="">Оферта и политика конфедициальности</Link>
                </section>
            </div>
        </main>
    )
}

export default Contacts;