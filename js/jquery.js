$(document).ready(function () {

    $(".carousel").carousel({
        interval: 6000
    });

    // showcolor option div when click on gear

    $(".check").click(function () {
        $(".color-option").fadeToggle();
    });


    //nice scroll

    $("html").niceScroll();


    // change Theme color on click

    var colorLi = $(".color-option ul li");


    colorLi
        .eq(0).css("backgroundColor", "#ff090f").end()
        .eq(1).css("backgroundColor", "#46ff1b").end()
        .eq(2).css("backgroundColor", "#ffda1b").end()
        .eq(3).css("backgroundColor", "#1badff").end()
        .eq(4).css("backgroundColor", "#ff09ab").end()


    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    });


    // cahching scroll element

    var scrollButton = $("#scroll-top");

    $(window).scroll(function () {
        console.log($(this).scrollTop());

        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        }
    });


});



// smooth scrol

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
