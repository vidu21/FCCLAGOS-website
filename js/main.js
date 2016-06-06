/**
 * Main.js
 *
 * This is the primary js file used in our website.
 * All general / non-specific functionality should
 * go here.
 *
 * Copyright 2016 FreeCodeCampLagos
 * --------------------------------
 * url: http:.//freecodecamplagos.github.io
 * src: https://github.com/FreeCodeCampLagos/FreeCodeCampLagos.github.io
 * dependson: jquery
 */

$(document).ready(function(){
  //to the top vars
  var offset = 250;
  var duration = 300;
  
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });

    // check if scroll event happened
    $(window).scroll(function() {
        // check if user scrolled more than 550 from top of the browser window
        if ($(document).scrollTop() > 450) {
            $(".navbar-fixed-top").css("background-color", "#2aac2a");
            $(".navbar-default .navbar-nav > li > a ").css("color", "#fff");
        } else {
          // if not, change it back to transparent
            $(".navbar-fixed-top").css("background-color", "transparent");
            $(".navbar-default .navbar-nav > li > a").css("color", "#fff");
        }
      if ($(this).scrollTop() > offset) {
          $(".back-to-top").fadeIn(duration);
        } else {
            $(".back-to-top").fadeOut(duration);
        }
    });
  
  //navbar hamburger toggle
  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
    });
  
  $(".back-to-top").click(function(event) {
      event.preventDefault();
    $("html, body").animate({scrollTop: 0}, duration);
    return false;
    })

});
