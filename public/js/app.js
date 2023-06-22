/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
$('.navigation__block').on('click', function () {
  if (!$(this).hasClass('navigation__block_show_navigation')) {
    $(this).addClass('navigation__block_show_navigation');
  } else {
    $(this).removeClass('navigation__block_show_navigation');
  }
  if (!$('.navigation-block').hasClass('navigation-block__container')) {
    $('.navigation-block').addClass('navigation-block__container');
  } else {
    $('.navigation-block').removeClass('navigation-block__container');
  }
});
$('.scroll-by-id').on('click', function (ev) {
  ev.preventDefault();
  if ($(window).width() <= 786 && $(ev.target).hasClass('navigation-block__navigation-link_subnav')) {
    return;
  }
  var uri = $(this).attr('href');
  var coincidencePosition = uri.indexOf('#');
  var pathname = uri.substr(0, coincidencePosition);
  var hash = uri.substr(coincidencePosition);
  if (pathname == window.location.pathname) {
    $('.navigation-block').removeClass('navigation-block__container');
    $('.navigation__block').removeClass('navigation__block_show_navigation');
    setTimeout(function () {
      scrollPage(hash);
    }, 400);
  } else {
    window.location.href = uri;
  }
});
$('.scroll-top').on('click', function () {
  scrollPage(0);
});
function showScrollTop(value) {
  if (value > 400) {
    $('.scroll-top').addClass('scroll-top__block_show');
  } else {
    $('.scroll-top').removeClass('scroll-top__block_show');
  }
}
$(window).scroll(function () {
  showScrollTop(window.pageYOffset);
});
function scrollPage(value) {
  if (typeof value == 'string') {
    if ($(value).length) {
      $('html, body').animate({
        scrollTop: $(value).offset().top - 50
      }, 800);
    }
    return;
  }
  if (typeof +value == 'number') {
    $('html, body').animate({
      scrollTop: +value
    }, 800);
    return;
  }
}
$('.search__button').on('click', function () {
  $('.search-block').addClass('search-block_show');
});
$('.input__text').focus(function () {
  $(this).prev().addClass('input__label_min_top');
});
$('.input__text').blur(function () {
  if (!$(this).val().length) {
    $(this).prev().removeClass('input__label_min_top');
  }
});
$('.navigation-block__navigation-item a').on('click', function () {
  if ($(window).width() <= 786) {
    $(this).find('.navigation-block__triangle-icon').toggleClass('navigation-block__triangle-icon_rotate');
    var $subnav = $(this).next('.navigation-block__subnav');
    if ($subnav.length) {
      $subnav.slideToggle();
    }
  }
});

// scripts for landing blocks
(function () {
  var backgroundImgFirstScreen = $('.first-screen__background-img');
  if (backgroundImgFirstScreen.length) {
    var pathBg = backgroundImgFirstScreen.attr('data-bg');
    setTimeout(function () {
      backgroundImgFirstScreen.css("background-image", "url(" + pathBg + ")");
    }, 500);
  }
})();

