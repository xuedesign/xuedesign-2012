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
          $("img").lazyload({placeholder : "../images/grey.gif",effect: "fadeIn"});
      });

//首頁跑馬燈
$(document).ready(
		function(){
			$('#news').innerfade({
				animationtype: 'slide',
				speed: 1000,
				timeout: 3000,
				type: 'sequence',
				containerheight: '1em'
			});
          }
	);	  