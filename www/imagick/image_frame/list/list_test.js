steal('funcunit',function(){

module("Imagick.ImageFrame.List", { 
	setup: function(){
		S.open("//imagick/image_frame/list/list.html");
	}
});

test("delete image_frames", function(){
	S('#create').click()
	
	// wait until grilled cheese has been added
	S('h3:last').text('Grilled Cheese X');
	
	S.confirm(true);
	S('h3:last a').click();
	
	
	S('h3:contains(Grilled Cheese)').missing(function(){
		ok(true,"Grilled Cheese Removed")
	});
	
});


});