    const languageToggle = document.getElementById('language-toggle');
    const arElements = document.querySelectorAll('.lang-ar');
    const enElements = document.querySelectorAll('.lang-en');

    function switchToArabic() {
        arElements.forEach((element) => element.style.display = 'block');
        enElements.forEach((element) => element.style.display = 'none');
    }

    function switchToEnglish() {
        arElements.forEach((element) => element.style.display = 'none');
        enElements.forEach((element) => element.style.display = 'block');
    }

    languageToggle.addEventListener('click', () => {
        const arVisible = arElements[0].style.display !== 'none';
        if (arVisible) {
            switchToEnglish();
        } else {
            switchToArabic();
        }
    });

    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    const images = ['./img/p1.jpeg', './img/p2.jpg', './img/p3.jpg'];
    const imageElements = document.querySelectorAll('.fade');
    let currentIndex = 0;

    function changeBackgroundImage() {
        imageElements.forEach((img, index) => {
            img.classList.remove('active');
            img.style.opacity = 0;
            img.style.transform = 'scale(1)';

            if (index === currentIndex) {
                img.src = images[currentIndex];
                img.classList.add('active');
                img.style.opacity = 1;
            }
        });
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackgroundImage();
    setInterval(changeBackgroundImage, 5000);

    document.addEventListener('DOMContentLoaded', () => {
        const textOverlay = document.querySelector('.text-slide-up');
        if (textOverlay) {
            setTimeout(() => {
                textOverlay.classList.add('visible');
            }, 500);
        }

        switchToArabic();
    });
