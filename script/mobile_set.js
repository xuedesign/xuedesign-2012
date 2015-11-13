// 載完網頁自動縮網址列
window.addEventListener("load",function() {  
	setTimeout(function(){
	window.scrollTo(0, 1); }, 100);
});

//圖片延遲載入
$(function() {
          $("img").lazyload({placeholder : "../images/grey.gif",effect: "fadeIn"});
      });

	


