// Smooth scroll for menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // 모바일 메뉴에서 클릭 시 메뉴 닫기
        if (window.innerWidth <= 768) {
            mainMenu.classList.remove('open');
        }
    });
});

// 모바일 메뉴 토글
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainMenu = document.querySelector('.main-menu');

mobileMenuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('open');
});
