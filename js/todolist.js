//complete an item
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//delete an item
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
})

//add an item
$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		var itemText = $(this).val();
		$(this).val(""); 
		$("ul").append("<li><span><i class=\"fas fa-trash\"></i></span>" + itemText + "</li>");
	}
})

//plus sign toggle
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
