$(function(){
  // hide mobile nav when page loads
  $('#mobile-nav').hide();
  $("#hamburger").click(function(){
    $("#mobile-nav").slideToggle("400ms","linear");
  });
});

//   $('#hamburger').click(function(){
//     $("#mobile-nav").toggleClass('removeThis');
//   })

// 	$("#hamburger").click(function(){
//       if($("#mobile-nav").hasClass('hide')) {
//         $("#mobile-nav").animate({height:0},200).removeClass('hide');
//       } else { 
//         $("#mobile-nav").animate({height:32},200).addClass('hide');
//       }
//     });
// });




 //   $('#hamburger').click(function(){
	//    $("#mobile-nav").toggle(function(){
	//     $(this).animate({height: '2em'},200);
	//   });
	// })