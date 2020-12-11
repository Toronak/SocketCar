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
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header__wrapper").style.margin = "1.04% 20.31% 1.04% 20.31%";
    document.querySelector(".header").style.background = "#ffffff";
  } else {
    document.querySelector(".header__wrapper").style.margin = "4.06% 20.31% 1.04% 20.31%";
    document.querySelector(".header").style.background = "#E9E9E9";
  }
}

// Modal window
let modal = document.getElementById('myModal');
let btn = document.querySelectorAll("myBtn");
let span = document.getElementsByClassName("close-icon")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}