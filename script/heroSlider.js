
// const images = [
//     "/assets/students/student1.png",
//     "/assets/students/student2.png",
//     "/assets/students/student3.png",
//     "/assets/students/student4.png",    
// ]

// const { enable, enabled } = require("colors");

// let index = 0;
//     const slide = document.getElementById('slide');

// function next() {
//    index++;
//    slide.src = images[index]
// }

let schoolSwiper;

function initSwiper() {
    if ( window.innerWidth < 992 && !schoolSwiper){

        schoolSwiper = new Swiper ( ".schoolSwiper", {
            sliderPerView: 1,

            spaceBetween: 20,

            pagination: {
                el: ".swiper-pagination",
                clicable: true,
            },
            keyboard: {
                enabled: true,
            },
            ally: {
                enabled:true,
            },

             breakpoints:{
                768: {
                    slidesPerView:2,
                    spaceBetween: 20,
                }
             }
        });
    }

    else if (window.innerWidth >= 992 && schoolSwiper) {
        schoolSwiper.destroy (true, true);

        schoolSwiper = undefined;
    }
     
}

initSwiper();

window.addEventListener("resize", initSwiper);