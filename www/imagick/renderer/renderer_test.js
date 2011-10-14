steal('funcunit').then(function(){

module("Imagick.Renderer", { 
	setup: function(){
		S.open("//imagick/renderer/renderer.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Imagick.Renderer Demo","demo text");
});


});