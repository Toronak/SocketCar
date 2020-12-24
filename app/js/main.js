"use strict";
//---Change language---
let changeLanguage = document.querySelectorAll(".btn-language");
for (let i = 0; i < changeLanguage.length; i++) {
  changeLanguage[i].addEventListener("click", function() {
    let current = document.querySelector(".active");
    current.className = current.className.replace(" active","");
    this.className = `${this.className} active`;
  });
}

let changeLanguageBurger = document.querySelectorAll(".hamburger-btn-language");
for (let i = 0; i < changeLanguageBurger.length; i++) {
  changeLanguageBurger[i].addEventListener("click", function() {
    let currentBurger = document.querySelector(".glow");
    currentBurger.className = currentBurger.className.replace(" glow","");
    this.className = `${this.className} glow`;
  });
}
//---Sticky header---
window.onscroll = function() {scrollFunction()};

let header = document.querySelector(".header");
let burger = document.querySelector(".hamburger-row");

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    header.classList.add("header-sticky");
    burger.classList.add("hamburger-row-scroll");
  } else {
    burger.classList.remove("hamburger-row-scroll");
    header.classList.remove("header-sticky");
  }
}

// ---Modal window---
let modal = document.querySelector(".modal");
let btn = document.querySelector('.btn-order');
let btn1 = document.querySelector(".redline-top-btn");
let btn2 = document.querySelector(".redline-bot-btn");
let bodyLock = document.querySelector("body");
let closeWindow = document.querySelector(".close-icon");

btn.onclick = function() {
  modal.style.display = "block";
  bodyLock.style.overflowY = "hidden";
  bodyLock.style.paddingRight = "17px";
}
btn1.onclick = function() {
  modal.style.display = "block";
  bodyLock.style.overflowY = "hidden";
  bodyLock.style.paddingRight = "17px";
}
btn2.onclick = function() {
  modal.style.display = "block";
  bodyLock.style.overflowY = "hidden";
  bodyLock.style.paddingRight = "17px";
}
closeWindow.onclick = function() {
    modal.style.display = "none";
    bodyLock.style.overflowY = "auto";
    bodyLock.style.paddingRight = "0";
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        bodyLock.style.overflowY = "auto";
        bodyLock.style.paddingRight = "0";
    }
}

// ---Hamburger-menu---
  document.querySelector(".hamburger-menu").onclick = function(){
  document.querySelector(".hamburger-row").classList.toggle("hamburger-row-active");
  document.querySelector(".hamburger__nav-box").classList.toggle("hamburger__nav-box-active");
  document.querySelector("body").classList.toggle("lock");
  document.querySelector(".header").classList.toggle("hide");
  document.querySelector(".hamburger__nav-box-wrapper").classList.toggle("hamburger__nav-box-wrapper-on");
}
