
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
    })
});
