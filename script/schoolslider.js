
/* skipLink */

const skipLink = document.querySelector(".skip-link");
skipLink.addEventListener("click", function () {
    const main = document.getElementById("main-content");
    main.focus();
});

/* Header */

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* Exhibition Header */

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".exhibitionSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,

    loop: true,
    speed: 800,
    grabCursor: true,

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev"
    },

    breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    }
  });
});