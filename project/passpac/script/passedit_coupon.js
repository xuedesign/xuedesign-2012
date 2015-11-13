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
         $("#input-seclabel-01").keyup(function(){
         $("#sec01-label").empty();
         $("#sec01-label").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-secvalue-01").keyup(function(){
         $("#sec01-value").empty();
         $("#sec01-value").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-seclabel-02").keyup(function(){
         $("#sec02-label").empty();
         $("#sec02-label").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-secvalue-02").keyup(function(){
         $("#sec02-value").empty();
         $("#sec02-value").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-altext").keyup(function(){
         $("#barcode-text").empty();
         $("#barcode-text").text($(this).attr("value"));	 
      });
    });
$(function(){
         $("#input-backlabel-01").keyup(function(){
         $("#backlabel_01").empty();
         $("#backlabel_01").text($(this).attr("value"));	 
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
		$("#sec01-label").css("color", $(this).val());
		$("#sec02-label").css("color", $(this).val());
    });
    
	$("#color_value").change(function() {
        $("#primary_value").css("color", $(this).val());
		$("#primary_label").css("color", $(this).val());
		$("#sec01-value").css("color", $(this).val());
		$("#sec02-value").css("color", $(this).val());
    });
	
    $("#color_bg").change(function() {
        $(".pass_bg").css("background-color", $(this).val());
    });
});