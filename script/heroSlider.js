let schoolSwiper;

function initSwiper() {

    if ( window.innerWidth < 992) {

        if (!schoolSwiper) {

        schoolSwiper = new Swiper(".schoolSwiper", {

            slidesPerView: 1,
            spaceBetween: 20,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            keyboard: {
                enabled: true,
                onlyInViewposrt: true,
                pageUpDown: true,
            },
            a11y: {
                enabled:true,
            },

             breakpoints:{
                768: {
                    slidesPerView:2,
                    spaceBetween: 20,
                }
             },
        });
    }

  }  else  { 

        if ( schoolSwiper) {
            schoolSwiper.destroy(true, true);
            schoolSwiper = null;
        }
        
    }
     
}
window.addEventListener("load", initSwiper);
window.addEventListener("resize", initSwiper);



