$( document ).ready(function() {
    $(function () { objectFitImages() });

    $('.card .favorite').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('is-selected');
    });
});

