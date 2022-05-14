$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $("#header").addClass("headerShrink");
          $("header").removeClass("headerNormal");
    } else {
        $("#header").removeClass("headerShrink");
        $("header").addClass("headerNormal");
    }
});
