
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

    if ( window.innerWidth < 992) {

        console.log(document.querySelector(".icon-next"));
        console.log(document.querySelector(".icon-prev"));

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
