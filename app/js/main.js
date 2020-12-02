//---Change language---

let btns = document.querySelector(".btn-language");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.querySelector(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// //---Sticky header---
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.querySelector(".header__wrapper").style.padding = "40px 0 0 0";
  } else {
    document.querySelector(".header__wrapper").style.padding = "78px 0 0 0";
  }
}