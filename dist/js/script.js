$(document).ready(function(){

    //close promo text
    $('.promo__close').on('click', function () {
        $('.promo_js').hide('slow');
    });

    //search
    $(".search__icon").on('click', function(){
        $(".search__form").toggleClass("search__form_active");
        $(document).click( function(e){
            if ( $(e.target).closest('.search').length ) {
                return;
            }
            $('.search__form').removeClass("search__form_active");
        });
    });

    //menu
    
    $('.hamburger').on('click', function () {
        $(this).toggleClass("hamburger_active");
        $(".menu__nav").toggleClass("menu__nav_active");
        $('.all-content_darkened').toggleClass('all-content_darkened_active');
        
        $(document).click( function(e){
            if ( $(e.target).closest('.menu').length ) {
                return;
            }
            $('.menu__nav').removeClass("menu__nav_active");
            $('.hamburger').removeClass("hamburger_active");
            $('.all-content_darkened').removeClass('all-content_darkened_active');
        });
    });

    //submenu
    function open(a, b) {
        $(a).on('click', function () {
            $(this).parent().siblings().find(b).hide();
            $(this).siblings(b).slideToggle("slow");
            $(this).toggleClass('menu__link_icon_active');
        });
    }

    open($('.js_title'), $('.js_menu'));
    open($('.js_subtitle'), $('.js_submenu'));
    
    //slider
    $('.slider__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider__nav'
    });
    
    $('.slider__nav').slick({
        slidesToScroll: 1,
        asNavFor: '.slider__items',
        dots: false,
        arrows:false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3
    });
    
    $('a[data-slide]').on('click', function(e) {
        e.preventDefault();
        let slideno = $(this).data('slide');
        $('.slider__nav').slick('slickGoTo', slideno - 1);
    });

    //number plugin
    $(document).ready(function () {
        $('.numb').number_plugin();
    });

    //slider recomendation
    $('.recomendation__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    //tabs
    function slide(a, b) {
        $(a).on('click', function() {
            $(this).parent().siblings().find(b).hide();
            $(this).parent().siblings( ).find(a).removeClass('active');
            $(this).next(a).slideToggle();
            $(this).toggleClass('active');
        });
    }

    slide($('.tabs__name'), $('.tabs__description'));
    slide($('.accordion__title'), $('.accordion__list'));

    //changes size&color btns
    function changes(a, b) {
        $(a).on('click', function() {
            $(b).text($(this).val());
        });
    }

    changes($('.color__btn'), $('.color__change'));
    changes($('.size__btn'), $('.size__change'));

    //quanity
    $('.quanity__result').text('$'+ $('.price__value').text());
    $('.numb').on('click', function() {
        let price = parseInt($('.price__value').text());
        let value = parseInt($('.numb').val());
        $('.quanity__result').text('$' + price*value + '.00');
    });

    //btn add
    $('.btn_fill').on('click', function() {
        $('.cart__value').text('(' +$('.numb').val() + ')');
    });

});