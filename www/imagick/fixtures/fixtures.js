// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("image", 5, function(i, image){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "image "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
	$.fixture.make("scene", 5, function(i, scene){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "scene "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
	$.fixture.make("camera", 5, function(i, camera){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "camera "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
	$.fixture.make("renderer", 5, function(i, renderer){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "renderer "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})