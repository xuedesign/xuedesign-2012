// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;

//圖片延遲載入
$(function() {
  $("#box_main img").lazyload({placeholder : "../images/grey.gif",effect: "fadeIn"});
      });
	  
//Lightbox效果
$(document).ready(function() {
  $(".fancybox-thumb").fancybox({
	  prevEffect	: 'elastic',
	  nextEffect	: 'elastic',
	  helpers	: {
		  title	: {
			  type: 'inside'
		  },
		  thumbs	: {
			  width	: 50,
			  height	: 50
		  }
	  }
  });
});	  	  