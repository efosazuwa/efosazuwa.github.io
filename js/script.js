
$(document).ready(function() {
    $('#slides').superslides({
        animation: "fade",
        play: "2500",
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Data Science", "Data Viz", "Machine Learning"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    $('.chart').easyPieChart({
        easing: "easeInOut",
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 150,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));

        }
    });
});
