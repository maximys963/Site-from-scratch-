console.log("Hello World!")
$(document).ready(function (){
    	$(".topButton").mouseover(function(){
    		/*$(this).css("backgroundColor", "greenyellow");*/
    		$(".topButton").fadeIn("slow")

    })
    	.mouseout(function(){
    		/*/**$(this).css("backgroundColor", "#50C3AF")/*/
    	});
});