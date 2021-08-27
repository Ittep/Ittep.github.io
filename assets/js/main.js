function showMenu(toggleId, menuId){
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);

    if(toggle && menu ){
        toggle.addEventListener('click', function(){
            menu.classList.toggle('active');
        })
    }
}
showMenu('burger', 'menu');

 
const heroSlider = new Swiper('.hero_container', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    grabCursor: true,
    effect: 'fade',
    
          keyboard: {
              enable: true,
          },

          navigation: {
            prevEl: ".arrow-left",
            nextEl: ".arrow-right"
        },
});

const BrawlStars = ScrollReveal({
    reset: true,
    distanse : '100px',
    duration: 500,
})

BrawlStars.reveal('.item-shop',{
    origin: 'bottom',
    interval: 200,
})