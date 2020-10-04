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