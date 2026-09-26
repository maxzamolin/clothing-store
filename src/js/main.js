const toggle = document.querySelector('.btn-more');
const details = document.querySelector('.more-details');

toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';

    toggle.setAttribute('aria-expanded', !isOpen);
    toggle.textContent = isOpen ? 'Больше информации' : 'Скрыть';
    details.hidden = isOpen;
});

// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.product-swiper-next',
        prevEl: '.product-swiper-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});