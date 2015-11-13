// JavaScript Document
var $ = jQuery;
		$(document).ready(function(){
			$('li.widget > ul').hide();
			$('li.widget > h5').click(function() {
				var content = $(this).next();
				var others = content.parent().siblings("li.widget").find("ul:visible");
				if (others.length ) {
				  others.slideUp('fast', function() {
					content.slideToggle('fast');
				  });
				} else {
				  content.slideToggle('fast');
				}
			});
		});