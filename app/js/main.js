//---Change language---

let btns = document.querySelectorAll(".btn-language");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.querySelector(".active");
    current.className = current.className.replace(" active", "");
    this.className += " active";
  });
}
// //---Sticky header---
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
    document.querySelector(".header__wrapper").style.padding = "20px 30px 20px 30px";
    document.querySelector(".header").style.background = "#ffffff";
  } else {
    document.querySelector(".header__wrapper").style.padding = "78px 30px 10px 30px";
    document.querySelector(".header").style.background = "#E9E9E9";
  }
}