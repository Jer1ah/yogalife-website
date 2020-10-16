const onScrollController = (function() {
    const _nav = document.querySelector(".navigation");
    const _logo = document.querySelector(".navigation__logo");
    const _items = document.querySelectorAll(".navigation__listItem a");

    window.onscroll = () => {
        if(window.scrollY > 50) {
            _nav.style.backgroundColor = "white";
            _nav.style.boxShadow = "0px 1px 5px 0px rgba(199,195,199,1)";
            _logo.style.color = "black";

            for(let i = 0; i < _items.length; i++) {
                _items[i].style.color = "black";
            }
        } else {
            _nav.style.backgroundColor = "transparent";
            _logo.style.color = "white";
            _nav.style.boxShadow = "none";

            for(let i = 0; i < _items.length; i++) {
                _items[i].style.color = "white";
            }
        }
    };
}());

const dropdownMenuController = (function() {
    const _dropdownMenu = document.querySelector(".dropdown-menu");
    const _menuButton = document.querySelector(".mobile-nav img");
    const _backdrop = document.querySelector(".backdrop");
    const _closeIcon = document.querySelector(".close-icon");
    const _navigation = document.querySelector(".navigation__list");

    _menuButton.addEventListener("click", () => {
        _dropdownMenu.style.transform = "scale(430)";
        _backdrop.style.display = "inline-block";
        _closeIcon.style.display = "inline-block";
        _navigation.style.display = "inline-block";
    });

    _closeIcon.addEventListener("click", () => {
        _dropdownMenu.style.transform = "scale(1)";
        _closeIcon.style.display = "none";
        _backdrop.style.display = "none";
        _navigation.style.display = "none";
    });
}());

const windowResizeController = (function() {
    const _navigation = document.querySelector(".navigation__list");
    const _dropdownMenu = document.querySelector(".dropdown-menu");
    const _backdrop = document.querySelector(".backdrop");
    const _closeIcon = document.querySelector(".close-icon");

    window.onresize = () => {
        if( window.innerWidth > 925 ) {
            _navigation.style.display = "flex";
        } else {
            _navigation.style.display = "none";
        }

        _dropdownMenu.style.transform = "scale(1)";
        _closeIcon.style.display = "none";
        _backdrop.style.display = "none";
    };
}());