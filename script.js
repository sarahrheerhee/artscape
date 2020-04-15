

jQuery(document).ready(function ($) {
$(window).load(function () {
        setTimeout(function(){
            $('.loader-wrapper').fadeOut('slow', function () {
            });
        },300); // set the time here
});
   $(function(){
   setTimeout(function(){
     $('.content').fadeIn('slow');
   },300);








    });  

$(document).ready(function() {

    // javascript goes here

// $('#about').mouseenter( function () {

//    $("#about").css("background-color","#DBDBDB");
//    $("#about").css("color","black");
//    $(".bodytextabout").css("color","black");

// });


// $('#about').mouseleave( function () {
//  $("#about").css("color","#DBDBDB");
//    $("#about").css("background-color","black");
//      $(".bodytextabout").css("color","#DBDBDB");

// });


$('#about').click( function () {

	   $("#about").addClass("expand");


$(".bodytextmethod").removeClass("bodytextshow");
$(".bodytextartists").removeClass("bodytextshow");
$(".bodytextabout").addClass("bodytextshow")

$("#about").removeClass("fontsizedecrease");
$("#method").addClass("fontsizedecrease");
$("#artists").addClass("fontsizedecrease");


$("#titletextmethod").css("margin-top","3%");
$("#titletextartists").css("margin-top","3%");




});


$('#method').click( function () {
$(".bodytextartists").removeClass("bodytextshow");
$(".bodytextabout").removeClass("bodytextshow");
$(".bodytextmethod").addClass("bodytextshow");

$("#method").removeClass("fontsizedecrease");
$("#about").addClass("fontsizedecrease");
$("#artists").addClass("fontsizedecrease");

$("#titletextabout").css("margin-top","3%");
$("#titletextartists").css("margin-top","3%");
   $("#method").addClass("expand");

});


$('#artists').click( function () {
$(".bodytextartists").addClass("bodytextshow");
$(".bodytextabout").removeClass("bodytextshow");
$(".bodytextmethod").removeClass("bodytextshow");


$("#artists").removeClass("fontsizedecrease");
$("#method").addClass("fontsizedecrease");
$("#about").addClass("fontsizedecrease");

$("#titletextmethod").css("margin-top","3%");
$("#titletextabout").css("margin-top","3%");

   $("#artists").addClass("expand");
});


// $('#method').mouseenter( function () {

//    $("#method").css("background-color","#DBDBDB");
//    $("#method").css("color","black");
//  $(".bodytextmethod").css("color","black");

   
// });


// $('#method').mouseleave( function () {

//    $("#method").css("background-color","black");
//    $("#method").css("color","#DBDBDB");
//  $(".bodytextmethod").css("color","#DBDBDB");

   
// });


// $('#artists').mouseenter( function () {

//    $("#artists").css("background-color","#DBDBDB");
//    $("#artists").css("color","black");
//     $(".bodytextartists").css("color","black");

// });




// $('#artists').mouseleave( function () {

//    $("#artists").css("background-color","black");
//    $("#artists").css("color","#DBDBDB");
//     $(".bodytextartists").css("color","#DBDBDB");

// });
















$('#milecontainer').mouseleave( function () {

   $("#mile").removeClass("mile2");
   $("#mile").css("background-color","#DBDBDB");

});


$('#milecontainer').mouseover( function () {

   $("#mile").addClass("mile2");
   $("#mile").css("background-color","#A7D8E8");

});




$('#milecontainer').mouseleave( function () {

   $("#mile").removeClass("mile2");
   $("#mile").css("background-color","#DBDBDB");

});

$('#danaecont').mouseover( function () {

   $("#danae").addClass("danae");
$("#danae").css("background-color","#4182f2");

});




$('#danaecont').mouseleave( function () {

   $("#danae").removeClass("danae");
   $("#danae").css("background-color","#DBDBDB");

});


$('#circle').mouseover( function () {

   $("#untitled").addClass("untitled");

});




$('#circle').mouseleave( function () {

   $("#untitled").removeClass("untitled");

});

$('#circle').click(function (){
  $('.popup').toggleClass("visibility");



});



$('#catsocont').mouseover( function () {

   $("#catsocont").addClass("catso");
   $("#catso").css("background-color","#f00236");

});




$('#catsocont').mouseleave( function () {

   $("#catsocont").removeClass("catso");
   $("#catso").css("background-color","#DBDBDB");

});


function OpenInNewTab(url )
{
  var win=window.open(url, '_blank');
  win.focus();
}

$('#catsocont').click( function () {
     
   window.location.href = "catso.html";

});





$('#danaecont').click( function () {

   window.location.href = "danae.html";

});
// $('#circle').click( function () {

//    window.location.href = "untitled.html";

// });
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


});  

