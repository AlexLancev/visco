$(function(){
    $('.slider-header').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 2000,
        fade: true
    });
  });

  $(function(){
    $('.today__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: true
    });
  });

  $(function(){
    $('.clients__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: true
    });
  });

  $(function(){
    $('.stories__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: true
    });
  });

  $(function(){
    $('.corporate__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true
    });
  });

  $(function(){
    $('.company-management__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        infinite: true,
        arrows: false,
        dots: true
    });
  });

  $(function(){
    $('.team__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        infinite: false,
        arrows: false,
        dots: true
    });
  });
 
  $(function(){
    $('.team-all__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        infinite: false,
        arrows: false,
        dots: true
    });
  });















  $(window).scroll(function(){
    let posY = window.scrollY;

    if (posY > 50){
            $('.top_nav').addClass('menu__active');			
    } else{
       $('.top_nav').removeClass('menu__active');				
    }
});


$(function(){

  $('.tabs-link').on('click', function(e) {
      e.preventDefault();

      $('.tabs-link').removeClass('tabs-link--active');
      $(this).addClass('tabs-link--active');

      $('.tabs-container').removeClass('tabs-container--active');
      $($(this).attr('href')).addClass('tabs-container--active');
  });
});


$('.btn__hidden').on('click', function(){
    $(this).addClass('btn__hidden--active');
    $('.box__visible').addClass('box__visible--active');
});




const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  animOnScroll();
}