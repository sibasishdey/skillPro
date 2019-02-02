
// for tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $(window).scroll(function () { // scroll top
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
})
