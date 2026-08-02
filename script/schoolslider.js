
const swriper = new Swiper(".exhibitionSwiper",{
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
        nextE1:".custom-next",
        prevE1:".custom-prev"
    },

    breakpoints:{
        480:{slidesPerView:1},
        768:{slidesPerView:2},
        1024:{slidesPerView:3},
        1400:{slidesPerView:4}
    }
});