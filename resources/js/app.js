$('.navigation__block').on('click', function() {
    if(!$(this).hasClass('navigation__block_show_navigation')) {
        $(this).addClass('navigation__block_show_navigation');
    } else {
        $(this).removeClass('navigation__block_show_navigation');
    }

    if(!$('.navigation-block').hasClass('navigation-block__container')) {
        $('.navigation-block').addClass('navigation-block__container');
    } else {
        $('.navigation-block').removeClass('navigation-block__container');
    }
});

$('.search__button').on('click', function() {
   $('.search-block').addClass('search-block_show');
});

$('.input__text').focus(function() {
    $(this).prev().addClass('input__label_min_top');
});

$('.input__text').blur(function() {
    if(!$(this).val().length) {
        $(this).prev().removeClass('input__label_min_top');
    }
});

$('.navigation-block__navigation-item a').on('click', function() {
    $(this).find('.navigation-block__triangle-icon').toggleClass('navigation-block__triangle-icon_rotate');
    var $subnav = $(this).next('.navigation-block__subnav');
    if($subnav.length) {
        $subnav.slideToggle();
    }
});
