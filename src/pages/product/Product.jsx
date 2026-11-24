import '../product/product.css';
import { useState } from 'react';
import noImage from '../../assets/images/products/no-image.png';

const Product = () => {
    const [size, setSize] = useState('XS');
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <main class="product-page">
            <div class="product-container">
                <section class="product-info">
                    <h1 class="product-title">Distracted flower Milk & Green</h1>
                  
                    
                  
                    <div class="more-details" hidden={ isOpen ? '' : 'hidden'}  >
                      <div class="product-tags">
                        <span class="tag">хлопок 92%, эластан 8%; </span>
                        <span class="tag">240г/м³</span>
                        <span class="tag">молочный</span>
                      </div>
                  
                      <div class="product-description">
                        Идейные соображения высшего порядка, а также сплочённость команды профессионалов создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса кластеризации усилий. Идейные соображения высшего порядка, а также сплочённость команды профессионалов создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса кластеризации усилий.
                      </div>

                      
                    </div>
                    <button class="btn-more" onClick={() => setIsOpen(!isOpen)} aria-expanded="false">
                        {isOpen ? 'Скрыть' : 'Больше информации'}
                        
                      </button>
                    <div class="sizes">
                        {sizes.map((s) => (
                            <label className="size-option" key={s}>
                                <input
                                    type="radio"
                                    name="size"
                                    value={s}
                                    checked={size === s}
                                    onChange={(e) => setSize(e.target.value)}
                                />
                                <span>{s}</span>
                            </label>
                        ))}
                    </div>
                    <button class="btn-primary w-100">
                        Добавить в корзину
                        <span>4500 ₽</span>
                    </button>
                  </section>                  
            
                <section class="product-media">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="product-image">
                                    <img src={noImage} alt="Название товара" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="product-image">
                                    <img src={noImage} alt="Название товара" />
                                </div>
                            </div>
                        </div>
                        <div class="swiper-prev product-swiper-prev">
                            <img src="../assets/icons/arrow-left.svg" alt="" />
                        </div>
                        <div class="swiper-next product-swiper-next">
                            <img src="../assets/icons/arrow-right.svg" alt="" />
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </section>
            </div>
        </main> 
    )
}

export default Product;