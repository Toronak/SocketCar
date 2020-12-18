//---Change language---
let changeLanguage = document.querySelectorAll(".btn-language");
// for (let i = 0; i < changeLanguage.length; i++) {
//   changeLanguage[i].addEventListener("click", function() {
//     let current = document.getElementsByClassName("active");
//     current.className = current.className.replace(" active","");
//     this.className =+ " active";
//   });
// }
changeLanguage.onclick = function change(){
if(changeLanguage.classList("active")){
  changeLanguage.classList.remove("active");
} else{
  changeLanguage.classList.add("active");
}
}
//---Sticky header---
window.onscroll = function() {scrollFunction()};

let header = document.querySelector(".header");

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    header.classList.add("header-sticky");
  } else {
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
  
}
