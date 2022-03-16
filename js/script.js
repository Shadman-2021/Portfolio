// Smooth scrolling

$('a[href*="#"]').click(function(e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function() {
        window.location.hash = target;
    });
});

//Toggle button 
$(function() {
    $('#toggle-icon').click(function() {
        if ($("#menu").is(":visible")) {
            $('#menu').hide();

            $('.profession-id').show();
            $('#introduction').show();
            $('#portfolio').show();
            $('#contact').show();
            $('#projects').show();
            $('#achivements').show();
            $('#contact').show();
            $('#intro').show();
            $('#footer').show();

        } else {
            $('#menu').show();

            $('.profession-id').hide();
            $('#introduction').show();
            $('#portfolio').show();
            $('#contact').show();
            $('#projects').hide();
            $('#achivements').hide();
            $('#contact').hide();
            $('#intro').hide();
            $('#footer').hide();
        }

        return false;
    });
});