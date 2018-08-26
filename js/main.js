(function($) {    
    $(document).ready(function(){
        //After refrash force the page to load at the top
        $(this).scrollTop(0);

        //Responsive menu
        $('#menu-btn').click(function() {
            $("#menu").slideToggle();
        });
    }); 

})(jQuery);

// Smooth scoll page effect
$(function() {
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
});

