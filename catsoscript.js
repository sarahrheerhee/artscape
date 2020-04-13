

jQuery(document).ready(function ($) {

$(window).load(function () {
        setTimeout(function(){
            $('.loader-wrapper').fadeOut('slow', function () {
            });
        },2000); // set the time here
});
   $(function(){
   setTimeout(function(){
     $('.container').fadeIn('slow');
   }2000);








    });  


   // var scroll_start = 0;
   // var startchange = $('#infosection');
   // var offset = startchange.offset();
   // $(document).scroll(function() { 
   //    scroll_start = $(this).scrollTop();
   //    if(scroll_start > offset.top) {
   //        $('.menutext').css('color', 'black');
   //     } else {
   //        $('.menutext').css('color', 'white');
   //     }
   // });
});

