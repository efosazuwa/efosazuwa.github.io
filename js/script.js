
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



    //delaying pie chart animation until it is scrolled down to
    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function() {
        /* This if statement is basicaly if we get to 200 pixels below the
        skills sextion then start the javascript code for the pie charts*/
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 300){
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

        }

        if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 300) {
            $(".counter").each(function() {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            })

            countUpFinished = true;
        }
    });

    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });


});
