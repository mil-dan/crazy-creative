'use strict';

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const overlay = document.querySelector('.header__overlay');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

overlay.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

const indicatorEl = document.getElementById("indicator");
const switchEl = document.getElementById("switch");
const switchImgEl = document.getElementById("switchImg");
let imgChanged = false;

switchEl.addEventListener("click", function() {
  indicatorEl.classList.toggle("active");
  switchImgEl.classList.add("fade-out");

   setTimeout(() => {
    if (!imgChanged) {
      switchImgEl.src = "./images/hero/hero-4.svg";
      imgChanged = true;
    } else {
      switchImgEl.src = "./images/hero/hero-3.svg";
      imgChanged = false;
    }
    switchImgEl.classList.remove("fade-out");
  }, 300);
});


const questions = document.querySelectorAll(".btn");

questions.forEach(question => {
  question.addEventListener("click", function() {
    const currentAnswer = this.nextElementSibling;
    const isActive = this.classList.contains("active");
    
    questions.forEach(question => {
      question.classList.remove("active");
      const answer = question.nextElementSibling;
      answer.style.display = "none";
    });
    
    if (!isActive) {
      this.classList.add("active");
      currentAnswer.style.display = "block";
    }
  });
});

const scrollTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
