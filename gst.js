gsap.registerPlugin(ScrollTrigger);
gsap.to(".navbar",{

    scrollTrigger:{
        markers:false,
        start:"top -4%",
        
        trigger:".carousel",
        toggleClass:{ targets:".navbar",className:"navbar-active" },
    }
})

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1700: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
    },
  });

  var swiperContainer = document.querySelector('.mySwiper');

  swiperContainer.addEventListener('mouseenter', function () {
    swiper.autoplay.stop();
  });

  swiperContainer.addEventListener('mouseleave', function () {
    swiper.autoplay.start();
  });
});


  

  


  let tl = gsap.timeline({});

  tl.fromTo(".slo",{y:40,opacity:0,duration:0.1},{y:0,ease:"sine.out",opacity:1,duration:3});

  tl.fromTo(".nav-item",{stagger:{from: "random", 
  amount: 1 } ,y:-70,opacity:0,duration:0.1},{stagger:{from: "random", 
  amount: 1 },y:0,ease:"back.out(1.7)",opacity:1,duration:2},'-=2.5');

  tl.fromTo(".nav-item2",{stagger:{from: "random", 
  amount: 1 } ,y:-70,opacity:0,duration:0.1},{stagger:{from: "random", 
  amount: 1 },y:0,ease:"back.out(1.7)",opacity:1,duration:2},'-=2.5');

  

  tl.fromTo(".cloudleft",{repeat:-1,y:160,x:200,opacity:0.6,duration:20},{repeat:-1,y:20,x:60,ease:"sine.out",opacity:0,duration:20},'-=20');
  

  tl.fromTo(".cloudright",{repeat:-1,x:-150,y:120,opacity:0.7,duration:20},{repeat:-1,x:-300,y:30,ease:"sine.out",opacity:0,duration:20},'-=30');


  tl.fromTo(".slogan",{x:-100,opacity:0,duration:0.1},{x:20,ease:"sine.ot",opacity:1,duration:4},'+=6');


  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  
  	// 當用戶滾動超過20px時，顯示按鈕
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
  } else {
      topBtn.style.display = "none";
  }
}

// 當用戶點擊按鈕時，回到頁面頂部
function topFunction() {
  document.body.scrollTop = 0; // 對於Safari
  document.documentElement.scrollTop = 0; // 對於Chrome, Firefox, IE 和 Opera
}

  



   
  