function showMenuMobile() {
    var elementClasses = document.querySelector(".menu-mobile").classList
    console.log(elementClasses[1]);

    if (elementClasses.contains("disable")) {
        elementClasses.add('enable');
        elementClasses.remove('disable');
    } else {
        elementClasses.add('disable');
        elementClasses.remove('enable');
    }
    return;
}
