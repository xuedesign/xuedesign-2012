//文字輸入
$(function(){
         $("#input-logotext").keyup(function(){
         $("#logo-text").empty();
         $("#logo-text").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-prilabel").keyup(function(){
         $("#primary_label").empty();
         $("#primary_label").text($(this).attr("value"));	 
      });
    });				
$(function(){
         $("#input-privalue").keyup(function(){
         $("#primary_value").empty();
         $("#primary_value").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-seclabel").keyup(function(){
         $("#secondary_label").empty();
         $("#secondary_label").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-secvalue").keyup(function(){
         $("#secondary_value").empty();
         $("#secondary_value").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-auxlabel-01").keyup(function(){
         $("#aux01-label").empty();
         $("#aux01-label").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-auxvalue-01").keyup(function(){
         $("#aux01-value").empty();
         $("#aux01-value").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-auxlabel-02").keyup(function(){
         $("#aux02-label").empty();
         $("#aux02-label").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-auxvalue-02").keyup(function(){
         $("#aux02-value").empty();
         $("#aux02-value").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-auxlabel-03").keyup(function(){
         $("#aux03-label").empty();
         $("#aux03-label").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-auxvalue-03").keyup(function(){
         $("#aux03-value").empty();
         $("#aux03-value").text($(this).attr("value"));	 
      });
    });	
$(function(){
         $("#input-backlabel-01").keyup(function(){
         $("#backlabel_01").empty();
         $("#backlabel_01").text($(this).attr("value"));	 
      });
    });			
$(function(){
         $("#input-altext").keyup(function(){
         $("#barcode-text").empty();
         $("#barcode-text").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-backvalue-01").keyup(function(){
         $("#backvalue_01").empty();
         $("#backvalue_01").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-backlabel-02").keyup(function(){
         $("#backlabel_02").empty();
         $("#backlabel_02").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-backvalue-02").keyup(function(){
         $("#backvalue_02").empty();
         $("#backvalue_02").text($(this).attr("value"));	 
      });
    });									
	
		
//顏色改變
$(function() {
    $("#color_label").change(function() {
        $("#logo-text").css("color", $(this).val());
		$("#primary_label").css("color", $(this).val());
		$("#secondary_label").css("color", $(this).val());
		$("#aux01-label").css("color", $(this).val());
		$("#aux02-label").css("color", $(this).val());
		$("#aux03-label").css("color", $(this).val());
    });
    
	$("#color_value").change(function() {
        $("#primary_value").css("color", $(this).val());
		$("#secondary_value").css("color", $(this).val());
		$("#aux01-value").css("color", $(this).val());
		$("#aux02-value").css("color", $(this).val());
		$("#aux03-value").css("color", $(this).val());
    });
	
    $("#color_bg").change(function() {
        $(".pass_bg").css("background-color", $(this).val());
    });
});