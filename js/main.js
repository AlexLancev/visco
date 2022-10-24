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

    $('.today__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: true
    });

    $('.clients__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: true
    });

    $('.stories__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: true
    });

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

    $('.company-management__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        infinite: true,
        arrows: false,
        dots: true
    });

    $('.team__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        infinite: false,
        arrows: false,
        dots: true
    });

    $('.team-all__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        infinite: false,
        arrows: false,
        dots: true
    });

  });