//Animation of the menu of the navigation bar
$(document).ready(function() {
    $('.menu_icon').click(function() {
        $('.menu_icon').toggleClass('active')
        $('nav').toggleClass('active')
    })
})