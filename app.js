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

    const modal_container = document.getElementById('modal-container');
    const portfolio_cards = document.querySelectorAll('.portfolio-card');
    console.log(portfolio_cards);

    portfolio_cards.forEach(element => {
        element.addEventListener('click', () => {
            console.log(modal_container.classList);
            modal_container.classList.add('show');
            console.log(modal_container.classList);
        })
    });

    modal_container.addEventListener('click', () => {
        console.log(modal_container.classList);
        modal_container.classList.remove('show');
        console.log(modal_container.classList);
    })
} )