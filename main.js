window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('loaded');
    }, 500);
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1250);
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});

const sections = document.querySelectorAll('section');
const navA = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 85) {
            current = section.getAttribute('id');
        }
    });

    navA.forEach(a => {
        a.classList.remove('active');
        const href = a.getAttribute('href').substring(1);
        if (href === current) {
            a.classList.add('active');
        }
    });
});
