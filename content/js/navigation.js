$( document ).ready(function() {
    var elements = $('.sticky');
    Stickyfill.add(elements);

    $('.main-navigation a').click(function () {
        var section = $(this).prop('hash');

        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 750);
    });
});