let menu= document.querySelector('#menu-bar');
let navbar= document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    
    loop:true,

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 2,
        },
        1280:{
            slidesPerView: 3,
        },
        },
    });

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}


function fadeOut(){
    setInterval(loader,3000);
}

window.onload = fadeOut();