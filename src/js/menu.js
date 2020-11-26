export function toggleMenu() {
    const toggleBtn = document.querySelector('.js-menu-btn');
    const menu = document.querySelector('.js-menu');
    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
}

export function closeMenu() {
    const closeBtn = document.querySelector('.js-close-btn');
    const toggleBtn = document.querySelector('.js-menu-btn');
    const menu = document.querySelector('.js-menu');

    closeBtn.addEventListener('click', () => {
        toggleBtn.classList.remove('is-active');
        menu.classList.remove('is-active');
    });
}

export function clickOutside(e) {
    const toggleBtn = document.querySelector('.js-menu-btn');
    const menu = document.querySelector('.js-menu');

    if (e.target.closest('.js-menu') === null && e.target.closest('.js-menu-btn') === null) {
        toggleBtn.classList.remove('is-active');
        menu.classList.remove('is-active');
    }
}
