$(document).ready(function(){

    //close promo text
    $('.promo__close').on('click', function () {
        $('.promo_hide').hide('slow');
    });

    //search
    $(".search__icon").on('click', function(){
        $(".search, .search__input").toggleClass("active");
        $(".search__input[type='text']").focus();
    });

    //menu
    
    $('.hamburger').on('click', function () {
        $(this).toggleClass("hamburger_active");
        $(".menu__nav").toggleClass("menu__nav_active");
        $('.body__curtain').toggleClass('body__curtain_active');
        
        $(document).click( function(e){
            if ( $(e.target).closest('.menu').length ) {
                return;
            }
            $('.menu__nav').removeClass("menu__nav_active");
            $('.hamburger').removeClass("hamburger_active");
            $('.body__curtain').removeClass('body__curtain_active');
        });
    });

    //sublist
    $(".menu__toplist").on('click', function () {
        $(this).siblings().find(".menu__sublist").hide();
        $(this).children('.menu__sublist').slideToggle("slow");
    });

    //slider
    $('.slider__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider__nav'
    });
    
    $('.slider__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider__items',
        dots: false,
        focusOnSelect: true
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
        dots: true
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