$("ul").on("click","li",function(){

	$(this).toggleClass("completed");


/*

	if ($(this).css("color") === "rgb(255, 165, 0)"){

		$(this).css({
			color: "black",
			textDecoration : "none",


		});
	}

	else {
	$(this).css({
		color: "orange",
		textDecoration : "line-through"


		});
	}*/




});

///click on X to delete adding event.stopPropagation and parent() method

$("ul").on("click", "span",function(event){

	$(this).parent().fadeOut(500,function(){

		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {

		var todo=$(this).val();
		//Creat new li and add to ul

		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>");

		$(this).val("");
	
	}
	
	

});

$("#toggle").on("click" ,function(){

	$("#form").toggle();



});