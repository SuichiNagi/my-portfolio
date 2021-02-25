//Rubberband effect
const text123 = document.querySelectorAll(
  '.text-1, .text-c, .text-2, .text-3, .text-4, .text-5'
);
text123.forEach((text) =>
  text.addEventListener('mouseover', function (e) {
    text.classList.add('animated', 'rubberBand');
  })
);
text123.forEach((text) =>
  text.addEventListener('mouseout', function (e) {
    text.classList.remove('animated', 'rubberBand');
  })
);

//Navbar Sticky effect
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  });

  //toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  //owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items: 1,
        nav: false
      },
      600:{
        items: 2,
        nav: false
    },
      1000:{
      items: 3,
      nav: false
    }
  }
  });
});

//typing animation script
var typed = new Typed (".text-6",{
    strings:["Front End Developer", "Musician", "Aspiring Moto Vlogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

var typed = new Typed (".typing",{
  strings:["Front End Developer", "Musician", "Aspiring Moto Vlogger"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

