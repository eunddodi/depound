'use strict';

// 스크롤 시 Navbar화면 상단에 고정
const navbar = document.querySelector('nav');
const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight) {
        console.log("잉")
        navbar.classList.add('navbar--fixed')
    } else {
        navbar.classList.remove('navbar--fixed')
    }
});

// 이미지 슬라이드 기능 with bxSlider
$(document).ready(function() {
    $('.bxslider').bxSlider({
        auto: true,
        speed: 500,
        pause: 5000,
        mode: 'horizontal',
        pager: true,
        controls: false,
    })
})

// nav 'shop' 메뉴에 커서 올리면 드롭다운 메뉴 표시

const navbarShop = document.querySelector('.nav__shop');
const shopDropdown = document.querySelector('.nav__shop .dropdown');
navbarShop.addEventListener('mouseover', () => {
    shopDropdown.classList.add('open');
})
navbarShop.addEventListener('mouseout', () => {
    shopDropdown.classList.remove('open');
})
shopDropdown.addEventListener('mouseout', () => {
    shopDropdown.classList.remove('open');
})

// nav 'community' 메뉴에 커서 올리면 드롭다운 메뉴 표시
const navbarComm = document.querySelector('.nav__comm');
const commDropdown = document.querySelector('.nav__comm .dropdown');
navbarComm.addEventListener('mouseover', () => {
    commDropdown.classList.add('open');
})
navbarComm.addEventListener('mouseout', () => {
    commDropdown.classList.remove('open');
})
commDropdown.addEventListener('mouseout', ()=> {
    commDropdown.classList.remove('open');
})
