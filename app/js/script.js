$(document).ready(function(){

    //close promo text and hide with scroll
    $('.js_promo-close').on('click', function () {
        $('.js_promo').hide('slow');
    });

    $(window).on('scroll', function() {
        if($(this).scrollTop() >= 2) {
            $('.js_promo').slideUp(300);
            $('.header__fixed').addClass('header__fixed_active');

            if ($(window).width() > 1200) {
                $('.menu').slideUp(300);
            }
        } else {
            $('.js_promo').slideDown(300);
            $('.header__fixed').removeClass('header__fixed_active');
            $('.menu').slideDown(300);
        }
    });

    //search
    $(".js_search").on('click', function(){
        $(".search__form").toggleClass("search__form_active");
    });

    $(document).on('click', function(e){
        if ( $(e.target).closest('.search').length ) {
            return;
        }
        $('.search__form').removeClass("search__form_active");
    });

    //menu
    $('.js-mobile-menu').on('click', function () {
        if ($(window).width() < 1200) {
            $(this).toggleClass("hamburger_active");
            $(".menu__nav").toggleClass("menu__nav_active");
            $('.all-content_darkened').toggleClass('all-content_darkened_active');
        }
    });

    $(document).on('click', function(e){
        if ($(window).width() < 1200) { 
            if ($(e.target).closest('.menu').length) {
                return;
            }
            $('.menu__nav').removeClass("menu__nav_active");
            $('.hamburger').removeClass("hamburger_active");
            $('.menu__link_icon').removeClass('menu__link_icon_active');
            $('.js_menu, .js_submenu').slideUp(300);
            $('.all-content_darkened').removeClass('all-content_darkened_active');
        }
    });
        
            
    $('.js_title').on('click', function () {
        if ($(window).width() < 1200) {
            $(this).parent().siblings().find('.js_menu').hide();
            $(this).parent().siblings().find('.menu__link_icon').removeClass('menu__link_icon_active');
            $(this).siblings('.js_menu').slideToggle("slow");
            $(this).toggleClass('menu__link_icon_active');
        }
    });
        
    $('.js_subtitle').on('click', function () {
        if ($(window).width() < 1200) {
            $(this).parent().siblings().find('.js_submenu').hide();
            $(this).parent().siblings().find('.menu__link_icon').removeClass('menu__link_icon_active');
            $(this).siblings('.js_submenu').slideToggle("slow");
            $(this).toggleClass('menu__link_icon_active');
        }
    });
        
    
    
    //menu for desktop
    $('ul.js_menu__nav_for-desktop').on('mouseenter', 'li.menu__element_border', function() {
        if ($(window).width() > 1199) {
            $(this).siblings().children().removeClass('menu__link_icon_active');
            $(this).parent().siblings().find('.menu__element_block').removeClass('menu__element_block_active');
            $('.menu__sublist_row').addClass('menu__sublist_row_active');
            $('.menu__sublist_column').addClass('menu__sublist_column_active');
            $(this).children().addClass('menu__link_icon_active');
            $('ul.menu__list_for-desktop').children().eq($(this).index()).addClass('menu__element_block_active');
        }
    });

    $('.menu__nav').on('mouseleave', function() {
        if ($(window).width() > 1199) {
            $('.menu__element_border').children().removeClass('menu__link_icon_active');
            $('.menu__element_block').removeClass('menu__element_block_active');
        }
    });
        
    

        
    //tabs

    //tabs for mobile&tablet
    $('.js_tab-title').on('click', function() {
        if ($(window).width() < 992) {
            $(this).parent().siblings().find('.js_tabs__description-mobile').hide();
            $(this).parent().siblings().find('.js_tab-title').removeClass('active');
            $(this).next('.js_tabs__description-mobile').slideToggle();
            $(this).toggleClass('active');
        }
    });

    //tabs for desktop
    
    $('ul.js_tab-list-for-desktop').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('ul.tabs__items').find('div.tabs__item').removeClass('tabs__item_active').eq($(this).index()).addClass('tabs__item_active');
    });
    

    //changes size&color btns
    function changesValue(a, b) {
        $(a).on('click', function() {
            $(b).text($(this).val());
        });
    }

    changesValue($('.js_btn-color'), $('.js_color-value'));
    changesValue($('.js_btn-size'), $('.js_size-value'));

    //quanity
    $('.js_quanity-result').text('$'+ $('.price__value').text());
    $('.js_quanity-numb').on('click', function() {
        let price = parseInt($('.price__value').text());
        let value = parseInt($('.js_quanity-numb').val());
        $('.js_quanity-result').text('$' + price*value + '.00');
    });

    //btn add
    $('.js_btn-buy').on('click', function() {
        $('.cart__value').text('(' +$('.numb').val() + ')');
    });

    // accordion
    $('.js_accordion-title').on('click', function() {
        if ($(window).width() < 992) {
            $(this).parent().siblings().find('.js_accordion-list').hide();
            $(this).parent().siblings().find('.js_accordion-title').removeClass('active');
            $(this).next('.js_accordion-list').slideToggle();
            $(this).toggleClass('active');
        }
    });


    //slider
    $('.slider__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider__nav'
    });

    $('.js-btn_up').on('click', function() {
        $('.slider__items').slick('slickNext');
    });

    $('.js-btn_down').on('click', function() {
        $('.slider__items').slick('slickPrev');
    });
    
    $('.slider__nav').slick({
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        asNavFor: '.slider__items',
        arrows: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    vertical: false,
                    centerMode: true,
                    verticalSwiping: false,
                    arrows: false
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
        ]
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

    //slider recommendation
    $('.recommendation__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.js-btn_next').on('click', function() {
        $('.recommendation__slider').slick('slickNext');
    });

    $('.js-btn_prev').on('click', function() {
        $('.recommendation__slider').slick('slickPrev');
    });
    
});