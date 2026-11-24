import '../catalog/catalog.css';
import { Link } from 'react-router-dom';
import noImage from '../../assets/images/products/no-image.png';

const Catalog = () => {
    return (
        <section className="products-grid">
            <Link to="/product/:3234" className="product-card">
                <div className="product-image">
                    <img src={noImage} alt="Название товара" />
                </div>
            </Link>
            <Link to="/product/:3234" className="product-card">
                <div className="product-image">
                    <img src={noImage} alt="Название товара" />
                </div>
            </Link>
            <Link to="/product/:3234" className="product-card">
                <div className="product-image">
                    <img src={noImage} alt="Название товара" />
                </div>
            </Link>
            <Link to="/product/:3234" className="product-card">
                <div className="product-image">
                    <img src={noImage} alt="Название товара" />
                </div>
            </Link>
            <Link to="/product/:3234" className="product-card">
            <div className="product-image">
                <img src={noImage} alt="Название товара" />
            </div>
            </Link>
            <Link to="/product/:3234" className="product-card">
            <div className="product-image">
                <img src={noImage} alt="Название товара" />
            </div>
            </Link>
            <Link to="/product/:3234" className="product-card">
            <div className="product-image">
                <img src={noImage} alt="Название товара" />
            </div>
            </Link>
            <Link to="/product/:3234" className="product-card">
            <div className="product-image">
                <img src={noImage} alt="Название товара" />
            </div>
            </Link>        
        </section> 
    )
}

export default Catalog;