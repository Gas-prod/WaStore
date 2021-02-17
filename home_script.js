var inputIsOpen = false;

var touchStart;
var touchEnd;

const searchInput = document.querySelector(".search-input");
const searchBox = document.querySelector(".search-box");

const mobileHeader = document.querySelector(".mobile-header");
const mobileSearchIcon = document.querySelector(".mobile-search-icon");
const mobileSearchIconDiv = document.querySelector(".mobile-search-icon > div");
const mobileSearchImg = document.querySelector(".mobile-search-img")
const mobileSearchInput = document.querySelector(".mobile-search-input");
const mobileSearchBox = document.querySelector(".mobile-search-box");
const menuButton = document.querySelector(".mobile-menu-button");
const mobileLogo = document.querySelector(".mobile-logo");

const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuList = document.querySelector(".mobile-menu-list");
const mobileMenuExit = document.querySelector(".mobile-menu-exit");

// desktop search input animation

searchInput.addEventListener("focus", function() {
    searchBox.style.width = "400px";
})
searchInput.addEventListener("blur", function() {
    searchBox.style.width = "300px"
})

// mobile search input animation

mobileSearchIcon.addEventListener("click", function() {

    if (inputIsOpen == false) {
        inputIsOpen = true;

        menuButton.classList.add("dispare");
        mobileLogo.classList.add("dispare");

        setTimeout(function() {
            menuButton.style.display = "none";
            mobileLogo.style.display = "none";

            mobileSearchInput.style.display = "flex";
        }, 150)

        mobileSearchBox.style.width = "calc(100% - 30px)";
        mobileSearchBox.style.height = "70px";
        mobileSearchBox.style.borderRadius = "22px";

        mobileSearchIcon.style.padding = "10px";
        mobileSearchIcon.style.width = "unset";
        mobileSearchIconDiv.style.padding = "15px";
        mobileSearchImg.style.height = "100%";

        setTimeout(function() {
            mobileSearchInput.focus();
        }, 200)
    }


})

mobileSearchInput.addEventListener("blur", function() {

    menuButton.classList.add("show");
    mobileLogo.classList.add("show");

    setTimeout(function() {
        menuButton.style.display = "block";
        mobileLogo.style.display = "block";

        inputIsOpen = false;
    }, 150)

    mobileSearchInput.style.display = "none";

    mobileSearchBox.style.width = "40px";

    setTimeout(function() {
        mobileSearchBox.style.borderRadius = "50%";

        mobileSearchIcon.style.padding = "5px";
        mobileSearchIcon.style.width = "40px";
        mobileSearchIconDiv.style.padding = "0";
        mobileSearchImg.style.height = "60%";

        mobileSearchBox.style.height = "40px";
    }, 200)
})

// mobile menu system

// click open
menuButton.addEventListener("click", function() {

    document.body.style.overflow = "hidden";
    mobileMenu.style.display = "block";
    mobileMenuList.style.boxShadow = "20px 0px 35px #00133f2b";

    setTimeout(function() {
        mobileMenu.style.backgroundColor = "#00257b2a";
        mobileMenuList.classList.add("open");
    }, 50)

    setTimeout(function() {
        mobileMenuExit.style.display = "block";
    }, 400)
})
// slide open
document.body.addEventListener("touchstart", e => {
    touchStart = e.targetTouches[0].clientX;
})

document.body.addEventListener("touchmove", e => {
    touchEnd = e.targetTouches[0].clientX;
})

document.body.addEventListener("touchend", e => {
    if (touchStart - touchEnd < (-100) && touchStart < touchEnd) {

        document.body.style.overflow = "hidden";
        mobileMenu.style.display = "block";
        mobileMenuList.style.boxShadow = "20px 0px 35px #00133f2b";

        setTimeout(function() {
            mobileMenu.style.backgroundColor = "#00257b2a";
            mobileMenuList.classList.add("open");
        }, 50)

        setTimeout(function() {
            mobileMenuExit.style.display = "block";
        }, 400)
    }
})

// click exit
mobileMenuExit.addEventListener("click", function() {

    document.body.style.overflow = "initial";

    mobileMenu.style.backgroundColor = "transparent";
    mobileMenuList.classList.remove("open");

    mobileMenuExit.style.display = "none";
    mobileMenuList.style.boxShadow = "none";

    setTimeout(function() {
        mobileMenu.style.display = "none";
    }, 400)
})
// slide exit
mobileMenuList.addEventListener("touchstart", e => {
    touchStart = e.targetTouches[0].clientX;
})

mobileMenuList.addEventListener("touchmove", e => {
    touchEnd = e.targetTouches[0].clientX;
})

mobileMenu.addEventListener("touchend", e => {
    if (touchStart - touchEnd > 100 && touchStart > touchEnd) {

        document.body.style.overflow = "initial";

        mobileMenu.style.backgroundColor = "transparent";
        mobileMenuList.classList.remove("open");

        mobileMenuExit.style.display = "none";
        mobileMenuList.style.boxShadow = "none";

        setTimeout(function() {
            mobileMenu.style.display = "none";
        }, 400)
    }
})