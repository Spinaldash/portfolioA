'use strict';
$(document).ready(function() {
    $('#fullpage').fullpage({
      verticleCentered: false,
      fitToSection: false,
			navigation: true,
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
			navigationPosition: 'right',
			navigationTooltips: ['Intro', 'Portfolio', 'Summary', 'Contact']
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
