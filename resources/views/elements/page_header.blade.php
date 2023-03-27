<div class="header container">
    <a href="{{ route('front.page') }}" class="logo">
        <img src="{{ asset('/img/logo-black.png') }}" class="logo__img" alt="Логотип">
    </a>
    <div class="header__right">
        <div class="phone">
            <div class="phone__container">
                <a href="tel:79507346118" class="phone__number">
                    <span class="phone__text-number">+7 (950) 734-61-18</span>
                    <svg class="phone__incon-phone" width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.5 8 11.3894 12.6113C16.2788 17.2226 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
        {{--        <div class="search" style="text-align: center">--}}
        {{--            <button class="search__button">--}}
        {{--                <svg fill="#000000" width="36px" height="36px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27 24.57l-5.647-5.648a8.895 8.895 0 0 0 1.522-4.984C22.875 9.01 18.867 5 13.938 5 9.01 5 5 9.01 5 13.938c0 4.929 4.01 8.938 8.938 8.938a8.887 8.887 0 0 0 4.984-1.522L24.568 27 27 24.57zm-13.062-4.445a6.194 6.194 0 0 1-6.188-6.188 6.195 6.195 0 0 1 6.188-6.188 6.195 6.195 0 0 1 6.188 6.188 6.195 6.195 0 0 1-6.188 6.188z"/></svg>--}}
        {{--            </button>--}}
        {{--        </div>--}}
        <div class="navigation">
            <button class="navigation__block">
                <span class="navigation__burger-line"></span>
                <span class="navigation__burger-line"></span>
                <span class="navigation__burger-line"></span>
            </button>
        </div>
    </div>
</div>

