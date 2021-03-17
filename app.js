function showMenuMobile() {
    var elementClasses = document.querySelector(".menu-mobile").classList;

    if (elementClasses.contains("disable")) {
        elementClasses.add('enable');
        elementClasses.remove('disable');
    } else {
        elementClasses.add('disable');
        elementClasses.remove('enable');
    }
    return;
}

$(document).ready( () => {
    $('header a').click(function(e){
        e.preventDefault();
        var sectionId = $(this).attr('href'),
            targetTopOffset = $(sectionId).offset().top,
            menuHeight = $('header').innerHeight();
        console.log(menuHeight);
        
        $('html, body').animate({
            scrollTop: targetTopOffset - menuHeight
        }, 500);
    })
} )