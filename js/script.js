
$(document).ready(function() {
    $('#slides').superslides({
        animation: "fade",
        play: "2500",
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Data Scientist", "Data Viz", "Machine Learning"]
    })
});
