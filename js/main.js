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


// Portfolio 
$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
 $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio a").not("."+selectedClass).fadeOut().removeClass('scale-anm');
setTimeout(function() {
  $("."+selectedClass).fadeIn().addClass('scale-anm');
  $("#portfolio").fadeTo(300, 1);
}, 300); 
    
});
});

