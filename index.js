var toggle = document.querySelector(".toggle-btn");
var menu = document.querySelector(".nav-menu");
var bigSlide = document.querySelector("#big-slide");
var slide = document.querySelector(".slide");

let isShow = false;

toggle.addEventListener("click", () => {
  isShow = !isShow;
  if (isShow) {
    menu.style.cssText =
      "display: flex; flex-direction: column; align-items: center;";
    setTimeout(() => {
      menu.style.height = "300px";
    }, 1);
    setTimeout(() => {
      for (let i = 0; i < menu.children.length; i++) {
        menu.children[i].style.display = "block";
      }
    }, 100);
  } else {
    menu.style.height = "0px";
    setTimeout(() => {
      for (let i = 0; i < menu.children.length; i++) {
        menu.children[i].style.display = "none";
      }
    }, 100);
    setTimeout(() => {
      menu.style.display = "none";
    }, 300);
  }
});

var swiper = new Swiper(".cubeSwiper", {
  // effect: "cube",
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  interval: 1000,
  grabCursor: true,
  pauseOnMouseEnter: true,
});
var swiper = new Swiper(".cubeSwiper2", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  interval: 1000,
  grabCursor: true,
  pauseOnMouseEnter: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var charityBtn = document.querySelectorAll(".charity-btn");
var newImages = document.querySelectorAll(".new");

charityBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    hideNew();
    charityBtn.forEach((button, i) => {
      button.style.backgroundImage = "url('./Image/button-white.webp')";
      if (index === i) {
        button.style.backgroundImage = "url('./Image/button-yellow.webp')";
        newImages[i].style.display = "block";
      }
    });
  });
});

function hideNew() {
  newImages.forEach((item) => {
    item.style.display = "none";
  });
}
