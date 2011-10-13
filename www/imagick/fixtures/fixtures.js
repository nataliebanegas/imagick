// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("image", 5, function(i, image){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "image "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})