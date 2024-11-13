"use strict";

/*--------------------------------------- Elements ---------------------------------------*/
const navBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");
const places = document.querySelector(".places");
const backToTopBtn = document.querySelector(".footer__btn");
const menu = document.querySelector(".menu");

let navIsOpen = false; /* control mobile menu state */

/*---------------------------------------- Events ----------------------------------------*/

/*--------- open-close mobile menu ---------*/

/* 

Note : اگر بخوای بعد از نمایش یه منو موبایل یا مدالی چیزی کاربر نتونه اسکرول کنه کافیه فقط به بدنه قمدار اورفلو رو برابر هیدن بدی همین اما اگر میخوای بتونه اسکرول کنه نیازی نیست کار خاصی بکنی

*/
navBtn.addEventListener("click", e => {
  if (navIsOpen) {
    // close mobile menu
    navBtn.classList.remove("nav__btn--open");
    navMenu.classList.remove("nav-menu--open");
    overlay.classList.remove("overlay--active");

    navIsOpen = false;
  } else {
    // open mobile menu
    navBtn.classList.add("nav__btn--open");
    navMenu.classList.add("nav-menu--open");
    overlay.classList.add("overlay--active");

    navIsOpen = true;
  }
});

/*------ close mobile menu when click on ovelay -----*/
overlay.addEventListener("click", e => {
  if (navIsOpen) {
    // close mobile menu
    navBtn.classList.remove("nav__btn--open");
    navMenu.classList.remove("nav-menu--open");
    overlay.classList.remove("overlay--active");

    navIsOpen = false;
  }
});

/*----  Like Actions ----*/
places.addEventListener("click", e => {
  const likeBtn = e.target.closest(".place__like");

  if (likeBtn) {
    likeBtn.classList.toggle("place__like--fill");
    const likeBtnIcon = likeBtn.querySelector("svg");

    // set animation
    likeBtnIcon.classList.add("animate__animated", "animate__heartBeat");

    // remove animation
    likeBtnIcon.addEventListener("animationend", e => {
      likeBtnIcon.classList.remove("animate__animated", "animate__heartBeat");
    });
  }
});

/* Scroll To Top Button */
backToTopBtn.addEventListener("click", e => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // or we can set scroll-behavior : smooth on html selector in css
  });
});



