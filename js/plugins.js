$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
 $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
setTimeout(function() {
  $("."+selectedClass).fadeIn().addClass('scale-anm');
  $("#portfolio").fadeTo(300, 1);
}, 300); 
    
});
});
 $("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
jQuery('#mogo-slider').carousel({
    interval: 5000
})