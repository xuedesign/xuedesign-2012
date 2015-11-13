// JavaScript Document
$(document).ready(function(){

$("#leftFrame_display").click(function(){

var fs = parent.document.getElementsByTagName("frameset")[1];

if($("#left_staus").val() == "打開"){

$("#left_staus").val("關閉");
closeFrameset();

}else if($("#left_staus").val() == "關閉"){

$("#left_staus").val("打開");
openFrameset();
}


});                           

});


function closeFrameset(){
var fs = parent.document.getElementsByTagName("frameset")[1];
fs.cols = "0,*";
$("#leftFrame_display").text("展開選單");
}

function openFrameset(){
var fs = parent.document.getElementsByTagName("frameset")[1];
fs.cols = "202,*";
$("#leftFrame_display").text("隱藏選單");
} 