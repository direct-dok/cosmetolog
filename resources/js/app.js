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

$('.scroll-by-id').on('click', function(ev) {
    ev.preventDefault();
    if($(window).width() <= 786 && $(ev.target).hasClass('navigation-block__navigation-link_subnav')) {
        return;
    }
    let uri = $(this).attr('href');
    let coincidencePosition = uri.indexOf('#');
    var pathname = uri.substr(0, coincidencePosition);
    var hash = uri.substr(coincidencePosition);
    if(pathname == window.location.pathname) {
        $('.navigation-block').removeClass('navigation-block__container');
        $('.navigation__block').removeClass('navigation__block_show_navigation');
        setTimeout(function() {
            scrollPage(hash)
        }, 400)
    } else {
        window.location.href = uri;
    }
});



$('.scroll-top').on('click', function() {
    scrollPage(0)
});

function showScrollTop(value) {
    if(value > 400) {
        $('.scroll-top').addClass('scroll-top__block_show');
    } else {
        $('.scroll-top').removeClass('scroll-top__block_show');
    }
}

$(window).scroll(function() {
    showScrollTop(window.pageYOffset)
})



function scrollPage(value) {
    if(typeof value == 'string') {
        if($(value).length) {
            $('html, body').animate({scrollTop: $(value).offset().top - 50}, 800);
        }
        return;
    }
    if(typeof +value == 'number') {
        $('html, body').animate({scrollTop: +value}, 800);
        return;
    }

}

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
    if($(window).width() <= 786) {
        $(this).find('.navigation-block__triangle-icon').toggleClass('navigation-block__triangle-icon_rotate');
        var $subnav = $(this).next('.navigation-block__subnav');
        if($subnav.length) {
            $subnav.slideToggle();
        }
    }
});


// scripts for landing blocks
(function(){
    var backgroundImgFirstScreen = $('.first-screen__background-img');
    if(backgroundImgFirstScreen.length) {
        var pathBg = backgroundImgFirstScreen.attr('data-bg');
        setTimeout(function() {
            backgroundImgFirstScreen.css("background-image", "url(" + pathBg + ")");
        }, 500);

    }
})();

// scripts modal window
(function() {

    var elemsAddStyleWhenBodyOverflowHidden = [];

    function bodyOverfrlovHidden() {

        var widthBody = $('body').width(),
            widthWindow = window.innerWidth,
            spacing = widthWindow - widthBody;

        elemsAddStyleWhenBodyOverflowHidden.forEach(function(el) {
            el.css(el.data('style_prop'), spacing)
        })

        $('body').css({'overflow': 'hidden', 'margin-right': spacing});
    }

    function bodyRemoveOverflow() {
        $('body').removeAttr('style');
        elemsAddStyleWhenBodyOverflowHidden.forEach(function(el) {
            el.removeAttr('style');
        })
    }

    function showOverlay() {
        $('.circle-overlay').addClass('circle-overlay_show');
    }

    function hideOverlay() {
        $('.circle-overlay').removeClass('circle-overlay_show');
        bodyRemoveOverflow();
    }

    $('.open-modal-js').on('click', function(ev) {
        var idTargetModal = $(this).attr('data-bs-target');
        var $modalWindow = $(idTargetModal);
        var $closeButton = $modalWindow.find('.close-button');

        // Добавляем в массив елементы, которым нужно добавить стили при задании overflow:hidden элементу body
        $modalWindow.data('style_prop', 'padding-right');
        $(this).data('style_prop', 'margin-right');
        $('.scroll-top').data('style_prop', 'margin-right');
        elemsAddStyleWhenBodyOverflowHidden.push($modalWindow);
        elemsAddStyleWhenBodyOverflowHidden.push($(this));
        elemsAddStyleWhenBodyOverflowHidden.push($('.scroll-top'));


        if($modalWindow.length) {
            showOverlay();
            $(idTargetModal).addClass('modal-window__open');
            $closeButton.off('click');
            $closeButton.on('click', function() {
                $(idTargetModal).removeClass('modal-window__open');
                hideOverlay();
            });

            bodyOverfrlovHidden();

            $modalWindow.on('mousedown', function(ev) {
                if($(ev.target).hasClass('modal-window')) {
                    $(idTargetModal).removeClass('modal-window__open');
                    hideOverlay();
                }
            })
        }
    });

})();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let allForms = document.querySelectorAll('.csm-call-back-form');

