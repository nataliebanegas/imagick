steal('funcunit').then(function(){

module("Imagick.Camera", { 
	setup: function(){
		S.open("//imagick/camera/camera.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Imagick.Camera Demo","demo text");
});


});