// scripts modal window
(function () {
  var elemsAddStyleWhenBodyOverflowHidden = [];
  function bodyOverfrlovHidden() {
    var widthBody = $('body').width(),
      widthWindow = window.innerWidth,
      spacing = widthWindow - widthBody;
    elemsAddStyleWhenBodyOverflowHidden.forEach(function (el) {
      el.css(el.data('style_prop'), spacing);
    });
    $('body').css({
      'overflow': 'hidden',
      'margin-right': spacing
    });
  }
  function bodyRemoveOverflow() {
    $('body').removeAttr('style');
    elemsAddStyleWhenBodyOverflowHidden.forEach(function (el) {
      el.removeAttr('style');
    });
  }
  function showOverlay() {
    $('.circle-overlay').addClass('circle-overlay_show');
  }
  function hideOverlay() {
    $('.circle-overlay').removeClass('circle-overlay_show');
    bodyRemoveOverflow();
  }
  $('.open-modal-js').on('click', function (ev) {
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
    if ($modalWindow.length) {
      showOverlay();
      $(idTargetModal).addClass('modal-window__open');
      $closeButton.off('click');
      $closeButton.on('click', function () {
        $(idTargetModal).removeClass('modal-window__open');
        hideOverlay();
      });
      bodyOverfrlovHidden();
      $modalWindow.on('mousedown', function (ev) {
        if ($(ev.target).hasClass('modal-window')) {
          $(idTargetModal).removeClass('modal-window__open');
          hideOverlay();
        }
      });
    }
  });
})();
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
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
    prevEl: ".swiper-button-prev"
  }
});
var allForms = document.querySelectorAll('.csm-call-back-form');
for (var i = 0; allForms.length > i; i++) {
  allForms[i].addEventListener('submit', prepareData);
}
function prepareData(event) {
  event.preventDefault();
  var inputsForm = event.target.querySelectorAll('.input__text');
  var resultValidate = validateForm(inputsForm);
  if (resultValidate) {
    var objectInputValues = getFormValues(inputsForm);
    sendMessage(objectInputValues, event.target);
  }
}
function validateForm(inputs) {
  var errors = 0;
  for (var _i = 0; _i < inputs.length; _i++) {
    var currentInput = inputs[_i];
    var wrapperInput = $(currentInput).closest('div.input');
    $(currentInput).off('input');
    $(currentInput).on('input', function () {
      var wrapperInput = $(this).closest('div.input');
      if ($(this).attr('data-error') && $(this).val()) {
        $(this).removeClass('csm-call-back-form__input_error');
        $(this).addClass('csm-call-back-form__input_success');
        wrapperInput.find('.csm-call-back-form__validate_error').removeClass('csm-call-back-form__validate_visible');
        wrapperInput.find('.csm-call-back-form__validate_success').addClass('csm-call-back-form__validate_visible');
      }
      if ($(this).attr('data-error') && !$(this).val()) {
        $(this).addClass('csm-call-back-form__input_error');
        $(this).removeClass('csm-call-back-form__input_success');
        wrapperInput.find('.csm-call-back-form__validate_error').addClass('csm-call-back-form__validate_visible');
        wrapperInput.find('.csm-call-back-form__validate_success').removeClass('csm-call-back-form__validate_visible');
      }
    });
    if (!currentInput.value) {
      $(currentInput).attr('data-error', 'error').addClass('csm-call-back-form__input_error');
      wrapperInput.find('.csm-call-back-form__validate_error').addClass('csm-call-back-form__validate_visible');
      errors++;
      continue;
    }
    $(currentInput).removeClass('csm-call-back-form__input_error');
    wrapperInput.find('.csm-call-back-form__validate_error').removeClass('csm-call-back-form__validate_visible');
  }
  return !errors ? true : false;
}
function clearForm($input) {
  var wrapperInput = $input.closest('div.input');
  $input.removeClass('csm-call-back-form__input_success');
  wrapperInput.find('.csm-call-back-form__validate_success').removeClass('csm-call-back-form__validate_visible');
  $input.val('');
  $input.trigger('blur');
}
function getFormValues(inputs) {
  var values = {};
  for (var _i2 = 0; _i2 < inputs.length; _i2++) {
    if (inputs[_i2].value) {
      values[inputs[_i2].getAttribute('name')] = inputs[_i2].value;
    }
  }
  return values;
}
function sendMessage(inputValues, targetForm) {
  var xhr = new XMLHttpRequest();
  var body = '';
  for (var _i3 = 0, _Object$entries = Object.entries(inputValues); _i3 < _Object$entries.length; _i3++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    body += '&' + key + '=' + encodeURIComponent(value);
  }
  body = body.slice(1);
  xhr.open("POST", '/api/v1/message/send', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;
    var response = JSON.parse(this.responseText);
    if (response.ok) {
      var inputsForm = targetForm.querySelectorAll('.input__text');
      for (var _i4 = 0; _i4 < inputsForm.length; _i4++) {
        clearForm($(inputsForm[_i4]));
      }
      var alertSuccessMessage = targetForm.querySelector('.csm-call-back-form__success-message');
      alertSuccessMessage.classList.add('csm-call-back-form__visibility-visible');
      setTimeout(function () {
        alertSuccessMessage.classList.remove('csm-call-back-form__visibility-visible');
      }, 3000);
    }
  };
  xhr.send(body);
}

/***/ }),

/***/ "./resources/scss/style.scss":
/*!***********************************!*\
  !*** ./resources/scss/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/scss/page-elements.scss":
/*!*******************************************!*\
  !*** ./resources/scss/page-elements.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/page-elements": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/page-elements","css/style"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/page-elements","css/style"], () => (__webpack_require__("./resources/scss/style.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/page-elements","css/style"], () => (__webpack_require__("./resources/scss/page-elements.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;