for(let i = 0; allForms.length > i; i++) {
    allForms[i].addEventListener('submit', prepareData);
}

function prepareData(event) {
    event.preventDefault();
    let inputsForm = event.target.querySelectorAll('.input__text');
    let resultValidate = validateForm(inputsForm);
    if(resultValidate) {
        let objectInputValues = getFormValues(inputsForm);
        sendMessage(objectInputValues, event.target);
    }
}

function validateForm(inputs) {
    let errors = 0;
    for(let i = 0; i < inputs.length; i++) {
        var currentInput = inputs[i];
        var wrapperInput = $(currentInput).closest('div.input');

        $(currentInput).off('input');
        $(currentInput).on('input', function() {
            var wrapperInput = $(this).closest('div.input');

            if($(this).attr('data-error') && $(this).val()) {
                $(this).removeClass('csm-call-back-form__input_error');
                $(this).addClass('csm-call-back-form__input_success');
                wrapperInput.find('.csm-call-back-form__validate_error').removeClass('csm-call-back-form__validate_visible');
                wrapperInput.find('.csm-call-back-form__validate_success').addClass('csm-call-back-form__validate_visible');
            }

            if($(this).attr('data-error') && !$(this).val()) {
                $(this).addClass('csm-call-back-form__input_error');
                $(this).removeClass('csm-call-back-form__input_success');
                wrapperInput.find('.csm-call-back-form__validate_error').addClass('csm-call-back-form__validate_visible');
                wrapperInput.find('.csm-call-back-form__validate_success').removeClass('csm-call-back-form__validate_visible');
            }
        });

        if(!currentInput.value) {
            $(currentInput)
                .attr('data-error', 'error')
                .addClass('csm-call-back-form__input_error');
            wrapperInput.find('.csm-call-back-form__validate_error').addClass('csm-call-back-form__validate_visible');
            errors++;
            continue;
        }

        $(currentInput).removeClass('csm-call-back-form__input_error');
        wrapperInput.find('.csm-call-back-form__validate_error').removeClass('csm-call-back-form__validate_visible');

    }
    return !errors
        ? true
        : false;
}

function clearForm($input) {

    var wrapperInput = $input.closest('div.input');
    $input.removeClass('csm-call-back-form__input_success');
    wrapperInput.find('.csm-call-back-form__validate_success').removeClass('csm-call-back-form__validate_visible');
    $input.val('');
    $input.trigger('blur');
}

function getFormValues(inputs) {
    let values = {};
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value) {
            values[inputs[i].getAttribute('name')] = inputs[i].value;
        }
    }
    return values;
}

function sendMessage(inputValues, targetForm) {
    let xhr = new XMLHttpRequest();
    let body = '';

    for(const [key, value] of Object.entries(inputValues)) {
        body += '&' + key + '=' + encodeURIComponent(value);
    }

    body = body.slice(1);

    xhr.open("POST", '/api/v1/message/send', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;
        let response = JSON.parse(this.responseText);

        if(response.ok) {
            let inputsForm = targetForm.querySelectorAll('.input__text');
            for(let i = 0; i < inputsForm.length; i++) {
                clearForm($(inputsForm[i]));
            }

            let alertSuccessMessage = targetForm.querySelector('.csm-call-back-form__success-message');
            alertSuccessMessage.classList.add('csm-call-back-form__visibility-visible');
            setTimeout(function() {
                alertSuccessMessage.classList.remove('csm-call-back-form__visibility-visible');
            }, 3000)
        }
    }
    xhr.send(body);
}
