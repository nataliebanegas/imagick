steal("funcunit", function(){
	module("imagick test", { 
		setup: function(){
			S.open("//imagick/imagick.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.X!","welcome text");
	});
})