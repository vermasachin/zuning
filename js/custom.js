jQuery(function( $ ) {

    $.localScroll({
        duration: 900
    });

    $(".toggle-nav").click(function(){
    $("ul").toggleClass("active");
});

});

