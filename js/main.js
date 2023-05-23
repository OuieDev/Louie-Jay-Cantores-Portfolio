$(document).ready(function(){
//para sa nav bar
// Create a scroll event listener 
// Create a scroll event listener 
$(window).scroll(function () { 
  // Get the current scroll position  
  var scrollPosition = $(window).scrollTop(); 
  // Change the background color based on the scroll position
  if (scrollPosition > 200) {
    $('.header').css({'background-color': 'rgb(45, 44, 66, 0.8)','background': 'rgb(45, 44, 66, 0.8)', 'transition': 'background-color 0.5s ease',}); 
  }
  else {
    $('.header').css({'background-color': 'rgb(41,37,110);', 'transition': 'background-color 0.5s ease', 'background': 'linear-gradient(90deg, rgba(41,37,110,1) 0%, rgba(87,87,217,1) 53%, rgba(9,86,102,1) 100%)'}); 
  }

  if (scrollPosition > 300) {
    $('#body').removeClass('body');
    $('#body').addClass('body2');
  }
  else {
    $('#body').removeClass('body2');
    $('#body').addClass('body');
  }
});
//para sa ngalan
  var text = 'Louie Jay Cantores_';
  var i = 0;
  function type(){
    if(i < text.length){
      $('#louie').append(text.charAt(i));
      i++;
      setTimeout(type, 250);
    }
    function del(){
      if(i <= text.length){
      $('.ispan').html(''); //clear text before typing
      }
  }
  del();
  }
  setTimeout(type, 0);

//para sa animation sang profile
$('.floatingimage').animate({
  left: "+=10px",
  opacity: 1
}, 1500);

//para sa about me
    $("#aboutmeN").click(function(){
        
        $('html, body').animate({
          scrollTop: $('#aboutmeC').offset().top - 300
        }, 1500);
    });
//para sa resume
    $("#resumeN").click(function(){
        
      $('html, body').animate({
        scrollTop: $('#resumeC').offset().top - 100
      }, 1500);
                var text = 'Resume_';
                var i = 0;
                function del(){
                    if(i <= text.length){
                    $('#resumeH').html(''); //clear text before typing
                    }
                }
                del();
                function type(){
                    if(i < text.length){
                    $('#resumeH').delay(1000).append(text.charAt(i));
                    i++;
                    setTimeout(type, 150);
                    }
                }
                setTimeout(type, 1000);
    });
//para sa project
    $("#projectsN").click(function(){
        
      $('html, body').animate({
        scrollTop: $('#projH').offset().top - 100
      }, 1500);
                var text = 'My Projects_';
                var i = 0;
                function del(){
                    if(i <= text.length){
                    $('#projH').html(''); //clear text before typing
                    }
                }
                del();
                function type(){
                    if(i < text.length){
                    $('#projH').delay(1000).append(text.charAt(i));
                    i++;
                    setTimeout(type, 150);
                    }
                }
                setTimeout(type, 500);
    });

//para sa testimonials
    $("#testimonialsN").click(function(){
        
      $('html, body').animate({
        scrollTop: $('#carouselExampleCaptions').offset().top - 100
      }, 1500);
    });
//para sa footer  
    $("#footerN").click(function(){
        
      $('html, body').animate({
        scrollTop: $('#footerC').offset().top - 100
      }, 1500);
                var text = 'Contact_';
                var i = 0;
                function del(){
                    if(i <= text.length){
                    $('#contactH').html(''); //clear text before typing
                    }
                }
                del();
                function type(){
                    if(i < text.length){
                    $('#contactH').delay(1000).append(text.charAt(i));
                    i++;
                    setTimeout(type, 150);
                    }
                }
                function istap(){
                  $('#footerC').click(function () {
                    return true;
                }); 
                }
                setTimeout(type, 1500);   
    });

});

        // para ni ya kung saiban nga file ang imo nga i navigate
        // var page_url = window.location.href; //get the url of current page
        // var page_id = page_url.substring(page_url.lastIndexOf("#") + 1); //
        
        // if(page_id == "projects"){
        //     $("html ,body").animate({
        //         scrollTop: $("#scroll-" + page_id).offset().top + 100
        //     }, 1000, function(){
        //         alert('This is an alert message!');
        //     });
        // }

        // alert("page_id");

    // sa animation
  //   $(window).scroll(function(){
  //     $("#aboutmeC, #projH, #projectC ,#carouselExampleCaptions, #footerC").each(function(){
  //         var position = $(this).offset().top;

  //         var bottom_of_window = $(window).scrollTop() + $(window).height();

  //         if( bottom_of_window > position ){
  //             $(this).animate({  opacity: '1',
  //             left: '0px'
  //         }, 200, 'linear');
  //         }

  //         if( bottom_of_window < position ) {
  //             $(this).animate({  opacity: '0',
  //             left: '0px'
  //         }, 200, 'linear');
  //         }
  //     }); 
  // });





// sa mag test
// $(document).ready(function(){
//     // jQuery:
// $("#myButton").click(function(){
//   alert('Button was clicked!');
// });

// });
