(function($) {
    "use strict";

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    }
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);

    $(document).ready(function(){
        $(".owl-demo").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items : 2,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]

        });
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '32px'
        }
    );

    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    new WOW().init();

})(jQuery);
