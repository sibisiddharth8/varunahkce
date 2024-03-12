$(document).ready(function(){
    // Smooth scroll for navbar links
    $(".navbar .nav-link").on('click', function(event) {
        smoothScroll(event, this);
    });

    // Smooth scroll for footer links
    $(".col a").on('click', function(event) {
        smoothScroll(event, this);
    });

    // Function for smooth scroll
    function smoothScroll(event, element) {
        if (element.hash !== "") {
            event.preventDefault();

            var hash = element.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        }
    }
});
