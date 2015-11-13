// 置頂浮動按鈕
 $(document).ready(function() {
	/*
	var defaults = {
		containerID: 'moccaUItoTop', // fading element id
		containerHoverClass: 'moccaUIhover', // fading element hover class
		scrollSpeed: 1200,
		easingType: 'linear' 
	};
	*/
	
	$().UItoTop({ easingType: 'easeOutQuart' });
});

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

//洽詢+報名頁籤
 //用來紀錄作用中頁籤的ID 預設是第一個頁籤   
    var currentLayer = "cell1";   
     //用來紀錄作用中頁籤的頁面ID 預設是第一個頁面   
    var currentDiv = "d1";   
     //showLayer()函式，參數為觸發該函式的元素及所屬頁面ID   
     function showLayer(obj,div){   
         //若目前的currentLayer不等於obj.id 表示要換頁面   
         if(currentLayer!=obj.id) {   
             //先改變上一個頁籤及頁面的樣式   
             showIt(currentLayer,currentDiv,false);   
             //重設currentLayer及currentDiv的值   
             currentLayer = obj.id;   
             currentDiv = div;   
             //最後再改變目前頁籤及頁面的樣式   
             showIt(currentLayer,currentDiv,true);   
         }   
     }   
     //showIt()函式，參數為currentLayer、currentDiv及模式   
     //mode為true時 則表示目前作用中 所以要顯示   
     //mode為false時 則表示目前非作用中 所以要隱藏   
     function showIt(o,d,mode){   
         var obj = document.getElementById(o);   
        var div = document.getElementById(d);   
         //改變className則表示改變該元素所用的class   
         obj.className = mode?"active":"inactive";   
         div.style.display = mode?"block":"none";   
     }   