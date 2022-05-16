$('.burger_button').click(function() {
    $('.burger_menu').removeClass('burger_menu_hide');
    $('.burger_menu').addClass('burger_menu_show');
});

$('.burger_menu_close').click(function() {
    $('.burger_menu').removeClass('burger_menu_show');
    $('.burger_menu').addClass('burger_menu_hide');
})