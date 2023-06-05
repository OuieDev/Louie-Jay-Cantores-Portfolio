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
        var text = 'About Me_';
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
        var text = 'Projects_';
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

  //para sa discription mag show kag mag hide sang text
    $('.discription2').hide();
    $('p').on('click', function(event) {
      let this_ = $(this);
      if (this_.hasClass('discription1')) {
        this_.hide();
        this_.next().first().show();
      } else if(this_.hasClass('discription2')) {
        this_.hide();
        this_.prev().first().show();
      }
    });

    //para sa responsive data-aos

    $(window).resize(function() {
      var windowWidth = $(window).width();
      if (windowWidth < 950) { // Specify your desired width condition
        $('.educ-animate').attr('data-aos', 'zoom-in'); // Empty value to disable animation
        $('.left-animate').attr('data-aos', 'flip-up'); // Empty value to disable animation
        $('.right-animate').attr('data-aos', 'flip-up'); // Empty value to disable animation
      } else {
        $('.educ-animate').attr('data-aos', 'fade-right'); // Restore animation value
        $('.left-animate').attr('data-aos', 'fade-left'); // Empty value to disable animation
        $('.right-animate').attr('data-aos', 'fade-right'); // Empty value to disable animation
      }
    });

});




