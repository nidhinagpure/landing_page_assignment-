
const swriper = new initSwiper(".exhibitionSwiper",{
    slidesPerView:1,
    spaceBetween:20,
    loop:true,

    keyboard:{
        enabled:true,
    },
    a11y:{
        enabled:true,
    },

    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    navigation:{
        nextE1:"custom-next",
        prevE1:".custom-prev"
    },

    breakpoints:{
        480:{slidesPerView:1},
        768:{slidesPerView:2},
        1024:{slidesPerView:3},
        1400:{slidesPerView:4}
    }
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
