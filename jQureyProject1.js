$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
//on clicking X the li should be deleted
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})
//adding input word to the to do list
//set enter as a keypress for the word written
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todo=$(this).val();
		$(this).val("");
	$("ul").append("<li><span>X</span> "+todo+"</li>");
}
});
//remove the word from the input after we press enter 
//set the word as li ater we press enter
//plus botton in action
$(".bi-plus").on("click",function(){
	$("input[type='text']").fadeToggle(500);
})