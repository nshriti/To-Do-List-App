//check off specific todos by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
//click on X to delete
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	//stops bubbling to higher elements
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val(" ");
		//create new li and add to existin list
		$("ul").append("<li><span><i class='fas fa-trash'></i> </span>" +todoText +"</li>");
	}

})
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});