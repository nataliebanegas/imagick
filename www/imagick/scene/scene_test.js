steal('funcunit').then(function(){

module("Imagick.Scene", { 
	setup: function(){
		S.open("//imagick/scene/scene.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Imagick.Scene Demo","demo text");
});


});