// capitaize function
Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false,
})

$(document).ready(function () {
    $(window).scroll(function () {
        // navbar sticky on scroll
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // navigation elements
    const menuStrings = ['home', 'about', 'gallery', 'skills', 'connect', 'contact'];
    for (let i = 0; i < menuStrings.length; i++) {
        const string = menuStrings[i];
        $('<li><a href="#' + string + '" class="menu-btn">' + string.capitalize() + '</a></li>').appendTo('.menu');
    };
    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["cute", "lowlife", "degenerate"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["fine, thank you", "the one, yeh im the one", "cute af"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    // gallery card script
    var folder = "images";
    $.ajax({
        url: folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    $(".gal-cont").append("<img src='" + val + "'>");
                }
            });
        }
    });
    
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});
