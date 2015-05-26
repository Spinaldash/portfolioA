'use strict';
$(document).ready(function() {
    $('#fullpage').fullpage({
      verticleCentered: false,
      fitToSection: false,
			navigation: true,
      anchors: ['intro', 'portfolio', 'contact'],
			navigationPosition: 'right',
			navigationTooltips: ['Intro', 'Portfolio', 'Contact'],
      controlArrows: false,
    });

    $('#move-right').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveSlideRight();
			});

    $('#move-left').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveSlideLeft();
			});

    $(".fancybox-thumb").fancybox({
      prevEffect	: 'none',
      nextEffect	: 'none',
      helpers	: {
        title	: {
          type: 'outside'
        },
        thumbs	: {
          width	: 50,
          height	: 50
        }
      }
    });

    $('[title!=""]').qtip({
      style: {
        classes: 'qtip-bootstrap qtip-shadow'
      }
    });
});
