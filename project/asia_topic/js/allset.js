// �m���B�ʫ��s
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

// �t�}����
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

//�Ϥ�������J
$(function() {
          $("img").lazyload({placeholder : "../images/grey.gif",effect: "fadeIn"});
      });

//����+���W����
 //�ΨӬ����@�Τ����Ҫ�ID �w�]�O�Ĥ@�ӭ���   
    var currentLayer = "cell1";   
     //�ΨӬ����@�Τ����Ҫ�����ID �w�]�O�Ĥ@�ӭ���   
    var currentDiv = "d1";   
     //showLayer()�禡�A�ѼƬ�Ĳ�o�Ө禡�������Ω��ݭ���ID   
     function showLayer(obj,div){   
         //�Y�ثe��currentLayer������obj.id ��ܭn������   
         if(currentLayer!=obj.id) {   
             //�����ܤW�@�ӭ��Ҥέ������˦�   
             showIt(currentLayer,currentDiv,false);   
             //���]currentLayer��currentDiv����   
             currentLayer = obj.id;   
             currentDiv = div;   
             //�̫�A���ܥثe���Ҥέ������˦�   
             showIt(currentLayer,currentDiv,true);   
         }   
     }   
     //showIt()�禡�A�ѼƬ�currentLayer�BcurrentDiv�μҦ�   
     //mode��true�� �h��ܥثe�@�Τ� �ҥH�n���   
     //mode��false�� �h��ܥثe�D�@�Τ� �ҥH�n����   
     function showIt(o,d,mode){   
         var obj = document.getElementById(o);   
        var div = document.getElementById(d);   
         //����className�h��ܧ��ܸӤ����ҥΪ�class   
         obj.className = mode?"active":"inactive";   
         div.style.display = mode?"block":"none";   
     }   