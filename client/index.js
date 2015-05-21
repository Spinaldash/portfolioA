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
});
